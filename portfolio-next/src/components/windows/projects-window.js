"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsWindow() {
  const projects = [
    {
      name: "E-commerce Dashboard",
      description: "Panel de administración completo para tienda online con React y Node.js",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      name: "Task Manager App",
      description: "Aplicación de gestión de tareas con drag & drop y colaboración en tiempo real",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      name: "Weather App",
      description: "App del clima con geolocalización y pronóstico extendido",
      tech: ["React Native", "API REST", "Redux"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">📁 Mis Proyectos</h2>
        <p className="text-gray-600">Aquí están algunos de mis trabajos más destacados</p>
      </div>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg text-purple-800">{project.name}</CardTitle>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-purple-300 bg-transparent">
                    <Github className="w-4 h-4 mr-1" />
                    Código
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-purple-100 text-purple-800">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
