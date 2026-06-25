"use client";
import { useState } from "react";

// ==========================================
// 🚗 CONFIGURACIÓN DE TUS VEHÍCULOS
// ==========================================
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
    descripcionLarga: "El 7.5R es la joya de la corona. En Patagonia RP, este vehículo ha sido ajustado para ofrecer un manejo técnico y veloz.\n\n• Entrega automática en el juego.\n• Kit de tuning 'R-Performance'.\n• Sonido de escape personalizado.\n• Interior 4K con tablero funcional.",
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
    descripcionCorta: "Tracción delantera ágil, ideal para ciudad.",
    descripcionLarga: "El clásico GTI MK7. Un vehículo equilibrado, con una aceleración envidiable y una estética impecable.\n\n• Entrega automática mediante Webhook.\n• Múltiples opciones de llantas y alerones.\n• Handling optimizado.\n• Luces diurnas LED funcionales.",
    linkCompra: "https://mpago.la/13naoJy"
  },
  {
    id: "fiatuno",
    nombre: "Fiat Uno Turbo i.e.",
    categoria: "Clásico / Picadas",
    precio: 7500,
    moneda: "ARS",
    imagenPrincipal: "/fiatuno.png",
    imagenesExtra: ["/fiatuno.png", "/fiatuno2.png", "/fiatuno3.png", "/fiatuno4.png"],
    descripcionCorta: "Pequeño, rabioso y legendario. El rey de las calles argentinas.",
    descripcionLarga: "El Fiat Uno Turbo es una leyenda indiscutible. Liviano como una pluma, pero con un motor que lo convierte en un misil absoluto en los 400 metros.\n\n• Ideal para picadas y huidas estrechas.\n• Relación peso/potencia inigualable.\n• Sonido de válvula de alivio clásico.\n• Personalización extrema en LS Customs.",
    linkCompra: "ACA_VA_EL_LINK_DEL_FIAT" 
  }
];

