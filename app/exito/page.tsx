"use client";
import { useEffect, useState, Suspense } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

const supabase = createClient(
  "https://exqefyunyaoclcekgiyj.supabase.co", 
  "sb_publishable_7IOxIKBcWMy7B8-PTTvcxQ_KD5wt-A8O_6E3F4E5G6H7" 
);

function PaginaExito() {
  const searchParams = useSearchParams();
  const payment_id = searchParams.get("payment_id"); // MP nos manda esto en el link al volver

  const [codigo, setCodigo] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function obtenerCodigo() {
      if (payment_id) {
        // Buscamos el código exacto de ESTE pago
        const { data } = await supabase
          .from("codigos")
          .select("codigo")
          .eq("payment_id", payment_id)
          .single();

        if (data) {
          setCodigo(data.codigo);
        }
      } else {
        // Si por alguna razón no hay link, buscamos el último como plan B
        const { data } = await supabase
          .from("codigos")
          .select("codigo")
          .eq("estado", "pendiente")
          .order("created_at", { ascending: false })
          .limit(1);

        if (data && data.length > 0) {
          setCodigo(data[0].codigo);
        }
      }
      setCargando(false);
    }

    obtenerCodigo();
    // Reintentar cada 3 segundos por si el webhook tardó 1 o 2 segundos más
    const interval = setInterval(obtenerCodigo, 3000);
    return () => clearInterval(interval);
  }, [payment_id]);

  return (
    <div className="min-h-screen bg-[#05070a] text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-[#0a0f18] border border-cyan-500/30 rounded-[40px] p-10 text-center shadow-2xl">
        <h1 className="text-3xl font-black italic mb-4">¡PAGO EXITOSO!</h1>
        
        {cargando ? (
          <p className="text-cyan-400 animate-pulse uppercase tracking-widest text-xs">Generando tu código de entrega...</p>
        ) : codigo ? (
          <>
            <p className="text-gray-400 mb-6 italic">Copia este código y úsalo en el servidor:</p>
            <div className="bg-black/50 border-2 border-dashed border-cyan-500/50 p-6 rounded-2xl mb-8">
              <code className="text-3xl font-black text-cyan-400 tracking-wider">/claim {codigo}</code>
            </div>
            <p className="text-[10px] text-gray-500 uppercase mb-8">Toma captura de pantalla de este código</p>
          </>
        ) : (
          <p className="text-red-400 mb-8">Estamos procesando tu pago. Si el código no aparece en 1 minuto, abre un ticket en Discord.</p>
        )}

        <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-cyan-500 transition-all">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
}

// Next.js requiere envolver "useSearchParams" en un Suspense
export default function Exito() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#05070a] flex items-center justify-center"><p className="text-cyan-400 animate-pulse">Cargando...</p></div>}>
      <PaginaExito />
    </Suspense>
  );
}