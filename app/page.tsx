export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* BARRA DE NAVEGACIÓN */}
      <header className="p-6 bg-gray-950 border-b border-gray-800 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          MiServer RP
        </h1>
        <nav>
          <ul className="flex space-x-6 font-semibold">
            <li><a href="#vip" className="hover:text-purple-400 transition">Membresías VIP</a></li>
            <li><a href="#autos" className="hover:text-blue-400 transition">Autos Addon</a></li>
          </ul>
        </nav>
      </header>

      {/* SECCIÓN HERO (BIENVENIDA) */}
      <main className="container mx-auto px-6">
        <section className="text-center py-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Mejora tu experiencia en la ciudad</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Apoya al servidor adquiriendo membresías exclusivas y vehículos únicos. Todo lo recaudado se usa para mejorar el host y traer nuevos scripts.
          </p>
        </section>

        {/* SECCIÓN VIP */}
        <section id="vip" className="mb-24 scroll-mt-24">
          <h3 className="text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-4">Membresías VIP</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tarjeta VIP Plata */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-purple-500 transition duration-300">
              <h4 className="text-2xl font-bold text-gray-300 mb-2">VIP Plata</h4>
              <p className="text-purple-400 font-bold text-xl mb-6">$5.00 <span className="text-sm text-gray-500">/ mes</span></p>
              <ul className="text-gray-300 mb-8 space-y-3">
                <li>✅ Prioridad Nivel 1 en cola</li>
                <li>✅ Sueldo extra de $1,000 en trabajos</li>
                <li>✅ Rango en Discord</li>
              </ul>
              {/* Cambia el # por tu link de Tebex */}
              <a href="#" className="block text-center bg-purple-600 hover:bg-purple-700 w-full py-3 rounded-lg font-bold transition">Adquirir Plata</a>
            </div>

            {/* Tarjeta VIP Oro */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-yellow-500 relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                MÁS POPULAR
              </div>
              <h4 className="text-2xl font-bold text-yellow-500 mb-2">VIP Oro</h4>
              <p className="text-yellow-400 font-bold text-xl mb-6">$10.00 <span className="text-sm text-gray-500">/ mes</span></p>
              <ul className="text-gray-300 mb-8 space-y-3">
                <li>⭐ Prioridad Nivel 2 en cola</li>
                <li>⭐ Sueldo extra de $3,000 en trabajos</li>
                <li>⭐ Rango y auto VIP exclusivo</li>
                <li>⭐ Reclamo de kit semanal</li>
              </ul>
              <a href="#" className="block text-center bg-yellow-500 text-black hover:bg-yellow-400 w-full py-3 rounded-lg font-bold transition">Adquirir Oro</a>
            </div>

          </div>
        </section>

        {/* SECCIÓN AUTOS ADDON */}
        <section id="autos" className="mb-24 scroll-mt-24">
          <h3 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Autos Addon (Importados)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Auto 1 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-blue-500 transition duration-300 flex flex-col">
              {/* Reemplaza el link por la foto de tu auto */}
              <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600&h=300" alt="Nissan Skyline" className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-1">Nissan Skyline R34</h4>
                  <p className="text-sm text-gray-400 mb-4">Categoría: Deportivo / JDM</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-blue-400">$15.00</span>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold transition">Comprar</a>
                </div>
              </div>
            </div>

             {/* Auto 2 */}
             <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-blue-500 transition duration-300 flex flex-col">
              <img src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=600&h=300" alt="BMW M4" className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-1">BMW M4 Competition</h4>
                  <p className="text-sm text-gray-400 mb-4">Categoría: Superdeportivo</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-blue-400">$20.00</span>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold transition">Comprar</a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-center py-8 border-t border-gray-800 text-gray-500">
        <p>© {new Date().getFullYear()} MiServer RP. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">No estamos afiliados, asociados ni respaldados por Rockstar Games.</p>
      </footer>
    </div>
  );
}