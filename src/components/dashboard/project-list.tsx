"use client"

import { useRouter } from "next/navigation"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    MoreVertical,
    FileText,
    CheckCircle2
} from "lucide-react"

interface ProjectListProps {
    initialProjects?: any[]
}

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deleteValuationDraft } from "@/app/valuation/actions"
import { toast } from "sonner"

export function ProjectList({ initialProjects = [] }: ProjectListProps) {
    const router = useRouter()

    const handleProjectClick = (project: any) => {
        if (project.status === 'draft' || project.status === 'pending') {
            router.push(`/valuation/start?draftId=${project.id}`)
        } else {
            router.push(`/dashboard/projects/${project.id}`)
        }
    }

    const handleDelete = async (e: React.MouseEvent, projectId: string) => {
        e.stopPropagation() // Prevent row click
        if (confirm("Are you sure you want to delete this draft?")) {
            try {
                await deleteValuationDraft(projectId)
                toast.success("Draft deleted")
            } catch (error) {
                toast.error("Failed to delete draft")
            }
        }
    }

    return (
        <div className="space-y-4">
            {/* Table */}
            <div className="rounded-lg border bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
                <Table>
                    <TableHeader className="bg-slate-50/50 dark:bg-slate-950/50">
                        <TableRow>
                            <TableHead className="font-semibold text-xs uppercase tracking-wider text-slate-500">Business Name</TableHead>
                            <TableHead className="font-semibold text-xs uppercase tracking-wider text-slate-500">Package Type</TableHead>
                            <TableHead className="font-semibold text-xs uppercase tracking-wider text-slate-500">Status</TableHead>
                            <TableHead className="font-semibold text-xs uppercase tracking-wider text-slate-500">Last Updated</TableHead>
                            <TableHead className="text-right font-semibold text-xs uppercase tracking-wider text-slate-500">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {initialProjects.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                                    No packages found. Start a new valuation to get started.
                                </TableCell>
                            </TableRow>
                        ) : (
                            initialProjects.map((project) => (
                                <TableRow
                                    key={project.id}
                                    className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                    onClick={() => handleProjectClick(project)}
                                >
                                    <TableCell className="py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-slate-100 rounded-lg dark:bg-slate-800">
                                                <FileText className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-slate-900 dark:text-slate-100">
                                                    {project.form_data?.businessName || "Untitled Valuation"}
                                                </div>
                                                <div className="text-xs text-muted-foreground">ID: {project.id ? project.id.slice(0, 8) : 'N/A'}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {project.status !== 'draft' && (
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                {project.package_type || "-"}
                                            </span>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="outline"
                                            className={
                                                project.status === "completed" ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800" :
                                                    project.status === "pending" ? "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800" :
                                                        "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700"
                                            }
                                        >
                                            <span className="flex items-center gap-1.5 px-1 py-0.5 capitalize">
                                                {project.status === "completed" && <CheckCircle2 className="w-3 h-3" />}
                                                {project.status === "pending" && <div className="w-2 h-2 rounded-full bg-orange-500" />}
                                                {project.status === "draft" && <div className="w-2 h-2 rounded-full bg-slate-400" />}
                                                {project.status}
                                            </span>
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-slate-600 dark:text-slate-400">
                                        {new Date(project.updated_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                                                    <MoreVertical className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleProjectClick(project) }}>
                                                    Open
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-red-600 focus:text-red-600"
                                                    onClick={(e) => handleDelete(e, project.id)}
                                                >
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
