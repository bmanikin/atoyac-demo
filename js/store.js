/* ==========================================================================
   ATOYAC · DATA & REALTIME STORE (LocalStorage + BroadcastChannel + Firebase)
   ========================================================================== */

export const BUSINESS_INFO = {
  name: "ATOYAC",
  tagline: "ALL-DAY HEALTHY KITCHEN",
  address: "Av. Popocatépetl 289, Local A · Santa Cruz Atoyac, CDMX",
  reference: "Eje 8 Sur, cerca de Av. México-Coyoacán y Uxmal",
  hours: "Lunes a Sábado · 7:00 a 21:00",
  openingDate: "5 de noviembre de 2026",
  phone: "525532713451", // Configurable en Admin
  financials: {
    initialInvestment: 71900,
    securityDeposit: 19140,
    recommendedReserve: 41340,
    totalCashNeeded: 132380,
    monthlyFixedCostsNoIVA: 37432,
    monthlyFixedCostsWithIVA: 41340,
    averageTicketTarget: 95,
    unitContribution: 46.45,
    breakEvenDailyTickets: 31,
    targetDailyTickets: 40,
    veryGoodDailyTickets: 60,
    morningShiftDailyCost: 400,
    morningShiftMonthlyCost: 10400
  }
};

export const DELIVERY_PLATFORMS = {
  uber: {
    id: "uber",
    name: "Uber Eats",
    commissionRate: 0.28,
    color: "#06C167",
    textColor: "#ffffff",
    badgeClass: "badge-uber",
    description: "Plataforma Uber Eats · Margen comisión est. ~28%"
  },
  rappi: {
    id: "rappi",
    name: "Rappi",
    commissionRate: 0.28,
    color: "#FF441F",
    textColor: "#ffffff",
    badgeClass: "badge-rappi",
    description: "Plataforma Rappi Aliados · Margen comisión est. ~28%"
  },
  didi: {
    id: "didi",
    name: "DiDi Food",
    commissionRate: 0.24,
    color: "#FF7700",
    textColor: "#ffffff",
    badgeClass: "badge-didi",
    description: "Plataforma DiDi Food · Margen comisión est. ~24%"
  },
  web: {
    id: "web",
    name: "Delivery Web",
    commissionRate: 0.00,
    color: "#526f5c",
    textColor: "#ffffff",
    badgeClass: "badge-web",
    description: "Canal Web Propio · 100% íntegro (0% comisión)"
  },
  kiosk: {
    id: "kiosk",
    name: "Kiosco iPad",
    commissionRate: 0.00,
    color: "#c15c3d",
    textColor: "#ffffff",
    badgeClass: "badge-kiosk",
    description: "Autoservicio en sucursal (0% comisión)"
  },
  pos: {
    id: "pos",
    name: "Mostrador POS",
    commissionRate: 0.00,
    color: "#d4a359",
    textColor: "#19221c",
    badgeClass: "badge-pos",
    description: "Venta directa en caja (0% comisión)"
  }
};

export const MOMENTS = {
  amanecer: {
    id: "amanecer",
    name: "Amanecer",
    hours: "7:00 – 11:30",
    startHour: 7,
    endHour: 11.5,
    badgeClass: "badge-amanecer",
    targetTickets: 16,
    breakEvenTickets: 12,
    description: "Sándwiches saludables recién hechos y jugo natural para empezar el día."
  },
  mediodia: {
    id: "mediodia",
    name: "Mediodía",
    hours: "11:30 – 16:30",
    startHour: 11.5,
    endHour: 16.5,
    badgeClass: "badge-mediodia",
    targetTickets: 16,
    breakEvenTickets: 13,
    description: "Baguettes artesanales de 25 cm con proteína a la plancha y aguas frescas."
  },
  tarde: {
    id: "tarde",
    name: "Tarde",
    hours: "16:30 – 21:00",
    startHour: 16.5,
    endHour: 21,
    badgeClass: "badge-tarde",
    targetTickets: 8,
    breakEvenTickets: 6,
    description: "Crepas dulces y saladas hechas al momento acompañadas de café recién hecho."
  },
  bebidas: {
    id: "bebidas",
    name: "Para Tomar",
    hours: "Todo el día (7:00 – 21:00)",
    startHour: 7,
    endHour: 21,
    badgeClass: "badge-bebidas",
    targetTickets: 0,
    breakEvenTickets: 0,
    description: "Jugos exprimidos al día, aguas frescas naturales, café de grano e infusiones."
  }
};

