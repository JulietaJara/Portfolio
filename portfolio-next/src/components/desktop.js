"use client";

import { DesktopIcon } from "./desktop-icon";
import { Folder, FileText, Trash2, User, Mail, Github, Linkedin } from "lucide-react";

export function Desktop({ onOpenWindow }) {
  const desktopIcons = [
    {
      id: "projects",
      name: "Mis Proyectos",
      icon: Folder,
      position: { x: 50, y: 50 },
    },
    {
      id: "about",
      name: "Sobre Mí",
      icon: FileText,
      position: { x: 50, y: 150 },
    },
    {
      id: "experience",
      name: "Experiencia",
      icon: User,
      position: { x: 50, y: 250 },
    },
    {
      id: "contact",
      name: "Contacto",
      icon: Mail,
      position: { x: 50, y: 350 },
    },
    {
      id: "trash",
      name: "Errores & Aprendizajes",
      icon: Trash2,
      position: { x: 50, y: 450 },
    },
    {
      id: "github",
      name: "GitHub",
      icon: Github,
      position: { x: 1200, y: 50 },
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      position: { x: 1200, y: 150 },
    },
  ];

  return (
    <div className="absolute inset-0 p-4">
      {desktopIcons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          id={icon.id}
          name={icon.name}
          icon={icon.icon}
          position={icon.position}
          onDoubleClick={() => onOpenWindow(icon.id)}
        />
      ))}
    </div>
  );
}
