"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceWindow() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Startup",
      period: "2023 - Presente",
      description:
        "Desarrollo de aplicaciones web con React y Next.js. Implementación de diseños responsivos y optimización de performance.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      role: "Junior Developer",
      company: "Digital Agency",
      period: "2022 - 2023",
      description:
        "Creación de sitios web corporativos y e-commerce. Colaboración estrecha con diseñadores UX/UI.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      role: "Freelance Developer",
      company: "Proyectos Independientes",
      period: "2021 - 2022",
      description:
        "Desarrollo de proyectos personalizados para pequeñas empresas y emprendedores.",
      skills: ["React", "Node.js", "MongoDB", "Firebase"],
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SASS",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Figma",
    "Adobe XD",
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">💼 Mi Experiencia</h2>
        <p className="text-gray-600">Mi trayectoria profesional y habilidades</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-purple-700">Experiencia Laboral</h3>
        {experiences.map((exp, index) => (
          <Card key={index} className="border-purple-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg text-purple-800">{exp.role}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    {exp.company}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="border-purple-300 text-purple-700">
                  {exp.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} className="bg-purple-100 text-purple-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-purple-700">Habilidades Técnicas</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-purple-50 text-purple-700 border border-purple-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