export const MENU_ITEMS = [
  // SÁNDWICHES Y CHAPATAS · AMANECER
  {
    id: "sand-pollo",
    name: "Sándwich de Pollo",
    category: "amanecer",
    price: 48,
    deliveryPrice: 60,
    cost: 16,
    margin: 67,
    desc: "Pechuga de pollo a la plancha, lechuga fresca y aderezo artesanal en pan blanco o integral.",
    portion: "2 rebanadas pan artesanal · 80 g pechuga a la plancha · lechuga y aderezo",
    prepTimeMin: 4,
    popular: true,
    icon: "🥪",
    image: "assets/img/dishes/sandwiches.jpg"
  },
  {
    id: "sand-res",
    name: "Sándwich de Fajitas de Res",
    category: "amanecer",
    price: 48,
    deliveryPrice: 60,
    cost: 17,
    margin: 65,
    desc: "Jugosas fajitas de res sazonadas a la plancha con lechuga fresca en pan artesanal.",
    portion: "2 rebanadas pan artesanal · 80 g fajitas de res · lechuga fresca",
    prepTimeMin: 4,
    popular: true,
    icon: "🥪",
    image: "assets/img/dishes/sandwiches.jpg"
  },
  {
    id: "sand-huevo",
    name: "Sándwich de Huevo",
    category: "amanecer",
    price: 48,
    deliveryPrice: 60,
    cost: 13,
    margin: 73,
    desc: "Huevo fresco revuelto al momento con sazón de la casa en pan artesanal dorado.",
    portion: "2 rebanadas pan artesanal · 2 huevos revueltos · lechuga fresca",
    prepTimeMin: 3,
    popular: false,
    icon: "🥪",
    image: "assets/img/dishes/sandwiches.jpg"
  },
  {
    id: "chap-pollo",
    name: "Chapata de Pollo",
    category: "amanecer",
    price: 59,
    deliveryPrice: 74,
    cost: 20,
    margin: 66,
    desc: "Crujiente pan chapata horneado relleno de jugosa pechuga de pollo a la plancha con vegetales.",
    portion: "Chapata rústica artesanal · 90 g pechuga de pollo · lechuga y aderezo",
    prepTimeMin: 5,
    popular: true,
    icon: "🥖",
    image: "assets/img/dishes/baguettes.jpg"
  },
  {
    id: "chap-res",
    name: "Chapata de Fajitas de Res",
    category: "amanecer",
    price: 48,
    deliveryPrice: 60,
    cost: 17,
    margin: 65,
    desc: "Pan chapata rústico con tiernas fajitas de res a la plancha y vegetales frescos.",
    portion: "Chapata rústica artesanal · 80 g fajitas de res · vegetales",
    prepTimeMin: 5,
    popular: true,
    icon: "🥖",
    image: "assets/img/dishes/baguettes.jpg"
  },
  {
    id: "chap-huevo",
    name: "Chapata de Huevo",
    category: "amanecer",
    price: 48,
    deliveryPrice: 60,
    cost: 14,
    margin: 71,
    desc: "Pan chapata rústico con esponjoso huevo preparado al momento.",
    portion: "Chapata rústica artesanal · 2 huevos frescos revueltos",
    prepTimeMin: 4,
    popular: false,
    icon: "🥖",
    image: "assets/img/dishes/baguettes.jpg"
  },
  {
    id: "combo-desayuno",
    name: "Combo Desayuno",
    category: "amanecer",
    isCombo: true,
    price: 65,
    deliveryPrice: 82,
    cost: 23,
    margin: 65,
    desc: "Sándwich o Chapata a elegir + Café americano caliente recién colado.",
    portion: "1 Sándwich o Chapata a elegir + 1 Café americano 12 oz",
    prepTimeMin: 5,
    popular: true,
    icon: "☕",
    image: "assets/img/dishes/sandwiches.jpg"
  },

  // BAGUETTES Y BOWLS · MEDIODÍA
  {
    id: "bag-pollo",
    name: "Baguette de Pollo",
    category: "mediodia",
    price: 48,
    deliveryPrice: 60,
    cost: 16,
    margin: 67,
    desc: "Baguette artesanal crujiente de 25 cm con pechuga de pollo a la plancha y vegetales frescos.",
    portion: "Baguette 25 cm · 80 g pechuga a la plancha · lechuga fresca y aderezo",
    prepTimeMin: 5,
    popular: true,
    icon: "🥖",
    image: "assets/img/dishes/baguettes.jpg"
  },
  {
    id: "bag-res",
    name: "Baguette de Fajitas de Res",
    category: "mediodia",
    price: 48,
    deliveryPrice: 60,
    cost: 17,
    margin: 65,
    desc: "Baguette artesanal de 25 cm con jugosas fajitas de res sazonadas a la plancha.",
    portion: "Baguette 25 cm · 80 g fajitas de res marinadas · vegetales",
    prepTimeMin: 5,
    popular: true,
    icon: "🥖",
    image: "assets/img/dishes/baguettes.jpg"
  },
  {
    id: "bag-huevo",
    name: "Baguette de Huevo",
    category: "mediodia",
    price: 48,
    deliveryPrice: 60,
    cost: 13,
    margin: 73,
    desc: "Baguette artesanal recién horneada con huevo preparado al momento.",
    portion: "Baguette 25 cm · 2 huevos frescos revueltos",
    prepTimeMin: 4,
    popular: false,
    icon: "🥖",
    image: "assets/img/dishes/baguettes.jpg"
  },
  {
    id: "bowl-pollo",
    name: "Bowl de Ensalada de Pollo",
    category: "mediodia",
    price: 48,
    deliveryPrice: 60,
    cost: 15,
    margin: 69,
    desc: "Tazón fresco con lechugas mixtas, vegetales crujientes y pechuga de pollo a la plancha.",
    portion: "Bowl 350 g · 80 g pechuga de pollo · lechugas mixtas y vegetales",
    prepTimeMin: 4,
    popular: true,
    icon: "🥗",
    image: "assets/img/dishes/sandwiches.jpg"
  },
  {
    id: "bowl-res",
    name: "Bowl de Ensalada de Fajitas de Res",
    category: "mediodia",
    price: 48,
    deliveryPrice: 60,
    cost: 17,
    margin: 65,
    desc: "Ensalada verde crujiente acompañada de fajitas de res calientes a la plancha y aderezo.",
    portion: "Bowl 350 g · 80 g fajitas de res · lechugas mixtas y vegetales",
    prepTimeMin: 4,
    popular: true,
    icon: "🥗",
    image: "assets/img/dishes/sandwiches.jpg"
  },
  {
    id: "bowl-huevo",
    name: "Bowl de Ensalada de Huevo",
    category: "mediodia",
    price: 48,
    deliveryPrice: 60,
    cost: 13,
    margin: 73,
    desc: "Bowl saludable y ligero con mezcla de hojas verdes y huevo fresco preparado al momento.",
    portion: "Bowl 350 g · 2 huevos · lechugas mixtas y aderezo ligero",
    prepTimeMin: 4,
    popular: false,
    icon: "🥗",
    image: "assets/img/dishes/sandwiches.jpg"
  },
  {
    id: "combo-comida",
    name: "Combo Comida",
    category: "mediodia",
    isCombo: true,
    price: 75,
    deliveryPrice: 94,
    cost: 26,
    margin: 65,
    desc: "1 Baguette artesanal a elegir + Bebida (Café americano o Agua medio litro).",
    portion: "1 Baguette artesanal a elegir + 1 Bebida",
    prepTimeMin: 5,
    popular: true,
    icon: "🍱",
    image: "assets/img/dishes/baguettes.jpg"
  },

  // TARDE Y MERIENDA
  {
    id: "crepa-nutella",
    name: "Crepa Nutella con Plátano",
    category: "tarde",
    price: 75,
    deliveryPrice: 90,
    cost: 27,
    margin: 64,
    desc: "Crepa recién hecha con Nutella cremosa y rebanadas de plátano fresco.",
    portion: "60 ml de masa · Nutella 35 g + ½ plátano fresco",
    prepTimeMin: 5,
    popular: true,
    icon: "🥞",
    image: "assets/img/dishes/crepes.jpg"
  },
  {
    id: "combo-tarde",
    name: "Combo Tarde",
    category: "tarde",
    isCombo: true,
    price: 95,
    deliveryPrice: 115,
    cost: 34,
    margin: 64,
    desc: "Crepa dulce de Nutella + Café americano recién colado.",
    portion: "1 Crepa a elegir + 1 Café americano",
    prepTimeMin: 5,
    popular: true,
    icon: "☕",
    image: "assets/img/dishes/crepes.jpg"
  },

  // BEBIDAS (TODO EL DÍA)
  {
    id: "cafe-americano",
    name: "Café Americano de Grano",
    category: "bebidas",
    price: 25,
    deliveryPrice: 32,
    cost: 7,
    margin: 72,
    desc: "Café de grano mexicano de especialidad, recién colado en vaso térmico.",
    portion: "Vaso térmico 12 oz (355 ml)",
    prepTimeMin: 1,
    popular: true,
    icon: "☕",
    image: "assets/img/dishes/drinks.jpg"
  },
  {
    id: "agua-medio-litro",
    name: "Agua Medio Litro (500 ml)",
    category: "bebidas",
    price: 35,
    deliveryPrice: 44,
    cost: 10,
    margin: 71,
    desc: "Botella de agua purificada de 500 ml fría.",
    portion: "Botella 500 ml",
    prepTimeMin: 1,
    popular: true,
    icon: "💧",
    image: "assets/img/dishes/drinks.jpg"
  }
];

