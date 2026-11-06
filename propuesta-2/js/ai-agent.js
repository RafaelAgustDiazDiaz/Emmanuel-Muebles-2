/**
 * EMMANUEL MUEBLES — AGENTE DE ESPECIFICACIÓN TÉCNICA
 * Interfaz formal de ingeniería y presupuestos preliminares (cero emojis).
 */

const AI_KNOWLEDGE_BASE = {
  cocinas: {
    palabrasClave: ['cocina', 'isla', 'desayunador', 'encimera', 'calacatta', 'cocinas'],
    titulo: 'Cocina Modular de Autor con Isla Monolítica',
    foto: 'assets/proyectos/cocina_moderna_1.jpg',
    ubicacion: 'Penthouse Residencial · Piantini, Santo Domingo',
    rangoRD: 'RD$ 480,000 – 650,000',
    sustrato: 'Tablero hidrófugo HMR clase E1 sellado perimetralmente con adhesivo PUR',
    herrajes: 'Sistemas Blum Legrabox con amortiguación Blumotion (200,000 aperturas)',
    tiempo: '18 a 22 días hábiles en taller',
    respuesta: 'Para cocinas de autor en República Dominicana, prescribimos exclusivamente tableros hidrófugos de alta densidad (HMR) protegidos con adhesivo de poliuretano reactivo (PUR) en cantos y uniones. Este tratamiento suprime la penetración de vapor de cocción y condensación, garantizando estabilidad volumétrica permanente junto a encimeras de cuarzo o piedra natural.'
  },
  wallunits: {
    palabrasClave: ['wall unit', 'mueble tv', 'sala', 'libreria', 'estanteria', 'anacaona', 'salon'],
    titulo: 'Wall Unit Escultural con Mármol & Iluminación Rasante',
    foto: 'assets/proyectos/mueble_tv_cava_completo.jpg',
    ubicacion: 'Torre Residencial · Avenida Anacaona, Santo Domingo',
    rangoRD: 'RD$ 390,000 – 520,000',
    sustrato: 'Estructura interna en madera estacionada con alma de acero para soporte de televisores de gran formato',
    herrajes: 'Bisagras invisibles Salice Air y sistemas de fijación oculta de alta capacidad de carga',
    tiempo: '18 a 22 días hábiles en taller',
    respuesta: 'Los módulos de estar y entretenimiento integran canalizaciones registrables para ocultar cableado estructurado, consolas suspendidas en voladizo estructural y paneles acústicos o losas de piedra retroiluminadas con tecnología LED de temperatura cálida (3000K).'
  },
  cavas: {
    palabrasClave: ['cava', 'vino', 'vinos', 'botellas', 'climatizada', 'vidrio ahumado'],
    titulo: 'Cava de Vinos Residencial Climatizada con Aislamiento Térmico',
    foto: 'assets/proyectos/cava_vinos_lujo.jpg',
    ubicacion: 'Villa Privada · Cap Cana, La Altagracia',
    rangoRD: 'RD$ 520,000 – 690,000',
    sustrato: 'Aislamiento térmico perimetral y perfilería hermética de aluminio anodizado con rotura de puente térmico',
    herrajes: 'Vidrio insulado Low-E con cámara de gas argón y herrajes de acero inoxidable AISI 316',
    tiempo: '22 a 28 días hábiles en taller',
    respuesta: 'La conservación enológica en climas tropicales exige control higrotérmico continuo entre 14° y 16°C con humedad relativa al 65%. La cámara incorpora estanterías en roble macizo con acabado inodoro para no contaminar las etiquetas ni alterar las propiedades del vino.'
  },
  banos: {
    palabrasClave: ['bano', 'baño', 'vanity', 'lavamanos', 'alistonado', 'espejo'],
    titulo: 'Vanity Flotante Alistonado de Doble Poza',
    foto: 'assets/proyectos/bano_doble_alistonado.jpg',
    ubicacion: 'Villa Exclusiva · Casa de Campo, La Romana',
    rangoRD: 'RD$ 160,000 – 230,000',
    sustrato: 'Madera tratada para ambientes húmedos con fondo poliuretánico de poro cerrado',
    herrajes: 'Rieles ocultos Blum de extracción total con sincronizador y cajón rebajado para desagüe',
    tiempo: '12 a 15 días hábiles en taller',
    respuesta: 'Para vanities suspendidos aplicamos sellado de especificación náutica en autoclave. El ensamble soporta vapor constante y contacto accidental con agua sin experimentar deflexión ni desprendimiento de laminados.'
  },
  arquitectos: {
    palabrasClave: ['arquitecto', 'arquitectura', 'interiorista', 'diseñador', 'planos', 'cad', 'revit', 'b2b'],
    titulo: 'División Trade & Alianzas con Estudios de Arquitectura',
    foto: 'assets/branding/rotulo.png',
    ubicacion: 'Centro de Especificación & Taller Central, Santo Domingo',
    rangoRD: 'Régimen de Colaboración Trade & Comisiones Protegidas',
    sustrato: 'Despiece técnico y generación de Shop Drawings a partir de planos DWG, RVT o SKP',
    herrajes: 'Validación de tolerancias de obra y coordinación con electrodomésticos empotrables',
    tiempo: 'Compromiso de entrega garantizado por cláusula contractual',
    respuesta: 'Colaboramos con firmas de arquitectura e interiorismo traduciendo proyectos conceptuales a planos de fabricación CNC. Suministramos muestras físicas de maderas nobles y cuarzos para presentaciones a clientes finales y garantizamos fidelidad dimensional milimétrica en la instalación.'
  },
  salitre: {
    palabrasClave: ['salitre', 'costa', 'humedad', 'playa', 'punta cana', 'terrenas', 'marina'],
    titulo: 'Blindaje Técnico para Zonas Costeras & Salinidad Marina',
    foto: 'assets/proyectos/cocina_moderna_2.jpg',
    ubicacion: 'Litoral Costero Dominicano (Punta Cana, Cap Cana, Las Terrenas)',
    rangoRD: 'Garantía Estructural Escrita de 10 Años',
    sustrato: 'Sustrato HMR hidrófugo con adhesivo PUR y fijaciones en acero inoxidable grado 316',
    herrajes: 'Herrajes tratados con baño galvánico de alta resistencia a corrosión salina',
    tiempo: 'Protocolo de fabricación marina en taller',
    respuesta: 'En zonas costeras, el aire salino degrada herrajes estándar en pocos meses. Emmanuel Muebles prescribe herrajes con recubrimientos certificados contra niebla salina y barnices poliuretánicos de grado náutico resistentes a la radiación solar y humedad extrema.'
  }
};

