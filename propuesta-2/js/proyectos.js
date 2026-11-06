/**
 * EMMANUEL MUEBLES — MÓDULO DE PROYECTOS REALIZADOS (PAQUETE 2 · MESA CONTEMPORÁNEA)
 * Muestra 3 proyectos iniciales con botón "Ver más", filtros por categoría y lightbox modal.
 */

const PROYECTOS_DATA = [
  {
    id: 1,
    categoria: 'cocinas',
    categoriaLabel: 'Cocinas de Autor',
    titulo: 'Cocina Monolítica con Isla Central en Cuarzo Calacatta',
    ubicacion: 'Penthouse · Piantini, Distrito Nacional',
    imagen: 'assets/proyectos/cocina_moderna_1.jpg',
    descripcionCorta: 'Cocina de concepto abierto con isla central monolítica, gabinetes con perfil gola oculto y columnas de electrodomésticos empotrados.',
    descripcionLarga: 'Fabricación integral de cocina residencial de alta gama en Santo Domingo. Diseñada bajo un concepto monolítico contemporáneo que integra una isla central continua revestida en cuarzo Calacatta Gold. Frentes lisos con sistema Gola integrado en carpintería, despensero extraíble y remate superior al techo con iluminación perimetral cálida rasante a 3000K.',
    dimensiones: '5.40 m lineales + Isla central de 2.80 m x 1.15 m',
    sustrato: 'Tablero verde hidrófugo HMR de alta densidad sellado con adhesivo de poliuretano reactivo (PUR)',
    herrajes: 'Guías ocultas Blum Legrabox austriacas de extracción total con freno hidráulico Blumotion (certificadas a 200,000 aperturas)',
    acabado: 'Laca poliuretánica mate antihuellas combinada con chapa de roble europeo natural',
    plazoTaller: '18 a 22 días hábiles de fabricación en taller',
    inversionRD: 'RD$ 490,000 – 640,000',
    inversionUSD: 'Aprox. USD$ 8,200 – 10,700',
    caracteristicas: [
      'Isla monolítica con caída a inglete continuo en cuarzo',
      'Perfilería Gola de aluminio anodizado oculta sin tiradores',
      'Columnas empotradas para torre de hornos y refrigerador panelable',
      'Gaveteros con divisiones interiores personalizadas para cubertería y ollas',
      'Garantía estructural de 10 años por contrato'
    ]
  },
  {
    id: 2,
    categoria: 'salones',
    categoriaLabel: 'Muebles de TV & Salas',
    titulo: 'Wall Unit Escultural con Nichos Iluminados para TV de 85"',
    ubicacion: 'Torre Residencial · Avenida Anacaona, Santo Domingo',
    imagen: 'assets/proyectos/mueble_tv_cava_completo.jpg',
    descripcionCorta: 'Centro de entretenimiento monumental de piso a techo con panel alistonado en roble natural, consola flotante y nichos decorativos.',
    descripcionLarga: 'Fabricado a medida para sala principal frente al Mirador Sur. El proyecto abarca toda la pared principal (4.80 m de ancho por 2.70 m de alto), combinando paneles alistonados fresados a mano, nichos de exhibición con fondos oscuros, iluminación LED perimetral dimerizable y una consola flotante con canalización técnica oculta para evitar cualquier cable a la vista.',
    dimensiones: '4.80 m de ancho x 2.70 m de altura',
    sustrato: 'Estructura interna reforzada en madera estacionada y tablero hidrófugo HMR',
    herrajes: 'Soportes de suspensión oculta de alta capacidad de carga y bisagras Salice Air invisibles',
    acabado: 'Roble europeo alistonado en acabado natural mate y laca carbón texturizada',
    plazoTaller: '16 a 20 días hábiles en taller',
    inversionRD: 'RD$ 410,000 – 530,000',
    inversionUSD: 'Aprox. USD$ 6,800 – 8,900',
    caracteristicas: [
      'Panel alistonado acústico fresado con separación uniforme milimétrica',
      'Canalización interna para cableado HDMI, fibra óptica y tomas de corriente',
      'Consola baja flotante con frentes abatibles y ventilación para equipos de audio',
      'Nichos de exhibición con iluminación LED cálida a 3000K',
      'Instalación técnica especializada en obra'
    ]
  },
  {
    id: 3,
    categoria: 'cavas',
    categoriaLabel: 'Cavas de Vinos',
    titulo: 'Cava Residencial Climatizada con Aislamiento Higrotérmico',
    ubicacion: 'Villa Exclusiva · Cap Cana, La Altagracia',
    imagen: 'assets/proyectos/cava_vinos_lujo.jpg',
    descripcionCorta: 'Cava climatizada para 240 botellas con control estricto de humedad, estanterías en roble inodoro y cerramiento hermético de cristal.',
    descripcionLarga: 'Obra especializada de ebanistería y climatización enológica. En el clima tropical del Caribe, la conservación del vino exige una atmósfera constante de 14°C a 16°C con humedad controlada al 65%. Se fabricaron estanterías en roble macizo con barnices inodoros al agua que no emiten solventes ni alteran las etiquetas, junto a un cerramiento de aluminio anodizado y cristal insulado Low-E.',
    dimensiones: '2.40 m de ancho x 2.60 m de altura x 0.85 m de profundidad',
    sustrato: 'Aislamiento térmico de poliisocianurato de 50 mm y barrera de vapor impermeable',
    herrajes: 'Vidrio insulado templado con cámara de gas argón y herrajes de acero inoxidable AISI 316',
    acabado: 'Roble macizo estacionado con tratamiento neutro inodoro certificado',
    plazoTaller: '20 a 25 días hábiles en taller',
    inversionRD: 'RD$ 540,000 – 720,000',
    inversionUSD: 'Aprox. USD$ 9,000 – 12,000',
    caracteristicas: [
      'Capacidad para 240 botellas individuales + repisas para cajas de madera',
      'Iluminación LED fría sin emisión térmica ni rayos UV dañinos para el vino',
      'Perfilería de acero inoxidable 316 de grado marino inmune al salitre',
      'Burletes perimetrales magnéticos de cierre hermético continuo',
      'Garantía total de preservación enológica'
    ]
  },
  {
    id: 4,
    categoria: 'cocinas',
    categoriaLabel: 'Cocinas de Autor',
    titulo: 'Cocina Contemporánea en L Carbón & Roble Natural',
    ubicacion: 'Residencia Privada · Bella Vista, Santo Domingo',
    imagen: 'assets/proyectos/cocina_moderna_2.jpg',
    descripcionCorta: 'Disposición lineal en L con módulos suspendidos, contraste entre tono carbón y madera noble texturizada con veta continua.',
    descripcionLarga: 'Desarrollo a medida para residencia familiar en Bella Vista. Esta propuesta optimiza la ergonomía de trabajo mediante una distribución en L con módulos aéreos suspendidos y gaveteros profundos inferiores. Las vetas del roble europeo fueron seleccionadas y alineadas horizontalmente entre cajón y cajón para dar continuidad estética al conjunto.',
    dimensiones: '4.60 m lineales en disposición L',
    sustrato: 'Tablero hidrófugo HMR clase E1 resistente a condensación y vapor de cocción',
    herrajes: 'Bisagras y compases elevables Blum Aventos para puertas superiores con apertura suave',
    acabado: 'Laca mate tono carbón con fondo sellador bicomponente y roble tratado con barniz mate poro abierto',
    plazoTaller: '16 a 20 días hábiles en taller',
    inversionRD: 'RD$ 395,000 – 510,000',
    inversionUSD: 'Aprox. USD$ 6,600 – 8,500',
    caracteristicas: [
      'Alineación milimétrica de veta en todos los frentes contiguos',
      'Iluminación LED rasante 3000K empotrada bajo gabinetes superiores',
      'Rinconero mágico articulado de extracción total para aprovechar esquinas',
      'Zócalos técnicos de aluminio con junta de estanqueidad contra el agua',
      'Garantía de taller de 10 años'
    ]
  },
  {
    id: 5,
    categoria: 'banos',
    categoriaLabel: 'Muebles de Baño',
    titulo: 'Vanity Flotante de Doble Poza en Madera Alistonada',
    ubicacion: 'Villa Residencial · Casa de Campo, La Romana',
    imagen: 'assets/proyectos/bano_doble_alistonado.jpg',
    descripcionCorta: 'Mueble de baño suspendido con frentes alistonados verticales fresados a mano, gavetas técnicas para desagüe y encimera de cuarzo.',
    descripcionLarga: 'Mobiliario de baño principal suspendido que resiste ambientes de humedad extrema. Frentes alistonados verticales fresados en nuestro taller con juntas impermeabilizadas. Los cajones inferiores cuentan con rebajes técnicos especiales en forma de U para rodear la tubería de desagüe sin perder espacio útil de almacenaje.',
    dimensiones: '2.20 m de longitud x 0.55 m de profundidad x 0.50 m de altura',
    sustrato: 'Tablero 100% marino HMR sellado en autoclave con poliuretano reactivo',
    herrajes: 'Correderas Blum Legrabox con amortiguación Blumotion y sincronizador de apertura',
    acabado: 'Madera tratada para ambientes húmedos con barniz náutico transparente de poro cerrado',
    plazoTaller: '12 a 15 días hábiles en taller',
    inversionRD: 'RD$ 175,000 – 240,000',
    inversionUSD: 'Aprox. USD$ 2,900 – 4,000',
    caracteristicas: [
      'Sellado náutico en cantos y uniones para soportar salpicaduras continuas',
      'Cajones con diseño en U adaptados a las tuberías sanitarias de desagüe',
      'Encimera en cuarzo antibacteriano con pozas bajo encimera integradas',
      'Anclajes químicos a pared que soportan más de 180 kg de carga estática',
      '10 años de garantía contra hinchazón y desprendimiento'
    ]
  },
  {
    id: 6,
    categoria: 'cocinas',
    categoriaLabel: 'Cocinas de Autor',
    titulo: 'Cocina Abierta con Isla y Barra Desayunadora',
    ubicacion: 'Apartamento de Lujo · Naco, Santo Domingo',
    imagen: 'assets/proyectos/cocina_moderna_3.jpg',
    descripcionCorta: 'Integración volumétrica fluida hacia el área social con barra desayunadora en voladizo estructural para 4 puestos sin apoyos visibles.',
    descripcionLarga: 'Proyecto de remodelación arquitectónica en torre de Naco. La isla funciona como punto de encuentro entre la cocina y el salón comedor. Se diseñó un voladizo estructural interno en acero reforzado que permite una mesa desayunadora volada para cuatro comensales sin necesidad de patas ni soportes al suelo, creando una sensación de ligereza visual absoluta.',
    dimensiones: '4.90 m lineales + Isla desayunadora 2.50 m x 1.05 m',
    sustrato: 'Tablero verde hidrófugo tropicalizado de alta compresión',
    herrajes: 'Sistemas Blum Tip-On Blumotion (apertura por toque y cierre amortiguado)',
    acabado: 'Nogal seleccionado satinado con filtro UV protector y cuarzo blanco puro',
    plazoTaller: '18 a 22 días hábiles en taller',
    inversionRD: 'RD$ 450,000 – 580,000',
    inversionUSD: 'Aprox. USD$ 7,500 – 9,700',
    caracteristicas: [
      'Voladizo en volado soportado por estructura interna oculta de acero',
      'Torre despensera extraíble con capacidad de carga de 100 kg',
      'Tomas eléctricas emergentes ocultas en la encimera',
      'Encimera antibacterial de cuarzo de alta resistencia térmica',
      'Garantía escrita de 10 años'
    ]
  },
  {
    id: 7,
    categoria: 'salones',
    categoriaLabel: 'Muebles de TV & Salas',
    titulo: 'Librería Arquitectónica Iluminada con Estanterías de Gran Carga',
    ubicacion: 'Residencia Privada · Los Cacicazgos, Santo Domingo',
    imagen: 'assets/proyectos/libreria_iluminada_1.jpg',
    descripcionCorta: 'Sistema de estanterías modulares empotradas con divisiones rítmicas, baldas calibradas contra pandeo y luz cálida integrada.',
    descripcionLarga: 'Librería empotrada de diseño contemporáneo concebida para biblioteca y sala de estudio. Cada balda fue calculada estructuralmente con un núcleo macizo calibrado para resistir más de 50 kg por metro lineal de libros y obras de arte sin sufrir la más mínima deflexión con el paso de los años.',
    dimensiones: '3.80 m de ancho x 2.65 m de altura',
    sustrato: 'Tableros de alta densidad clase E1 con refuerzos interiores de madera maciza',
    herrajes: 'Ensambles invisibles Clamex y Minifix de precisión milimétrica',
    acabado: 'Nogal americano satinado con barniz poliuretánico anti-amarilleo',
    plazoTaller: '14 a 18 días hábiles en taller',
    inversionRD: 'RD$ 280,000 – 370,000',
    inversionUSD: 'Aprox. USD$ 4,700 – 6,200',
    caracteristicas: [
      'Baldas reforzadas con garantía de cero flexión bajo carga pesada',
      'Difusores microprismáticos LED antideslumbramiento empotrados al ras',
      'Integración con molduras y zócalos preexistentes de la vivienda',
      'Cableado 100% oculto con control remoto dimerizable',
      '10 años de garantía estructural'
    ]
  },
  {
    id: 8,
    categoria: 'salones',
    categoriaLabel: 'Muebles de TV & Salas',
    titulo: 'Revestimiento de Pared & Boiserie en Madera Texturizada',
    ubicacion: 'Apartamento de Lujo · Piantini, Santo Domingo',
    imagen: 'assets/proyectos/sala_sofa_curvo.jpg',
    descripcionCorta: 'Envolvente arquitectónica con boiserie moderna, paneles de madera con veta abierta y remate al ras para sala de estar contemporánea.',
    descripcionLarga: 'Revestimiento integral de pared diseñado para aportar calidez acústica y visual a un salón de recepciones. La madera envuelve el espacio creando una superficie rítmica continua que dialoga con piezas de mobiliario curvo y obras de arte contemporáneo.',
    dimensiones: '6.20 m lineales de pared a 2.80 m de altura',
    sustrato: 'Tableros hidrófugos con tratamiento ignífugo y barrera anti-humedad de muro',
    herrajes: 'Rastrelado perimetral con clips de fijación oculta para dilatación térmica libre',
    acabado: 'Roble natural con acabado poro abierto y sellador protector hidrofóbico',
    plazoTaller: '15 a 19 días hábiles en taller',
    inversionRD: 'RD$ 320,000 – 430,000',
    inversionUSD: 'Aprox. USD$ 5,300 – 7,200',
    caracteristicas: [
      'Cámara de aire posterior ventilada que evita condensaciones de pared',
      'Alineación perfecta de vetas seleccionadas a libro abierto',
      'Puertas de acceso secundario camufladas e integradas al ras del revestimiento',
      'Aislante acústico interior de alta absorción sonora',
      'Acabado mate no reflectante'
    ]
  },
  {
    id: 9,
    categoria: 'banos',
    categoriaLabel: 'Muebles de Baño',
    titulo: 'Vanity Flotante Individual & Ebanistería de Baño en Laca Mate',
    ubicacion: 'Apartamento Familiar · Arroyo Hondo, Santo Domingo',
    imagen: 'assets/proyectos/bano_detalle.jpg',
    descripcionCorta: 'Vanity compacto suspendido con gaveta profunda y cajón interior oculto, acabado en laca antihuellas y espejo retroiluminado.',
    descripcionLarga: 'Solución de carpintería fina para baño de visitas o suite secundaria. Se maximizó el volumen de almacenamiento mediante una gaveta profunda exterior que esconde en su interior un segundo cajón organizador para cosméticos y accesorios. El mueble se complementa con un panel de madera continuo que enmarca el espejo retroiluminado.',
    dimensiones: '1.40 m de longitud x 0.50 m de profundidad',
    sustrato: 'Tablero hidrófugo HMR sellado contra condensaciones y vapor caliente',
    herrajes: 'Rieles ocultos de extracción total y cierre suave silencioso',
    acabado: 'Laca poliuretánica mate tono carbón con fondo sellador antihumedad',
    plazoTaller: '10 a 14 días hábiles en taller',
    inversionRD: 'RD$ 115,000 – 165,000',
    inversionUSD: 'Aprox. USD$ 1,900 – 2,750',
    caracteristicas: [
      'Gaveta oculta interior con divisiones para accesorios y cuidado personal',
      'Sellado perimetral contra humedad de ducha y vapores calientes',
      'Espejo a juego con luz LED difusa de encendido táctil',
      'Instalación suspendida sin patas para facilitar la limpieza del suelo',
      'Garantía escrita de 10 años'
    ]
  },
  {
    id: 10,
    categoria: 'taller',
    categoriaLabel: 'Rigor de Taller',
    titulo: 'Detalle de Ensamble Fino & Carpintería de Precisión CNC',
    ubicacion: 'Taller Central de Fabricación · Santo Domingo',
    imagen: 'assets/proyectos/libreria_detalle.jpg',
    descripcionCorta: 'Fotografía en primer plano de los ensambles a inglete a 45 grados, tolerancias de 0.5 mm y alineación de vetas naturales en taller.',
    descripcionLarga: 'Registro documental de la etapa de manufactura y ajuste en banco de trabajo. En Emmanuel Muebles cada arista, inglete y bisel es revisado con escuadras de precisión antes de la aplicación de acabados. Este rigor garantiza que las puertas cierren con holguras constantes de 2 mm y que los módulos encajen milimétricamente en obra.',
    dimensiones: 'Estándar dimensional de tolerancia: ± 0.5 mm',
    sustrato: 'Roble europeo y maderas duras curadas en secadero',
    herrajes: 'Mecanizado CNC de cajas de ensamble y fresados de unión',
    acabado: 'Lijado progresivo manual grano 120-180-240-320 antes de laqueado',
    plazoTaller: 'Control de calidad en 3 etapas: corte, armado y acabado final',
    inversionRD: 'Estándar aplicado en el 100% de nuestras obras',
    inversionUSD: 'Garantía de calidad europea en República Dominicana',
    caracteristicas: [
      'Cortes a inglete de 45° con adhesivo PUR estructural de alta resistencia',
      'Tolerancia milimétrica que evita descuadres y rozamientos de puertas',
      'Inspección individual de cada pieza antes de salir del taller de Santo Domingo',
      'Equipo propio de ebanistas calificados con décadas de experiencia',
      'Certificado de garantía de 10 años entregado con cada obra'
    ]
  }
];

