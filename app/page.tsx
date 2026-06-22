export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* BARRA DE NAVEGACIÓN */}
      <header className="px-6 py-4 bg-[#0b1120]/80 backdrop-blur-md border-b border-cyan-900/30 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-950/50 p-1 rounded-xl border border-cyan-800/50">
            <img src="/logo.png" alt="Logo Patagonia" className="h-10 w-auto object-contain" />
          </div>
          <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-500">
            PATAGONIA STORE
          </h1>
        </div>
      </header>

      {/* SECCIÓN HERO (BIENVENIDA) */}
      <main className="container mx-auto px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-600/10 blur-[100px] -z-10 rounded-full"></div>

        <section className="text-center py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            SERVIDOR EN BETA FASE 1
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Catálogo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Vehículos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Adquiere vehículos de importación únicos. Cada compra incluye un código de reclamo automático en la ciudad.
          </p>
        </section>

        {/* SECCIÓN AUTOS ADDON */}
        <section id="autos" className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-black uppercase tracking-wider">Vehículos Disponibles</h3>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* VOLKSWAGEN GOLF 7.5R */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl">
              <div className="relative">
                {/* AQUI CARGA TU FOTO golf.png DESDE LA CARPETA PUBLIC */}
                <img src="/golf.png" alt="VW Golf 7.5R" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-900" />
                <div className="absolute top-4 right-4 bg-[#0b1120]/80 backdrop-blur-sm px-3 py-1 rounded-lg text-blue-400 font-black text-sm border border-blue-900/50">Hatchback</div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-black mb-2 text-white group-hover:text-blue-400 transition-colors">Volkswagen Golf 7.5R 2018</h4>
                  <ul className="text-sm text-gray-400 mb-6 space-y-2">
                    <li>⚙️ <strong className="text-gray-300">Tuning completo:</strong> Paragolpes, alerones, capós y escapes modificables en Los Santos Customs.</li>
                    <li>🏁 <strong className="text-gray-300">Handling realista:</strong> Tracción integral y aceleración ajustada para rol.</li>
                    <li>✨ <strong className="text-gray-300">Texturas 4K:</strong> Interior detallado con tablero funcional.</li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-black text-white">$2,500 <span className="text-lg text-gray-500">ARS</span></span>
                  </div>
                  {/* BOTÓN DE MERCADO PAGO */}
                  {/* Cambia el # por tu link de cobro de Mercado Pago */}
                  <a href="https://mpago.la/11AGSRA" className="w-full flex items-center justify-center gap-2 bg-[#009EE3] hover:bg-[#008ACB] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(0,158,227,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    Pagar con Mercado Pago
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-3">Al pagar, recibirás tu código para usar <strong className="text-cyan-400">/claim</strong></p>
                </div>
              </div>
            </div>

            {/* AQUI SE AGREGARÁN LOS SIGUIENTES AUTOS DESPUÉS */}
            <div className="bg-[#111827]/50 rounded-3xl border border-gray-800 border-dashed flex flex-col items-center justify-center p-8 text-gray-600">
              <span className="text-4xl mb-4">🚗</span>
              <p className="font-bold">Próximamente más vehículos</p>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#050811] text-center py-12 border-t border-cyan-900/30">
        <p className="text-gray-500 font-medium">© {new Date().getFullYear()} Patagonia Store. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}