export const EXTRAS_OPTIONS = [
  { id: "ext-aguacate", name: "Aguacate extra (40g)", price: 15, forCategories: ["amanecer", "mediodia", "tarde"] },
  { id: "ext-proteina", name: "Doble proteína", price: 20, forCategories: ["amanecer", "mediodia", "tarde"] },
  { id: "ext-integral", name: "Pan integral artesanal", price: 0, forCategories: ["amanecer", "mediodia"] },
  { id: "ext-fruta", name: "Plátano o fresa extra", price: 15, forCategories: ["tarde"] },
  { id: "ext-nutella", name: "Doble Nutella (35g)", price: 15, forCategories: ["tarde"] }
];

export const INITIAL_CHECKLISTS = {
  apertura_630: {
    title: "6:30 · Apertura",
    items: [
      { id: "ap-1", text: "Encender equipo y revisar temperatura del refrigerador (≤ 4 °C)", done: true },
      { id: "ap-2", text: "Lavado de manos, cofia y mandil puesto", done: true },
      { id: "ap-3", text: "Recibir pan del día y revisar cantidad y frescura", done: true },
      { id: "ap-4", text: "Fondo de caja verificado: $500 en cambio", done: true },
      { id: "ap-5", text: "Encender iPad Kiosco con menú y luces de fachada", done: true }
    ]
  },
  produccion_640: {
    title: "6:40 · Producción Mañana",
    items: [
      { id: "pr-1", text: "Exprimir naranja para 10 jugos (tanda 1)", done: true },
      { id: "pr-2", text: "Preparar 2 aguas frescas de 4 L (Jamaica y Horchata/Pepino)", done: true },
      { id: "pr-3", text: "Rebanar jitomate, lavar espinaca, porcionar pavo y panela", done: true },
      { id: "pr-4", text: "Dejar 6 sándwiches Clásicos armados para la hora pico", done: false }
    ]
  },
  mise_1100: {
    title: "11:00 · Mise en place Baguettes",
    items: [
      { id: "mp-1", text: "Porcionar pechuga (100g) y milanesa (110g) del día", done: false },
      { id: "mp-2", text: "Cortar baguettes al tamaño estándar (25 cm)", done: false },
      { id: "mp-3", text: "Segunda tanda de jugo según venta de la mañana", done: false },
      { id: "mp-4", text: "Reponer desechables, bolsas kraft y servilletas", done: false }
    ]
  },
  cambio_1400: {
    title: "14:00 · Cambio de Turno",
    items: [
      { id: "ct-1", text: "Corte parcial de caja (efectivo + terminal)", done: false },
      { id: "ct-2", text: "Conteo rápido de insumos clave (pan, pechuga, panela)", done: false },
      { id: "ct-3", text: "Anotar faltantes en el portal o WhatsApp de compras", done: false },
      { id: "ct-4", text: "Entregar barra limpia y ordenada al turno tarde", done: false }
    ]
  },
  tarde_1600: {
    title: "16:00 · Preparación Tarde",
    items: [
      { id: "tr-1", text: "Preparar masa de crepas (rinde ~20 crepas)", done: false },
      { id: "tr-2", text: "Cortar fresa (80g) y plátano del día", done: false },
      { id: "tr-3", text: "Café recién hecho cada 2 horas", done: false }
    ]
  },
  cierre_2100: {
    title: "21:00 · Cierre y Corte Final",
    items: [
      { id: "ci-1", text: "Corte final y registro de ventas en el POS", done: false },
      { id: "ci-2", text: "Merma del día: registrar qué se tiró y por qué", done: false },
      { id: "ci-3", text: "Limpieza profunda de plancha, crepera, extractor y piso", done: false },
      { id: "ci-4", text: "Etiquetar y refrigerar lo que se guarda (PEPS con fecha y hora)", done: false },
      { id: "ci-5", text: "Enviar pedido de pan para el día siguiente", done: false },
      { id: "ci-6", text: "Apagar equipo y bajar cortina", done: false }
    ]
  }
};

