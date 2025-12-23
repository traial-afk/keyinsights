"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
    ArrowLeft,
    Download,
    FileText,
    FileSpreadsheet,
    FileBarChart,
    CheckCircle2,
    MoreVertical,
    Loader2
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { getProjectById, getProjectReports } from "@/app/valuation/actions"
import { toast } from "sonner"
import { useParams } from "next/navigation"

import JSZip from "jszip"

export default function ProjectFolderPage() {
    const params = useParams()
    const id = params?.id as string
    const [project, setProject] = useState<any>(null)
    const [reports, setReports] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [downloading, setDownloading] = useState(false)

    useEffect(() => {
        const fetchProject = async () => {
            if (!id) return
            try {
                const [projectData, reportsData] = await Promise.all([
                    getProjectById(id),
                    getProjectReports(id)
                ])

                if (projectData) {
                    setProject(projectData)
                } else {
                    toast.error("Project not found")
                }

                if (reportsData) {
                    setReports(reportsData)
                }
            } catch (error) {
                console.error("Error loading project:", error)
                toast.error("Failed to load project")
            } finally {
                setLoading(false)
            }
        }
        fetchProject()
    }, [id])

    const handleDownloadAll = async () => {
        if (reports.length === 0) return
        setDownloading(true)
        try {
            const zip = new JSZip()

            // Fetch all files
            const promises = reports.map(async (report) => {
                const response = await fetch(report.url)
                const blob = await response.blob()
                zip.file(report.name, blob)
            })

            await Promise.all(promises)

            // Generate zip
            const content = await zip.generateAsync({ type: "blob" })

            // Trigger download
            const url = window.URL.createObjectURL(content)
            const link = document.createElement('a')
            link.href = url
            link.download = `${project.form_data?.businessName || 'Project'}_Reports.zip`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(url)

            toast.success("All files downloaded successfully")
        } catch (error) {
            console.error("Download failed:", error)
            toast.error("Failed to download files")
        } finally {
            setDownloading(false)
        }
    }

    const handleDownloadSingle = async (url: string, filename: string) => {
        try {
            const response = await fetch(url)
            const blob = await response.blob()
            const blobUrl = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = blobUrl
            link.download = filename
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(blobUrl)
        } catch (error) {
            console.error("Download failed:", error)
            toast.error("Failed to download file")
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        )
    }

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <h2 className="text-xl font-semibold">Project not found</h2>
                <Button asChild>
                    <Link href="/dashboard">Back to Dashboard</Link>
                </Button>
            </div>
        )
    }

    const progress = project.status === 'completed' ? 100 : project.status === 'pending' ? 50 : 25

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/dashboard" className="hover:text-blue-600 flex items-center gap-1">
                            <ArrowLeft className="w-3 h-3" /> Back to Dashboard
                        </Link>
                        <span>/</span>
                        <span>Package</span>
                        <span>/</span>
                        <span className="text-slate-900 dark:text-slate-100 font-medium">{project.id.slice(0, 8)}</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {project.form_data?.businessName || "Untitled Project"}
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="text-slate-600 dark:text-slate-400">
                            Client: {project.form_data?.brokerOwnerName || "Unknown"}
                        </span>
                        {project.package_type && (
                            <span className="text-slate-600 dark:text-slate-400 border-l pl-3 border-slate-300 dark:border-slate-700">
                                {project.package_type}
                            </span>
                        )}
                        <Badge variant="outline" className={
                            project.status === "completed" ? "bg-green-50 text-green-700 border-green-200" :
                                project.status === "pending" ? "bg-orange-50 text-orange-700 border-orange-200" :
                                    "bg-slate-100 text-slate-700 border-slate-200"
                        }>
                            {project.status === 'completed' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                            {project.status}
                        </Badge>
                    </div>
                </div>
                <div className="flex gap-2">
                    {project.status === 'completed' && (
                        <Button variant="outline" onClick={handleDownloadAll} disabled={downloading || reports.length === 0}>
                            {downloading ? (
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            ) : (
                                <Download className="w-4 h-4 mr-2" />
                            )}
                            {downloading ? "Zipping..." : "Download All (ZIP)"}
                        </Button>
                    )}
                </div>
            </div>

            {/* Progress Section */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Package Progress</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Status: {project.status}</span>
                            <span className="font-medium">{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </div>
                </CardContent>
            </Card>

            {/* Documents Section */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Package Documents</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {reports.length === 0 ? (
                        <div className="col-span-full text-center py-12 text-muted-foreground bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-dashed">
                            No reports available yet.
                        </div>
                    ) : (
                        reports.map((doc, index) => (
                            <Card key={index} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer group" onClick={() => handleDownloadSingle(doc.url, doc.name)}>
                                <CardContent className="p-4 flex items-start justify-between">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-blue-50 rounded-lg dark:bg-blue-900/20">
                                            {doc.type === 'pdf' ? (
                                                <FileText className="w-6 h-6 text-red-500" />
                                            ) : (
                                                <FileSpreadsheet className="w-6 h-6 text-green-500" />
                                            )}
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-medium text-sm leading-none group-hover:text-blue-600 transition-colors line-clamp-1" title={doc.name}>
                                                {doc.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {(doc.size / 1024 / 1024).toFixed(2)} MB • {new Date(doc.updated_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 -mt-1 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                                                <MoreVertical className="w-4 h-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem onClick={(e) => {
                                                e.stopPropagation()
                                                handleDownloadSingle(doc.url, doc.name)
                                            }}>
                                                <Download className="w-4 h-4 mr-2" /> Download
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </CardContent>
                            </Card>
                        ))
                    )}

                </div>
            </div>
        </div>
    )
}
