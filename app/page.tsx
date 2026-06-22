export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* BARRA DE NAVEGACIÓN TIPO CRISTAL */}
      <header className="px-6 py-4 bg-[#0b1120]/80 backdrop-blur-md border-b border-cyan-900/30 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          {/* LOGO DEL SERVIDOR (Carga desde la carpeta public/logo.png) */}
          <div className="bg-cyan-950/50 p-1 rounded-xl border border-cyan-800/50">
            <img src="/logo.png" alt="Logo Patagonia" className="h-10 w-auto object-contain" />
          </div>
          <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-500">
            PATAGONIA STORE
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6 font-semibold text-sm uppercase tracking-wide">
            <li><a href="#vip" className="text-gray-300 hover:text-cyan-400 transition-colors">Membresías VIP</a></li>
            <li><a href="#autos" className="text-gray-300 hover:text-cyan-400 transition-colors">Autos Addon</a></li>
          </ul>
        </nav>
      </header>

      {/* SECCIÓN HERO (BIENVENIDA) */}
      <main className="container mx-auto px-6 relative">
        
        {/* Efecto de luz de fondo celeste */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-600/10 blur-[100px] -z-10 rounded-full"></div>

        <section className="text-center py-32">
          {/* ETIQUETA BETA */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            SERVIDOR EN BETA FASE 1
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Domina la <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Patagonia</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Apoya al servidor en su etapa beta. Adquiere membresías exclusivas y vehículos únicos para destacar en la ciudad. Todo lo recaudado mejora nuestro host.
          </p>
          <a href="#vip" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-[#0b1120] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1">
            Ver Catálogo
          </a>
        </section>

        {/* SECCIÓN VIP */}
        <section id="vip" className="mb-32 scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-black uppercase tracking-wider">Membresías VIP</h3>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tarjeta VIP Básico */}
            <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-gray-300 mb-2 group-hover:text-cyan-400 transition-colors">VIP Ciudadano</h4>
              <p className="text-cyan-400 font-black text-2xl mb-6">$5.00 <span className="text-sm text-gray-500 font-normal">/ mes</span></p>
              <ul className="text-gray-400 mb-8 space-y-4">
                <li className="flex gap-2">✓ Prioridad Nivel 1 en cola</li>
                <li className="flex gap-2">✓ Sueldo extra de $1,000</li>
                <li className="flex gap-2">✓ Rol exclusivo en Discord</li>
              </ul>
              <a href="#" className="block text-center border border-cyan-900 hover:border-cyan-400 hover:bg-cyan-950/30 text-cyan-400 w-full py-3 rounded-xl font-bold transition-all">Adquirir Ciudadano</a>
            </div>

            {/* Tarjeta VIP Premium */}
            <div className="bg-gradient-to-b from-[#162032] to-[#111827] p-8 rounded-3xl border-2 border-cyan-500 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-[#0b1120] px-6 py-1.5 rounded-full text-sm font-black tracking-widest shadow-lg">
                MÁS POPULAR
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">VIP Patagónico</h4>
              <p className="text-cyan-400 font-black text-3xl mb-6">$10.00 <span className="text-sm text-gray-500 font-normal">/ mes</span></p>
              <ul className="text-gray-300 mb-8 space-y-4 font-medium">
                <li className="flex gap-2">🔥 Prioridad Nivel 2 en cola</li>
                <li className="flex gap-2">🔥 Sueldo extra de $3,000</li>
                <li className="flex gap-2">🔥 Auto VIP exclusivo (Mensual)</li>
                <li className="flex gap-2">🔥 Kit de inicio avanzado</li>
              </ul>
              <a href="#" className="block text-center bg-cyan-500 text-[#0b1120] hover:bg-cyan-400 w-full py-4 rounded-xl font-black transition-all shadow-lg hover:shadow-cyan-500/50">Adquirir Patagónico</a>
            </div>

          </div>
        </section>

        {/* SECCIÓN AUTOS ADDON */}
        <section id="autos" className="mb-32 scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-black uppercase tracking-wider">Autos de Importación</h3>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Auto 1 */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600&h=300" alt="Nissan" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-[#0b1120]/80 backdrop-blur-sm px-3 py-1 rounded-lg text-cyan-400 font-black text-sm border border-cyan-900/50">JDM</div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-black mb-2 text-white group-hover:text-cyan-400 transition-colors">Nissan Skyline R34</h4>
                  <p className="text-sm text-gray-400 mb-6 line-clamp-2">Una leyenda de las calles. Tracción total, motor biturbo y un manejo impecable para la ciudad.</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-white">$15.00</span>
                  <a href="#" className="bg-cyan-950/50 text-cyan-400 border border-cyan-800 hover:bg-cyan-500 hover:text-[#0b1120] hover:border-cyan-500 px-6 py-2.5 rounded-xl font-bold transition-all">Comprar</a>
                </div>
              </div>
            </div>

            {/* Auto 2 */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300 flex flex-col group hover:-translate-y-1">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=600&h=300" alt="BMW" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-[#0b1120]/80 backdrop-blur-sm px-3 py-1 rounded-lg text-cyan-400 font-black text-sm border border-cyan-900/50">Deportivo</div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-black mb-2 text-white group-hover:text-cyan-400 transition-colors">BMW M4 Competition</h4>
                  <p className="text-sm text-gray-400 mb-6 line-clamp-2">Pura elegancia alemana. Velocidad punta increíble, perfecto para escapar o patrullar con estilo.</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-white">$20.00</span>
                  <a href="#" className="bg-cyan-950/50 text-cyan-400 border border-cyan-800 hover:bg-cyan-500 hover:text-[#0b1120] hover:border-cyan-500 px-6 py-2.5 rounded-xl font-bold transition-all">Comprar</a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#050811] text-center py-12 border-t border-cyan-900/30">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo Patagonia" className="h-12 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>
        <p className="text-gray-500 font-medium">© {new Date().getFullYear()} Patagonia Store. Todos los derechos reservados.</p>
        <p className="text-xs text-gray-600 mt-2 max-w-lg mx-auto">
          No estamos afiliados, asociados, autorizados, respaldados ni conectados oficialmente de ninguna manera con Rockstar Games o Cfx.re (FiveM).
        </p>
      </footer>
    </div>
  );
}