"use client";
import { useState } from "react";

// AQUÍ AGREGARÁS TUS FUTUROS AUTOS MUY FÁCILMENTE
const vehiculos = [
  {
    id: "golf",
    nombre: "Volkswagen Golf 7.5R 2018",
    categoria: "Hatchback Deportivo",
    precio: 2500,
    moneda: "ARS",
    imagenPrincipal: "/golf.png",
    // Lista de fotos para la galería en la ventana grande
    imagenesExtra: ["/golf.png", "/golf2.png", "/golf3.png", "/golf4.png"],
    descripcionCorta: "Tuning completo, handling realista y texturas 4K exclusivas.",
    descripcionLarga: "El Volkswagen Golf 7.5R de 2018 es la combinación perfecta entre rendimiento deportivo y versatilidad diaria. Importado directamente a Los Santos, este vehículo cuenta con tracción en las cuatro ruedas (AWD), permitiendo arranques perfectos y un agarre en curvas a altas velocidades que te dará la ventaja en cualquier persecución.\n\nCuenta con interiores detallados, tablero funcional y cientos de modificaciones disponibles en Los Santos Customs.",
    linkMercadoPago: "#" // PON AQUÍ TU LINK DE MERCADO PAGO
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
    <div className="min-h-screen bg-[#070b14] text-white font-sans selection:bg-cyan-500 selection:text-white pb-20">
      
      {/* BARRA DE NAVEGACIÓN */}
      <header className="px-6 py-4 bg-[#070b14]/90 backdrop-blur-md border-b border-cyan-900/30 flex justify-between items-center sticky top-0 z-50 shadow-lg shadow-cyan-900/10">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-950/40 p-1 rounded-xl border border-cyan-800/50">
            <img src="/logo.png" alt="Logo Patagonia" className="h-10 w-auto object-contain" />
          </div>
          <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600">
            PATAGONIA STORE
          </h1>
        </div>
      </header>

      {/* SECCIÓN HERO (BIENVENIDA PROFESIONAL) */}
      <main className="container mx-auto px-6 relative mt-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-600/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

        <section className="text-center py-16">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Exclusividad y <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Rendimiento</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Adquiere vehículos de importación con modelados 4K y handling ajustado para el mejor Roleplay de la ciudad. 
          </p>
        </section>

        {/* GUÍA DE COMPRA (GENERA CONFIANZA) */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="bg-[#0c1322] border border-cyan-900/30 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-black text-center mb-8 tracking-wider">¿CÓMO FUNCIONA LA COMPRA?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Línea conectora (solo visible en PC) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-900/10 via-cyan-500/30 to-cyan-900/10 -translate-y-1/2 -z-10"></div>
              
              <div className="text-center bg-[#070b14] p-6 rounded-2xl border border-cyan-950">
                <div className="w-12 h-12 bg-cyan-950 text-cyan-400 rounded-full flex items-center justify-center font-black text-xl mx-auto mb-4 border border-cyan-800">1</div>
                <h4 className="font-bold text-lg mb-2 text-white">Elige tu Vehículo</h4>
                <p className="text-sm text-gray-400">Explora nuestro catálogo y selecciona el auto que mejor se adapte a tu estilo.</p>
              </div>

              <div className="text-center bg-[#070b14] p-6 rounded-2xl border border-cyan-950">
                <div className="w-12 h-12 bg-cyan-950 text-cyan-400 rounded-full flex items-center justify-center font-black text-xl mx-auto mb-4 border border-cyan-800">2</div>
                <h4 className="font-bold text-lg mb-2 text-white">Pago Seguro</h4>
                <p className="text-sm text-gray-400">Abona de forma 100% segura mediante Mercado Pago. El procesamiento es inmediato.</p>
              </div>

              <div className="text-center bg-[#070b14] p-6 rounded-2xl border border-cyan-950">
                <div className="w-12 h-12 bg-cyan-900 text-cyan-400 rounded-full flex items-center justify-center font-black text-xl mx-auto mb-4 border border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.4)]">3</div>
                <h4 className="font-bold text-lg mb-2 text-white">Reclama In-Game</h4>
                <p className="text-sm text-gray-400">Recibirás un código único. Usa <strong className="text-cyan-400">/claim [código]</strong> en la ciudad y el auto aparecerá en tu garaje.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO DE AUTOS */}
        <section id="autos" className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-black uppercase tracking-wider">Catálogo de Importados</h3>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* GENERAMOS LAS TARJETAS AUTOMÁTICAMENTE DESDE LA LISTA DE ARRIBA */}
            {vehiculos.map((auto) => (
              <div key={auto.id} className="bg-[#0c1322] rounded-3xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl cursor-pointer" onClick={() => abrirModal(auto)}>
                <div className="relative">
                  <img src={auto.imagenPrincipal} alt={auto.nombre} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700 bg-gray-900" />
                  <div className="absolute top-4 right-4 bg-[#070b14]/80 backdrop-blur-md px-3 py-1 rounded-lg text-cyan-400 font-black text-xs border border-cyan-900/50 uppercase tracking-widest">{auto.categoria}</div>
                  
                  {/* Etiqueta flotante para indicar que se puede clickear */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-cyan-500 text-[#070b14] px-6 py-2 rounded-full font-bold text-sm tracking-wide">VER DETALLES</span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-black mb-2 text-white group-hover:text-cyan-400 transition-colors line-clamp-1">{auto.nombre}</h4>
                    <p className="text-sm text-gray-400 mb-6">{auto.descripcionCorta}</p>
                  </div>
                  <div className="mt-2 pt-4 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-2xl font-black text-white">${auto.precio} <span className="text-sm text-gray-500">{auto.moneda}</span></span>
                    <button className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center gap-1 text-sm">
                      MÁS INFO 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* ESPACIO PARA PRÓXIMOS AUTOS */}
            <div className="bg-[#0c1322]/50 rounded-3xl border border-gray-800 border-dashed flex flex-col items-center justify-center p-8 text-gray-600 min-h-[400px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 opacity-50"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="font-bold tracking-widest uppercase text-sm">Próximamente</p>
            </div>

          </div>
        </section>
      </main>

      {/* MODAL (PANTALLA GRANDE DEL AUTO) */}
      {autoSeleccionado && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Fondo borroso (Click para cerrar) */}
          <div className="absolute inset-0 bg-[#070b14]/90 backdrop-blur-md cursor-pointer" onClick={() => setAutoSeleccionado(null)}></div>
          
          {/* Contenedor principal del Modal */}
          <div className="relative w-full max-w-5xl bg-[#0c1322] rounded-3xl border border-cyan-900/50 shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh] overflow-y-auto">
            
            {/* Botón Cerrar */}
            <button onClick={() => setAutoSeleccionado(null)} className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-cyan-500 hover:text-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Columna Izquierda: Galería de Fotos */}
            <div className="w-full md:w-3/5 bg-[#050811] flex flex-col">
              {/* Foto Principal */}
              <div className="relative aspect-video w-full">
                <img src={autoSeleccionado.imagenesExtra[imagenActiva]} alt="Auto" className="w-full h-full object-cover" />
              </div>
              {/* Miniaturas */}
              <div className="flex p-4 gap-3 overflow-x-auto bg-[#070b14]">
                {autoSeleccionado.imagenesExtra.map((img: string, index: number) => (
                  <button key={index} onClick={() => setImagenActiva(index)} className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${imagenActiva === index ? 'border-cyan-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                    <img src={img} alt={`Miniatura ${index}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Información y Compra */}
            <div className="w-full md:w-2/5 p-8 flex flex-col justify-between bg-gradient-to-b from-[#0c1322] to-[#070b14]">
              <div>
                <div className="inline-block bg-cyan-950/50 text-cyan-400 font-bold text-xs px-3 py-1 rounded-full mb-4 border border-cyan-900">{autoSeleccionado.categoria}</div>
                <h3 className="text-3xl font-black text-white mb-6 leading-tight">{autoSeleccionado.nombre}</h3>
                
                {/* Descripción larga con saltos de línea */}
                <div className="text-gray-300 text-sm leading-relaxed mb-8 space-y-4">
                  {autoSeleccionado.descripcionLarga.split('\n').map((parrafo: string, i: number) => (
                    <p key={i}>{parrafo}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="text-4xl font-black text-white mb-6">
                  ${autoSeleccionado.precio} <span className="text-lg text-gray-500 font-bold">{autoSeleccionado.moneda}</span>
                </div>
                
                <a href={autoSeleccionado.linkMercadoPago} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#009EE3] hover:bg-[#008ACB] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,158,227,0.3)] hover:shadow-[0_0_30px_rgba(0,158,227,0.5)] hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  Pagar con Mercado Pago
                </a>
                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                  Transacción protegida
                </p>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}