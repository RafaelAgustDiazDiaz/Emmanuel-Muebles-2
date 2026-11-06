/**
 * EMMANUEL MUEBLES — MÓDULO DE OBRAS SELECCIONADAS
 * Selector interactivo por tipologías y listas desplegables con transiciones fluidas.
 */

const OBRAS_DATA = [
  {
    id: 1,
    tipologiaId: 'cocinas',
    tipologiaNombre: 'Cocinas de Autor',
    titulo: 'Cocina Monolítica con Isla en Cuarzo Calacatta',
    referencia: 'Penthouse Residencial · Piantini, Santo Domingo',
    imagen: 'assets/proyectos/cocina_moderna_1.jpg',
    descripcion: 'Configuración arquitectónica lineal continua con isla monolítica central revestida en cuarzo Calacatta Gold. Frentes lisos con sistema Gola integrado en carpintería oculta, columnas para electrodomésticos empotrados e iluminación perimetral rasante a 3000K.',
    medidas: '5.20 m lineales + Isla 2.80 m x 1.10 m',
    sustrato: 'Tablero hidrófugo HMR de alta densidad sellado con adhesivo de poliuretano reactivo (PUR)',
    herrajes: 'Guías ocultas Blum Legrabox con amortiguación Blumotion (certificación 200,000 ciclos)',
    acabado: 'Chapa de roble europeo natural con veta continua seleccionada',
    plazo: '18 a 22 días hábiles en taller',
    inversionRD: 'RD$ 485,000 – 620,000'
  },
  {
    id: 2,
    tipologiaId: 'cocinas',
    tipologiaNombre: 'Cocinas de Autor',
    titulo: 'Cocina Contemporánea Carbón & Roble Natural',
    referencia: 'Residencia Privada · Bella Vista, Santo Domingo',
    imagen: 'assets/proyectos/cocina_moderna_2.jpg',
    descripcion: 'Contraste cromático y material entre laca mate antihuellas en tono carbón y madera noble texturizada. Gaveteros de extracción total con división interna de cubertería y despensero oculto de cierre suave.',
    medidas: '4.40 m lineales en disposición L',
    sustrato: 'Núcleo hidrófugo HMR clase E1 resistente a vapor y condensación',
    herrajes: 'Bisagras y pistones elevables Blum Aventos con freno hidráulico',
    acabado: 'Laca poliuretánica mate carbón con fondo sellador de dos componentes',
    plazo: '16 a 20 días hábiles en taller',
    inversionRD: 'RD$ 390,000 – 495,000'
  },
  {
    id: 3,
    tipologiaId: 'cocinas',
    tipologiaNombre: 'Cocinas de Autor',
    titulo: 'Cocina Abierta con Isla y Desayunador Integrado',
    referencia: 'Apartamento de Lujo · Naco, Santo Domingo',
    imagen: 'assets/proyectos/cocina_moderna_3.jpg',
    descripcion: 'Integración volumétrica fluida hacia el salón principal. Isla con estructura interna de acero reforzado que permite un voladizo volado para cuatro puestos de comensales sin apoyos visibles.',
    medidas: '4.80 m lineales + Isla 2.40 m',
    sustrato: 'Tablero verde HMR tropicalizado contra humedad ambiental caribeña',
    herrajes: 'Sistemas Blum Tip-On Blumotion (apertura táctil y cierre amortiguado)',
    acabado: 'Nogal americano satinado con protección UV poro cerrado',
    plazo: '18 a 22 días hábiles en taller',
    inversionRD: 'RD$ 440,000 – 560,000'
  },
  {
    id: 4,
    tipologiaId: 'wallunits',
    tipologiaNombre: 'Mobiliario Integrado & Wall Units',
    titulo: 'Mobiliario Arquitectónico para Salón Principal',
    referencia: 'Residencia Privada · Piantini, Santo Domingo',
    imagen: 'assets/proyectos/sala_sofa_curvo.jpg',
    descripcion: 'Composición de pared completa que incorpora alistonado de madera maciza, nichos abiertos con luz rasante y consola suspendida con pasacables técnicos ocultos para sistemas de audio y video de alta fidelidad.',
    medidas: '4.80 m de desarrollo longitudinal',
    sustrato: 'Bastidor interior de madera estacionada con fijaciones químicas de muro',
    herrajes: 'Soportes de consola invisibles de alta capacidad de carga estructural',
    acabado: 'Roble seleccionado con tinte tabaco mate',
    plazo: '20 a 25 días hábiles en taller',
    inversionRD: 'RD$ 410,000 – 540,000'
  },
  {
    id: 5,
    tipologiaId: 'wallunits',
    tipologiaNombre: 'Mobiliario Integrado & Wall Units',
    titulo: 'Centro de Entretenimiento Integrado con Cava',
    referencia: 'Residencia Familiar · La Julia, Santo Domingo',
    imagen: 'assets/proyectos/mueble_tv_cava_completo.jpg',
    descripcion: 'Mueble multifuncional de sala que combina panel acústico para pantalla de 85 pulgadas, vitrina de cristalería en vidrio templado y compartimento climatizado con capacidad para 36 botellas.',
    medidas: '3.80 m de ancho x 2.60 m de alto',
    sustrato: 'Madera de cedro estacionado combinada con tableros técnicos ignífugos',
    herrajes: 'Bisagras invisibles Salice Air y perfiles perimetrales de aluminio',
    acabado: 'Laca poliuretánica carbón mate y acentos en madera natural',
    plazo: '18 a 22 días hábiles en taller',
    inversionRD: 'RD$ 360,000 – 470,000'
  },
  {
    id: 6,
    tipologiaId: 'cavas',
    tipologiaNombre: 'Cavas Residenciales Climatizadas',
    titulo: 'Cava de Vinos Residencial Hermética',
    referencia: 'Villa Privada · Cap Cana, La Altagracia',
    imagen: 'assets/proyectos/cava_vinos_lujo.jpg',
    descripcion: 'Módulo de conservación enológica con cerramiento vidriado de piso a techo. Carpintería de aluminio anodizado con rotura de puente térmico, doble vidrio con cámara de gas argón y estantes en roble macizo con soporte horizontal.',
    medidas: '2.40 m ancho x 2.70 m alto x 0.90 m fondo',
    sustrato: 'Sustrato aislante hidrófugo con sellos perimetrales de neopreno marino',
    herrajes: 'Tornillería y perfiles en acero inoxidable calidad marina AISI 316',
    acabado: 'Roble macizo tratado con sellador hidrófugo inodoro de grado alimentario',
    plazo: '22 a 28 días hábiles en taller',
    inversionRD: 'RD$ 520,000 – 690,000'
  },
  {
    id: 7,
    tipologiaId: 'wallunits',
    tipologiaNombre: 'Mobiliario Integrado & Wall Units',
    titulo: 'Librería Arquitectónica de Doble Altura con LED',
    referencia: 'Residencia Privada · Los Cacicazgos, Santo Domingo',
    imagen: 'assets/proyectos/libreria_iluminada_1.jpg',
    descripcion: 'Estructura modular de gran escala con entrepaños de 40 milímetros de grosor calibrados sin deflexión. Iluminación lineal embutida en fresados invisibles de 2700K con difusor opal antideslumbrante.',
    medidas: '4.20 m ancho x 3.20 m alto',
    sustrato: 'Tableros calibrados de alta densidad con refuerzo interno de acero',
    herrajes: 'Conectores mecánicos ocultos Festool Domino para uniones invisibles',
    acabado: 'Chapa de nogal natural de poro abierto con barniz al agua mate',
    plazo: '20 a 24 días hábiles en taller',
    inversionRD: 'RD$ 380,000 – 490,000'
  },
  {
    id: 8,
    tipologiaId: 'detalles',
    tipologiaNombre: 'Rigor de Taller & Ensamble',
    titulo: 'Detalle de Ensamble a Inglete a 45 Grados',
    referencia: 'Control de Calidad · Taller Central Emmanuel',
    imagen: 'assets/proyectos/libreria_detalle.jpg',
    descripcion: 'Muestra de unión angular a inglete milimétrico con continuidad de veta en las tres caras. Representa el estándar constructivo del símbolo Encuentro, sin rebordes ni separaciones perceptibles al tacto.',
    medidas: 'Tolerancia de mecanizado CNC: ± 0.5 mm',
    sustrato: 'Madera noble maciza curada en secadero técnico controlado',
    herrajes: 'Ensamble estructural mediante espigas de haya prensada y adhesivo D4',
    acabado: 'Acabado manual con lijado al agua en cuatro granos y laca poliuretánica',
    plazo: 'Estándar aplicado a la totalidad de las obras ejecutadas',
    inversionRD: 'Garantía Estructural por Contrato (10 Años)'
  },
  {
    id: 9,
    tipologiaId: 'banos',
    tipologiaNombre: 'Ebanistería de Baño & Vanities',
    titulo: 'Vanity Flotante Alistonado de Doble Poza',
    referencia: 'Villa Privada · Casa de Campo, La Romana',
    imagen: 'assets/proyectos/bano_doble_alistonado.jpg',
    descripcion: 'Mueble suspendido para área húmeda con frente de varillado macizo mecanizado. Incorpora dos gavetas internas organizadoras moldeadas para librar desagües y encimera pétrea tratada con hidrofugante de penetración profunda.',
    medidas: '2.10 m largo x 0.52 m fondo',
    sustrato: 'Tablero HMR calidad hidrófuga marina sellado con poliuretano PUR',
    herrajes: 'Rieles ocultos Blum con apertura push-to-open y sincronizador de tiro',
    acabado: 'Roble macizo alistonado con fondo aislante marino multicapa',
    plazo: '12 a 15 días hábiles en taller',
    inversionRD: 'RD$ 165,000 – 225,000'
  },
  {
    id: 10,
    tipologiaId: 'banos',
    tipologiaNombre: 'Ebanistería de Baño & Vanities',
    titulo: 'Vanity Suspendido con Espejo LED Flotante',
    referencia: 'Apartamento Master Suite · Serrallés, Santo Domingo',
    imagen: 'assets/proyectos/bano_detalle.jpg',
    descripcion: 'Diseño minimalista de baño con tirador uñero integrado en el propio canto superior de la puerta. Espejo retroiluminado con encendido táctil de proximidad y tratamiento anticorrosión en el azogue.',
    medidas: '1.60 m largo x 0.50 m fondo',
    sustrato: 'Tablero hidrófugo sellado perimetralmente contra humedad por vapor',
    herrajes: 'Bisagras de acero con cierre amortiguado y ajuste tridimensional',
    acabado: 'Chapa de madera natural con barniz náutico satinado',
    plazo: '10 a 14 días hábiles en taller',
    inversionRD: 'RD$ 125,000 – 175,000'
  }
];

