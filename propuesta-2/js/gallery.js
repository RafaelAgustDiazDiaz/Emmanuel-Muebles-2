/**
 * EMMANUEL MUEBLES — PAQUETE 1: GALERÍA Y VISOR (MANUAL DE MARCA OFICIAL)
 */

const REAL_PROJECTS = [
  {
    id: 1,
    categoria: 'cocinas',
    titulo: 'Cocina Monolítica de Autor con Isla Calacatta',
    ubicacion: 'Penthouse Piantini · Santo Domingo',
    imagen: 'assets/proyectos/cocina_moderna_1.jpg',
    descripcion: 'Diseño lineal continuo con isla monolítica revestida en cuarzo Calacatta Gold. Frentes sin tirador con sistema Gola integrado y módulos altos con iluminación LED cálida perimetral de 3000K.',
    medidas: '5.20 m lineales + Isla 2.80 x 1.10 m',
    materiales: ['Roble Europeo Natural', 'Cuarzo Calacatta Gold', 'Herrajes Blum Legrabox', 'Tablero HMR Hidrófugo'],
    tiempo: '18 a 22 días hábiles en taller',
    precioRD: 'RD$ 485,000 – 620,000'
  },
  {
    id: 2,
    categoria: 'cocinas',
    titulo: 'Cocina Contemporánea Carbón & Roble Natural',
    ubicacion: 'Residencia Privada · Bella Vista',
    imagen: 'assets/proyectos/cocina_moderna_2.jpg',
    descripcion: 'Contraste arquitectónico entre laca mate antihuellas en tono carbón y madera natural texturizada. Gaveteros interiores de extracción total con freno hidráulico y torre para hornos empotrados.',
    medidas: '4.40 m lineales en L',
    materiales: ['Laca Carbón Mate Super Soft', 'Chapa de Roble Texturizado', 'Herrajes Blum Blumotion', 'Fondo Sellado PUR'],
    tiempo: '16 a 20 días hábiles en taller',
    precioRD: 'RD$ 390,000 – 495,000'
  },
  {
    id: 3,
    categoria: 'cocinas',
    titulo: 'Cocina Abierta con Isla y Desayunador Integrado',
    ubicacion: 'Apartamento de Lujo · Naco',
    imagen: 'assets/proyectos/cocina_moderna_3.jpg',
    descripcion: 'Integración fluida con el área social. Isla con voladizo estructurado en acero invisible para cuatro puestos y despensa oculta de apertura push-to-open.',
    medidas: '4.80 m lineales + Isla 2.40 m',
    materiales: ['Nogal Americano Satinado', 'Granito Negro San Gabriel', 'Perfiles de Aluminio Ocultos', 'Iluminación Rasante'],
    tiempo: '18 a 22 días hábiles en taller',
    precioRD: 'RD$ 440,000 – 560,000'
  },
  {
    id: 4,
    categoria: 'salones',
    titulo: 'Mobiliario Arquitectónico para Salón Principal',
    ubicacion: 'Residencia Privada · Piantini',
    imagen: 'assets/proyectos/sala_sofa_curvo.jpg',
    descripcion: 'Integración volumétrica de madera noble, nichos alistonados y consola suspendida para zona de estar de gran formato. Acabados cálidos y ensambles continuos.',
    medidas: '4.80 m de desarrollo longitudinal',
    materiales: ['Roble Seleccionado', 'Laca Poliuretánica Mate', 'Estructura Oculta Reforzada', 'LED Dimerizable CRI 95'],
    tiempo: '20 a 25 días hábiles en taller',
    precioRD: 'RD$ 410,000 – 540,000'
  },
  {
    id: 5,
    categoria: 'salones',
    titulo: 'Centro de Entretenimiento Integrado con Cava',
    ubicacion: 'Residencia Familiar · La Julia',
    imagen: 'assets/proyectos/mueble_tv_cava_completo.jpg',
    descripcion: 'Composición multifuncional que fusiona soporte acústico para TV, vitrina iluminada para cristalería y nicho con control térmico para 36 botellas de vino.',
    medidas: '3.80 m de ancho x 2.60 m de alto',
    materiales: ['Madera Maciza de Cedro', 'Vidrio Templado Parsol Gris', 'Herrajes Ocultos Salice', 'Refrigeración Silenciosa'],
    tiempo: '18 a 22 días hábiles en taller',
    precioRD: 'RD$ 360,000 – 470,000'
  },
  {
    id: 6,
    categoria: 'cavas',
    titulo: 'Cava de Vinos Residencial Climatizada',
    ubicacion: 'Villa Exclusiva · Cap Cana',
    imagen: 'assets/proyectos/cava_vinos_lujo.jpg',
    descripcion: 'Cerramiento hermético de piso a techo con perfilería esbelta de aluminio anodizado y doble acristalamiento insulado con gas argón. Racks de madera noble con soporte individual y luz cenital.',
    medidas: '2.40 m ancho x 2.70 m alto x 0.90 m fondo',
    materiales: ['Roble Seleccionado Anti-Humedad', 'Vidrio Insulado Low-E', 'Acero Inoxidable 316', 'Sellado de Neopreno'],
    tiempo: '22 a 28 días hábiles en taller',
    precioRD: 'RD$ 520,000 – 690,000'
  },
  {
    id: 7,
    categoria: 'salones',
    titulo: 'Librería Arquitectónica de Doble Altura con LED',
    ubicacion: 'Residencia Privada · Los Cacicazgos',
    imagen: 'assets/proyectos/libreria_iluminada_1.jpg',
    descripcion: 'Retícula geométrica modular con entrepaños de 40 mm de espesor reforzados internamente. Iluminación invisible fresada en la propia madera para resaltar obras de arte y volúmenes.',
    medidas: '4.20 m ancho x 3.20 m alto',
    materiales: ['Chapa de Nogal Natural', 'Fondo Acústico Ranurado', 'LED Micro-Perfil 2700K', 'Fijaciones Químicas'],
    tiempo: '20 a 24 días hábiles en taller',
    precioRD: 'RD$ 380,000 – 490,000'
  },
  {
    id: 8,
    categoria: 'detalles',
    titulo: 'Encuentros a 45° & Precisión Milimétrica',
    ubicacion: 'Control de Calidad · Taller Emmanuel',
    imagen: 'assets/proyectos/libreria_detalle.jpg',
    descripcion: 'Detalle microscópico del ensamble a inglete a 45 grados con veta continua envolvente. Sellado con barniz poliuretánico multicapa de alta resistencia y tacto aterciopelado.',
    medidas: 'Estándar en todas las fabricaciones',
    materiales: ['Roble Seleccionado', 'Poliuretano Alemán Mate', 'Unión Mecánica Festool Domino'],
    tiempo: '10 Años de Garantía Escrita',
    precioRD: 'Garantía Estructural Certificada'
  },
  {
    id: 9,
    categoria: 'banos',
    titulo: 'Vanity Flotante Alistonado Doble Lavamanos',
    ubicacion: 'Villa Privada · Casa de Campo',
    imagen: 'assets/proyectos/bano_doble_alistonado.jpg',
    descripcion: 'Frente alistonado con varillas de madera maciza trabajadas a mano. Doble gaveta interior en U para salvar tuberías y encimera pétrea hidrofugada de una sola pieza.',
    medidas: '2.10 m largo x 0.52 m fondo',
    materiales: ['Tablero Hidrófugo HMR', 'Roble Macizo Tratado', 'Correderas Blum Push', 'Piedra Natural Tratada'],
    tiempo: '12 a 15 días hábiles en taller',
    precioRD: 'RD$ 165,000 – 225,000'
  },
  {
    id: 10,
    categoria: 'banos',
    titulo: 'Vanity Suspendido con Espejo LED Flotante',
    ubicacion: 'Apartamento Master Suite · Serrallés',
    imagen: 'assets/proyectos/bano_detalle.jpg',
    descripcion: 'Mueble de baño minimalista con tirador uñero mecanizado en el propio canto. Espejo flotante perimetral con encendido táctil e interior revestido en laca hidrófuga marina.',
    medidas: '1.60 m largo x 0.50 m fondo',
    materiales: ['Sellador Marino Tropical', 'Chapa de Madera Natural', 'Herrajes Blum Amortiguados', 'Espejo Ultraclaro'],
    tiempo: '10 a 14 días hábiles en taller',
    precioRD: 'RD$ 125,000 – 175,000'
  }
];

