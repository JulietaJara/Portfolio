/* eslint react/no-unescaped-entities: off */
/* eslint react/jsx-no-comment-textnodes: off */


"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  FolderOpen,
  Code,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Play, 
  VolumeX,
  Maximize,
  Volume2,
  Menu,
  X,
} from "lucide-react";

import { Button } from "../app/components/ui/button";
import { Card } from "../app/components/ui/card";
import { Badge } from "../app/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../app/components/ui/dialog"

const fileStructure = [
  {
    name: "portfolio",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "src",
        type: "folder",
        isOpen: true,
        children: [
          {
            name: "about.js",
            type: "file",
            icon: <File className="w-4 h-4 text-yellow-400" />,
            content: "about",
          },
          {
            name: "projects.jsx",
            type: "file",
            icon: <File className="w-4 h-4 text-blue-400" />,
            content: "projects",
          },
          {
            name: "skills.ts",
            type: "file",
            icon: <File className="w-4 h-4 text-blue-500" />,
            content: "skills",
          },
          {
            name: "contact.json",
            type: "file",
            icon: <File className="w-4 h-4 text-green-400" />,
            content: "contact",
          },
          {
            name: "cv.pdf",
            type: "file",
            icon: <File className="w-4 h-4 text-red-400" />,
            content: "cv",
          },
        ],
      },
      {
        name: "README.md",
        type: "file",
        icon: <File className="w-4 h-4 text-blue-300" />,
        content: "readme",
      },
    ],
  },
]

