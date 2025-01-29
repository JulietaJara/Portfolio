import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import Button from './ui/button';

const projects = [
  {
    title: "Tauro's 🍭",
    description: "🎉 Página web para salón de eventos Tauro's donde el objetivo principal  del proyecto era crear una plataforma para que los clientes puedan obtener información sobre los eventos y servicios ofrecidos por el salón. 🥳🎈",
    technologies: ["TypeScript", "Javascript", "CSS"],
    link: "https://tauro-s.vercel.app/"
  },
  {
    title: "🪨¡Piedra, Papel, Tijera, Lagarto o Spock! ✂️",
    description: "🎮 Juego interactivo donde compites contra la computadora eligiendo tu jugada.🧠💥",
    technologies: ["React", "Javascript", "Bootstrap", "CSS", "HTML"],
    link: "https://unq-ui-julieta-jara-trabajo-final.vercel.app"
  },
  {
    title: "🔬 Ciencia participativa y juegos  🎮 ",
    description: "📚 Trabajo integrador para la materia Programación con Objetos 2, en el cual apliqué principios avanzados de diseño y desarrollo de software orientado a objetos.💻✨",
    technologies: ["Java", "Mock", "Mockito", "JUnit"],
    link: "https://github.com/JulietaJara/unqui-po2-jara"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-lilac-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center text-lilac-700">Mis Proyectos
          <span role="img" aria-label="emoji" className="ml-2">🚀</span>
        </h2>
        <div className="container mx-auto px-12">

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
                  <Button className="bg-lilac-600 hover:bg-lilac-800 text-white w-full rounded-[12px]" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                  </Button>

                </CardFooter>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

