"use client";
import { useState } from "react";

// CONFIGURACIÓN DE TUS VEHÍCULOS
const vehiculos = [
  {
    id: "golfgti",
    nombre: "Volkswagen Golf GTI MK7 2015",
    categoria: "Hot Hatch",
    precio: 2500,
    moneda: "ARS",
    imagenPrincipal: "/golfgti.png",
    imagenesExtra: ["/golfgti.png", "/golfgti2.png", "/golfgti3.png", "/golfgti4.png"],
    descripcionCorta: "Tracción delantera ágil, ideal para ciudad.",
    descripcionLarga: "El clásico GTI MK7. Un vehículo equilibrado, con una aceleración envidiable y una estética impecable. \n\n• Entrega automática mediante sistema Tebex.\n• Múltiples opciones de llantas y alerones.\n• Handling optimizado.\n• Luces diurnas LED funcionales."
  },
  
  {
    id: "golf",
    nombre: "Volkswagen Golf 7.5R 2018",
    categoria: "Hatchback Deportivo",
    precio: 3000, // Precio de prueba
    moneda: "ARS",
    imagenPrincipal: "/golf.png",
    imagenesExtra: ["/golf.png", "/golf2.png", "/golf3.png", "/golf4.png"],
    descripcionCorta: "Tracción integral AWD, Stage 2 y sonido personalizado.",
    descripcionLarga: "El 7.5R es la joya de la corona. En Patagonia RP, este vehículo ha sido ajustado para ofrecer un manejo técnico y veloz. \n\n• Entrega inmediata en tu garaje.\n• Kit de tuning 'R-Performance'.\n• Sonido de escape personalizado pop-and-bang.\n• Interior 4K con tablero funcional."
  },

  {
    id: "fiatuno",
    nombre: "Fiat Uno Turbo i.e.",
    categoria: "Clásico / Picadas",
    precio: 5000,
    moneda: "ARS",
    imagenPrincipal: "/fiatuno.png",
    imagenesExtra: ["/fiatuno.png", "/fiatuno2.png", "/fiatuno3.png", "/fiatuno4.png"],
    descripcionCorta: "Pequeño, rabioso y legendario. El rey de las calles argentinas.",
    descripcionLarga: "El Fiat Uno Turbo es una leyenda indiscutible. Liviano como una pluma, pero con un motor que lo convierte en un misil absoluto en los 400 metros.\n\n• Ideal para picadas y huidas por callejones estrechos.\n• Relación peso/potencia inigualable.\n• Sonido de válvula de alivio (blow-off) clásico.\n• Personalización de motor y estética extrema.",
    linkCompra: "https://mpago.la/1yT3PQa" // <-- ACORDATE DE PONER TU LINK DE 15.000 ACÁ
  }

];

