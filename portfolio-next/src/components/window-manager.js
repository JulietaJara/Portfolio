"use client";

import { Window } from "./window";
import { ProjectsWindow } from "./windows/projects-window";
import { AboutWindow } from "./windows/about-window";
import { ExperienceWindow } from "./windows/experience-window";
import { ContactWindow } from "./windows/contact-window";

export function WindowManager({ openWindows, activeWindow, onClose, onMinimize, onActivate }) {
  const getWindowContent = (windowId) => {
    switch (windowId) {
      case "projects":
        return <ProjectsWindow />;
      case "about":
        return <AboutWindow />;
      case "experience":
        return <ExperienceWindow />;
      case "contact":
        return <ContactWindow />;
      default:
        return <div>Ventana no encontrada</div>;
    }
  };

  const getWindowTitle = (windowId) => {
    switch (windowId) {
      case "projects":
        return "Mis Proyectos";
      case "about":
        return "Sobre Mí - Bloc de Notas";
      case "experience":
        return "Mi Experiencia";
      case "contact":
        return "Contacto";
      case "trash":
        return "Errores & Aprendizajes - Papelera";
      default:
        return "Ventana";
    }
  };

  return (
    <>
      {openWindows.map((windowId, index) => (
        <Window
          key={windowId}
          id={windowId}
          title={getWindowTitle(windowId)}
          isActive={activeWindow === windowId}
          zIndex={activeWindow === windowId ? 1000 : 900 + index}
          onClose={() => onClose(windowId)}
          onMinimize={() => onMinimize(windowId)}
          onActivate={() => onActivate(windowId)}
        >
          {getWindowContent(windowId)}
        </Window>
      ))}
    </>
  );
}