let activeIndex = 0;

function initGallery(cardClass = 'brand-card') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  function render(category = 'todos') {
    const list = category === 'todos' 
      ? REAL_PROJECTS 
      : REAL_PROJECTS.filter(p => p.categoria === category);

    container.innerHTML = list.map(p => `
      <div class="${cardClass} overflow-hidden cursor-pointer group flex flex-col justify-between" data-id="${p.id}">
        <div class="project-card-image">
          <img src="${p.imagen}" alt="${p.titulo}" loading="lazy">
          <span class="absolute top-3 left-3 bg-[#121411]/90 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1 rounded-full border border-white/10 shadow-sm">
            ${p.ubicacion.split('·')[0].trim()}
          </span>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-bold text-white group-hover:text-[#C49A7A] transition font-brand">
            ${p.titulo}
          </h3>
          <p class="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed font-light">
            ${p.descripcion}
          </p>
          <div class="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-sm">
            <span class="font-mono font-bold text-[#C49A7A]">${p.precioRD.split('–')[0]}...</span>
            <span class="text-white font-semibold group-hover:text-[#C49A7A] flex items-center gap-1 transition">
              Ver Ficha Técnica →
            </span>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('[data-id]').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id, 10);
        openModal(id);
      });
    });
  }

  render('todos');

  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      render(tab.dataset.filter || 'todos');
    });
  });

  initModalEvents();
}

function initModalEvents() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') changeProject(-1);
    if (e.key === 'ArrowRight') changeProject(1);
  });

  if (prevBtn) prevBtn.addEventListener('click', () => changeProject(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeProject(1));
}

function openModal(id) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const idx = REAL_PROJECTS.findIndex(p => p.id === id);
  if (idx === -1) return;

  activeIndex = idx;
  renderModal();
  modal.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function changeProject(step) {
  activeIndex += step;
  if (activeIndex < 0) activeIndex = REAL_PROJECTS.length - 1;
  if (activeIndex >= REAL_PROJECTS.length) activeIndex = 0;
  renderModal();
}

function renderModal() {
  const p = REAL_PROJECTS[activeIndex];
  if (!p) return;

  const img = document.getElementById('modal-img');
  const title = document.getElementById('modal-title');
  const loc = document.getElementById('modal-location');
  const desc = document.getElementById('modal-desc');
  const dim = document.getElementById('modal-dim');
  const time = document.getElementById('modal-time');
  const price = document.getElementById('modal-price');
  const mats = document.getElementById('modal-materials');
  const wsBtn = document.getElementById('modal-ws-btn');
  const count = document.getElementById('modal-counter');

  if (img) img.src = p.imagen;
  if (title) title.textContent = p.titulo;
  if (loc) loc.textContent = p.ubicacion;
  if (desc) desc.textContent = p.descripcion;
  if (dim) dim.textContent = p.medidas;
  if (time) time.textContent = p.tiempo;
  if (price) price.textContent = p.precioRD;

  if (mats) {
    mats.innerHTML = p.materiales.map(m => `
      <li class="flex items-center gap-2 text-sm text-gray-300">
        <span class="w-2 h-2 rounded-full bg-[#75553F]"></span>
        <span>${m}</span>
      </li>
    `).join('');
  }

  if (count) count.textContent = `${activeIndex + 1} / ${REAL_PROJECTS.length}`;

  if (wsBtn) {
    const text = encodeURIComponent(`Hola Emmanuel Muebles, vi en su web el proyecto "${p.titulo}" (${p.ubicacion}) y me gustaría cotizar algo similar.`);
    wsBtn.href = `https://wa.me/18293714107?text=${text}`;
  }
}