export default function Home() {
  const [autoSeleccionado, setAutoSeleccionado] = useState<any>(null);
  const [imagenActiva, setImagenActiva] = useState(0);
  const [cargandoPago, setCargandoPago] = useState(false); // <--- NUEVO: Para saber si está cargando

  const abrirModal = (auto: any) => {
    setAutoSeleccionado(auto);
    setImagenActiva(0);
  };

  // <--- NUEVO: FUNCIÓN QUE HABLA CON TU API CHECKOUT --->
  const pagarConMercadoPago = async (auto: any) => {
    setCargandoPago(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: auto.id,
          nombre: auto.nombre,
          precio: auto.precio
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirige al usuario al link de pago generado
        window.location.href = data.url;
      } else {
        alert("Error al generar el pago. Intenta de nuevo.");
        setCargandoPago(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión.");
      setCargandoPago(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans selection:bg-cyan-500 selection:text-white pb-10">
      
      {/* NAVEGACIÓN */}
      <header className="px-4 md:px-6 py-4 bg-[#05070a]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] rounded-xl">
            <div className="bg-[#05070a] p-1 md:p-1.5 rounded-[11px]">
              <img src="/logo.png" alt="Logo" className="h-7 md:h-9 w-auto object-contain" />
            </div>
          </div>
          <h1 className="text-lg md:text-xl font-black tracking-tighter text-white uppercase italic">
            Patagonia<span className="text-cyan-400 font-light ml-1 underline decoration-cyan-500/30">Store</span>
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 relative">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300 md:600px] h-[600px] bg-cyan-600/10 blur-[150px] -z-10 rounded-full"></div>

        {/* HERO */}
        <section className="text-center py-12 md:py-20">
          <h2 className="text-4xl md:text-8xl font-black mb-4 tracking-tighter italic uppercase">
            EL GARAGE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 text-outline">ELITE</span>
          </h2>
          <p className="text-[10px] md:text-xs text-gray-400 max-w-xl mx-auto font-bold uppercase tracking-[0.3em] leading-relaxed italic">
            Vehículos de importación optimizados para la alta competición.
          </p>
        </section>

        {/* CATÁLOGO */}
        <section id="autos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {vehiculos.map((auto) => (
              <div 
                key={auto.id} 
                className="group relative bg-[#0a0f18] rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl cursor-pointer"
                onClick={() => abrirModal(auto)}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img src={auto.imagenPrincipal} alt={auto.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-cyan-400 text-[10px] font-black px-3 py-1 rounded-full border border-white/10 tracking-widest uppercase">
                    {auto.categoria}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-black mb-2 tracking-tighter group-hover:text-cyan-400 transition-colors italic uppercase">{auto.nombre}</h4>
                  <p className="text-sm text-gray-500 mb-6 font-medium">{auto.descripcionCorta}</p>
                  <div className="flex justify-between items-center border-t border-white/5 pt-6">
                    <span className="text-xl md:text-2xl font-black text-white">${auto.precio.toLocaleString()} <span className="text-[10px] text-gray-500">{auto.moneda}</span></span>
                    <div className="bg-cyan-500 text-black p-2 rounded-lg group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* MODAL UNIVERSAL CORREGIDO */}
      {autoSeleccionado && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={() => setAutoSeleccionado(null)}></div>
          
          <div className="relative w-full max-w-5xl bg-[#0a0f18] rounded-[30px] md:rounded-[40px] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]">
            
            {/* GALERÍA */}
            <div className="w-full md:w-3/5 bg-black relative flex flex-col h-48 md:h-auto">
              <img src={autoSeleccionado.imagenesExtra[imagenActiva]} alt="Preview" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 z-20">
                {autoSeleccionado.imagenesExtra.map((img: string, i: number) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setImagenActiva(i); }} className={`w-12 h-8 md:w-16 md:h-10 rounded-lg overflow-hidden border-2 transition-all ${imagenActiva === i ? 'border-cyan-500 scale-110' : 'opacity-40 border-transparent'}`}>
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <button onClick={() => setAutoSeleccionado(null)} className="md:hidden absolute top-3 right-3 bg-black/60 text-white w-8 h-8 rounded-full z-30">×</button>
            </div>

            {/* INFO */}
            <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col h-full overflow-hidden">
              <button onClick={() => setAutoSeleccionado(null)} className="hidden md:block self-end mb-4 text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">
                Cerrar ×
              </button>

              <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                <span className="text-cyan-500 text-[10px] font-black tracking-[0.3em] uppercase">{autoSeleccionado.categoria}</span>
                <h3 className="text-2xl md:text-4xl font-black mt-1 mb-4 md:mb-6 tracking-tighter italic uppercase leading-none">{autoSeleccionado.nombre}</h3>
                <div className="text-gray-400 text-xs md:text-sm leading-relaxed space-y-4 font-medium italic mb-6">
                  {autoSeleccionado.descripcionLarga.split('\n').map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
              </div>

              {/* ACCIÓN (BOTÓN MODIFICADO) */}
              <div className="mt-4 pt-4 border-t border-white/5 bg-[#0a0f18]">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Precio Final</p>
                    <p className="text-2xl md:text-3xl font-black">${autoSeleccionado.precio.toLocaleString()} <span className="text-xs text-gray-500 font-bold">{autoSeleccionado.moneda}</span></p>
                  </div>
                </div>
                
                <button 
                  onClick={() => pagarConMercadoPago(autoSeleccionado)}
                  disabled={cargandoPago}
                  className="w-full block text-center bg-[#009EE3] text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#008ACB] transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95 disabled:opacity-50 disabled:cursor-wait"
                >
                  {cargandoPago ? "Generando pago..." : "Pagar con Mercado Pago"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-20 text-center opacity-20">
         <p className="text-[10px] font-black tracking-[0.5em] uppercase">Patagonia Store © 2026</p>
      </footer>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #164e63; border-radius: 10px; }
      `}</style>
    </div>
  );
}