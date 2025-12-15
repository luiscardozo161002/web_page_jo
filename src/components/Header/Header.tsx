"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "../ToogleTheme/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export default function Header() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur md:bg-gradient-to-b md:backdrop-blur border-b border-zinc-900/10 dark:border-zinc-700 md:px-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          to="/#inicio"
          className="text-2xl font-semibold tracking-wide flex items-center gap-3 text-gray-900 dark:text-zinc-300"
        >
          <img
            src="https://i.ibb.co/N6CbbsTX/ESCUDO-JUAREZ-DE-ORIENTE.jpg"
            alt="Logo de Juárez de Oriente"
            className="w-11 sm:w-16 rounded-full border p-[0.5] bg-white object-cover"
          />
          <span className="hidden sm:block">Juárez de Oriente | Cooperativa Juárez SCL</span>
        </Link>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleScrollToSection("inicio")}>
                Inicio
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleScrollToSection("acerca-de")}>
                Acerca de
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleScrollToSection("mision-y-vision")}>
                Misión y Visión
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleScrollToSection("politicas-de-calidad")}>
                Políticas de Calidad
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleScrollToSection("ubicacion")}>
                Contáctanos
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleScrollToSection("valores")}>
                Valores 
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleScrollToSection("horario-atencion")}>
                Horario de Atención
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}