export const INITIAL_INVENTORY = [
  { id: "inv-pan-int", name: "Pan integral artesanal", unit: "rebanadas", stock: 44, minStock: 20, frequency: "Diario (pedido día anterior)" },
  { id: "inv-baguette", name: "Baguette artesanal 25 cm", unit: "piezas", stock: 22, minStock: 12, frequency: "Diario (pedido día anterior)" },
  { id: "inv-pavo", name: "Jamón / Pechuga de pavo", unit: "kg", stock: 2.8, minStock: 1.5, frequency: "2 veces por semana" },
  { id: "inv-pollo", name: "Pechuga y milanesa de pollo", unit: "kg", stock: 3.4, minStock: 1.5, frequency: "2 veces por semana" },
  { id: "inv-panela", name: "Queso panela fresco", unit: "kg", stock: 2.5, minStock: 1.2, frequency: "2 veces por semana" },
  { id: "inv-naranja", name: "Naranja para jugo", unit: "kg", stock: 18, minStock: 10, frequency: "Central de Abastos (2x sem)" },
  { id: "inv-aguacate", name: "Aguacate Hass", unit: "kg", stock: 2.2, minStock: 1.0, frequency: "Central de Abastos (2x sem)" },
  { id: "inv-fresa-plat", name: "Fresa y Plátano fresco", unit: "kg", stock: 3.0, minStock: 1.2, frequency: "Central de Abastos (2x sem)" },
  { id: "inv-desechables", name: "Vasos, bolsas kraft y servilletas", unit: "paquetes", stock: 8, minStock: 3, frequency: "Mensual" }
];