// ==========================================
// 📜 CONFIGURACIÓN DE NORMATIVAS (ESTILO SERIO)
// ==========================================
const normativasData: any = {
  generales: {
    titulo: "NORMATIVAS GENERALES",
    introduccion: "Al ingresar a Patagonia RP, estás aceptando cumplir con este reglamento. El desconocimiento de la normativa no exime de su cumplimiento ni de la sanción correspondiente. Buscamos una experiencia de rol seria, inmersiva y respetuosa.",
    secciones: [
      {
        subtitulo: "¿Qué es el Roleplay?",
        texto: "El Roleplay consiste en la interpretación de un personaje ficticio en un entorno virtual. Tu personaje no eres tú; tiene sus propios miedos, aspiraciones, conocimientos y limitaciones. Toda acción debe ser coherente con la realidad."
      },
      {
        subtitulo: "Infracciones Graves (Sanción Directa)",
        texto: "• RDM (Random Deathmatch): Matar o agredir a un jugador sin una interacción de rol previa y válida.\n• VDM (Vehicle Deathmatch): Usar cualquier tipo de vehículo como arma para atropellar intencionalmente a otro jugador.\n• MetaGaming (MG): Utilizar información obtenida fuera de tu personaje (Discord, Twitch, otros chats) para beneficio dentro del juego.\n• PowerGaming (PG): Realizar acciones que serían imposibles en la vida real (ej. levantar un auto con las manos) o forzar el rol de otro jugador sin darle oportunidad de respuesta."
      },
      {
        subtitulo: "Valoración de Vida (NVVL)",
        texto: "Es la norma más importante. Debes valorar la vida de tu personaje por sobre todo. Si estás en clara desventaja (ej. dos personas te apuntan con armas de fuego mientras estás desarmado), DEBES rendirte. Escapar o sacar un arma en esa situación es considerado nula valoración y se castiga con BAN."
      },
      {
        subtitulo: "Zonas Seguras",
        texto: "Está prohibido iniciar actos delictivos (robos, secuestros, asesinatos) en las siguientes zonas:\n- Comisarías (Interior y estacionamiento).\n- Hospitales.\n- Talleres Mecánicos Oficiales.\n- Concesionarios y Garaje Central.\nNota: Si un rol agresivo inicia FUERA de una zona segura y la víctima huye hacia adentro, el rol PUEDE continuar, pero se debe avisar por reporte a la administración."
      },
      {
        subtitulo: "Uso del Entorno",
        texto: "La ciudad no está vacía. Debes simular que hay NPCs y cámaras de seguridad en zonas céntricas. Realizar un asesinato en la plaza central al mediodía debe rolearse asumiendo que la policía será llamada inmediatamente por los civiles del entorno."
      }
    ]
  },
  policia: {
    titulo: "NORMATIVAS POLICIALES (PFA/LSPD)",
    introduccion: "Las Fuerzas de Seguridad son el pilar del orden en la ciudad. Se exige un nivel de rol ejemplar, seriedad absoluta en los procedimientos y respeto a la cadena de mando.",
    secciones: [
      {
        subtitulo: "Directrices Generales",
        texto: "Todo oficial en servicio debe actuar con profesionalismo. No se permiten insultos injustificados a los civiles ni el uso excesivo de fuerza. El objetivo principal es preservar la vida, tanto de civiles como de sospechosos."
      },
      {
        subtitulo: "Uso de la Fuerza Letal",
        texto: "Las armas de fuego solo podrán ser desenfundadas y utilizadas cuando la vida del oficial o de terceros corra peligro inminente. Para reducir a un sospechoso en fuga (desarmado), se debe usar el Taser o la fuerza física."
      },
      {
        subtitulo: "Corrupción",
        texto: "La corrupción policial de bajo nivel (aceptar pequeños sobornos por multas de tránsito) está permitida SIEMPRE Y CUANDO exista un rol sólido y no se vea involucrada la cúpula mayor. Sin embargo, vender armas del arsenal policial, chalecos o colaborar directamente en robos grandes conlleva a PK Total del personaje (Despido y cárcel)."
      },
      {
        subtitulo: "Persecuciones",
        texto: "El oficial líder de la persecución debe coordinar por radio. Está prohibido el PIT-Maneuver (chocar la parte trasera del auto fugitivo) a velocidades superiores a 120 km/h, salvo autorización explícita de un rango superior."
      }
    ]
  },
  same: {
    titulo: "NORMATIVAS S.A.M.E. (MÉDICOS)",
    introduccion: "El personal de salud es neutral. Su única labor es salvar vidas sin importar el bando, la raza o los antecedentes del paciente.",
    secciones: [
      {
        subtitulo: "Neutralidad y Respeto",
        texto: "El SAME no puede ser atacado, secuestrado ni robado mientras se encuentre en servicio y con su uniforme, a menos que esté interfiriendo intencionalmente en un tiroteo activo. A su vez, los médicos no pueden portar armas de fuego."
      },
      {
        subtitulo: "Prioridad de Reanimación",
        texto: "Si en un operativo hay varios heridos, el médico debe priorizar por lógica de gravedad y cercanía. No puede reanimar a un compañero si hay policías indicando que la zona aún no es segura."
      },
      {
        subtitulo: "Corrupción en Facción Médica",
        texto: "Está ESTRICTAMENTE PROHIBIDA la corrupción dentro del SAME. No se pueden vender botiquines, vendas ni material médico de la facción a mafias o pandillas. Hacerlo conlleva Ban permanente de la facción."
      }
    ]
  },
  mecanicos: {
    titulo: "NORMATIVAS MECÁNICOS (A.C.A)",
    introduccion: "El Automóvil Club Argentino (o talleres asociados) es una facción legal responsable del mantenimiento vehicular de la ciudad.",
    secciones: [
      {
        subtitulo: "Comportamiento en Servicio",
        texto: "Al estar en servicio, el mecánico debe ofrecer buen trato a los clientes. Es obligatorio usar la ropa de trabajo proporcionada por el taller. No se pueden realizar actos delictivos (robar tiendas, peleas callejeras) estando de turno."
      },
      {
        subtitulo: "Reparaciones y Tuneos",
        texto: "El mecánico debe interpretar (mediante comandos /me y /do) la reparación del vehículo. No basta con simplemente apretar un botón del menú. Un tuneo completo de motor debe tener un rol mínimo de 5 minutos."
      },
      {
        subtitulo: "Grúas e Incautaciones",
        texto: "Solo se podrán remolcar vehículos que estén bloqueando la vía pública, estacionados en línea roja o por pedido exclusivo de las fuerzas policiales. El mecánico no tiene autoridad para multar."
      }
    ]
  },
  ilegales: {
    titulo: "NORMATIVAS ILEGALES (MAFIAS Y BANDAS)",
    introduccion: "La vida criminal en Patagonia RP debe llevarse a cabo con cabeza fría. Buscamos roles elaborados por sobre los tiroteos constantes.",
    secciones: [
      {
        subtitulo: "Límites por Robo",
        texto: "• Tiendas locales: Máximo 3 atracadores.\n• Joyería: Máximo 4 atracadores. Rehenes permitidos: 2.\n• Banco Fleeca (Chicos): Máximo 5 atracadores. Rehenes: 3.\n• Banco Central (Pacific): Máximo 8 atracadores. Rehenes: Ilimitados.\nSuperar estos límites anula el rol automáticamente."
      },
      {
        subtitulo: "Secuestros y Robos a Jugadores",
        texto: "Para secuestrar a un civil deben ser mínimo 2 personas armadas. Para secuestrar a un Policía o Médico, debe haber mínimo 4 Policías en servicio. No se puede obligar a un jugador a transferir dinero del banco o sacar vehículos de su garaje."
      },
      {
        subtitulo: "Alianzas",
        texto: "Está prohibido que dos bandas o mafias distintas se alíen para cometer un atraco grande o enfrentarse a la policía. Las alianzas solo sirven para comercio de drogas o armas, no para actividades bélicas."
      },
      {
        subtitulo: "Tiroteos y Drive-by",
        texto: "Disparar desde un vehículo en movimiento (Drive-by) solo está permitido si es entre vehículos. Está prohibido dar vueltas en auto acribillando a personas que van a pie (eso se considera abuso y DM)."
      }
    ]
  }
};


