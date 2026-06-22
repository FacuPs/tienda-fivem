"use client";
import { useState } from "react";

// CONFIGURACIÓN DE TUS VEHÍCULOS
const vehiculos = [
  {
    id: "golf",
    nombre: "Volkswagen Golf 7.5R 2018",
    categoria: "Hatchback Deportivo",
    precio: 7000,
    moneda: "ARS",
    imagenPrincipal: "/golf.png",
    imagenesExtra: ["/golf.png", "/golf2.png", "/golf3.png", "/golf4.png"],
    descripcionCorta: "Tracción integral AWD, Stage 2 y sonido personalizado.",
    descripcionLarga: "El 7.5R es la joya de la corona. En Patagonia RP, este vehículo ha sido ajustado para ofrecer un manejo técnico y veloz. \n\nIncluye: \n• Entrega inmediata en tu garaje.\n• Kit de tuning 'R-Performance'.\n• Sonido de escape personalizado pop-and-bang.\n• Interior 4K con tablero funcional.",
    linkCompra: "https://mpago.la/11AGSRA" 
  },
  {
    id: "golfgti",
    nombre: "Volkswagen Golf GTI MK7 2015",
    categoria: "Hot Hatch",
    precio: 5000,
    moneda: "ARS",
    imagenPrincipal: "/golfgti.png",
    imagenesExtra: ["/golfgti.png", "/golfgti2.png", "/golfgti3.png", "/golfgti4.png"],
    descripcionCorta: "Tracción delantera ágil, ideal para ciudad y persecuciones urbanas.",
    descripcionLarga: "El clásico GTI MK7. Un vehículo equilibrado, con una aceleración envidiable y una estética impecable. \n\nIncluye: \n• Entrega automática mediante sistema Tebex.\n• Múltiples opciones de llantas y alerones.\n• Handling optimizado para no volcar en curvas cerradas.\n• Luces diurnas LED funcionales.",
    linkCompra: "https://mpago.la/13naoJy" // Puedes cambiarlo a Tebex después si quieres
  }
];

export default function Home() {
  const [autoSeleccionado, setAutoSeleccionado] = useState<any>(null);
  const [imagenActiva, setImagenActiva] = useState(0);

  const abrirModal = (auto: any) => {
    setAutoSeleccionado(auto);
    setImagenActiva(0);
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans selection:bg-cyan-500 selection:text-white pb-20">
      
      {/* NAVEGACIÓN ESTILO GLASS */}
      <header className="px-6 py-4 bg-[#05070a]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] rounded-xl">
            <div className="bg-[#05070a] p-1.5 rounded-[11px]">
              <img src="/logo.png" alt="Logo" className="h-9 w-auto object-contain" />
            </div>
          </div>
          <h1 className="text-xl font-black tracking-tighter text-white">
            PATAGONIA<span className="text-cyan-400 font-light ml-1 underline decoration-cyan-500/30">STORE</span>
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-6 relative">
        {/* LUCES DE FONDO AMBIENTALES */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] -z-10 rounded-full"></div>

        {/* HERO SECTION */}
        <section className="text-center py-20">
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic">
            EL GARAGE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">ELITE</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-widest text-[10px]">
            Vehículos de importación optimizados para la alta competición y el Roleplay exigente.
          </p>
        </section>

        {/* PASOS DE COMPRA (DISEÑO LIMPIO) */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { t: "SELECCIÓN", d: "Elige tu próxima máquina del catálogo.", n: "01" },
            { t: "PAGO SEGURO", d: "Transacción protegida vía Tebex/MP.", n: "02" },
            { t: "ENTREGA", d: "Recibe el vehículo al instante en el server.", n: "03" }
          ].map((step, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/[0.04] transition-all">
              <span className="text-3xl font-black text-cyan-500/20">{step.n}</span>
              <div>
                <h4 className="font-bold text-xs tracking-[0.2em] text-cyan-400 mb-1">{step.t}</h4>
                <p className="text-xs text-gray-500 leading-tight">{step.d}</p>
              </div>
            </div>
          ))}
        </section>

        {/* CATÁLOGO */}
        <section id="autos">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-2xl font-black tracking-tighter italic uppercase">Stock Disponible</h3>
            <div className="h-[2px] bg-gradient-to-r from-cyan-500 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vehiculos.map((auto) => (
              <div 
                key={auto.id} 
                className="group relative bg-[#0a0f18] rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl cursor-pointer"
                onClick={() => abrirModal(auto)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={auto.imagenPrincipal} alt={auto.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/60 backdrop-blur-md text-cyan-400 text-[10px] font-black px-3 py-1 rounded-full border border-white/10 tracking-widest uppercase">
                      {auto.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-black mb-2 tracking-tighter group-hover:text-cyan-400 transition-colors italic uppercase">{auto.nombre}</h4>
                  <p className="text-sm text-gray-500 mb-6 font-medium">{auto.descripcionCorta}</p>
                  <div className="flex justify-between items-center border-t border-white/5 pt-6">
                    <div>
                      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Precio Final</p>
                      <span className="text-2xl font-black">${auto.precio.toLocaleString()} <span className="text-xs text-gray-500">{auto.moneda}</span></span>
                    </div>
                    <div className="bg-cyan-500 text-black p-3 rounded-xl group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* MODAL (DETALLES DEL AUTO) */}
      {autoSeleccionado && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={() => setAutoSeleccionado(null)}></div>
          
          <div className="relative w-full max-w-6xl bg-[#0a0f18] rounded-[40px] border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row z-10 max-h-[95vh]">
            
            {/* GALERÍA */}
            <div className="w-full lg:w-2/3 bg-black relative group">
              <img src={autoSeleccionado.imagenesExtra[imagenActiva]} alt="Preview" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 backdrop-blur-xl p-2 rounded-2xl border border-white/10">
                {autoSeleccionado.imagenesExtra.map((img: string, i: number) => (
                  <button key={i} onClick={() => setImagenActiva(i)} className={`w-16 h-10 rounded-lg overflow-hidden transition-all ${imagenActiva === i ? 'ring-2 ring-cyan-500 scale-110' : 'opacity-40'}`}>
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* INFO */}
            <div className="w-full lg:w-1/3 p-10 flex flex-col">
              <button onClick={() => setAutoSeleccionado(null)} className="self-end mb-4 text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest flex items-center gap-2">
                Cerrar <span className="text-lg">×</span>
              </button>

              <div className="flex-grow">
                <span className="text-cyan-500 text-[10px] font-black tracking-[0.3em] uppercase">{autoSeleccionado.categoria}</span>
                <h3 className="text-4xl font-black mt-2 mb-8 tracking-tighter italic uppercase leading-none">{autoSeleccionado.nombre}</h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-8"></div>
                <div className="text-gray-400 text-sm leading-relaxed space-y-4 font-medium italic">
                  {autoSeleccionado.descripcionLarga.split('\n').map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-white/5">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Valor de Inversión</p>
                    <p className="text-4xl font-black">${autoSeleccionado.precio.toLocaleString()} <span className="text-sm text-gray-500 font-bold">{autoSeleccionado.moneda}</span></p>
                  </div>
                </div>
                
                <a 
  href={autoSeleccionado.linkCompra} 
  target="_blank" 
  rel="noreferrer" 
  className="block text-center bg-[#009EE3] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#008ACB] transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20"
>
  Pagar con Mercado Pago
</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-40 text-center opacity-20 hover:opacity-100 transition-opacity duration-500">
         <p className="text-[10px] font-black tracking-[0.5em] uppercase">Patagonia Store © 2026</p>
      </footer>
    </div>
  );
}