class ArchitecturalShowcase {
  constructor() {
    this.typologySelect = document.getElementById('typology-select');
    this.projectSelect = document.getElementById('project-select');
    this.viewerImage = document.getElementById('viewer-img');
    this.viewerTitle = document.getElementById('viewer-title');
    this.viewerRef = document.getElementById('viewer-ref');
    this.viewerDesc = document.getElementById('viewer-desc');
    this.viewerDim = document.getElementById('viewer-dim');
    this.viewerSustrato = document.getElementById('viewer-sustrato');
    this.viewerHerrajes = document.getElementById('viewer-herrajes');
    this.viewerAcabado = document.getElementById('viewer-acabado');
    this.viewerPlazo = document.getElementById('viewer-plazo');
    this.viewerPrecio = document.getElementById('viewer-precio');
    this.viewerWsBtn = document.getElementById('viewer-ws-btn');
    this.fullDirectoryAccordion = document.getElementById('directory-accordion-toggle');
    this.fullDirectoryContent = document.getElementById('directory-accordion-content');
    this.directoryTableBody = document.getElementById('directory-table-body');

    this.currentProjectId = 1;
    this.init();
  }

  init() {
    if (!this.typologySelect || !this.projectSelect) return;

    // Poblar selector de tipologías únicas
    const tipologias = [
      { id: 'cocinas', nombre: '01 · Cocinas de Autor (3 Obras)' },
      { id: 'wallunits', nombre: '02 · Mobiliario Integrado & Wall Units (3 Obras)' },
      { id: 'cavas', nombre: '03 · Cavas Residenciales Climatizadas (1 Obra)' },
      { id: 'banos', nombre: '04 · Ebanistería de Baño & Vanities (2 Obras)' },
      { id: 'detalles', nombre: '05 · Rigor de Taller & Ensamble (1 Caso de Estudio)' }
    ];

    this.typologySelect.innerHTML = tipologias.map(t => `
      <option value="${t.id}">${t.nombre}</option>
    `).join('');

    // Listener de cambio de tipología
    this.typologySelect.addEventListener('change', () => {
      this.populateProjectsForTypology(this.typologySelect.value);
    });

    // Listener de cambio de proyecto
    this.projectSelect.addEventListener('change', () => {
      const id = parseInt(this.projectSelect.value, 10);
      this.renderProject(id);
    });

    // Toggle de la lista desplegable de directorio completo
    if (this.fullDirectoryAccordion && this.fullDirectoryContent) {
      this.fullDirectoryAccordion.addEventListener('click', () => {
        const isOpen = !this.fullDirectoryContent.classList.contains('hidden');
        if (isOpen) {
          this.fullDirectoryContent.classList.add('hidden');
          this.fullDirectoryAccordion.setAttribute('aria-expanded', 'false');
          const indicator = document.getElementById('directory-toggle-indicator');
          if (indicator) indicator.textContent = '+';
        } else {
          this.fullDirectoryContent.classList.remove('hidden');
          this.fullDirectoryAccordion.setAttribute('aria-expanded', 'true');
          const indicator = document.getElementById('directory-toggle-indicator');
          if (indicator) indicator.textContent = '−';
        }
      });
    }

    // Inicializar primera tipología
    this.populateProjectsForTypology('cocinas');
    this.populateDirectoryTable();
  }

