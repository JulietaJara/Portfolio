import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSpring,
  SiMysql,
  SiNeo4J,
  SiDocker,
  SiCircleci,
  SiSonarcloud,
  SiSwagger,
  SiGradle,
  SiJunit5,
  SiGitlab, 
} from 'react-icons/si';
import { FaJava, FaPython } from 'react-icons/fa'; 

interface Skill {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
}

const frontendSkills: Skill[] = [
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
]

const backendSkills: Skill[] = [
  { name: "Java", icon: FaJava, color: "text-red-600" },
  { name: "Kotlin", icon: SiSpring, color: "text-purple-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
  { name: "Spring Boot", icon: SiSpring, color: "text-green-700" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
]

const databaseSkills: Skill[] = [
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Neo4j", icon: SiNeo4J, color: "text-cyan-600" },
]

const versionControlSkills: Skill[] = [
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "GitLab", icon: SiGitlab, color: "text-orange-700" },
]

const devOpsSkills: Skill[] = [
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "CI/CD", icon: SiCircleci, color: "text-green-500" },
  { name: "SonarCloud", icon: SiSonarcloud, color: "text-blue-600" },
  { name: "Swagger", icon: SiSwagger, color: "text-yellow-600" },
  { name: "JUnit", icon: SiJunit5, color: "text-purple-600" },
  { name: "Gradle", icon: SiGradle, color: "text-orange-600" },
]

interface SkillSectionProps {
  title: string
  skills: Skill[]
}

function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="mb-8 sm:mb-10">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-lilac-700">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="overflow-hidden border border-lilac-300 bg-white hover:shadow-md transition-shadow"
          >
            <CardHeader className="flex flex-col items-center justify-center p-2 sm:p-4">
              <CardTitle className="mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">{skill.name}</CardTitle>
              <div
                className={`w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 ${skill.color} mb-2 sm:mb-4 flex items-center justify-center`}
              >
                <skill.icon className="w-full h-full" />
              </div>
            </CardHeader>
            <CardContent className="text-center p-1 sm:p-2">
              <Badge variant="secondary" className="text-[10px] sm:text-xs md:text-sm bg-lilac-100 text-lilac-700">
                {skill.name}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-lilac-100 to-lilac-20">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-lilac-700">
          My Skills
          <span role="img" aria-label="emoji" className="ml-2">
            🛠️
          </span>
        </h2>
        <SkillSection title="Frontend 🎨" skills={frontendSkills} />
        <SkillSection title="Backend 💻" skills={backendSkills} />
        <SkillSection title="Databases 🗄️" skills={databaseSkills} />
        <SkillSection title="DevOps ⚙️" skills={devOpsSkills} />
        <SkillSection title="Version Control 🗂️" skills={versionControlSkills} />
      </div>
    </section>
  )
}