class TechnicalAIAssistant {
  constructor() {
    this.messagesContainer = document.getElementById('ai-chat-messages');
    this.chatInput = document.getElementById('ai-chat-input');
    this.chatForm = document.getElementById('ai-chat-form');
    this.chatDrawer = document.getElementById('ai-agent-drawer');
    this.openBtns = document.querySelectorAll('[data-open-ai]');
    this.closeBtn = document.getElementById('ai-chat-close');
    this.unreadBadge = document.getElementById('ai-unread-badge');
    this.floatingBubble = document.getElementById('ai-floating-bubble');
    this.isDrawerOpen = false;

    this.initEvents();
  }

  initEvents() {
    this.openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openDrawer();
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeDrawer());
    }

    if (this.floatingBubble) {
      this.floatingBubble.addEventListener('click', () => this.openDrawer());
    }

    if (this.chatForm) {
      this.chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = this.chatInput.value.trim();
        if (text) {
          this.handleUserMessage(text);
          this.chatInput.value = '';
        }
      });
    }

    document.querySelectorAll('[data-ai-prompt]').forEach(chip => {
      chip.addEventListener('click', () => {
        const prompt = chip.dataset.aiPrompt;
        this.openDrawer();
        this.handleUserMessage(prompt);
      });
    });
  }

  openDrawer() {
    if (!this.chatDrawer) return;
    this.chatDrawer.classList.remove('hidden');
    setTimeout(() => {
      this.chatDrawer.classList.add('opacity-100', 'translate-y-0');
      this.chatDrawer.classList.remove('opacity-0', 'translate-y-6');
    }, 10);
    this.isDrawerOpen = true;

    if (this.unreadBadge) this.unreadBadge.classList.add('hidden');
    if (this.floatingBubble) this.floatingBubble.classList.add('hidden');
    if (this.chatInput) this.chatInput.focus();
  }

  closeDrawer() {
    if (!this.chatDrawer) return;
    this.chatDrawer.classList.add('opacity-0', 'translate-y-6');
    this.chatDrawer.classList.remove('opacity-100', 'translate-y-0');
    setTimeout(() => {
      this.chatDrawer.classList.add('hidden');
    }, 300);
    this.isDrawerOpen = false;
  }

  handleUserMessage(text) {
    this.appendMessage('user', text);
    const typingId = this.showTypingIndicator();

    setTimeout(() => {
      this.removeTypingIndicator(typingId);
      this.generateAIResponse(text);
    }, 700);
  }

  appendMessage(sender, text) {
    if (!this.messagesContainer) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = sender === 'user' 
      ? 'flex justify-end mb-3.5' 
      : 'flex justify-start mb-3.5';

    if (sender === 'user') {
      msgDiv.innerHTML = `
        <div class="max-w-[85%] bg-[#75553F] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-xs font-semibold leading-relaxed shadow-md">
          ${text}
        </div>
      `;
    } else {
      msgDiv.innerHTML = `
        <div class="flex items-start gap-2.5 max-w-[92%]">
          <div class="w-7 h-7 rounded-full bg-[#75553F] text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 shadow-md">
            EM
          </div>
          <div class="bg-[#20231E] text-gray-200 border border-white/10 p-4 rounded-2xl rounded-tl-sm text-xs leading-relaxed shadow-lg">
            ${text}
          </div>
        </div>
      `;
    }

    this.messagesContainer.appendChild(msgDiv);
    this.scrollToBottom();
  }

  showTypingIndicator() {
    if (!this.messagesContainer) return null;
    const id = 'typing-' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.id = id;
    typingDiv.className = 'flex items-start gap-2.5 mb-3.5';
    typingDiv.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-[#75553F] text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
        EM
      </div>
      <div class="bg-[#20231E] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm text-xs text-gray-400 flex items-center gap-2 shadow-md">
        <span class="w-1.5 h-1.5 rounded-full bg-[#C49A7A] animate-pulse"></span>
        <span class="font-mono text-[11px] text-gray-300">Formulando prescripción técnica y cálculo de taller...</span>
      </div>
    `;
    this.messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();
    return id;
  }

  removeTypingIndicator(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  generateAIResponse(userText) {
    const textLower = userText.toLowerCase();

    let matched = AI_KNOWLEDGE_BASE.cocinas;
    for (const key in AI_KNOWLEDGE_BASE) {
      const entry = AI_KNOWLEDGE_BASE[key];
      if (entry.palabrasClave.some(w => textLower.includes(w))) {
        matched = entry;
        break;
      }
    }

    const wsUrl = `https://wa.me/18293714107?text=${encodeURIComponent(
      `Estimada Dirección Técnica de Emmanuel Muebles:\n\n` +
      `He formulado una consulta técnica a través de su plataforma virtual sobre:\n` +
      `• Tipología: ${matched.titulo}\n` +
      `• Referencia de Taller: ${matched.rangoRD}\n` +
      `• Requerimiento de obra: "${userText}"\n\n` +
      `Agradezco coordinar una revisión de planos o cita técnica.`
    )}`;

    const responseHTML = `
      <p class="mb-3 text-gray-200 leading-relaxed">${matched.respuesta}</p>
      
      <div class="rounded-xl overflow-hidden border border-white/10 bg-[#141612] p-3.5 mt-3">
        <img src="${matched.foto}" alt="${matched.titulo}" class="w-full h-36 object-cover rounded-lg mb-2.5">
        <div class="font-bold text-white text-xs tracking-tight">${matched.titulo}</div>
        <div class="text-[11px] text-gray-400 font-mono mb-2">${matched.ubicacion}</div>

        <div class="space-y-1.5 text-[11px] bg-black/40 p-2.5 rounded-lg border border-white/5 font-mono mb-3">
          <div class="text-[#C49A7A] font-bold text-xs mb-1">Rango de Taller: ${matched.rangoRD}</div>
          <div class="text-gray-300"><strong class="text-gray-400">Sustrato:</strong> ${matched.sustrato}</div>
          <div class="text-gray-300"><strong class="text-gray-400">Herrajes:</strong> ${matched.herrajes}</div>
          <div class="text-gray-300"><strong class="text-gray-400">Plazo estimado:</strong> ${matched.tiempo}</div>
        </div>

        <a href="${wsUrl}" target="_blank" class="w-full py-2.5 px-3 rounded-lg bg-[#75553F] hover:bg-[#9B7357] text-white font-mono font-bold text-[11px] uppercase tracking-wider transition text-center flex items-center justify-center gap-2 shadow-md">
          <span>Transferir Consulta a Dirección Técnica</span>
        </a>
      </div>
    `;

    this.appendMessage('ai', responseHTML);
  }

  scrollToBottom() {
    if (!this.messagesContainer) return;
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.technicalAIAssistant = new TechnicalAIAssistant();
});