  populateProjectsForTypology(tipologiaId) {
    const filtrados = OBRAS_DATA.filter(o => o.tipologiaId === tipologiaId);
    if (!filtrados.length) return;

    this.projectSelect.innerHTML = filtrados.map(o => `
      <option value="${o.id}">${o.titulo} (${o.referencia.split('·')[0].trim()})</option>
    `).join('');

    this.renderProject(filtrados[0].id);
  }

  renderProject(id) {
    const obra = OBRAS_DATA.find(o => o.id === id);
    if (!obra) return;

    this.currentProjectId = id;

    // Transición suave de opacidad
    if (this.viewerImage) {
      this.viewerImage.style.opacity = '0.3';
      this.viewerImage.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.viewerImage.src = obra.imagen;
        this.viewerImage.alt = obra.titulo;
        this.viewerImage.style.opacity = '1';
        this.viewerImage.style.transform = 'scale(1)';
      }, 200);
    }

    if (this.viewerTitle) this.viewerTitle.textContent = obra.titulo;
    if (this.viewerRef) this.viewerRef.textContent = obra.referencia;
    if (this.viewerDesc) this.viewerDesc.textContent = obra.descripcion;
    if (this.viewerDim) this.viewerDim.textContent = obra.medidas;
    if (this.viewerSustrato) this.viewerSustrato.textContent = obra.sustrato;
    if (this.viewerHerrajes) this.viewerHerrajes.textContent = obra.herrajes;
    if (this.viewerAcabado) this.viewerAcabado.textContent = obra.acabado;
    if (this.viewerPlazo) this.viewerPlazo.textContent = obra.plazo;
    if (this.viewerPrecio) this.viewerPrecio.textContent = obra.inversionRD;

    if (this.viewerWsBtn) {
      const msg = encodeURIComponent(
        `Estimados señores de Emmanuel Muebles, deseo solicitar información y especificación técnica sobre la obra: "${obra.titulo}" (${obra.referencia}).`
      );
      this.viewerWsBtn.href = `https://wa.me/18293714107?text=${msg}`;
    }
  }

  populateDirectoryTable() {
    if (!this.directoryTableBody) return;

    this.directoryTableBody.innerHTML = OBRAS_DATA.map((o, idx) => `
      <tr class="border-b border-white/5 hover:bg-white/[0.03] transition cursor-pointer" data-dir-id="${o.id}">
        <td class="py-3 px-4 font-mono text-xs text-[#C49A7A]">${String(idx + 1).padStart(2, '0')}</td>
        <td class="py-3 px-4 text-xs font-semibold text-white">${o.titulo}</td>
        <td class="py-3 px-4 text-xs text-gray-400 font-mono hidden sm:table-cell">${o.tipologiaNombre}</td>
        <td class="py-3 px-4 text-xs text-gray-400 font-mono hidden md:table-cell">${o.referencia.split('·')[0].trim()}</td>
        <td class="py-3 px-4 text-xs font-mono font-bold text-[#C49A7A]">${o.inversionRD.split('–')[0]}</td>
        <td class="py-3 px-4 text-right">
          <span class="text-xs text-white underline hover:text-[#C49A7A]">Cargar en Visor</span>
        </td>
      </tr>
    `).join('');

    this.directoryTableBody.querySelectorAll('[data-dir-id]').forEach(row => {
      row.addEventListener('click', () => {
        const id = parseInt(row.dataset.dirId, 10);
        const obra = OBRAS_DATA.find(o => o.id === id);
        if (obra) {
          this.typologySelect.value = obra.tipologiaId;
          this.populateProjectsForTypology(obra.tipologiaId);
          this.projectSelect.value = id;
          this.renderProject(id);

          // Desplazamiento suave al visor
          document.getElementById('obras-visor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.architecturalShowcase = new ArchitecturalShowcase();
});
