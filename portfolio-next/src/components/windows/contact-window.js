"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export function ContactWindow() {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">📧 Contacto</h2>
        <p className="text-gray-600">¡Hablemos sobre tu próximo proyecto!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Información de Contacto */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-purple-700">Información de Contacto</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-600" />
              <span>julieta@ejemplo.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-600" />
              <span>+54 11 1234-5678</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="font-semibold text-purple-700 mb-3">Redes Sociales</h4>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="border-purple-300 bg-transparent">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm" variant="outline" className="border-purple-300 bg-transparent">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button size="sm" variant="outline" className="border-purple-300 bg-transparent">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="text-lg text-purple-800">Envíame un mensaje</CardTitle>
            <CardDescription>Te responderé lo antes posible</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input placeholder="Tu nombre" className="border-purple-200" />
            </div>
            <div>
              <Input placeholder="Tu email" type="email" className="border-purple-200" />
            </div>
            <div>
              <Input placeholder="Asunto" className="border-purple-200" />
            </div>
            <div>
              <Textarea placeholder="Tu mensaje..." rows={4} className="border-purple-200" />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Enviar Mensaje</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