let currentFilter = 'todos';
let activeModalIndex = 0;
let isExpanded = false;

function initProyectosGallery() {
  const container = document.getElementById('proyectos-grid');
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const toggleBtnContainer = document.getElementById('toggle-proyectos-container');
  const toggleBtn = document.getElementById('toggle-proyectos-btn');
  
  if (!container) return;

  function renderGallery() {
    container.innerHTML = '';
    
    let list = (currentFilter === 'todos') 
      ? [...PROYECTOS_DATA] 
      : PROYECTOS_DATA.filter(p => p.categoria === currentFilter);

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-gray-300 font-sans text-base">
          No se encontraron proyectos en esta categoría.
        </div>
      `;
      if (toggleBtnContainer) toggleBtnContainer.classList.add('hidden');
      return;
    }

    let displayedProjects = list;
    if (currentFilter === 'todos') {
      if (!isExpanded) {
        displayedProjects = list.slice(0, 3);
        if (toggleBtnContainer) {
          toggleBtnContainer.classList.remove('hidden');
          if (toggleBtn) {
            toggleBtn.innerHTML = `
              <span>Ver más proyectos (${list.length - 3} adicionales)</span>
              <span class="text-base">↓</span>
            `;
          }
        }
      } else {
        displayedProjects = list;
        if (toggleBtnContainer) {
          toggleBtnContainer.classList.remove('hidden');
          if (toggleBtn) {
            toggleBtn.innerHTML = `
              <span>Mostrar menos proyectos</span>
              <span class="text-base">↑</span>
            `;
          }
        }
      }
    } else {
      if (toggleBtnContainer) toggleBtnContainer.classList.add('hidden');
    }

    displayedProjects.forEach((proj) => {
      const card = document.createElement('article');
      card.className = 'project-card group bg-[#181B16] rounded-xl overflow-hidden border border-white/15 hover:border-[#75553F] transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl';
      
      const whatsappMsg = encodeURIComponent(`Hola Emmanuel Muebles, vi su proyecto "${proj.titulo}" (${proj.ubicacion}) en la Propuesta 2 y deseo cotizar un trabajo similar.`);
      const whatsappUrl = `https://wa.me/18293714107?text=${whatsappMsg}`;

      card.innerHTML = `
        <div>
          <!-- IMAGEN DEL PROYECTO (PROPORCIÓN REFINADA 16:11 QUE ENCAJA EN PANTALLA) -->
          <div class="relative overflow-hidden aspect-[16/11] bg-black cursor-pointer" onclick="openProjectModalById(${proj.id})">
            <img 
              src="${proj.imagen}" 
              alt="${proj.titulo} - Emmanuel Muebles" 
              loading="lazy" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-85 group-hover:opacity-65 transition-opacity"></div>
            
            <!-- BADGE SUPERIOR -->
            <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
              <span class="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-xs font-semibold text-[#C49A7A] border border-white/15">
                ${proj.categoriaLabel}
              </span>
              <span class="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-xs text-gray-300 border border-white/15">
                0${proj.id} / 10
              </span>
            </div>

            <!-- UBICACIÓN INFERIOR SOBRE LA FOTO -->
            <div class="absolute bottom-3.5 left-3.5 right-3.5 pointer-events-none">
              <span class="text-xs text-gray-200 font-medium flex items-center gap-1.5 drop-shadow">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C49A7A]"></span>
                ${proj.ubicacion}
              </span>
            </div>
          </div>

          <!-- CONTENIDO EDITORIAL DE LA TARJETA (MANROPE ULTRA-LEGIBLE) -->
          <div class="p-6 space-y-3.5">
            <div>
              <h3 class="text-lg font-bold text-white group-hover:text-[#C49A7A] transition leading-snug cursor-pointer uppercase tracking-tight" onclick="openProjectModalById(${proj.id})">
                ${proj.titulo}
              </h3>
              <p class="text-sm text-gray-200 mt-2 font-normal leading-relaxed">
                ${proj.descripcionCorta}
              </p>
            </div>

            <!-- DETALLES TÉCNICOS RÁPIDOS -->
            <div class="p-3.5 rounded-lg bg-[#10120F] border border-white/10 space-y-1.5 text-xs">
              <div class="flex items-center justify-between text-gray-300">
                <span>Tiempo de taller:</span>
                <span class="text-white font-semibold">${proj.plazoTaller.split('en')[0]}</span>
              </div>
              <div class="flex items-center justify-between text-gray-300">
                <span>Alcance:</span>
                <span class="text-[#C49A7A] font-bold text-xs">100% Hecho a Medida</span>
              </div>
            </div>
          </div>
        </div>

        <!-- BOTONES DE ACCIÓN (CONVERSIÓN & FICHA) -->
        <div class="p-6 pt-0 grid grid-cols-2 gap-3">
          <button 
            type="button" 
            onclick="openProjectModalById(${proj.id})" 
            class="py-3 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition text-center border border-white/15 uppercase tracking-wide"
          >
            Ficha
          </button>

          <a 
            href="${whatsappUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="py-3 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition text-center shadow-md shadow-emerald-950/40 uppercase tracking-wide flex items-center justify-center gap-1"
          >
            <span>Cotizar</span>
            <span>›</span>
          </a>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Selector desplegable de categorías (Dropdown)
  const dropdownSelect = document.getElementById('proyectos-dropdown-select');
  if (dropdownSelect) {
    dropdownSelect.addEventListener('change', (e) => {
      currentFilter = e.target.value;
      isExpanded = false;
      
      // Sincronizar botones de pestañas visuales
      filterButtons.forEach(b => {
        if (b.getAttribute('data-filter-btn') === currentFilter) {
          b.classList.add('bg-[#75553F]', 'text-white', 'border-[#75553F]');
          b.classList.remove('bg-[#181B16]', 'text-gray-300', 'border-white/15');
        } else {
          b.classList.remove('bg-[#75553F]', 'text-white', 'border-[#75553F]');
          b.classList.add('bg-[#181B16]', 'text-gray-300', 'border-white/15');
        }
      });

      renderGallery();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-[#75553F]', 'text-white', 'border-[#75553F]');
        b.classList.add('bg-[#181B16]', 'text-gray-300', 'border-white/15');
      });
      btn.classList.add('bg-[#75553F]', 'text-white', 'border-[#75553F]');
      btn.classList.remove('bg-[#181B16]', 'text-gray-300', 'border-white/15');

      currentFilter = btn.getAttribute('data-filter-btn');
      
      // Sincronizar selector desplegable
      if (dropdownSelect) {
        dropdownSelect.value = currentFilter;
      }

      isExpanded = false;
      renderGallery();
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      renderGallery();
      
      if (!isExpanded) {
        const sec = document.getElementById('proyectos');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  renderGallery();
}

// ==========================================
// MODAL LIGHTBOX ENRIQUECIDO
// ==========================================
function openProjectModalById(id) {
  const index = PROYECTOS_DATA.findIndex(p => p.id === id);
  if (index !== -1) {
    activeModalIndex = index;
    renderProjectModal(PROYECTOS_DATA[activeModalIndex]);
  }
}

function renderProjectModal(proj) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const imgEl = document.getElementById('modal-img');
  const catEl = document.getElementById('modal-cat');
  const titleEl = document.getElementById('modal-title');
  const locEl = document.getElementById('modal-location');
  const descEl = document.getElementById('modal-desc');
  const dimEl = document.getElementById('modal-dim');
  const sustratoEl = document.getElementById('modal-sustrato');
  const herrajesEl = document.getElementById('modal-herrajes');
  const acabadoEl = document.getElementById('modal-acabado');
  const plazoEl = document.getElementById('modal-plazo');
  const precioEl = document.getElementById('modal-precio');
  const counterEl = document.getElementById('modal-counter');
  const featuresEl = document.getElementById('modal-features');
  const wsBtn = document.getElementById('modal-ws-btn');

  if (imgEl) imgEl.src = proj.imagen;
  if (imgEl) imgEl.alt = `${proj.titulo} - Emmanuel Muebles`;
  if (catEl) catEl.textContent = proj.categoriaLabel;
  if (titleEl) titleEl.textContent = proj.titulo;
  if (locEl) locEl.textContent = proj.ubicacion;
  if (descEl) descEl.textContent = proj.descripcionLarga;
  if (dimEl) dimEl.textContent = proj.dimensiones;
  if (sustratoEl) sustratoEl.textContent = proj.sustrato;
  if (herrajesEl) herrajesEl.textContent = proj.herrajes;
  if (acabadoEl) acabadoEl.textContent = proj.acabado;
  if (plazoEl) plazoEl.textContent = proj.plazoTaller;
  if (precioEl) precioEl.textContent = `${proj.inversionRD} (${proj.inversionUSD})`;
  if (counterEl) counterEl.textContent = `Proyecto ${activeModalIndex + 1} de ${PROYECTOS_DATA.length}`;

  if (featuresEl) {
    featuresEl.innerHTML = '';
    proj.caracteristicas.forEach(feat => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-xs sm:text-sm text-gray-200 font-light';
      li.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-[#C49A7A] mt-2 shrink-0"></span><span>${feat}</span>`;
      featuresEl.appendChild(li);
    });
  }

  if (wsBtn) {
    const text = encodeURIComponent(`Hola Emmanuel Muebles, revisé la ficha técnica de "${proj.titulo}" en ${proj.ubicacion} (Propuesta 2) y me gustaría coordinar una cotización.`);
    wsBtn.href = `https://wa.me/18293714107?text=${text}`;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function nextProjectModal() {
  activeModalIndex = (activeModalIndex + 1) % PROYECTOS_DATA.length;
  renderProjectModal(PROYECTOS_DATA[activeModalIndex]);
}

function prevProjectModal() {
  activeModalIndex = (activeModalIndex - 1 + PROYECTOS_DATA.length) % PROYECTOS_DATA.length;
  renderProjectModal(PROYECTOS_DATA[activeModalIndex]);
}

document.addEventListener('DOMContentLoaded', () => {
  initProyectosGallery();

  const closeBtn = document.getElementById('modal-close-btn');
  const nextBtn = document.getElementById('modal-next-btn');
  const prevBtn = document.getElementById('modal-prev-btn');
  const modal = document.getElementById('project-modal');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (nextBtn) nextBtn.addEventListener('click', nextProjectModal);
  if (prevBtn) prevBtn.addEventListener('click', prevProjectModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowRight') nextProjectModal();
    if (e.key === 'ArrowLeft') prevProjectModal();
  });
});