// ==========================================
// 🖥️ CÓDIGO PRINCIPAL DE LA PÁGINA
// ==========================================
export default function Home() {
  const [seccionActiva, setSeccionActiva] = useState("inicio");
  const [normativaActiva, setNormativaActiva] = useState("generales");
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  // Estados de Tienda
  const [autoSeleccionado, setAutoSeleccionado] = useState<any>(null);
  const [imagenActiva, setImagenActiva] = useState(0);
  const [ipCopiada, setIpCopiada] = useState(false);

  // Funciones
  const abrirModal = (auto: any) => {
    setAutoSeleccionado(auto);
    setImagenActiva(0);
  };

  const copiarIP = () => {
    navigator.clipboard.writeText("connect 144.22.61.82");
    setIpCopiada(true);
    setTimeout(() => setIpCopiada(false), 2500);
  };

  const cambiarSeccion = (seccion: string) => {
    setSeccionActiva(seccion);
    setMenuAbierto(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans selection:bg-cyan-500 selection:text-black flex flex-col">
      
      {/* ================= BARRA DE NAVEGACIÓN ================= */}
      <header className="px-6 py-4 bg-[#080b12]/95 backdrop-blur-xl border-b border-white/5 flex justify-between items-center sticky top-0 z-40 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] rounded-xl">
            <div className="bg-[#05070a] p-1.5 rounded-[11px]">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
            </div>
          </div>
          <h1 className="text-xl font-black tracking-tighter text-white italic uppercase cursor-pointer" onClick={() => cambiarSeccion("inicio")}>
            Patagonia<span className="text-cyan-400 font-light ml-1 underline decoration-cyan-500/30">RP</span>
          </h1>
        </div>

        {/* Menú PC */}
        <nav className="hidden md:flex gap-8 items-center font-black text-xs tracking-widest uppercase">
          <button onClick={() => cambiarSeccion("inicio")} className={`transition-all hover:text-cyan-400 ${seccionActiva === "inicio" ? "text-cyan-400" : "text-gray-400"}`}>Inicio</button>
          <button onClick={() => cambiarSeccion("normativas")} className={`transition-all hover:text-cyan-400 ${seccionActiva === "normativas" ? "text-cyan-400" : "text-gray-400"}`}>Normativas</button>
          <button onClick={() => cambiarSeccion("tienda")} className={`bg-cyan-500 hover:bg-cyan-400 text-[#05070a] px-6 py-2.5 rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(0,229,255,0.2)] ${seccionActiva === "tienda" ? "ring-2 ring-white/30" : ""}`}>
            Tienda Vip
          </button>
        </nav>

        {/* Menú Móvil (Hamburguesa) */}
        <button className="md:hidden text-white" onClick={() => setMenuAbierto(!menuAbierto)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </header>

      {/* Desplegable Móvil */}
      {menuAbierto && (
        <div className="md:hidden fixed top-[73px] left-0 w-full bg-[#0a0f18] border-b border-cyan-500/20 z-30 p-4 flex flex-col gap-4 font-black text-sm tracking-widest uppercase shadow-2xl">
          <button onClick={() => cambiarSeccion("inicio")} className="p-3 bg-white/5 rounded-lg text-left">Inicio</button>
          <button onClick={() => cambiarSeccion("normativas")} className="p-3 bg-white/5 rounded-lg text-left">Normativas</button>
          <button onClick={() => cambiarSeccion("tienda")} className="p-3 bg-cyan-500 text-black rounded-lg text-left">Tienda Vip</button>
        </div>
      )}

      {/* ================= CONTENIDO DINÁMICO ================= */}
      <main className="relative flex-grow">
        {/* Luz de fondo global */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

        {/* ---------------- SECCIÓN 1: INICIO ---------------- */}
        {seccionActiva === "inicio" && (
          <div className="container mx-auto px-4 md:px-6 pt-20 pb-24 animate-fade-in">
            <section className="text-center mb-24">
              <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                Servidor Activo 24/7
              </div>
              <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter italic uppercase">
                TU HISTORIA <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">COMIENZA ACÁ</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed font-medium">
                Un servidor de roleplay enfocado en la calidad interpretativa, economía realista y sistemas exclusivos. Forjá tu propio camino en las calles de la ciudad.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button onClick={copiarIP} className={`w-full sm:w-auto px-8 py-4 rounded-xl font-black uppercase text-sm tracking-widest transition-all shadow-[0_10px_30px_rgba(0,229,255,0.2)] flex items-center justify-center gap-3 ${ipCopiada ? 'bg-green-500 text-black shadow-green-500/30' : 'bg-cyan-500 hover:bg-cyan-400 text-black hover:-translate-y-1'}`}>
                  {ipCopiada ? (
                    <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg> ¡IP COPIADA!</>
                  ) : (
                    <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> JUGAR AHORA</>
                  )}
                </button>
                <a href="https://discord.gg/Qj2CefnnNg" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-black uppercase text-sm tracking-widest transition-all shadow-[0_10px_30px_rgba(88,101,242,0.2)] flex items-center justify-center gap-3 hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495a18.6663 18.6663 0 00-5.4879 0 12.9572 12.9572 0 00-.6178-1.2495.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.3195 13.5796.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.0991.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9464 2.419-2.1568 2.419z"/></svg> UNIRSE A DISCORD
                </a>
              </div>
            </section>

            {/* Características */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { i: "⭐", t: "Sistemas Únicos", d: "Contamos con scripts optimizados y exclusivos para asegurar la mejor experiencia de rol sin lag." },
                { i: "🚓", t: "Facciones Activas", d: "Postulate para LSPD, SAME o mecánicos. Creá tu mafia o pandilla y dominá los negocios ilegales." },
                { i: "💰", t: "Economía Real", d: "Precios balanceados, trabajos variados y recompensas justas. El esfuerzo dentro del juego vale la pena." }
              ].map((card, i) => (
                <div key={i} className="bg-[#0c1018]/60 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:border-cyan-500/20 transition-all hover:-translate-y-1 shadow-lg">
                  <div className="text-4xl mb-4">{card.i}</div>
                  <h3 className="text-xl font-black mb-3 uppercase italic">{card.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- SECCIÓN 2: NORMATIVAS (ESTILO IBIZA) ---------------- */}
        {seccionActiva === "normativas" && (
          <div className="container mx-auto px-4 py-12 animate-fade-in max-w-7xl flex flex-col md:flex-row gap-8">
             
             {/* Menú Lateral (Sidebar) */}
             <aside className="w-full md:w-72 flex-shrink-0">
               <div className="bg-[#0c1018]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-4 sticky top-28 shadow-xl">
                 <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4 px-4">Secciones</h3>
                 <div className="flex flex-col gap-2">
                   {Object.keys(normativasData).map((clave) => (
                     <button 
                       key={clave} 
                       onClick={() => setNormativaActiva(clave)}
                       className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all ${normativaActiva === clave ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'}`}
                     >
                       <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 20 20"><path d="M14 2H6a2 2 0 0 0-2 2v16l6-3 6 3V4a2 2 0 0 0-2-2z"/></svg>
                       {normativasData[clave].titulo.replace("NORMATIVAS ", "")}
                     </button>
                   ))}
                 </div>
               </div>
             </aside>

             {/* Contenido Principal de Normativas */}
             <div className="flex-1 bg-[#0c1018]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl">
                <h2 className="text-3xl md:text-5xl font-black italic uppercase text-cyan-400 mb-6 tracking-tight">
                  {normativasData[normativaActiva].titulo}
                </h2>
                <p className="text-gray-300 font-medium leading-relaxed mb-10 pb-10 border-b border-white/10">
                  {normativasData[normativaActiva].introduccion}
                </p>

                <div className="space-y-12">
                  {normativasData[normativaActiva].secciones.map((seccion: any, index: number) => (
                    <div key={index} className="animate-fade-in">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-4 italic tracking-wide">{seccion.subtitulo}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                        {seccion.texto}
                      </p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        )}

        {/* ---------------- SECCIÓN 3: TIENDA ---------------- */}
        {seccionActiva === "tienda" && (
          <div className="container mx-auto px-4 md:px-6 py-16 animate-fade-in">
             <section className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic uppercase">
                  EL GARAGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">ELITE</span>
                </h2>
                <p className="text-xs text-gray-400 max-w-xl mx-auto font-bold uppercase tracking-[0.3em]">
                  Vehículos de importación optimizados.
                </p>
             </section>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {vehiculos.map((auto) => (
                  <div key={auto.id} className="group bg-[#0c1018]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/40 transition-all duration-300 shadow-xl cursor-pointer" onClick={() => abrirModal(auto)}>
                    <div className="relative h-56 md:h-64">
                      <img src={auto.imagenPrincipal} alt={auto.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-black text-cyan-400 uppercase tracking-widest border border-white/10">
                        {auto.categoria}
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h4 className="text-xl md:text-2xl font-black mb-2 italic uppercase group-hover:text-cyan-400 transition-colors line-clamp-1">{auto.nombre}</h4>
                      <p className="text-xs text-gray-500 mb-6 line-clamp-2 font-medium">{auto.descripcionCorta}</p>
                      <div className="flex justify-between items-end border-t border-white/5 pt-6">
                        <div>
                           <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">Precio Final</p>
                           <span className="text-2xl font-black text-white">${auto.precio.toLocaleString()} <span className="text-[10px] text-gray-500">{auto.moneda}</span></span>
                        </div>
                        <div className="bg-cyan-500 text-[#05070a] p-3 rounded-xl group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4.5v15m7.5-7.5h-15" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        )}
      </main>

      {/* ================= MODAL DE LA TIENDA ================= */}
      {autoSeleccionado && seccionActiva === "tienda" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 animate-fade-in">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setAutoSeleccionado(null)}></div>
          
          <div className="relative w-full max-w-5xl bg-[#0c1018] rounded-[30px] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]">
            <button onClick={() => setAutoSeleccionado(null)} className="absolute top-4 right-4 z-[110] bg-black/60 border border-white/10 text-white w-10 h-10 rounded-full text-xl hover:bg-cyan-500 hover:text-black transition-all">×</button>

            <div className="w-full md:w-3/5 bg-black relative flex flex-col h-56 md:h-auto">
              <img src={autoSeleccionado.imagenesExtra[imagenActiva]} alt="Preview" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 z-20">
                {autoSeleccionado.imagenesExtra.map((img: string, i: number) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setImagenActiva(i); }} className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${imagenActiva === i ? 'border-cyan-500 scale-110' : 'opacity-40 border-transparent'}`}>
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col h-full overflow-hidden bg-gradient-to-b from-[#0c1018] to-[#05070a]">
              <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                <span className="text-cyan-500 text-[10px] font-black tracking-widest uppercase">{autoSeleccionado.categoria}</span>
                <h3 className="text-2xl md:text-3xl font-black mt-2 mb-6 italic uppercase leading-none">{autoSeleccionado.nombre}</h3>
                <div className="text-gray-300 text-sm leading-relaxed space-y-4 font-medium italic mb-6">
                  {autoSeleccionado.descripcionLarga.split('\n').map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 shrink-0">
                <div className="mb-5">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Valor de Inversión</p>
                  <p className="text-3xl font-black">${autoSeleccionado.precio.toLocaleString()} <span className="text-xs text-gray-500">{autoSeleccionado.moneda}</span></p>
                </div>
                
                <a href={autoSeleccionado.linkCompra} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 bg-[#009EE3] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#008ACB] transition-all hover:scale-[1.02] shadow-[0_5px_20px_rgba(0,158,227,0.3)]">
                  Pagar con Mercado Pago
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="relative z-10 py-10 text-center border-t border-white/5 mt-auto bg-[#05070a]">
         <p className="text-[10px] font-black tracking-[0.5em] text-white/30 uppercase">Patagonia RP © {new Date().getFullYear()}</p>
      </footer>

      <style jsx global>{`
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #00e5ff; border-radius: 10px; }
      `}</style>
    </div>
  );
}