export default function VSCodePortfolio() {
  const [activeTab, setActiveTab] = useState("about")
  const [openTabs, setOpenTabs] = useState(["about"])
  const [expandedFolders, setExpandedFolders] = useState(["portfolio", "src"])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName) ? prev.filter((name) => name !== folderName) : [...prev, folderName],
    )
  }

  const openTab = (tabName) => {
    if (!openTabs.includes(tabName)) {
      setOpenTabs([...openTabs, tabName])
    }
    setActiveTab(tabName)
    // Cerrar sidebar en móvil después de seleccionar
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }
  }

  const closeTab = (tabName, e) => {
    e.stopPropagation()
    const newTabs = openTabs.filter((tab) => tab !== tabName)
    setOpenTabs(newTabs)
    if (activeTab === tabName && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1])
    }
  }

  const openVideoModal = (project) => {
    setSelectedVideo(project)
    setIsVideoModalOpen(true)
  }

  const renderFileTree = (items, level = 0) => {
    return items.map((item, index) => (
      <div key={index}>
        <div
          className="flex items-center gap-1 py-2 px-2 hover:bg-gray-700 cursor-pointer text-sm touch-manipulation"
          style={{ paddingLeft: `${level * 12 + 8}px` }}
          onClick={() => {
            if (item.type === "folder") {
              toggleFolder(item.name)
            } else if (item.content) {
              openTab(item.content)
            }
          }}
        >
          {item.type === "folder" ? (
            <>
              {expandedFolders.includes(item.name) ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
              {expandedFolders.includes(item.name) ? (
                <FolderOpen className="w-4 h-4 text-blue-400" />
              ) : (
                <Folder className="w-4 h-4 text-blue-400" />
              )}
            </>
          ) : (
            <>
              <span className="w-3 h-3" />
              {item.icon}
            </>
          )}
          <span className="text-gray-300">{item.name}</span>
        </div>
        {item.type === "folder" && item.children && expandedFolders.includes(item.name) && (
          <div>{renderFileTree(item.children, level + 1)}</div>
        )}
      </div>
    ))
  }

  const VideoPlayer = ({ project, isInModal = false }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    return (
      <div className={`relative bg-black rounded-lg overflow-hidden ${isInModal ? "w-full" : ""}`}>
        <video
          className="w-full h-auto"
          controls={isInModal}
          muted={isMuted}
          poster="/placeholder.svg?height=300&width=500"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={project.videoUrl} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {!isInModal && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group hover:bg-opacity-30 transition-all">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 rounded-full p-3 sm:p-4"
                onClick={() => openVideoModal(project)}
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
              <div className="text-white">
                <p className="font-semibold text-sm sm:text-base">Ver Demo</p>
                <p className="text-xs sm:text-sm text-gray-300">Haz clic para reproducir</p>
              </div>
            </div>
          </div>
        )}
        <div className="absolute bottom-2 right-2 flex gap-1 sm:gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="bg-gray-800 bg-opacity-80 hover:bg-opacity-100 p-2"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" /> : <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />}
          </Button>
          {!isInModal && (
            <Button
              size="sm"
              variant="secondary"
              className="bg-gray-800 bg-opacity-80 hover:bg-opacity-100 p-2"
              onClick={() => openVideoModal(project)}
            >
              <Maximize className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          )}
        </div>
      </div>
    )
  }

  const getContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="p-4 sm:p-6 space-y-4 text-gray-300">
            <h1 className="text-xl sm:text-2xl font-bold text-white">Hola, soy Julieta 👋</h1>
            <p className="text-sm sm:text-base leading-relaxed">
              Soy desarrolladora fullstack junior con experiencia en frontend y backend, enfocada en seguir aprendiendo
              y creando soluciones eficientes, escalables y con buen diseño.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Mis habilidades incluyen <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>,{" "}
              <strong>Java</strong>, <strong>Kotlin</strong> y más que he desarrollado a lo largo de mi formación y
              experiencia como desarrolladora fullstack junior.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Este portfolio está diseñado como una réplica de Visual Studio Code, combinando diseño y código para
              mostrar quién soy de una forma diferente.
            </p>
          </div>
        )
      case "projects":
        return (
          <div className="p-3 sm:p-4 lg:p-6 max-w-screen-lg mx-auto">
            <div className="flex items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">1</span>
              <div className="text-sm sm:text-base">
                <span className="text-purple-400">const</span> <span className="text-blue-300">projects</span>{" "}
                <span className="text-white">=</span> <span className="text-yellow-300">[</span>
              </div>
            </div>
            <div className="ml-2 sm:ml-4 lg:ml-8 space-y-4 sm:space-y-6">
              {[
                {
                  name: "AutoPick 👛",
                  tech: ["JavaScript", "HTML", "CSS", "MySQL", "Express.js"],
                  description:
                    "Sistema de compras y administración, con funcionalidades completas y conexión a una base de datos MySQL.",
                  videoUrl: "/Proyecto autopick.mp4",
                  type: "video",
                },
                {
                  name: "Tauro's 🍭",
                  tech: ["TypeScript", "Javascript", "CSS"],
                  description:
                    "Plataforma completa de salón de eventos Tauro's con sistema de reservas y gestión de eventos.",
                  link: "https://tauro-s.vercel.app/",
                  type: "link",
                },
                {
                  name: "🪨¡Piedra, Papel, Tijera, Lagarto o Spock! ✂️",
                  tech: ["React", "Javascript", "Bootstrap", "CSS", "HTML"],
                  description: "Juego interactivo donde compites contra la computadora eligiendo tu jugada.",
                  link: "https://unq-ui-julieta-jara-trabajo-final.vercel.app/",
                  type: "link",
                },
                {
                  name: "🔬 Ciencia participativa y juegos 🎮",
                  tech: ["Java", "Mock", "Mockito", "JUnit"],
                  description:
                    "📚 Trabajo integrador con principios avanzados de diseño y desarrollo de software orientado a objetos.💻✨",
                  link: "https://github.com/JulietaJara/unqui-po2-jara",
                  type: "link",
                },
              ].map((project, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 p-3 sm:p-4">
                  <div className="flex flex-col items-start gap-2 sm:gap-4 mb-2">
                    <div className="flex items-start gap-2 sm:gap-4 w-full">
                      <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">{index + 2}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-yellow-300">{`{`}</span>
                        </div>
                        <div className="ml-2 sm:ml-4 space-y-2">
                          <div className="break-words">
                            <span className="text-red-300">name</span>
                            <span className="text-white">:</span>{" "}
                            <span className="text-green-300">&quot;{project.name}&quot;</span>
                            <span className="text-white">,</span>
                          </div>
                          <div className="break-words">
                            <span className="text-red-300">description</span>
                            <span className="text-white">:</span>{" "}
                            <span className="text-green-300">&quot;{project.description}&quot;</span>
                            <span className="text-white">,</span>
                          </div>
                          <div className="flex flex-wrap items-start gap-2">
                            <span className="text-red-300">tech</span>
                            <span className="text-white">:</span>{" "}
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((tech, i) => (
                                <Badge key={i} variant="secondary" className="bg-blue-900 text-blue-200 text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          {/* Video o Link */}
                          {project.type === "video" ? (
                            <div className="space-y-2">
                              <div>
                                <span className="text-red-300">demo</span>
                                <span className="text-white">:</span>{" "}
                                <span className="text-green-300">&quot;video&quot;</span>
                                <span className="text-white">,</span>
                              </div>
                              <div className="mt-4">
                                <VideoPlayer project={project} />
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-wrap items-center gap-2">
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center border border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent px-3 py-2 rounded text-sm w-full sm:w-auto justify-center touch-manipulation"
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Ver Proyecto
                              </a>
                            </div>
                          )}
                        </div>
                        <div className="mt-2">
                          <span className="text-yellow-300">{`}`}</span>
                          <span className="text-white">,</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex items-start gap-2 sm:gap-4 mt-4">
              <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">6</span>
              <span className="text-yellow-300">]</span>
            </div>
            {/* Modal para video */}
            <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
              <DialogContent className="max-w-[95vw] sm:max-w-4xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-white flex items-center gap-2 text-sm sm:text-base">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    {selectedVideo?.name} - Demo
                  </DialogTitle>
                </DialogHeader>
                {selectedVideo && (
                  <div className="space-y-4">
                    <VideoPlayer project={selectedVideo} isInModal={true} />
                    <div className="text-gray-300">
                      <p className="mb-2 text-sm sm:text-base">{selectedVideo.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedVideo.tech?.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-blue-500 text-blue-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        )
      case "skills":
        return (
          <div className="p-4 sm:p-6">
            <div className="flex items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">1</span>
              <div className="text-sm sm:text-base">
                <span className="text-purple-400">interface</span> <span className="text-yellow-300">Skills</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
              </div>
            </div>
            <div className="ml-4 sm:ml-8 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">2</span>
                <div className="text-sm sm:text-base">
                  <span className="text-blue-300">frontend</span>
                  <span className="text-white">:</span> <span className="text-green-300">string[]</span>
                  <span className="text-white">;</span>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">3</span>
                <div className="text-sm sm:text-base">
                  <span className="text-blue-300">backend</span>
                  <span className="text-white">:</span> <span className="text-green-300">string[]</span>
                  <span className="text-white">;</span>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">4</span>
                <div className="text-sm sm:text-base">
                  <span className="text-blue-300">database</span>
                  <span className="text-white">:</span> <span className="text-green-300">string[]</span>
                  <span className="text-white">;</span>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">5</span>
                <div className="text-sm sm:text-base">
                  <span className="text-blue-300">DevOps</span>
                  <span className="text-white">:</span> <span className="text-green-300">string[]</span>
                  <span className="text-white">;</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-4 mt-4">
              <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">6</span>
              <span className="text-yellow-300">{"}"}</span>
            </div>
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    category: "Frontend",
                    skills: [
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "JavaScript",
                      "HTML",
                      "CSS",
                      "Bootstrap",
                    ],
                  },
                  {
                    category: "Backend",
                    skills: ["Node.js", "Express", "Java", "Kotlin", "Python", "Spring Boot"],
                  },
                  {
                    category: "Database",
                    skills: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j"],
                  },
                  {
                    category: "DevOps",
                    skills: ["Docker", "CI/CD", "SonarCloud", "Swagger", "JUnit", "Gradle"],
                  },
                  {
                    category: "Version Control",
                    skills: ["Git", "GitLab"],
                  },
                ].map((group, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700 p-3 sm:p-4">
                    <h3 className="text-yellow-300 font-semibold mb-3 text-sm sm:text-base">{group.category}</h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {group.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-blue-500 text-blue-300 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )
      case "contact":
        return (
          <div className="p-4 sm:p-6">
            <div className="flex items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">1</span>
              <span className="text-yellow-300">{"{"}</span>
            </div>
            <div className="ml-4 sm:ml-8 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">2</span>
                <div className="text-sm sm:text-base break-all">
                  <span className="text-red-300">"email"</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-300">"jarajulieta284@gmail.com"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">3</span>
                <div className="text-sm sm:text-base break-all">
                  <span className="text-red-300">"linkedin"</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-300">"linkedin.com/in/julieta-jara-developer"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">4</span>
                <div className="text-sm sm:text-base break-all">
                  <span className="text-red-300">"github"</span>
                  <span className="text-white">:</span> <span className="text-green-300">"github.com/JulietaJara"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-4 mt-4">
              <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">5</span>
              <span className="text-yellow-300">{"}"}</span>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                className="flex items-center bg-blue-600 hover:bg-blue-700 touch-manipulation"
                onClick={() => {
                  navigator.clipboard.writeText("jarajulieta284@gmail.com")
                  alert("Email copiado al portapapeles 📋")
                }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Copiar Email
              </Button>
              <a href="https://github.com/JulietaJara" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="flex items-center border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent w-full sm:w-auto touch-manipulation"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/julieta-jara-developer" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="flex items-center border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent w-full sm:w-auto touch-manipulation"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        )
      case "cv":
        return (
          <div className="p-4 sm:p-6">
            <div className="flex items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">1</span>
              <div className="text-sm sm:text-base">
                <span className="text-gray-500">// Curriculum Vitae - PDF Document</span>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-4 mb-4">
              <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">2</span>
              <div className="text-sm sm:text-base">
                <span className="text-purple-400">const</span> <span className="text-blue-300">curriculum</span>{" "}
                <span className="text-white">=</span> <span className="text-yellow-300">{"{"}</span>
              </div>
            </div>
            <div className="ml-4 sm:ml-8 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">3</span>
                <div className="text-sm sm:text-base break-all">
                  <span className="text-red-300">fileName</span>
                  <span className="text-white">:</span> <span className="text-green-300">"JaraJulieta-CV.pdf"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">4</span>
                <div className="text-sm sm:text-base">
                  <span className="text-red-300">size</span>
                  <span className="text-white">:</span> <span className="text-green-300">"2.4 MB"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">5</span>
                <div className="text-sm sm:text-base">
                  <span className="text-red-300">lastModified</span>
                  <span className="text-white">:</span> <span className="text-green-300">"2025-04-14"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">6</span>
                <div className="text-sm sm:text-base">
                  <span className="text-red-300">language</span>
                  <span className="text-white">:</span> <span className="text-green-300">"es-ES"</span>
                  <span className="text-white">,</span>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">7</span>
                <div className="text-sm sm:text-base break-all">
                  <span className="text-red-300">downloadUrl</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-300">
                    "https://drive.google.com/file/d/15RQK33sZMizihJKm_LcasQJR9XthDLBU/view?usp=sharing"
                  </span>
                  <span className="text-white">,</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-4 mt-4">
              <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">8</span>
              <span className="text-yellow-300">{"}"}</span>
            </div>
            <div className="mt-6 sm:mt-8">
              <Card className="bg-gray-800 border-gray-700 p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded flex items-center justify-center">
                    <File className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">Curriculum Vitae</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Documento PDF - Actualizado recientemente</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-400">Formato:</span>
                      <span className="text-white ml-2">PDF</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Páginas:</span>
                      <span className="text-white ml-2">1</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Idioma:</span>
                      <span className="text-white ml-2">Español</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Tamaño:</span>
                      <span className="text-white ml-2">2.4 MB</span>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button
                      className="bg-red-600 hover:bg-red-700 flex-1 touch-manipulation"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/15RQK33sZMizihJKm_LcasQJR9XthDLBU/view?usp=sharing",
                          "_blank",
                        )
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver CV Online
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )
      case "readme":
        return (
          <div className="p-4 sm:p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">1</span>
                <h1 className="text-xl sm:text-2xl font-bold text-white"># Mi Portfolio</h1>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">2</span>
                <div className="text-gray-300 text-sm sm:text-base">
                  <p>¡Bienvenido a mi portfolio personal! 👋</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">3</span>
                <div className="text-gray-300 text-sm sm:text-base">
                  <p>
                    Este sitio está construido con temática de Visual Studio Code para mostrar mis habilidades y
                    proyectos de una manera distinta.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-4 mt-6">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">4</span>
                <h2 className="text-lg sm:text-xl font-semibold text-white">## Tecnologías Utilizadas</h2>
              </div>
              <div className="flex items-start gap-2 sm:gap-4">
                <span className="text-gray-500 text-xs sm:text-sm font-mono select-none">5</span>
                <div className="text-gray-300 text-sm sm:text-base">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Next.js & React</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Tailwind CSS</li>
                    <li>Lucide Icons</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="p-4 sm:p-6 text-gray-400 text-sm sm:text-base">
            Selecciona un archivo para ver su contenido
          </div>
        )
    }
  }

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 px-3 sm:px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
          <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          <span className="font-semibold text-sm sm:text-base">Mi Portfolio - Visual Studio Code</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 fixed md:relative z-20 w-64 sm:w-72 md:w-64 bg-gray-800 border-r border-gray-700 flex flex-col transition-transform duration-300 ease-in-out h-full`}
        >
          <div className="p-3 border-b border-gray-700">
            <h2 className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wide">Explorer</h2>
          </div>
          <div className="flex-1 overflow-y-auto">{renderFileTree(fileStructure)}</div>
        </div>

        {/* Overlay para móvil */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tabs */}
          <div className="bg-gray-800 border-b border-gray-700 flex overflow-x-auto">
            {openTabs.map((tab) => (
              <div
                key={tab}
                className={`px-3 sm:px-4 py-2 border-r border-gray-700 cursor-pointer flex items-center gap-2 whitespace-nowrap touch-manipulation ${
                  activeTab === tab ? "bg-gray-900 text-white" : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <File className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">
                  {tab}.
                  {tab === "contact"
                    ? "json"
                    : tab === "skills"
                      ? "ts"
                      : tab === "projects"
                        ? "jsx"
                        : tab === "readme"
                          ? "md"
                          : "js"}
                </span>
                <button
                  className="ml-1 sm:ml-2 hover:bg-gray-600 rounded p-1 text-xs sm:text-sm touch-manipulation"
                  onClick={(e) => closeTab(tab, e)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 bg-gray-900 overflow-y-auto font-mono text-xs sm:text-sm">
            {openTabs.length > 0 ? (
              getContent()
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500 p-4">
                <div className="text-center">
                  <Code className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm sm:text-base">Selecciona un archivo del explorador para comenzar</p>
                </div>
              </div>
            )}
          </div>

          {/* Status bar */}
          <div className="bg-blue-600 px-2 sm:px-4 py-1 text-xs flex items-center justify-between overflow-hidden">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <span className="hidden sm:inline">UTF-8</span>
              <span className="hidden sm:inline">JavaScript</span>
              <span className="hidden sm:inline">Ln 1, Col 1</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 min-w-0 truncate">
              <span className="truncate">Portfolio Julieta Jara</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <span className="hidden sm:inline">v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