const STORAGE_KEYS = {
  ORDERS: "atoyac_orders_v1",
  CHECKLISTS: "atoyac_checklists_v1",
  INVENTORY: "atoyac_inventory_v1",
  WASTE: "atoyac_waste_v1",
  CUTS: "atoyac_cash_cuts_v1",
  FIREBASE_CONFIG: "atoyac_firebase_config_v1"
};

const syncChannel = typeof BroadcastChannel !== "undefined" ? new BroadcastChannel("atoyac_realtime_sync") : null;

function createSeedOrders() {
  const now = Date.now();
  return [
    {
      id: "ORD-001",
      ticketNumber: 1,
      customerName: "Mariana G.",
      source: "Kiosco iPad",
      orderType: "Para llevar (Barra)",
      paymentMethod: "Tarjeta",
      paymentStatus: "Pagado",
      status: "entregado",
      moment: "amanecer",
      createdAt: now - 1000 * 60 * 95,
      items: [
        { id: "combo-amanecer-atoyac", name: "Combo Amanecer (Atoyac)", qty: 1, unitPrice: 94, extras: ["Pan integral artesanal"], notes: "" }
      ],
      total: 94
    },
    {
      id: "ORD-002",
      ticketNumber: 2,
      customerName: "Carlos R.",
      source: "Mostrador POS",
      orderType: "Para llevar",
      paymentMethod: "Efectivo",
      paymentStatus: "Pagado",
      status: "entregado",
      moment: "amanecer",
      createdAt: now - 1000 * 60 * 65,
      items: [
        { id: "combo-amanecer-clasico", name: "Combo Amanecer (Clásico)", qty: 1, unitPrice: 79, extras: ["Aguacate extra (40g)"], notes: "" }
      ],
      total: 94
    },
    {
      id: "ORD-003",
      ticketNumber: 3,
      customerName: "Sofía M. (Oficina Uxmal)",
      source: "Delivery Web",
      orderType: "Pick-up en Tienda",
      paymentMethod: "Transferencia / Terminal",
      paymentStatus: "Pendiente cobro",
      status: "preparando",
      moment: "mediodia",
      createdAt: now - 1000 * 60 * 8,
      items: [
        { id: "combo-mediodia", name: "Combo Mediodía (Baguette Milanesa + Agua Jamaica)", qty: 1, unitPrice: 109, extras: ["Aguacate extra (40g)"], notes: "Con poca mayonesa" },
        { id: "jugo-verde", name: "Jugo Verde 500 ml", qty: 1, unitPrice: 45, extras: [], notes: "" }
      ],
      total: 169
    },
    {
      id: "ORD-004",
      ticketNumber: 4,
      customerName: "Alejandro T.",
      source: "Kiosco iPad",
      orderType: "En barra",
      paymentMethod: "Tarjeta",
      paymentStatus: "Por cobrar en caja",
      status: "nuevo",
      moment: "mediodia",
      createdAt: now - 1000 * 60 * 2,
      items: [
        { id: "bag-pechuga", name: "Baguette de Pechuga", qty: 1, unitPrice: 89, extras: ["Doble proteína"], notes: "Bien dorada la baguette" },
        { id: "agua-fresca-500", name: "Agua Fresca del Día (500 ml)", qty: 1, unitPrice: 25, extras: [], notes: "Sabor pepino-limón" }
      ],
      total: 134,
      commissionRate: 0,
      commissionAmount: 0,
      netRevenue: 134
    },
    {
      id: "ORD-005",
      ticketNumber: 5,
      customerName: "Valeria P. · Uber Eats",
      source: "Uber Eats",
      platformOrderId: "UB-005",
      driverPin: "PIN #4892",
      orderType: "Delivery Plataforma (Repartidor)",
      paymentMethod: "Uber Pay (Digital)",
      paymentStatus: "Pagado por App",
      status: "nuevo",
      moment: "mediodia",
      createdAt: now - 1000 * 60 * 5,
      items: [
        { id: "combo-mediodia", name: "Combo Mediodía (Baguette Jamón Serrano + Jamaica)", qty: 1, unitPrice: 119, extras: ["Aguacate extra (40g)"], notes: "Empaque térmico para repartidor" },
        { id: "cold-brew", name: "Cold Brew de la Casa 350 ml", qty: 1, unitPrice: 50, extras: [], notes: "Tapa antiderrames sellada" }
      ],
      total: 184,
      commissionRate: 0.28,
      commissionAmount: 52,
      netRevenue: 132,
      notes: "Sello inviolable Uber Eats aplicado"
    },
    {
      id: "ORD-006",
      ticketNumber: 6,
      customerName: "Rodrigo M. · Rappi",
      source: "Rappi",
      platformOrderId: "RP-006",
      driverPin: "PIN #7821",
      orderType: "Delivery Plataforma (Repartidor)",
      paymentMethod: "Rappi Pay",
      paymentStatus: "Pagado por App",
      status: "preparando",
      moment: "mediodia",
      createdAt: now - 1000 * 60 * 12,
      items: [
        { id: "crepa-pavo", name: "Crepa Salada Pechuga y Gouda", qty: 1, unitPrice: 79, extras: ["Queso de cabra extra"], notes: "" },
        { id: "jugo-antiox", name: "Jugo Antioxidante 500 ml", qty: 1, unitPrice: 48, extras: [], notes: "" }
      ],
      total: 147,
      commissionRate: 0.28,
      commissionAmount: 41,
      netRevenue: 106,
      notes: "Bolsa kraft biodegradable sellada"
    },
    {
      id: "ORD-007",
      ticketNumber: 7,
      customerName: "Fernanda S. · DiDi Food",
      source: "DiDi Food",
      platformOrderId: "DD-007",
      driverPin: "Código #5502",
      orderType: "Delivery Plataforma (Repartidor)",
      paymentMethod: "DiDi Pay",
      paymentStatus: "Pagado por App",
      status: "listo",
      moment: "mediodia",
      createdAt: now - 1000 * 60 * 18,
      items: [
        { id: "combo-amanecer-atoyac", name: "Combo Amanecer (Atoyac)", qty: 1, unitPrice: 94, extras: [], notes: "Cliente pidió servilletas extra" }
      ],
      total: 94,
      commissionRate: 0.24,
      commissionAmount: 23,
      netRevenue: 71,
      notes: "Listo en repisa de entrega para repartidor DiDi"
    }
  ];
}

