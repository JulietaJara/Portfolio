import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-lilac-50">
      <div className="container max-w-2xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-lilac-800">Contáctame</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-lilac-700">Nombre</label>
            <Input id="name" placeholder="Tu nombre" className="border-lilac-300 focus:border-lilac-500 focus:ring-lilac-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-lilac-700">Email</label>
            <Input id="email" type="email" placeholder="tu@email.com" className="border-lilac-300 focus:border-lilac-500 focus:ring-lilac-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-lilac-700">Mensaje</label>
            <Textarea id="message" placeholder="Tu mensaje" rows={4} className="border-lilac-300 focus:border-lilac-500 focus:ring-lilac-500" />
          </div>
          <Button type="submit" className="w-full bg-lilac-600 hover:bg-lilac-700 text-white">Enviar Mensaje</Button>
        </form>
      </div>
    </section>
  )
}