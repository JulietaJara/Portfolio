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
} from "lucide-react";

import { Button } from "../app/components/ui/button";
import { Card } from "../app/components/ui/card";
import { Badge } from "../app/components/ui/badge";

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
];

const skills = {
  frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap", "Next.js"],
  backend: ["Node.js", "Express", "Python", "Java", "Kotlin", "Spring Boot"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j"],
  devOps: ["Docker", "CI/CD", "SonarCloud", "Swagger", "JUnit", "Gradle"],
  versionControl: ["Git", "GitLab"]
};

const SkillTag = ({ label }) => (
  <span className="bg-blue-900 text-blue-100 px-3 py-1 rounded-full text-sm mr-2 mb-2 inline-block">
    {label}
  </span>
);



export default function VSCodePortfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const [openTabs, setOpenTabs] = useState(["about"]);
  const [expandedFolders, setExpandedFolders] = useState(["portfolio", "src"]);

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((name) => name !== folderName)
        : [...prev, folderName]
    );
  };

  const openTab = (tabName) => {
    if (!openTabs.includes(tabName)) {
      setOpenTabs([...openTabs, tabName]);
    }
    setActiveTab(tabName);
  };

  const closeTab = (tabName, e) => {
    e.stopPropagation();
    const newTabs = openTabs.filter((tab) => tab !== tabName);
    setOpenTabs(newTabs);
    if (activeTab === tabName && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    }
  };

  const renderFileTree = (items, level = 0) => {
    return items.map((item, index) => (
      <div key={index}>
        <div
          className="flex items-center gap-1 py-1 px-2 hover:bg-gray-700 cursor-pointer text-sm"
          style={{ paddingLeft: `${level * 12 + 8}px` }}
          onClick={() => {
            if (item.type === "folder") {
              toggleFolder(item.name);
            } else if (item.content) {
              openTab(item.content);
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
        {item.type === "folder" &&
          item.children &&
          expandedFolders.includes(item.name) && (
            <div>{renderFileTree(item.children, level + 1)}</div>
          )}
      </div>
    ));
  };

  const getContent = () => {
    switch (activeTab) {
      case "about":
        return (
    <div className="p-6 space-y-4 text-gray-300">
      <h1 className="text-xl font-bold text-white">Hola, soy Julieta 👋</h1>
      <p>
        Soy desarrolladora fullstack junior con experiencia en frontend y backend, enfocada en seguir aprendiendo y creando soluciones eficientes, escalables y con buen diseño. </p>
      <p>
        Mis habilidades incluyen <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Java</strong>, <strong>Kotlin</strong>  y más que he desarrollado a lo largo de mi formación y experiencia como desarrolladora fullstack junior.
      </p>
      <p>
        Este portfolio está diseñado como una réplica de Visual Studio Code, combinando diseño y código para mostrar quién soy de una forma diferente.
      </p>
    </div>
  );

      case "projects":
        return (
          <div className="p-6">
          </div>
        );

      case "skills":
  return (
    <div className="p-6 space-y-6 font-mono text-sm">
      {/* Simulación visual del archivo skills.ts con números de línea */}
      <div className="flex">
        {/* Números de línea */}
        <div className="text-gray-500 text-right pr-4 select-none">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n}>{n}</div>
          ))}
        </div>

        {/* Código simulado */}
        <div className="text-white space-y-0.5">
          <div>
            <span className="text-purple-400">interface</span>{" "}
            <span className="text-yellow-400">Skills</span> {"{"}
          </div>
          <div>
            {"  "}
            <span className="text-blue-400">frontend</span>:{" "}
            <span className="text-green-400">string[]</span>;
          </div>
          <div>
            {"  "}
            <span className="text-blue-400">backend</span>:{" "}
            <span className="text-green-400">string[]</span>;
          </div>
          <div>
            {"  "}
            <span className="text-blue-400">database</span>:{" "}
            <span className="text-green-400">string[]</span>;
          </div>
          <div>
            {"  "}
            <span className="text-blue-400">tools</span>:{" "}
            <span className="text-green-400">string[]</span>;
          </div>
          <div>{"}"}</div>
        </div>
      </div>

      {/* Abajo tus skills como etiquetas */}
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-yellow-400 font-bold mb-2 capitalize">
            {category}
          </h3>
          <div className="flex flex-wrap">
            {items.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );


      case "contact":
        return (
          <div className="p-6">
          </div>
        );

      case "readme":
        return (
          <div className="p-6">
          </div>
        );

      default:
        return (
          <div className="p-6 text-gray-400">
            Selecciona un archivo para ver su contenido
          </div>
        );
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-center border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          <span className="font-semibold"> Mi Portfolio - Visual Studio Code</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
          <div className="p-3 border-b border-gray-700">
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Explorer
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {renderFileTree(fileStructure)}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="bg-gray-800 border-b border-gray-700 flex">
            {openTabs.map((tab) => (
              <div
                key={tab}
                className={`px-4 py-2 border-r border-gray-700 cursor-pointer flex items-center gap-2 ${
                  activeTab === tab
                    ? "bg-gray-900 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <File className="w-4 h-4" />
                <span className="text-sm">
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
                  className="ml-2 hover:bg-gray-600 rounded p-1"
                  onClick={(e) => closeTab(tab, e)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="flex-1 bg-gray-900 overflow-y-auto font-mono text-sm">
            {openTabs.length > 0 ? (
              getContent()
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Selecciona un archivo del explorador para comenzar</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-blue-600 px-4 py-1 text-xs flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>UTF-8</span>
              <span>JavaScript</span>
              <span>Ln 1, Col 1</span>
            </div>Portfolio Julieta Jara - Visual Studio Code
            <div className="flex items-center gap-2">
              <span>Portfolio v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