export const AtoyacStore = {
  getOrders() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ORDERS);
      if (!raw) {
        const seeded = createSeedOrders();
        localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(seeded));
        return seeded;
      }
      return JSON.parse(raw);
    } catch (e) {
      return createSeedOrders();
    }
  },

  saveOrders(orders) {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    this.notify("orders_updated");
  },

  isSameDay(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  },

  getNextTicketNumber() {
    const orders = this.getOrders();
    const now = new Date();
    // Filtra las órdenes que corresponden a la jornada de hoy
    const todayOrders = orders.filter(o => this.isSameDay(o.createdAt || Date.now(), now));
    if (todayOrders.length === 0) return 1;
    const ticketNums = todayOrders.map(o => parseInt(o.ticketNumber, 10)).filter(n => !isNaN(n));
    return ticketNums.length > 0 ? Math.max(...ticketNums) + 1 : 1;
  },

  addOrder(orderData) {
    const orders = this.getOrders();
    const nextTicket = orderData.ticketNumber
      ? Number(orderData.ticketNumber)
      : this.getNextTicketNumber();
    const formattedTicket = formatTicketNumber(nextTicket);

    const currentHour = new Date().getHours() + new Date().getMinutes() / 60;
    let detectedMoment = "mediodia";
    if (currentHour < 11.5) detectedMoment = "amanecer";
    else if (currentHour >= 16.5) detectedMoment = "tarde";

    const source = orderData.source || "Kiosco iPad";
    let commissionRate = 0;
    if (source === "Uber Eats") commissionRate = 0.28;
    else if (source === "Rappi") commissionRate = 0.28;
    else if (source === "DiDi Food") commissionRate = 0.24;
    else if (typeof orderData.commissionRate === "number") commissionRate = orderData.commissionRate;

    const total = orderData.total || 0;
    const commissionAmount = Math.round(total * commissionRate);
    const netRevenue = total - commissionAmount;

    const newOrder = {
      id: `ORD-${String(nextTicket).padStart(3, '0')}`,
      ticketNumber: nextTicket,
      customerName: orderData.customerName || `Pedido ${formattedTicket}`,
      customerPhone: orderData.customerPhone || "",
      customerAddress: orderData.customerAddress || "",
      source: source,
      platformOrderId: orderData.platformOrderId || (source === "Uber Eats" ? `UB-${formattedTicket}` : source === "Rappi" ? `RP-${formattedTicket}` : source === "DiDi Food" ? `DD-${formattedTicket}` : ""),
      driverPin: orderData.driverPin || "",
      orderType: orderData.orderType || (["Uber Eats", "Rappi", "DiDi Food"].includes(source) ? "Delivery Plataforma (Repartidor)" : "Para llevar"),
      paymentMethod: orderData.paymentMethod || (["Uber Eats", "Rappi", "DiDi Food"].includes(source) ? `${source} Pay` : "Efectivo"),
      paymentStatus: orderData.paymentStatus || (["Uber Eats", "Rappi", "DiDi Food"].includes(source) ? "Pagado por App" : "Pendiente cobro"),
      status: orderData.status || "nuevo", // nuevo -> preparando -> listo -> entregado
      moment: orderData.moment || detectedMoment,
      createdAt: Date.now(),
      items: orderData.items || [],
      total: total,
      commissionRate: commissionRate,
      commissionAmount: commissionAmount,
      netRevenue: netRevenue,
      notes: orderData.notes || ""
    };

    orders.unshift(newOrder);
    this.saveOrders(orders);
    return newOrder;
  },

  updateOrderStatus(orderId, newStatus, paymentStatus = null) {
    const orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === orderId);
    if (idx !== -1) {
      orders[idx].status = newStatus;
      if (paymentStatus) {
        orders[idx].paymentStatus = paymentStatus;
      }
      orders[idx].updatedAt = Date.now();
      this.saveOrders(orders);
      return orders[idx];
    }
    return null;
  },

  getChecklists() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CHECKLISTS);
      if (!raw) {
        localStorage.setItem(STORAGE_KEYS.CHECKLISTS, JSON.stringify(INITIAL_CHECKLISTS));
        return INITIAL_CHECKLISTS;
      }
      return JSON.parse(raw);
    } catch (e) {
      return INITIAL_CHECKLISTS;
    }
  },

  toggleChecklistItem(groupKey, itemId) {
    const lists = this.getChecklists();
    if (lists[groupKey]) {
      const item = lists[groupKey].items.find(i => i.id === itemId);
      if (item) {
        item.done = !item.done;
        localStorage.setItem(STORAGE_KEYS.CHECKLISTS, JSON.stringify(lists));
        this.notify("checklists_updated");
      }
    }
    return lists;
  },

  getInventory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.INVENTORY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEYS.INVENTORY, JSON.stringify(INITIAL_INVENTORY));
        return INITIAL_INVENTORY;
      }
      return JSON.parse(raw);
    } catch (e) {
      return INITIAL_INVENTORY;
    }
  },

  updateInventoryStock(id, delta) {
    const inv = this.getInventory();
    const item = inv.find(i => i.id === id);
    if (item) {
      item.stock = Math.max(0, Math.round((item.stock + delta) * 10) / 10);
      localStorage.setItem(STORAGE_KEYS.INVENTORY, JSON.stringify(inv));
      this.notify("inventory_updated");
    }
    return inv;
  },

  getWasteLogs() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.WASTE);
      return raw ? JSON.parse(raw) : [
        { id: "W-1", item: "Pan integral artesanal (2 reb)", cost: 8, reason: "Se tostó de más en prueba de plancha", time: "09:15" }
      ];
    } catch (e) {
      return [];
    }
  },

  addWasteLog(entry) {
    const logs = this.getWasteLogs();
    logs.unshift({
      id: `W-${Date.now().toString().slice(-4)}`,
      item: entry.item,
      cost: Number(entry.cost) || 0,
      reason: entry.reason || "Fin de turno",
      time: new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" })
    });
    localStorage.setItem(STORAGE_KEYS.WASTE, JSON.stringify(logs));
    this.notify("waste_updated");
    return logs;
  },

  getCashCuts() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CUTS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  addCashCut(cut) {
    const cuts = this.getCashCuts();
    cuts.unshift({
      id: `CORTE-${Date.now().toString().slice(-4)}`,
      shift: cut.shift, // "14:00 · Cambio de turno" o "21:00 · Cierre final"
      cashCounted: Number(cut.cashCounted) || 0,
      cardTotal: Number(cut.cardTotal) || 0,
      expectedTotal: Number(cut.expectedTotal) || 0,
      notes: cut.notes || "",
      createdAt: new Date().toLocaleString("es-MX")
    });
    localStorage.setItem(STORAGE_KEYS.CUTS, JSON.stringify(cuts));
    this.notify("cuts_updated");
    return cuts;
  },

  simulateDemoDay(targetCount = 34) {
    const orders = [];
    const names = ["Ana P.", "Luis M.", "Fernanda G.", "Roberto C.", "Valeria S.", "Diego H.", "Camila T.", "Jorge V.", "Patricia L.", "Ricardo N."];
    const sources = ["Mostrador POS", "Kiosco iPad", "Delivery Web"];
    const now = Date.now();

    for (let i = 1; i <= targetCount; i++) {
      const ticketNum = i;
      const formatted = formatTicketNumber(ticketNum);
      let moment = "amanecer";
      let itemPool = MENU_ITEMS.filter(m => m.category === "amanecer");
      if (i > 13 && i <= 27) {
        moment = "mediodia";
        itemPool = MENU_ITEMS.filter(m => m.category === "mediodia");
      } else if (i > 27) {
        moment = "tarde";
        itemPool = MENU_ITEMS.filter(m => m.category === "tarde");
      }

      const chosen = itemPool[i % itemPool.length];
      const addExtra = i % 3 === 0;
      const extraPrice = addExtra ? 15 : 0;
      const total = chosen.price + extraPrice;

      orders.unshift({
        id: `ORD-${String(ticketNum).padStart(3, '0')}`,
        ticketNumber: ticketNum,
        customerName: names[i % names.length],
        source: sources[i % sources.length],
        orderType: "Para llevar",
        paymentMethod: i % 2 === 0 ? "Tarjeta" : "Efectivo",
        paymentStatus: "Pagado",
        status: i > targetCount - 3 ? "preparando" : "entregado",
        moment,
        createdAt: now - (targetCount - i) * 1000 * 60 * 14,
        items: [
          {
            id: chosen.id,
            name: chosen.name,
            qty: 1,
            unitPrice: chosen.price,
            extras: addExtra ? ["Aguacate extra (40g)"] : [],
            notes: ""
          }
        ],
        total
      });
    }
    this.saveOrders(orders);
    return orders;
  },

  resetToSeed() {
    const seeded = createSeedOrders();
    this.saveOrders(seeded);
    return seeded;
  },

  notify(eventType) {
    if (syncChannel) {
      syncChannel.postMessage({ type: eventType, timestamp: Date.now() });
    }
    window.dispatchEvent(new CustomEvent("atoyac_store_change", { detail: { type: eventType } }));
  },

  subscribe(callback) {
    if (syncChannel) {
      syncChannel.onmessage = (event) => callback(event.data);
    }
    window.addEventListener("atoyac_store_change", (e) => callback(e.detail));
    window.addEventListener("storage", () => callback({ type: "storage_external" }));
  }
};

export function formatTicketNumber(num) {
  const n = parseInt(num, 10) || 1;
  return `#${String(n).padStart(3, '0')}`;
}

export function getActiveMomentByClock() {
  const now = new Date();
  const hr = now.getHours() + now.getMinutes() / 60;
  if (hr >= 7 && hr < 11.5) return MOMENTS.amanecer;
  if (hr >= 11.5 && hr < 16.5) return MOMENTS.mediodia;
  if (hr >= 16.5 && hr <= 21.5) return MOMENTS.tarde;
  return MOMENTS.amanecer; // Por defecto muestra Amanecer fuera de horario
}

export function formatMXN(amount) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2
  }).format(amount);
}
