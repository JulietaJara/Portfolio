import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import Button from './ui/button';

const projects = [
  {
    title: "Proyecto 1",
    description: "Una breve descripción del proyecto 1.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Proyecto 2",
    description: "Una breve descripción del proyecto 2.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "#"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-lilac-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center text-lilac-800">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-lilac-200 hover:border-lilac-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-lilac-700">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-lilac-100 text-lilac-700">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-lilac-600 hover:bg-lilac-700 text-white w-full" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

