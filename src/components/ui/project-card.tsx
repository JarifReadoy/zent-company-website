
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "./card"
import { Separator } from "./separator"

interface ProjectCardProps {
    title: string
    category: string
    client: string
    description: string
    image: string
    results: string[]
}

export function ProjectCard({
    title,
    category,
    client,
    description,
    image,
    results
}: ProjectCardProps) {
    return (
        <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-video w-full bg-muted">
                {/* Placeholder for now since we don't have real images */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/20">
                    <span className="font-semibold">{category} Project</span>
                </div>
            </div>
            <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="mb-2">{category}</Badge>
                </div>
                <h3 className="text-2xl font-bold font-display">{title}</h3>
                <p className="text-sm text-muted-foreground font-medium">Client: {client}</p>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
                <p className="text-muted-foreground">{description}</p>
                <Separator className="my-4" />
                <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                    {results.map((result, i) => (
                        <li key={i}>{result}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
