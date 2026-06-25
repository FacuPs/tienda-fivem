"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Exito() {
  const [codigo, setCodigo] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let intentos = 0;
    const maxIntentos = 15; // Va a intentar por 45 segundos máximo

    const buscarCodigo = async () => {
      try {
        const res = await fetch('/api/ultimo-codigo', { cache: 'no-store' });
        const data = await res.json();
        
        if (data.found && data.codigo) {
          setCodigo(data.codigo);
          setCargando(false);
        } else {
          intentos++;
          if (intentos >= maxIntentos) {
            setCargando(false); // Se rinde si Mercado Pago tardó demasiado
          }
        }
      } catch (e) {
        console.error(e);
      }
    };

    // Buscamos apenas carga
    buscarCodigo();
    
    // Si no lo encuentra, sigue buscando cada 3 segundos
    const intervalo = setInterval(() => {
      if (!codigo && cargando) {
        buscarCodigo();
      }
    }, 3000);

    return () => clearInterval(intervalo);
  }, [codigo, cargando]);

  return (
    <div className="min-h-screen bg-[#05070a] text-white flex items-center justify-center p-6 font-sans selection:bg-cyan-500">
      <div className="max-w-xl w-full bg-[#0a0f18] border border-cyan-500/20 rounded-[30px] p-10 text-center shadow-2xl relative overflow-hidden">
        
        {/* Luces de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 blur-[80px] -z-10"></div>
        
        <h1 className="text-3xl md:text-4xl font-black italic mb-4 uppercase tracking-tighter">¡Pago Exitoso!</h1>
        
        {cargando ? (
          <div className="flex flex-col items-center gap-6 my-10">
            <div className="w-14 h-14 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
            <p className="text-cyan-400 animate-pulse uppercase tracking-widest text-xs font-bold">Generando tu código en el servidor...</p>
            <p className="text-gray-500 text-[10px] uppercase">Esperando confirmación de Mercado Pago</p>
          </div>
        ) : codigo ? (
          <div className="my-10">
            <p className="text-gray-400 mb-6 font-medium">Copia este código y úsalo en el chat de la ciudad:</p>
            <div className="bg-black/50 border border-cyan-500/50 p-6 rounded-2xl relative shadow-[0_0_30px_rgba(0,229,255,0.1)]">
              <code className="text-3xl md:text-4xl font-black text-cyan-400 tracking-wider block">{codigo}</code>
            </div>
            <div className="mt-6 inline-block bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-lg">
               <p className="text-sm text-gray-300">Comando: <strong className="text-white">/claim {codigo}</strong></p>
            </div>
            <p className="text-[10px] text-gray-500 uppercase mt-8 font-bold tracking-widest">⚠️ Toma una captura a esta pantalla por seguridad</p>
          </div>
        ) : (
          <div className="my-10 bg-red-500/10 border border-red-500/30 p-6 rounded-2xl">
            <p className="text-red-400 font-bold mb-2">Demora en la red de cobros</p>
            <p className="text-sm text-gray-400">Tu pago se hizo correctamente, pero Mercado Pago está tardando en avisarle al servidor. Por favor, abre un ticket en Discord enviando tu comprobante de pago para que te demos el código manualmente.</p>
          </div>
        )}

        <Link href="/" className="inline-block w-full bg-white text-black px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.15em] hover:bg-cyan-500 transition-all shadow-xl hover:scale-[1.02]">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
}