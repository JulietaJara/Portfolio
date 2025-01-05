import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiTailwindcss,
  SiGit
} from 'react-icons/si'

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Express", icon: SiExpress, color: "text-gray-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-lilac-200 to-lilac-100">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center text-lilac-800">Mis Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="overflow-hidden border border-lilac-300 bg-white hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle className="mb-4">{skill.name}</CardTitle>
                <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} /> 
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="secondary" className="text-sm bg-lilac-100 text-lilac-700">
                  {skill.name}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
