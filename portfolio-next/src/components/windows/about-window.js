"use client";

export function AboutWindow() {
  return (
    <div className="p-6 bg-yellow-50 h-full font-mono text-sm">
      <div className="bg-white p-4 rounded border shadow-sm h-full">
        <div className="border-b pb-2 mb-4">
          <h3 className="font-bold">📝 Bloc de Notas - Sobre Mí</h3>
        </div>

        <div className="space-y-4 leading-relaxed">
          <p>
            <strong>¡Hola! Soy Julieta 👋</strong>
          </p>

          <p>
            Soy desarrolladora frontend apasionada por crear experiencias digitales únicas y funcionales. Me encanta
            transformar ideas creativas en código que funciona.
          </p>

          <p>
            <strong>🎯 Lo que me motiva:</strong>
            <br />• Resolver problemas complejos con soluciones elegantes
            <br />• Aprender nuevas tecnologías constantemente
            <br />• Crear interfaces que la gente realmente disfrute usar
            <br />• Colaborar en proyectos que generen impacto positivo
          </p>

          <p>
            <strong>💜 Cuando no estoy programando:</strong>
            <br />
            Me gusta leer, escuchar música, tomar fotografías y explorar nuevos lugares. También disfruto mucho de una
            buena taza de café mientras planeo mi próximo proyecto.
          </p>

          <p>
            <strong>🌟 Mi filosofía:</strong>
            <br />
            "El código es poesía en movimiento. Cada línea cuenta una historia y cada función resuelve un pedacito del
            mundo."
          </p>

          <p className="text-purple-600 font-semibold">¡Siempre estoy abierta a nuevos desafíos y colaboraciones! 💫</p>
        </div>
      </div>
    </div>
  );
}
