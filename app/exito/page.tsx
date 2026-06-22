"use client";
import Link from "next/link";

export default function Exito() {
  // Aquí puedes inventar un código o usar uno fijo por ahora
  // Lo ideal es que el usuario te pase el comprobante por Discord después
  const codigoReclamo = "PAT-GOLF-75R-" + Math.floor(Math.random() * 90000 + 10000);

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-[#0a0f18] border border-cyan-500/30 rounded-[40px] p-10 text-center shadow-2xl relative overflow-hidden">
        
        {/* Luz de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 blur-[80px] -z-10"></div>

        <div className="mb-6 inline-flex bg-cyan-500/20 p-4 rounded-full border border-cyan-500/40 text-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4">¡Pago Confirmado!</h1>
        <p className="text-gray-400 mb-8 font-medium">Gracias por apoyar a Patagonia RP. Aquí tienes tu código de entrega:</p>

        <div className="bg-black/50 border-2 border-dashed border-cyan-500/50 p-6 rounded-2xl mb-8 group">
          <p className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase mb-2">Comando de reclamo</p>
          <code className="text-3xl md:text-4xl font-black text-cyan-400 tracking-wider">
            /claim {codigoReclamo}
          </code>
          <p className="mt-4 text-xs text-gray-500">Toma una captura de pantalla de esta página.</p>
        </div>

        <div className="space-y-4">
          <Link href="/" className="block w-full py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-xl hover:bg-cyan-500 transition-all">
            Volver a la tienda
          </Link>
          <a href="https://discord.gg/bNwnPueBV2" className="block text-cyan-400 text-xs font-bold uppercase tracking-widest hover:underline">
            ¿Problemas? Abre un ticket en Discord
          </a>
        </div>
      </div>
    </div>
  );
}