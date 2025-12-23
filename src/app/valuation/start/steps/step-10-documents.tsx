import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, CheckCircle } from "lucide-react"

interface StepProps {
    files: File[]
    serverFiles: string[]
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onRemoveFile: (index: number) => void
}

export function Step10Documents({ files, serverFiles, onFileChange, onRemoveFile }: StepProps) {
    return (
        <div className="space-y-6">
            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                <div className="flex flex-col items-center gap-2">
                    <Upload className="w-10 h-10 text-slate-400" />
                    <h3 className="text-lg font-semibold">Upload Documents</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        Drag and drop your financial statements (P&L, Balance Sheet) and other relevant files here.
                    </p>
                    <Input
                        type="file"
                        multiple
                        className="hidden"
                        id="file-upload"
                        onChange={onFileChange}
                    />
                    <Button type="button" variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                        Select Files
                    </Button>
                </div>
            </div>

            {/* Server Files (Previously Uploaded) */}
            {serverFiles.length > 0 && (
                <div className="space-y-2">
                    <h4 className="font-medium text-sm">Previously Uploaded:</h4>
                    <ul className="space-y-2">
                        {serverFiles.map((path, i) => {
                            const name = path.split('/').pop() || path
                            return (
                                <li key={i} className="flex items-center justify-between gap-2 text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-blue-500" />
                                        <span className="truncate max-w-[200px]">{name}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}

            {files.length > 0 && (
                <div className="space-y-2">
                    <h4 className="font-medium text-sm">Selected Files:</h4>
                    <ul className="space-y-2">
                        {files.map((file, i) => (
                            <li key={i} className="flex items-center justify-between gap-2 text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                </div>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 p-0 text-slate-500 hover:text-red-500"
                                    onClick={() => onRemoveFile(i)}
                                >
                                    <span className="sr-only">Remove</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm text-blue-800 dark:text-blue-200">
                <p className="font-semibold mb-2">Essential Documents:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>3 years of financial statements (P&L, Balance Sheet)</li>
                    <li>Current year financials</li>
                    <li>Executive summary (optional)</li>
                </ul>
            </div>
        </div>
    )
}
