/* ============================================================================
   1. BASE DATA: INGREDIENT CATALOG, RECIPES & WEEKLY MENU (PROYECTO FOOD v6)
   ============================================================================ */
const STORAGE_KEY = 'planDiego_v6_heritage_cesto';
const BUDGET_CAP = 400;
const GOALS = { kcal: 2550, p: 165, c: 275, g: 85, water: 3.0 };

const DEFAULT_INGREDIENTS = [
  { id: 'pollo_3b', name: 'Pollo 3B (Pechuga/Fajitas Metepec)', presName: '1 pz / Bolsa 500 g (3B)', unit: 'g', presQty: 500, pricePres: 79, source: 'super', boughtQty: 1000, baseWeeklyQty: 1000, macroBasis: 100, kcal: 165, p: 31, c: 0, g: 3.6, aliases: ['pollo 3b', 'pechuga 3b', 'fajitas 3b', 'pollo metepec', 'pollo'] },
  { id: 'pollo_muslo', name: 'Muslo de pollo sin piel (Cádiz)', presName: 'Charola 600 g (Cádiz)', unit: 'g', presQty: 600, pricePres: 60, source: 'super', boughtQty: 0, baseWeeklyQty: 300, macroBasis: 100, kcal: 177, p: 24, c: 0, g: 8, aliases: ['muslo', 'muslos', 'muslos cadiz', 'muslo de pollo'] },
  { id: 'pollo_pechuga', name: 'Pechuga de pollo fresca (Súper/Pollería)', presName: 'Kg en súper (1000 g)', unit: 'g', presQty: 1000, pricePres: 135, source: 'super', boughtQty: 0, baseWeeklyQty: 700, macroBasis: 100, kcal: 165, p: 31, c: 0, g: 3.6, aliases: ['pechuga', 'pechuga fresca', 'pechuga molida'] },
  { id: 'res_molida', name: 'Carne molida de res 90/10', presName: 'Paquete 500 g', unit: 'g', presQty: 500, pricePres: 90, source: 'super', boughtQty: 400, baseWeeklyQty: 400, macroBasis: 100, kcal: 176, p: 20, c: 0, g: 10, aliases: ['res', 'carne molida', 'molida de res', 'res 3b', 'carne'] },
  { id: 'queso_panela', name: 'Queso Panela (3B / Súper)', presName: 'Bloque 400 g', unit: 'g', presQty: 400, pricePres: 55, source: 'super', boughtQty: 260, baseWeeklyQty: 260, macroBasis: 100, kcal: 206, p: 20, c: 3, g: 12, aliases: ['queso panela', 'panela', 'queso'] },
  { id: 'yogurt_deslac', name: 'Yogurt Natural Deslactosado', presName: 'Bote 1 kg (1000 g)', unit: 'g', presQty: 1000, pricePres: 56, source: 'super', boughtQty: 500, baseWeeklyQty: 500, macroBasis: 100, kcal: 62, p: 5, c: 6.5, g: 1.8, aliases: ['yogurt', 'yogur', 'yogurt deslactosado', 'yogurt natural'] },
  { id: 'avena', name: 'Avena en hojuelas (3B)', presName: 'Bolsa 1 kg (1000 g)', unit: 'g', presQty: 1000, pricePres: 35, source: 'super', boughtQty: 560, baseWeeklyQty: 560, macroBasis: 100, kcal: 389, p: 16.9, c: 66.3, g: 6.9, aliases: ['avena', 'hojuelas de avena', 'avena 3b'] },
  { id: 'arroz', name: 'Arroz blanco/integral (3B)', presName: 'Bolsa 1 kg (1000 g)', unit: 'g', presQty: 1000, pricePres: 28, source: 'super', boughtQty: 280, baseWeeklyQty: 280, macroBasis: 100, kcal: 360, p: 7, c: 79, g: 0.7, aliases: ['arroz', 'arroz 3b'] },
  { id: 'pan_wonder', name: 'Pan Integral Wonder', presName: 'Paquete 680 g (24 reb)', unit: 'reb', presQty: 24, pricePres: 48, source: 'super', boughtQty: 8, baseWeeklyQty: 8, macroBasis: 1, kcal: 70, p: 3.5, c: 12.5, g: 1.0, aliases: ['pan wonder', 'pan integral', 'pan', 'rebanadas de pan'] },
  { id: 'amaranto', name: 'Amaranto natural', presName: 'Bolsa 250 g', unit: 'g', presQty: 250, pricePres: 25, source: 'super', boughtQty: 60, baseWeeklyQty: 60, macroBasis: 100, kcal: 371, p: 13.6, c: 65, g: 7, aliases: ['amaranto'] },
  { id: 'chia', name: 'Semillas de Chía', presName: 'Bolsa 250 g', unit: 'g', presQty: 250, pricePres: 35, source: 'super', boughtQty: 40, baseWeeklyQty: 40, macroBasis: 100, kcal: 486, p: 16.5, c: 42, g: 30.7, aliases: ['chia', 'chía', 'semillas de chia'] },
  { id: 'calabacita', name: 'Calabacitas frescas', presName: 'Kg en súper (1000 g)', unit: 'g', presQty: 1000, pricePres: 30, source: 'super', boughtQty: 400, baseWeeklyQty: 400, macroBasis: 100, kcal: 17, p: 1.2, c: 3.1, g: 0.3, aliases: ['calabacita', 'calabacitas', 'calabaza'] },
  { id: 'zanahoria', name: 'Zanahoria fresca', presName: 'Kg en súper (1000 g)', unit: 'g', presQty: 1000, pricePres: 22, source: 'super', boughtQty: 250, baseWeeklyQty: 250, macroBasis: 100, kcal: 41, p: 0.9, c: 9.6, g: 0.2, aliases: ['zanahoria', 'zanahorias'] },
  { id: 'espinaca', name: 'Espinaca lavada', presName: 'Manojo / Bolsa 250 g', unit: 'g', presQty: 250, pricePres: 20, source: 'super', boughtQty: 150, baseWeeklyQty: 150, macroBasis: 100, kcal: 23, p: 2.9, c: 3.6, g: 0.4, aliases: ['espinaca', 'espinacas'] },
  { id: 'platano', name: 'Plátano tabasco', presName: 'Penca ~6 pz', unit: 'pz', presQty: 6, pricePres: 24, source: 'super', boughtQty: 5, baseWeeklyQty: 5, macroBasis: 1, kcal: 105, p: 1.3, c: 27, g: 0.3, aliases: ['platano', 'plátano', 'platanos'] },
  { id: 'manzana', name: 'Manzana', presName: 'Bolsa ~4 pz', unit: 'pz', presQty: 4, pricePres: 32, source: 'super', boughtQty: 2, baseWeeklyQty: 2, macroBasis: 1, kcal: 95, p: 0.5, c: 25, g: 0.3, aliases: ['manzana', 'manzanas'] },
  { id: 'aceite_aguacate', name: 'Aceite de Aguacate', presName: 'Botella 1000 ml', unit: 'ml', presQty: 1000, pricePres: 185, source: 'super', boughtQty: 45, baseWeeklyQty: 45, macroBasis: 100, kcal: 884, p: 0, c: 0, g: 100, aliases: ['aceite', 'aceite de aguacate'] },
  { id: 'huevo', name: 'Huevo entero (Metepec)', presName: 'Charola 30 pz', unit: 'pz', presQty: 30, pricePres: 85, source: 'casa', boughtQty: 20, baseWeeklyQty: 20, macroBasis: 1, kcal: 72, p: 6.3, c: 0.4, g: 4.8, aliases: ['huevo', 'huevos', 'blanquillos'] },
  { id: 'atun_lata', name: 'Atún en agua (Metepec / 3B)', presName: 'Lata 140 g (100g dren)', unit: 'lata', presQty: 1, pricePres: 22, source: 'casa', boughtQty: 3, baseWeeklyQty: 3, macroBasis: 1, kcal: 110, p: 24, c: 0, g: 1.0, aliases: ['atun', 'atún', 'lata de atun', 'latas de atun'] },
  { id: 'leche_deslac', name: 'Leche Deslactosada (Metepec / 3B)', presName: 'Brik 1000 ml (1 L)', unit: 'ml', presQty: 1000, pricePres: 29, source: 'casa', boughtQty: 750, baseWeeklyQty: 750, macroBasis: 100, kcal: 48, p: 3.3, c: 4.8, g: 1.5, aliases: ['leche', 'leche deslactosada'] }
];

const DEFAULT_RECIPES = [
  {
    id: 'rec_frittata',
    name: 'Frittata / Cuadros de Huevo, Espinaca y Panela',
    servings: 6,
    unitLabel: 'cuadro grande',
    category: 'Batch Metepec · Congelable',
    equipment: 'Refractario de horno o Mini sartén de hierro (180°C x 20 min)',
    ingredients: [
      { ingId: 'huevo', qty: 8 },
      { ingId: 'queso_panela', qty: 100 },
      { ingId: 'espinaca', qty: 150 },
      { ingId: 'aceite_aguacate', qty: 5 }
    ],
    steps: 'Batir los 8 huevos con sal y pimienta. Mezclar espinaca picada y queso panela en cubitos. Verter en tu refractario engrasado (o en tandas en tu mini sartén de hierro) y hornear a 180°C por 20 min. Cortar en 6 cuadros y congelar.'
  },
  {
    id: 'rec_hamb_pollo',
    name: 'Hamburguesitas de Pollo, Calabaza y Avena',
    servings: 9,
    unitLabel: 'hamburguesita (95g)',
    category: 'Batch Metepec · Congelable',
    equipment: 'Procesador + Sartén grande de hierro',
    ingredients: [
      { ingId: 'pollo_pechuga', qty: 700 },
      { ingId: 'calabacita', qty: 250 },
      { ingId: 'avena', qty: 80 },
      { ingId: 'huevo', qty: 2 },
      { ingId: 'aceite_aguacate', qty: 10 }
    ],
    steps: 'Rallar calabacita y exprimir el exceso de agua. Mezclar con el pollo molido/picado (Pollo 3B o Pechuga), avena molida, 2 huevos, ajo y sal. Formar 9 hamburguesitas, sellar 3-4 min por lado en sartén de hierro con aceite de aguacate, enfriar y congelar.'
  },
  {
    id: 'rec_hamb_res',
    name: 'Hamburguesitas de Res 90/10, Zanahoria y Avena',
    servings: 6,
    unitLabel: 'hamburguesita (100g)',
    category: 'Batch Metepec · Congelable',
    equipment: 'Rallador + Sartén de hierro',
    ingredients: [
      { ingId: 'res_molida', qty: 400 },
      { ingId: 'zanahoria', qty: 200 },
      { ingId: 'avena', qty: 60 },
      { ingId: 'huevo', qty: 1 },
      { ingId: 'aceite_aguacate', qty: 5 }
    ],
    steps: 'Rallar fino la zanahoria. Integrar con la carne de res 90/10, hojuelas de avena, 1 huevo, comino, ajo y sal. Formar 6 hamburguesas jugosas, sellar en sartén caliente, enfriar y congelar.'
  },
  {
    id: 'rec_hamb_atun',
    name: 'Hamburguesitas / Croquetas de Atún y Avena',
    servings: 6,
    unitLabel: 'hamburguesita',
    category: 'Batch Metepec · Congelable',
    equipment: 'Bowl + Sartén de hierro',
    ingredients: [
      { ingId: 'atun_lata', qty: 3 },
      { ingId: 'zanahoria', qty: 50 },
      { ingId: 'avena', qty: 80 },
      { ingId: 'huevo', qty: 3 },
      { ingId: 'aceite_aguacate', qty: 10 }
    ],
    steps: 'Drenar muy bien las 3 latas de atún. Mezclar con zanahoria rallada, 80g de avena y 3 huevos. Formar 6 tortitas compactas y dorar 3 min por lado en sartén de hierro.'
  },
  {
    id: 'rec_hotcakes',
    name: 'Mini Hot Cakes Proteicos de Avena y Plátano',
    servings: 8,
    unitLabel: 'mini hot cake',
    category: 'Batch Metepec · Congelable',
    equipment: 'Licuadora + Sartén de hierro',
    ingredients: [
      { ingId: 'avena', qty: 160 },
      { ingId: 'huevo', qty: 4 },
      { ingId: 'leche_deslac', qty: 150 },
      { ingId: 'platano', qty: 2 },
      { ingId: 'chia', qty: 20 },
      { ingId: 'aceite_aguacate', qty: 5 }
    ],
    steps: 'Licuar avena, 4 huevos, leche deslactosada, 2 plátanos, chía y canela. Cocinar 8 mini hot cakes a fuego medio-bajo en sartén de hierro. Enfriar y congelar (se calientan en 60 seg en microondas).'
  },
  {
    id: 'rec_arroz_batch',
    name: 'Arroz al Vapor para Congelar (4 Porciones)',
    servings: 4,
    unitLabel: 'bolsita (200g cocido)',
    category: 'Batch Metepec · Congelable',
    equipment: 'Olla con tapa',
    ingredients: [
      { ingId: 'arroz', qty: 280 }
    ],
    steps: 'Cocinar los 280g de arroz crudo con el doble de agua, ajo y sal (~800g cocido). Dividir en 4 porciones de 200g cocido y congelar plano.'
  },
  {
    id: 'rec_overnight_oats',
    name: 'Overnight Oats Deslactosadas con Chía (Porción Día)',
    servings: 2,
    unitLabel: 'tupper CH1 (1 día)',
    category: 'Fresco en Cádiz · Lun y Mié',
    equipment: 'Tupper Chico [CH1] en refrigerador',
    ingredients: [
      { ingId: 'avena', qty: 180 },
      { ingId: 'leche_deslac', qty: 500 },
      { ingId: 'chia', qty: 20 },
      { ingId: 'platano', qty: 2 }
    ],
    steps: 'Cada porción (para Martes y Jueves) lleva 90g avena + 250ml leche deslactosada + 10g chía reposando toda la noche en el tupper [CH1], más 1 plátano al despertar.'
  },
  {
    id: 'rec_sandwich_panela',
    name: 'Sándwich Doble de Queso Panela Asado (4 cenas/snacks)',
    servings: 4,
    unitLabel: 'sándwich (2 reb + 40g queso)',
    category: 'Fresco en Cádiz · Sartén de hierro',
    equipment: 'Sartén de hierro en Cádiz',
    ingredients: [
      { ingId: 'pan_wonder', qty: 8 },
      { ingId: 'queso_panela', qty: 160 }
    ],
    steps: 'Asar 40g de queso panela en el sartén de hierro y armar el sándwich con 2 rebanadas de pan Wonder integral tostado.'
  },
  {
    id: 'rec_muslo_viernes',
    name: 'Pollo / Muslos a la Plancha con Calabacitas (Cierre Viernes)',
    servings: 1,
    unitLabel: 'comida completa de viernes',
    category: 'Fresco/Congelado · Viernes',
    equipment: 'Sartén de hierro en Cádiz',
    ingredients: [
      { ingId: 'pollo_muslo', qty: 300 },
      { ingId: 'calabacita', qty: 150 },
      { ingId: 'aceite_aguacate', qty: 10 }
    ],
    steps: 'Cocinar los 300g de pollo (Pollo 3B o Muslo) picado con 150g de calabacitas en el sartén de hierro para dejar el refri limpio antes de irte a Metepec.'
  },
  {
    id: 'rec_yogurt_bowl',
    name: 'Bowl de Yogurt Deslactosado con Amaranto y Manzana',
    servings: 2,
    unitLabel: 'bowl (250g yogurt + 30g amaranto)',
    category: 'Fresco en Cádiz · Lun y Jue',
    equipment: 'Tupper Chico [CH2]',
    ingredients: [
      { ingId: 'yogurt_deslac', qty: 500 },
      { ingId: 'amaranto', qty: 60 },
      { ingId: 'manzana', qty: 2 }
    ],
    steps: 'Servir 250g de yogurt natural deslactosado con 30g de amaranto y 1 manzana picada.'
  }
];

const WEEKLY_MENU_TEMPLATE = {
  lun: {
    label: 'LUN', name: 'Lunes — Llegada de Metepec a Cádiz',
    banner: 'Llegas con tu hielera congelada desde Metepec y el lunch casero de mamá. Noche a las 10 PM: pasa las porciones del martes del congelador al refri y deja tus Overnight Oats listas en [CH1].',
    meals: [
      { id: 'lun_1', time: 'DESAYUNO', recipeId: 'rec_hotcakes', basePortions: 4, fallbackName: '4 Mini Hot Cakes Proteicos + 2 huevos revueltos extra', extraIngs: [{ ingId: 'huevo', qty: 2 }, { ingId: 'leche_deslac', qty: 100 }] },
      { id: 'lun_2', time: 'COMIDA OFICINA + 💊 CENTRUM', customFixed: { name: 'Lunch Casero de Mamá (Metepec · $0) + 1 Tab Centrum', sub: 'Pollo/ carne guisada casera con arroz o verduras en tupper [GD]', kcal: 780, p: 50, c: 75, g: 26 } },
      { id: 'lun_3', time: 'PRE-GYM / SNACK', recipeId: 'rec_yogurt_bowl', basePortions: 1 },
      { id: 'lun_4', time: 'CENA EN CÁDIZ', recipeId: 'rec_hamb_atun', basePortions: 2, extraRecipe: { recipeId: 'rec_sandwich_panela', basePortions: 1 } }
    ]
  },
  mar: {
    label: 'MAR', name: 'Martes — Rutina Full Hamburguesitas & Frittata',
    banner: 'Cero picar verduras hoy: tus hamburguesas de res/pollo y tus cuadros de frittata ya están descongelados en el refri desde anoche.',
    meals: [
      { id: 'mar_1', time: 'DESAYUNO', recipeId: 'rec_overnight_oats', basePortions: 1, extraRecipe: { recipeId: 'rec_frittata', basePortions: 3 } },
      { id: 'mar_2', time: 'COMIDA OFICINA + 💊 CENTRUM', recipeId: 'rec_hamb_res', basePortions: 2, extraRecipe: { recipeId: 'rec_arroz_batch', basePortions: 1 } },
      { id: 'mar_3', time: 'PRE-GYM / SNACK', recipeId: 'rec_sandwich_panela', basePortions: 1 },
      { id: 'mar_4', time: 'CENA EN CÁDIZ', recipeId: 'rec_hamb_pollo', basePortions: 3 }
    ]
  },
  mie: {
    label: 'MIÉ', name: 'Miércoles — Mitad de Semana',
    banner: 'Desayuno rápido de Mini Hot Cakes (60 seg en microondas) y comida de Hamburguesitas de Pollo con Arroz en tu tupper [GD].',
    meals: [
      { id: 'mie_1', time: 'DESAYUNO', recipeId: 'rec_hotcakes', basePortions: 4 },
      { id: 'mie_2', time: 'COMIDA OFICINA + 💊 CENTRUM', recipeId: 'rec_hamb_pollo', basePortions: 3, extraRecipe: { recipeId: 'rec_arroz_batch', basePortions: 1 } },
      { id: 'mie_3', time: 'PRE-GYM / SNACK', recipeId: 'rec_yogurt_bowl', basePortions: 1 },
      { id: 'mie_4', time: 'CENA EN CÁDIZ', recipeId: 'rec_hamb_atun', basePortions: 2, extraRecipe: { recipeId: 'rec_sandwich_panela', basePortions: 1 } }
    ]
  },
  jue: {
    label: 'JUE', name: 'Jueves — Fuerza y Recomposición',
    banner: 'Jueves de Overnight Oats + Frittata horneada por la mañana, Hamburguesitas de Res en la oficina y Pollo en la cena.',
    meals: [
      { id: 'jue_1', time: 'DESAYUNO', recipeId: 'rec_overnight_oats', basePortions: 1, extraRecipe: { recipeId: 'rec_frittata', basePortions: 3 } },
      { id: 'jue_2', time: 'COMIDA OFICINA + 💊 CENTRUM', recipeId: 'rec_hamb_res', basePortions: 2, extraRecipe: { recipeId: 'rec_arroz_batch', basePortions: 1 } },
      { id: 'jue_3', time: 'PRE-GYM / SNACK', recipeId: 'rec_sandwich_panela', basePortions: 1 },
      { id: 'jue_4', time: 'CENA EN CÁDIZ', recipeId: 'rec_hamb_pollo', basePortions: 3 }
    ]
  },
  vie: {
    label: 'VIE', name: 'Viernes — Liquidación de Inventario y Regreso a Metepec',
    banner: 'Terminas tus últimas hamburguesitas de res y atún, liquidas el pollo con calabacita y dejas el refri de Cádiz limpio.',
    meals: [
      { id: 'vie_1', time: 'DESAYUNO', recipeId: 'rec_hamb_atun', basePortions: 2, extraIngs: [{ ingId: 'avena', qty: 60 }, { ingId: 'platano', qty: 1 }] },
      { id: 'vie_2', time: 'COMIDA OFICINA + 💊 CENTRUM', recipeId: 'rec_hamb_res', basePortions: 2, extraRecipe: { recipeId: 'rec_arroz_batch', basePortions: 1 } },
      { id: 'vie_3', time: 'CENA / CIERRE CÁDIZ', recipeId: 'rec_muslo_viernes', basePortions: 1 }
    ]
  },
  sab: {
    label: 'SÁB', name: 'Sábado — Fin de Semana en Metepec ($0)',
    banner: 'Estancia en casa en Metepec. Aprovecha la comida familiar priorizando proteína magra y realiza tu compra semanal de ≤ $400 MXN.',
    meals: [
      { id: 'sab_1', time: 'DESAYUNO METEPEC', customFixed: { name: 'Desayuno en Casa (4 huevos al gusto + avena/fruta)', sub: 'Insumos de casa en Metepec ($0)', kcal: 680, p: 42, c: 65, g: 26 } },
      { id: 'sab_2', time: 'COMIDA FAMILIAR + 💊 CENTRUM', customFixed: { name: 'Comida Familiar en Metepec + 1 Tab Centrum', sub: 'Priorizar carne/pollo asado o guisado + arroz/tortillas y verduras', kcal: 950, p: 65, c: 95, g: 32 } },
      { id: 'sab_3', time: 'CENA METEPEC', customFixed: { name: 'Cena Ligera en Casa (Atún o Queso Panela + Pan/Verdura)', sub: 'Insumos de casa en Metepec ($0)', kcal: 650, p: 48, c: 60, g: 22 } }
    ]
  },
  dom: {
    label: 'DOM', name: 'Domingo — Sesión de Batch Cooking (90 min) en Metepec',
    banner: 'Hoy cocinas tus lotes de hamburguesitas, frittata en refractario y mini hot cakes para congelar y llevarte mañana lunes a Cádiz 101.',
    meals: [
      { id: 'dom_1', time: 'DESAYUNO METEPEC', customFixed: { name: 'Desayuno Dominical en Casa (Huevos + Pan/Fruta)', sub: 'Insumos de casa en Metepec ($0)', kcal: 700, p: 42, c: 70, g: 26 } },
      { id: 'dom_2', time: 'COMIDA FAMILIAR + 💊 CENTRUM', customFixed: { name: 'Comida Dominical en Familia + 1 Tab Centrum', sub: 'Recarga de glucógeno para iniciar el lunes con fuerza', kcal: 980, p: 68, c: 100, g: 32 } },
      { id: 'dom_3', time: 'CENA + EMPAQUE HIELERA', customFixed: { name: 'Cena Ligera + Empaque de Tuppers Congelados', sub: 'Dejar lista la hielera y el lunch de mamá para el lunes', kcal: 620, p: 45, c: 55, g: 20 } }
    ]
  }
};

/* ============================================================================
   2. STATE MANAGEMENT & CLOUD / JSON BACKUP
   ============================================================================ */
let state = {
  activeTab: 'compra',
  compraSubView: 'cesto',
  activeDay: 'lun',
  ingredients: JSON.parse(JSON.stringify(DEFAULT_INGREDIENTS)),
  recipes: JSON.parse(JSON.stringify(DEFAULT_RECIPES)),
  menuScaleByRecipe: {},
  checkedMeals: {},
  waterByDay: { lun: 0, mar: 0, mie: 0, jue: 0, vie: 0, sab: 0, dom: 0 },
  centrumByDay: { lun: false, mar: false, mie: false, jue: false, vie: false, sab: false, dom: false },
  extrasByDay: { lun: [], mar: [], mie: [], jue: [], vie: [], sab: [], dom: [] },
  prepChecks: {}
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = Object.assign({}, state, parsed);
      if (!state.ingredients || !state.ingredients.length) {
        state.ingredients = JSON.parse(JSON.stringify(DEFAULT_INGREDIENTS));
      }
      if (!state.recipes || !state.recipes.length) {
        state.recipes = JSON.parse(JSON.stringify(DEFAULT_RECIPES));
      }
    }
  } catch (e) {
    console.warn('Error loading state:', e);
  }
  adaptMenuToPurchase(false);
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Error saving state:', e);
  }
}

function exportBackupJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `respaldo_proyecto_food_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
  showToast('💾 Respaldo JSON descargado');
}

function importBackupJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && Array.isArray(imported.ingredients)) {
        state = Object.assign({}, state, imported);
        saveState();
        renderAll();
        showToast('✅ Respaldo importado con éxito');
      } else {
        showToast('⚠️ Archivo JSON inválido');
      }
    } catch (err) {
      showToast('⚠️ Error al leer el respaldo');
    }
  };
  reader.readAsText(file);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

/* ============================================================================
   3. MATHEMATICAL ENGINE: INGREDIENT COSTS, MACROS & ADAPTATION
   ============================================================================ */
function getIng(id) {
  let found = state.ingredients.find(i => i.id === id);
  const poultryGroup = ['pollo_3b', 'pollo_pechuga', 'pollo_muslo'];
  if (poultryGroup.includes(id)) {
    if (!found || (Number(found.boughtQty) || 0) <= 0) {
      const activePoultry = state.ingredients.find(i => poultryGroup.includes(i.id) && (Number(i.boughtQty) || 0) > 0);
      if (activePoultry) return activePoultry;
    }
  }
  return found;
}

function getCatalogIngExact(id) {
  return state.ingredients.find(i => i.id === id);
}

function getIngUnitCost(ing) {
  if (!ing || ing.source === 'casa') return 0;
  const presQty = Math.max(0.0001, Number(ing.presQty) || 1);
  return (Number(ing.pricePres) || 0) / presQty;
}

function getIngWeeklyCost(ing) {
  if (!ing || ing.source === 'casa') return 0;
  return getIngUnitCost(ing) * (Number(ing.boughtQty) || 0);
}

function getIngMacrosForQty(ing, qty) {
  if (!ing) return { kcal: 0, p: 0, c: 0, g: 0, cost: 0 };
  const q = Number(qty) || 0;
  const basis = Number(ing.macroBasis) || 100;
  const factor = q / basis;
  return {
    kcal: (Number(ing.kcal) || 0) * factor,
    p: (Number(ing.p) || 0) * factor,
    c: (Number(ing.c) || 0) * factor,
    g: (Number(ing.g) || 0) * factor,
    cost: getIngUnitCost(ing) * q
  };
}

function calcRecipeStats(recipe) {
  let totKcal = 0, totP = 0, totC = 0, totG = 0, totCost = 0;
  let limitingRatio = Infinity;
  let limitingIngName = '';

  const scale = state.menuScaleByRecipe[recipe.id] !== undefined ? state.menuScaleByRecipe[recipe.id] : 1;

  recipe.ingredients.forEach(item => {
    const ing = getIng(item.ingId);
    const scaledQty = (Number(item.qty) || 0) * scale;
    const m = getIngMacrosForQty(ing, scaledQty);
    totKcal += m.kcal;
    totP += m.p;
    totC += m.c;
    totG += m.g;
    totCost += m.cost;

    if (ing && item.qty > 0) {
      const ratio = (Number(ing.boughtQty) || 0) / Number(item.qty);
      if (ratio < limitingRatio) {
        limitingRatio = ratio;
        limitingIngName = ing.name;
      }
    }
  });

  if (!isFinite(limitingRatio)) limitingRatio = 1;
  const servings = Math.max(1, Number(recipe.servings) || 1);
  const maxPossibleServings = Math.floor(limitingRatio * servings * 10) / 10;

  return {
    scale,
    servings,
    totKcal: Math.round(totKcal),
    totP: Math.round(totP * 10) / 10,
    totC: Math.round(totC * 10) / 10,
    totG: Math.round(totG * 10) / 10,
    totCost: Math.round(totCost * 10) / 10,
    perKcal: Math.round(totKcal / servings),
    perP: Math.round((totP / servings) * 10) / 10,
    perC: Math.round((totC / servings) * 10) / 10,
    perG: Math.round((totG / servings) * 10) / 10,
    perCost: Math.round((totCost / servings) * 10) / 10,
    limitingRatio,
    limitingIngName,
    maxPossibleServings
  };
}

function computeBaseRecipeIngredientDemand() {
  const demand = {};
  state.recipes.forEach(rec => {
    rec.ingredients.forEach(it => {
      const effIng = getIng(it.ingId);
      const key = effIng ? effIng.id : it.ingId;
      demand[key] = (demand[key] || 0) + (Number(it.qty) || 0);
    });
  });
  return demand;
}

function adaptMenuToPurchase(notify = false) {
  const demand = computeBaseRecipeIngredientDemand();

  state.recipes.forEach(rec => {
    let ratios = [];
    rec.ingredients.forEach((it, idx) => {
      const ing = getIng(it.ingId);
      if (!ing || !it.qty) return;
      const totalDemanded = demand[ing.id] || it.qty;
      const availableForThisRecipe = (Number(ing.boughtQty) || 0) * (it.qty / totalDemanded);
      const r = availableForThisRecipe / it.qty;
      ratios.push(idx === 0 ? r : r);
    });
    const primaryRatio = ratios.length > 0 ? ratios[0] : 1;
    const clamped = Math.max(0.25, Math.min(2.5, Math.round(primaryRatio * 100) / 100));
    state.menuScaleByRecipe[rec.id] = clamped;
  });

  saveState();
  renderAll();
  if (notify) {
    showToast('⚡ Menú y Recetario adaptados a tu Cesto / Despensa');
  }
}

/* ============================================================================
   4. RENDER: TAB 1 — INSUMOS, PRESENTACIONES Y MOTOR DE PRESUPUESTO
   ============================================================================ */
function switchCompraSubView(sub) {
  state.compraSubView = sub;
  const vCesto = document.getElementById('subview-cesto');
  const vCat = document.getElementById('subview-catalogo');
  const bCesto = document.getElementById('subbtn-cesto');
  const bCat = document.getElementById('subbtn-catalogo');
  if (vCesto && vCat) {
    vCesto.style.display = sub === 'cesto' ? 'block' : 'none';
    vCat.style.display = sub === 'catalogo' ? 'block' : 'none';
  }
  if (bCesto && bCat) {
    bCesto.className = sub === 'cesto' ? 'btn btn-primary' : 'btn btn-secondary';
    bCat.className = sub === 'catalogo' ? 'btn btn-primary' : 'btn btn-secondary';
  }
}

function renderCatalogAndEngine() {
  let totalWeeklyCost = 0;
  let totalCashOutflow = 0;
  let totalBoughtKcal = 0, totalBoughtP = 0, totalBoughtC = 0, totalBoughtG = 0;

  const cestoItems = state.ingredients.filter(ing => (Number(ing.boughtQty) || 0) > 0);
  const cestoCountEl = document.getElementById('cesto-count-lbl');
  if (cestoCountEl) cestoCountEl.textContent = cestoItems.length;

  cestoItems.forEach(ing => {
    const wkCost = getIngWeeklyCost(ing);
    totalWeeklyCost += wkCost;
    if (ing.source === 'super' && ing.boughtQty > 0) {
      const packsNeeded = Math.ceil((Number(ing.boughtQty) || 0) / Math.max(1, Number(ing.presQty) || 1));
      totalCashOutflow += packsNeeded * (Number(ing.pricePres) || 0);
    }
    const m = getIngMacrosForQty(ing, ing.boughtQty);
    totalBoughtKcal += m.kcal;
    totalBoughtP += m.p;
    totalBoughtC += m.c;
    totalBoughtG += m.g;
  });

  const avgDailyKcal = Math.round((totalBoughtKcal + 780) / 5);
  const avgDailyP = Math.round((totalBoughtP + 50) / 5);
  const avgDailyC = Math.round((totalBoughtC + 75) / 5);
  const avgDailyG = Math.round((totalBoughtG + 26) / 5);

  const diffBudget = BUDGET_CAP - totalWeeklyCost;
  const budgetOk = totalWeeklyCost <= BUDGET_CAP;

  document.getElementById('hdr-budget').textContent = `$${Math.round(totalWeeklyCost)} / $${BUDGET_CAP}`;
  const bPct = Math.min(100, Math.round((totalWeeklyCost / BUDGET_CAP) * 100));
  const barB = document.getElementById('bar-budget');
  barB.style.width = bPct + '%';
  barB.style.background = budgetOk ? '#FFFFFF' : '#FCA5A5';

  const kpiHtml = `
    <div class="kpi-box ${budgetOk ? 'green' : 'amber'}">
      <div class="t-label-caps" style="color:var(--c-secondary);">COSTO EN CESTO / DESPENSA</div>
      <div class="kpi-val" style="color:${budgetOk ? 'var(--c-success)' : 'var(--c-tertiary)'};">$${totalWeeklyCost.toFixed(2)} <span style="font-size:0.8rem;">MXN</span></div>
      <div class="kpi-sub">${budgetOk ? `✅ $${diffBudget.toFixed(2)} debajo del tope ($400)` : `⚠️ Excede por $${Math.abs(diffBudget).toFixed(2)} MXN`}</div>
    </div>
    <div class="kpi-box clay">
      <div class="t-label-caps" style="color:var(--c-secondary);">PROTEÍNA EN DESPENSA (LUN-VIE)</div>
      <div class="kpi-val">${avgDailyP} g/día</div>
      <div class="kpi-sub">Meta: ${GOALS.p}–170 g/día (${Math.round((avgDailyP/GOALS.p)*100)}% cubierto)</div>
    </div>
    <div class="kpi-box">
      <div class="t-label-caps" style="color:var(--c-secondary);">ENERGÍA PROVISTA (LUN-VIE)</div>
      <div class="kpi-val">${avgDailyKcal} kcal/día</div>
      <div class="kpi-sub">Meta: ${GOALS.kcal} kcal · ${avgDailyC}g C · ${avgDailyG}g G</div>
    </div>
    <div class="kpi-box">
      <div class="t-label-caps" style="color:var(--c-secondary);">INSUMOS EN TU CESTO</div>
      <div class="kpi-val" style="color:var(--c-ice);">${cestoItems.length} Productos</div>
      <div class="kpi-sub">Gasto en caja por paq. cerrados: ~$${totalCashOutflow} MXN</div>
    </div>
  `;
  document.getElementById('budget-kpis').innerHTML = kpiHtml;

  const suggestions = [];
  if (totalWeeklyCost > BUDGET_CAP) {
    const excess = Math.ceil(totalWeeklyCost - BUDGET_CAP);
    suggestions.push({
      type: 'warn',
      text: `<strong>Presupuesto excedido por $${excess} MXN:</strong> Tu cesto suma <strong>$${totalWeeklyCost.toFixed(2)} MXN</strong>. Puedes usar <strong>Pollo 3B (1 pz = 500g a $79)</strong> + Huevo/Atún de Metepec ($0) o ajustar la carne de res para regresar debajo de $400 MXN.`,
      actionLabel: 'Optimizar Cesto ≤ $400',
      actionFn: 'optimizeBudgetUnder400()'
    });
  } else {
    suggestions.push({
      type: 'ok',
      text: `<strong>Cesto dentro de Presupuesto ($${totalWeeklyCost.toFixed(2)} / $400 MXN):</strong> Te quedan <strong>$${diffBudget.toFixed(2)} MXN</strong> disponibles.`
    });
  }

  if (avgDailyP < GOALS.p - 5) {
    const missingPPerDay = GOALS.p - avgDailyP;
    const extraEggs = Math.ceil((missingPPerDay * 5) / 6.3);
    suggestions.push({
      type: 'warn',
      text: `<strong>Faltan ~${missingPPerDay}g Proteína/día en tu Cesto (${avgDailyP}g vs ${GOALS.p}g):</strong> Añade <strong>"pollo 3B 1 pz"</strong> (+155g P por $79) o <strong>+${extraEggs} huevos de Metepec ($0)</strong>.`,
      actionLabel: `+1 Pz Pollo 3B (500g)`,
      actionFn: `addIngredientQty('pollo_3b', 500)`
    });
  } else {
    suggestions.push({
      type: 'ok',
      text: `<strong>Meta Proteica Cubierta (${avgDailyP} g/día):</strong> Tu despensa cubre los 2.2 g/kg para tus 75 kg.`
    });
  }

  document.getElementById('engine-suggestions-list').innerHTML = suggestions.map(s => `
    <div class="suggestion-item ${s.type}">
      <div style="flex:1; font-size:0.85rem;">${s.text}</div>
      ${s.actionLabel ? `<button class="btn btn-primary btn-sm" onclick="${s.actionFn}">${s.actionLabel}</button>` : ''}
    </div>
  `).join('');

  const qSel = document.getElementById('quick-cesto-select');
  if (qSel) {
    const prevVal = qSel.value;
    qSel.innerHTML = state.ingredients.map(ing =>
      `<option value="${ing.id}">${ing.name} — [${ing.presName}: ${ing.presQty}${ing.unit} · $${ing.source === 'casa' ? '0 Casa' : ing.pricePres}]</option>`
    ).join('');
    if (prevVal && state.ingredients.some(i => i.id === prevVal)) qSel.value = prevVal;
    updateQuickCestoUnitHint();
  }

  const cestoTbody = document.getElementById('cesto-tbody');
  if (cestoTbody) {
    if (cestoItems.length === 0) {
      cestoTbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center; padding:24px; color:var(--c-secondary);">
            Tu cesto está vacío. Escribe arriba (ej. <code>pollo 3B 2 pz, avena 500g, huevo 20 pz</code>) o elige un producto del catálogo para llenar tu despensa.
          </td>
        </tr>
      `;
    } else {
      cestoTbody.innerHTML = cestoItems.map(ing => {
        const wkCost = getIngWeeklyCost(ing);
        const packsEq = ((Number(ing.boughtQty) || 0) / Math.max(1, Number(ing.presQty) || 1));
        const m = getIngMacrosForQty(ing, ing.boughtQty);
        return `
          <tr>
            <td>
              <div style="font-weight:700;">${ing.name}</div>
              <span class="badge ${ing.source === 'casa' ? 'badge-ice' : 'badge-neutral'}">
                ${ing.source === 'casa' ? '🏠 Casa Metepec ($0)' : '🏪 Compra ($' + ing.pricePres + ' / pres.)'}
              </span>
            </td>
            <td>
              <span style="font-size:0.8rem; color:var(--c-secondary);">${ing.presName} (${ing.presQty} ${ing.unit})</span>
            </td>
            <td>
              <div style="display:flex; align-items:center; gap:4px;">
                <button class="btn btn-secondary btn-sm" onclick="addIngredientPacks('${ing.id}', -0.5)" title="Restar medio paquete">-</button>
                <span class="t-mono-num" style="min-width:52px; text-align:center;">${packsEq.toFixed(2)} pz/paq</span>
                <button class="btn btn-secondary btn-sm" onclick="addIngredientPacks('${ing.id}', 0.5)" title="Sumar medio paquete">+</button>
              </div>
            </td>
            <td>
              <div style="display:flex; align-items:center; gap:4px;">
                <input type="number" class="tbl-input" style="width:76px; border-color:var(--c-tertiary); background:#FFF9F8;" value="${ing.boughtQty}" min="0" step="any" onchange="updateIngBought('${ing.id}', parseFloat(this.value)||0)">
                <span class="t-mono-num" style="font-size:0.75rem;">${ing.unit}</span>
              </div>
            </td>
            <td>
              <span class="t-mono-num" style="font-size:0.9rem; color:${ing.source === 'casa' ? 'var(--c-ice)' : 'var(--c-primary)'};">
                ${ing.source === 'casa' ? '$0.00' : '$' + wkCost.toFixed(2)}
              </span>
            </td>
            <td>
              <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--c-secondary);">
                <strong>${Math.round(m.kcal)}</strong> kcal · <strong style="color:var(--c-tertiary);">${Math.round(m.p)}g P</strong> · ${Math.round(m.c)}g C · ${Math.round(m.g)}g G
              </div>
            </td>
            <td>
              <button class="btn btn-secondary btn-sm" style="color:var(--c-tertiary); border-color:var(--c-tertiary-container);" onclick="removeFromCesto('${ing.id}')" title="Quitar de la despensa de esta semana">
                🗑️ Quitar
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  const tbody = document.getElementById('catalog-tbody');
  if (tbody) {
    tbody.innerHTML = state.ingredients.map(ing => {
      const basisLbl = ing.macroBasis === 1 ? `1 ${ing.unit}` : `100 ${ing.unit}`;
      return `
        <tr>
          <td>
            <input type="text" class="tbl-input tbl-input-text" style="width:185px; margin-bottom:3px;" value="${ing.name}" onchange="updateIngField('${ing.id}', 'name', this.value)">
            <div>
              <select class="tbl-input" style="width:auto; text-align:left; font-size:0.7rem; padding:2px 5px;" onchange="updateIngField('${ing.id}', 'source', this.value)">
                <option value="super" ${ing.source === 'super' ? 'selected' : ''}>🏪 Tienda 3B / Súper ($)</option>
                <option value="casa" ${ing.source === 'casa' ? 'selected' : ''}>🏠 Casa Metepec ($0)</option>
              </select>
            </div>
          </td>
          <td>
            <input type="text" class="tbl-input tbl-input-text" value="${ing.presName}" onchange="updateIngField('${ing.id}', 'presName', this.value)">
          </td>
          <td>
            <div style="display:flex; align-items:center; gap:4px;">
              <input type="number" class="tbl-input" style="width:68px;" value="${ing.presQty}" min="1" step="any" onchange="updateIngField('${ing.id}', 'presQty', parseFloat(this.value)||1)">
              <span class="t-mono-num" style="font-size:0.75rem; color:var(--c-secondary);">${ing.unit}</span>
            </div>
          </td>
          <td>
            <div style="display:flex; align-items:center; gap:3px;">
              <span class="t-mono-num">$</span>
              <input type="number" class="tbl-input" style="width:64px;" value="${ing.pricePres}" min="0" step="any" onchange="updateIngField('${ing.id}', 'pricePres', parseFloat(this.value)||0)">
            </div>
          </td>
          <td>
            <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--c-secondary);">
              Por ${basisLbl}: <strong>${ing.kcal}</strong> kcal | <strong>${ing.p}g</strong> P | <strong>${ing.c}g</strong> C | <strong>${ing.g}g</strong> G
            </div>
          </td>
          <td>
            <button class="btn btn-primary btn-sm" onclick="addIngredientPacks('${ing.id}', 1)">
              +1 Pz/Paq al Cesto (${ing.presQty}${ing.unit})
            </button>
          </td>
          <td>
            <button class="btn btn-secondary btn-sm" style="color:var(--c-tertiary);" onclick="deleteIngredient('${ing.id}')" title="Borrar producto permanentemente del catálogo">
              🗑️ Borrar
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }
}

/* ============================================================================
   4B. NATURAL LANGUAGE PARSER FOR CESTO / DESPENSA & DAILY MEALS
   ============================================================================ */
function normalizeStr(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function matchCatalogIngredientFromSegment(segNorm) {
  let bestIng = null;
  let bestScore = 0;

  state.ingredients.forEach(ing => {
    const candidates = [ing.name, ...(ing.aliases || [])].map(normalizeStr);
    candidates.forEach(cand => {
      if (!cand) return;
      if (segNorm.includes(cand)) {
        const score = cand.length + (cand.includes('3b') && segNorm.includes('3b') ? 20 : 0) + (cand.includes('cadiz') && segNorm.includes('cadiz') ? 20 : 0);
        if (score > bestScore) {
          bestScore = score;
          bestIng = ing;
        }
      }
    });
  });

  if (!bestIng) {
    state.ingredients.forEach(ing => {
      const words = normalizeStr(ing.name).split(/\s+/).filter(w => w.length > 3 && !['para', 'con', 'sin', 'peso'].includes(w));
      words.forEach(w => {
        if (segNorm.includes(w) && w.length > bestScore) {
          bestScore = w.length;
          bestIng = ing;
        }
      });
    });
  }
  return bestIng;
}

function parseNaturalCestoText(rawText) {
  const segments = (rawText || '').split(/[,;\n]+/).map(s => s.trim()).filter(Boolean);
  const parsedItems = [];

  segments.forEach(seg => {
    const segNorm = normalizeStr(seg);
    const ing = matchCatalogIngredientFromSegment(segNorm);
    if (!ing) return;

    let priceOverride = null;
    const priceMatch = segNorm.match(/(?:\$\s*(\d+(?:\.\d+)?)|(\d+(?:\.\d+)?)\s*(?:pesos|mxn))/);
    if (priceMatch) {
      priceOverride = parseFloat(priceMatch[1] || priceMatch[2]);
    }

    const cleanForQty = segNorm
      .replace(/3b/g, ' ')
      .replace(/90\/10/g, ' ')
      .replace(/(?:\$\s*\d+(?:\.\d+)?|\d+(?:\.\d+)?\s*(?:pesos|mxn))/g, ' ');

    const qtyMatch = cleanForQty.match(/(\d+(?:\.\d+)?)\s*(kg|kilo|kilos|gr|gramos|g|ml|l|litro|litros|pz|pieza|piezas|paq|paquete|paquetes|bolsa|bolsas|charola|bote|lata|latas|reb|rebanadas)?/);

    let finalQtyInIngUnit = ing.presQty;
    let explanation = `1 pres. (${ing.presQty}${ing.unit})`;

    if (qtyMatch) {
      const num = parseFloat(qtyMatch[1]);
      const u = qtyMatch[2] || '';

      if (['kg', 'kilo', 'kilos', 'l', 'litro', 'litros'].includes(u)) {
        finalQtyInIngUnit = ing.unit === 'g' || ing.unit === 'ml' ? num * 1000 : num * ing.presQty;
        explanation = `${num} ${u} → ${finalQtyInIngUnit}${ing.unit}`;
      } else if (['g', 'gr', 'gramos', 'ml'].includes(u)) {
        finalQtyInIngUnit = num;
        explanation = `${num}${ing.unit}`;
      } else if (['pz', 'pieza', 'piezas', 'paq', 'paquete', 'paquetes', 'bolsa', 'bolsas', 'charola', 'bote'].includes(u)) {
        if (ing.unit === 'pz' && ['pz', 'pieza', 'piezas'].includes(u)) {
          finalQtyInIngUnit = num;
          explanation = `${num} pz`;
        } else {
          finalQtyInIngUnit = num * ing.presQty;
          explanation = `${num} ${u} × ${ing.presQty}${ing.unit} = ${finalQtyInIngUnit}${ing.unit}`;
        }
      } else if (['lata', 'latas'].includes(u)) {
        finalQtyInIngUnit = ing.unit === 'lata' ? num : num * ing.presQty;
        explanation = `${num} lata(s)`;
      } else if (['reb', 'rebanadas'].includes(u)) {
        finalQtyInIngUnit = ing.unit === 'reb' ? num : num * ing.presQty;
        explanation = `${num} reb`;
      } else {
        if ((ing.unit === 'g' || ing.unit === 'ml') && num >= 50) {
          finalQtyInIngUnit = num;
          explanation = `${num}${ing.unit}`;
        } else if (ing.unit === 'pz' || ing.unit === 'lata' || ing.unit === 'reb') {
          finalQtyInIngUnit = num;
          explanation = `${num} ${ing.unit}`;
        } else {
          finalQtyInIngUnit = num * ing.presQty;
          explanation = `${num} pz/paq (${finalQtyInIngUnit}${ing.unit})`;
        }
      }
    }

    const effPricePres = priceOverride !== null ? priceOverride : ing.pricePres;
    const estCost = ing.source === 'casa' ? 0 : (effPricePres / Math.max(1, ing.presQty)) * finalQtyInIngUnit;

    parsedItems.push({
      ing,
      qty: Math.round(finalQtyInIngUnit * 10) / 10,
      priceOverride,
      explanation,
      estCost: Math.round(estCost * 100) / 100
    });
  });

  return parsedItems;
}

function previewSmartCestoText() {
  const input = document.getElementById('smart-cesto-input');
  const preview = document.getElementById('smart-cesto-preview');
  if (!input || !preview) return;
  const items = parseNaturalCestoText(input.value);
  if (items.length === 0) {
    preview.innerHTML = '';
    return;
  }
  preview.innerHTML = items.map(it => `
    <span class="badge badge-success" style="font-size:0.74rem; padding:5px 8px;">
      ✓ ${it.ing.name}: ${it.explanation} · $${it.estCost.toFixed(2)} MXN
    </span>
  `).join('');
}

function applySmartCestoText(replaceAll = false) {
  const input = document.getElementById('smart-cesto-input');
  if (!input || !input.value.trim()) {
    showToast('⚠️ Escribe al menos un producto (ej. "pollo 3B 1 pz")');
    return;
  }
  const items = parseNaturalCestoText(input.value);
  if (items.length === 0) {
    showToast('⚠️ No se reconoció ningún insumo del catálogo en el texto');
    return;
  }

  if (replaceAll) {
    state.ingredients.forEach(i => { i.boughtQty = 0; });
  }

  items.forEach(it => {
    if (it.priceOverride !== null) {
      it.ing.pricePres = it.priceOverride;
    }
    it.ing.boughtQty = (Number(it.ing.boughtQty) || 0) + it.qty;
  });

  input.value = '';
  document.getElementById('smart-cesto-preview').innerHTML = '';
  adaptMenuToPurchase(true);
  showToast(`✅ ${items.length} insumo(s) cargados al Cesto y Menú adaptado`);
}

function fillSampleSmartText(mode) {
  const input = document.getElementById('smart-cesto-input');
  if (!input) return;
  if (mode === '3b') {
    input.value = 'pollo 3B 2 pz, res 1 paq, queso panela 1 paq, yogurt 500g, avena 600g, arroz 300g, calabacita 400g, zanahoria 250g, huevo 20 pz, atun 3 latas';
  } else {
    input.value = 'muslos cadiz 1 charola, pan wonder 8 reb, queso panela 260g, yogurt 500g, platano 5 pz';
  }
  previewSmartCestoText();
}

function updateQuickCestoUnitHint() {
  const sel = document.getElementById('quick-cesto-select');
  const mode = document.getElementById('quick-cesto-mode');
  const lbl = document.getElementById('quick-cesto-qty-lbl');
  const qtyInput = document.getElementById('quick-cesto-qty');
  if (!sel || !mode || !lbl) return;
  const ing = getCatalogIngExact(sel.value);
  if (!ing) return;
  if (mode.value === 'packs') {
    lbl.textContent = `Cant. Paq/Pz (${ing.presQty}${ing.unit})`;
    qtyInput.value = 1;
  } else {
    lbl.textContent = `Cantidad (${ing.unit})`;
    qtyInput.value = ing.presQty;
  }
}

function quickAddSelectedToCesto() {
  const sel = document.getElementById('quick-cesto-select');
  const mode = document.getElementById('quick-cesto-mode');
  const qtyInput = document.getElementById('quick-cesto-qty');
  const ing = getCatalogIngExact(sel.value);
  if (!ing) return;
  const val = parseFloat(qtyInput.value) || 0;
  const addUnits = mode.value === 'packs' ? val * ing.presQty : val;
  ing.boughtQty = Math.round(((Number(ing.boughtQty) || 0) + addUnits) * 10) / 10;
  adaptMenuToPurchase(true);
  showToast(`🧺 +${addUnits}${ing.unit} de ${ing.name} en tu Cesto`);
}

function addIngredientPacks(id, deltaPacks) {
  const ing = getCatalogIngExact(id);
  if (!ing) return;
  const deltaUnits = deltaPacks * (Number(ing.presQty) || 1);
  ing.boughtQty = Math.max(0, Math.round(((Number(ing.boughtQty) || 0) + deltaUnits) * 10) / 10);
  adaptMenuToPurchase(true);
}

function removeFromCesto(id) {
  const ing = getCatalogIngExact(id);
  if (!ing) return;
  ing.boughtQty = 0;
  adaptMenuToPurchase(true);
  showToast(`🗑️ "${ing.name}" quitado del Cesto Semanal`);
}

function clearEntireCesto() {
  state.ingredients.forEach(i => { i.boughtQty = 0; });
  adaptMenuToPurchase(true);
  showToast('🗑️ Cesto vaciado por completo');
}

function updateIngField(id, field, val) {
  const ing = getCatalogIngExact(id);
  if (!ing) return;
  ing[field] = val;
  adaptMenuToPurchase(false);
  showToast(`Actualizado: ${ing.name}`);
}

function updateIngBought(id, val) {
  const ing = getCatalogIngExact(id);
  if (!ing) return;
  ing.boughtQty = Math.max(0, val);
  adaptMenuToPurchase(true);
}

function addIngredientQty(id, delta) {
  const ing = getCatalogIngExact(id);
  if (!ing) return;
  ing.boughtQty = Math.max(0, (Number(ing.boughtQty) || 0) + delta);
  adaptMenuToPurchase(true);
}

function boostProteinFromMetepec(extraEggs) {
  const h = getCatalogIngExact('huevo');
  if (h) h.boughtQty = (Number(h.boughtQty) || 0) + extraEggs;
  adaptMenuToPurchase(true);
}

function optimizeBudgetUnder400() {
  const res = getCatalogIngExact('res_molida');
  const p3b = getCatalogIngExact('pollo_3b');
  const h = getCatalogIngExact('huevo');
  const at = getCatalogIngExact('atun_lata');
  if (res && res.boughtQty > 250) res.boughtQty = 250;
  if (p3b && p3b.boughtQty > 1000) p3b.boughtQty = 1000;
  if (h) h.boughtQty = Math.max(22, Number(h.boughtQty) + 3);
  if (at) at.boughtQty = Math.max(4, Number(at.boughtQty) + 1);
  adaptMenuToPurchase(true);
}

function addNewIngredient() {
  const name = document.getElementById('new-ing-name').value.trim();
  if (!name) {
    showToast('⚠️ Escribe el nombre del producto');
    return;
  }
  const presName = document.getElementById('new-ing-pres').value.trim() || '1 pz / Paquete';
  const unit = document.getElementById('new-ing-unit').value;
  const presQty = parseFloat(document.getElementById('new-ing-pres-qty').value) || 500;
  const pricePres = parseFloat(document.getElementById('new-ing-price').value) || 0;
  const source = document.getElementById('new-ing-source').value;
  const kcal = parseFloat(document.getElementById('new-ing-kcal').value) || 0;
  const p = parseFloat(document.getElementById('new-ing-p').value) || 0;
  const c = parseFloat(document.getElementById('new-ing-c').value) || 0;
  const g = parseFloat(document.getElementById('new-ing-g').value) || 0;

  const macroBasis = (unit === 'g' || unit === 'ml') ? 100 : 1;
  const newId = 'custom_' + Date.now();

  state.ingredients.unshift({
    id: newId,
    name,
    presName,
    unit,
    presQty,
    pricePres,
    source,
    boughtQty: presQty,
    baseWeeklyQty: presQty,
    macroBasis,
    kcal,
    p,
    c,
    g,
    aliases: [normalizeStr(name)]
  });

  document.getElementById('new-ing-name').value = '';
  saveState();
  renderAll();
  showToast(`✅ Producto "${name}" guardado y añadido al Cesto`);
}

function deleteIngredient(id) {
  const target = getCatalogIngExact(id);
  const name = target ? target.name : 'Ingrediente';
  state.ingredients = state.ingredients.filter(i => i.id !== id);
  const poultryGroup = ['pollo_3b', 'pollo_pechuga', 'pollo_muslo'];
  if (!poultryGroup.includes(id)) {
    state.recipes.forEach(r => {
      r.ingredients = r.ingredients.filter(it => it.ingId !== id);
    });
  }
  saveState();
  renderAll();
  showToast(`🗑️ "${name}" borrado del catálogo`);
}

function resetCatalogDefaults() {
  state.ingredients = JSON.parse(JSON.stringify(DEFAULT_INGREDIENTS));
  state.recipes = JSON.parse(JSON.stringify(DEFAULT_RECIPES));
  adaptMenuToPurchase(true);
}

/* ============================================================================
   5. RENDER: TAB 2 — RECETARIO DINÁMICO
   ============================================================================ */
function renderRecetario() {
  const container = document.getElementById('recipes-grid-container');
  if (!container) return;
  container.innerHTML = state.recipes.map(rec => {
    const st = calcRecipeStats(rec);
    const scalePct = Math.round(st.scale * 100);
    const canCookFull = st.limitingRatio >= 0.99;

    const ingLines = rec.ingredients.map((it, idx) => {
      const ing = getIng(it.ingId);
      if (!ing) return '';
      const adaptedQty = Math.round((Number(it.qty) || 0) * st.scale * 10) / 10;
      const m = getIngMacrosForQty(ing, adaptedQty);
      const stockOk = (Number(ing.boughtQty) || 0) >= adaptedQty;
      return `
        <div class="ing-line">
          <div>
            <span style="font-weight:600;">${ing.name}</span>
            <span class="badge ${stockOk ? 'badge-neutral' : 'badge-warning'}" style="margin-left:4px;">
              Despensa: ${ing.boughtQty}${ing.unit}
            </span>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <input type="number" class="tbl-input" style="width:64px;" value="${adaptedQty}" min="0" step="any"
              onchange="updateRecipeIngQty('${rec.id}', ${idx}, parseFloat(this.value)||0)" title="Editar cantidad en la receta">
            <span class="t-mono-num" style="font-size:0.76rem; width:28px;">${ing.unit}</span>
            <span class="t-mono-num" style="font-size:0.74rem; color:var(--c-secondary); min-width:48px; text-align:right;">
              ${ing.source === 'casa' ? '$0' : '$' + m.cost.toFixed(1)}
            </span>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="recipe-card">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:6px;">
            <span class="badge badge-ice">${rec.category || 'Receta Adaptativa'}</span>
            <span class="badge ${canCookFull ? 'badge-success' : 'badge-warning'}">
              ${canCookFull ? `✓ Stock cubre ${st.maxPossibleServings} porc.` : `Stock máx: ${st.maxPossibleServings} porc. (${st.limitingIngName})`}
            </span>
          </div>
          <h3 class="t-h2" style="margin-bottom:4px;">${rec.name}</h3>
          <div style="font-size:0.78rem; color:var(--c-secondary); margin-bottom:8px;">
            <strong>Equipo:</strong> ${rec.equipment || 'Sartén de hierro / Refractario'} ·
            <strong>Rinde:</strong> ${rec.servings} porciones (${rec.unitLabel}) ·
            <strong>Escala Despensa:</strong> <span class="t-mono-num">${scalePct}%</span>
          </div>

          <div class="recipe-macro-strip">
            <div>
              <div class="rm-cell-lbl">PORCIÓN</div>
              <div class="rm-cell-val">${st.perKcal} kcal</div>
            </div>
            <div>
              <div class="rm-cell-lbl">PROT / PORC</div>
              <div class="rm-cell-val" style="color:var(--c-tertiary);">${st.perP} g</div>
            </div>
            <div>
              <div class="rm-cell-lbl">CARB / PORC</div>
              <div class="rm-cell-val">${st.perC} g</div>
            </div>
            <div>
              <div class="rm-cell-lbl">GRASA / PORC</div>
              <div class="rm-cell-val">${st.perG} g</div>
            </div>
            <div>
              <div class="rm-cell-lbl">COSTO / PORC</div>
              <div class="rm-cell-val" style="color:var(--c-success);">$${st.perCost.toFixed(2)}</div>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.73rem; color:var(--c-secondary); padding:0 4px 8px; border-bottom:1px solid var(--c-outline);">
            <span>LOTE COMPLETO (${rec.servings} porc.): ${st.totKcal} kcal | ${st.totP}g P | ${st.totC}g C | ${st.totG}g G</span>
            <span>COSTO LOTE: <strong>$${st.totCost.toFixed(2)} MXN</strong></span>
          </div>

          <div style="margin:8px 0;">
            ${ingLines}
          </div>
        </div>

        <div style="margin-top:10px; padding-top:10px; border-top:1px solid var(--c-outline);">
          <p style="font-size:0.8rem; color:var(--c-secondary); margin-bottom:10px;">
            <strong>Preparación:</strong> ${rec.steps}
          </p>
          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="t-label-caps" style="color:var(--c-secondary);">PORCIONES LOTE:</span>
              <button class="btn btn-secondary btn-sm" onclick="changeRecipeServings('${rec.id}', -1)">-</button>
              <span class="t-mono-num">${rec.servings}</span>
              <button class="btn btn-secondary btn-sm" onclick="changeRecipeServings('${rec.id}', 1)">+</button>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="syncPurchaseFromRecipe('${rec.id}')">
              🧺 Ajustar Despensa a esta Receta
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function updateRecipeIngQty(recId, ingIdx, newScaledQty) {
  const rec = state.recipes.find(r => r.id === recId);
  if (!rec || !rec.ingredients[ingIdx]) return;
  const scale = state.menuScaleByRecipe[recId] || 1;
  rec.ingredients[ingIdx].qty = Math.max(0, Math.round((newScaledQty / scale) * 10) / 10);
  saveState();
  renderAll();
  showToast('Receta y macros recalculados');
}

function changeRecipeServings(recId, delta) {
  const rec = state.recipes.find(r => r.id === recId);
  if (!rec) return;
  const oldS = Math.max(1, Number(rec.servings) || 1);
  const newS = Math.max(1, oldS + delta);
  const ratio = newS / oldS;
  rec.servings = newS;
  rec.ingredients.forEach(it => {
    it.qty = Math.round((Number(it.qty) || 0) * ratio * 10) / 10;
  });
  saveState();
  renderAll();
  showToast(`Lote ajustado a ${newS} porciones`);
}

function syncPurchaseFromRecipe(recId) {
  const rec = state.recipes.find(r => r.id === recId);
  if (!rec) return;
  const scale = state.menuScaleByRecipe[recId] || 1;
  rec.ingredients.forEach(it => {
    const ing = getIng(it.ingId);
    if (ing) {
      const needed = Math.round((Number(it.qty) || 0) * scale);
      if (ing.boughtQty < needed) ing.boughtQty = needed;
    }
  });
  saveState();
  renderAll();
  showToast('🧺 Stock semanal actualizado para cubrir la receta');
}

function toggleNewRecipeModal() {
  const el = document.getElementById('new-recipe-builder');
  const isHidden = el.style.display === 'none';
  el.style.display = isHidden ? 'block' : 'none';
  if (isHidden && document.getElementById('nr-ings-container').children.length === 0) {
    addNewRecipeIngRow();
    addNewRecipeIngRow();
  }
}

function addNewRecipeIngRow() {
  const container = document.getElementById('nr-ings-container');
  const row = document.createElement('div');
  row.style.cssText = 'display:grid; grid-template-columns: 2fr 1fr auto; gap:8px; margin-bottom:6px;';
  const opts = state.ingredients.map(i => `<option value="${i.id}">${i.name} (${i.unit})</option>`).join('');
  row.innerHTML = `
    <select class="input-field nr-ing-select">${opts}</select>
    <input type="number" class="input-field mono nr-ing-qty" placeholder="Cantidad" value="100">
    <button class="btn btn-secondary btn-sm" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(row);
}

function saveNewCustomRecipe() {
  const name = document.getElementById('nr-name').value.trim();
  if (!name) {
    showToast('⚠️ Escribe el nombre de la receta');
    return;
  }
  const servings = Math.max(1, parseInt(document.getElementById('nr-servings').value, 10) || 4);
  const unitLabel = document.getElementById('nr-unit-label').value.trim() || 'porción';
  const equipment = document.getElementById('nr-method').value.trim() || 'Sartén de hierro';
  const steps = document.getElementById('nr-steps').value.trim() || 'Mezclar ingredientes y cocinar.';

  const selects = document.querySelectorAll('#nr-ings-container .nr-ing-select');
  const qtys = document.querySelectorAll('#nr-ings-container .nr-ing-qty');
  const ings = [];
  selects.forEach((sel, i) => {
    const q = parseFloat(qtys[i].value) || 0;
    if (q > 0) ings.push({ ingId: sel.value, qty: q });
  });

  if (ings.length === 0) {
    showToast('⚠️ Añade al menos un ingrediente');
    return;
  }

  const newRec = {
    id: 'rec_custom_' + Date.now(),
    name,
    servings,
    unitLabel,
    category: 'Receta Personalizada',
    equipment,
    ingredients: ings,
    steps
  };
  state.recipes.unshift(newRec);
  state.menuScaleByRecipe[newRec.id] = 1;
  document.getElementById('new-recipe-builder').style.display = 'none';
  saveState();
  renderAll();
  showToast(`✅ Receta "${name}" añadida al Recetario`);
}

/* ============================================================================
   6. RENDER: TAB 3 — MENÚ SEMANAL ADAPTADO Y REGISTRO DIARIO
   ============================================================================ */
function resolveMealBlockDetails(meal) {
  if (meal.customFixed) {
    return {
      title: meal.customFixed.name,
      sub: meal.customFixed.sub,
      kcal: meal.customFixed.kcal,
      p: meal.customFixed.p,
      c: meal.customFixed.c,
      g: meal.customFixed.g,
      cost: 0
    };
  }

  let kcal = 0, p = 0, c = 0, g = 0, cost = 0;
  let titleParts = [];
  let subParts = [];

  if (meal.recipeId) {
    const rec = state.recipes.find(r => r.id === meal.recipeId);
    if (rec) {
      const st = calcRecipeStats(rec);
      const adaptedPortions = Math.round(meal.basePortions * st.scale * 10) / 10;
      titleParts.push(`${adaptedPortions} × ${rec.unitLabel} — ${rec.name}`);
      kcal += st.perKcal * meal.basePortions;
      p += st.perP * meal.basePortions;
      c += st.perC * meal.basePortions;
      g += st.perG * meal.basePortions;
      cost += st.perCost * meal.basePortions;

      const share = meal.basePortions / rec.servings;
      const ingDesc = rec.ingredients.map(it => {
        const ing = getIng(it.ingId);
        const q = Math.round(it.qty * st.scale * share * 10) / 10;
        return ing ? `${q}${ing.unit} ${ing.name.split(' ')[0]}` : '';
      }).filter(Boolean).join(' + ');
      subParts.push(ingDesc);
    }
  }

  if (meal.extraRecipe) {
    const rec2 = state.recipes.find(r => r.id === meal.extraRecipe.recipeId);
    if (rec2) {
      const st2 = calcRecipeStats(rec2);
      const adaptedP2 = Math.round(meal.extraRecipe.basePortions * st2.scale * 10) / 10;
      titleParts.push(`+ ${adaptedP2} × ${rec2.unitLabel} (${rec2.name})`);
      kcal += st2.perKcal * meal.extraRecipe.basePortions;
      p += st2.perP * meal.extraRecipe.basePortions;
      c += st2.perC * meal.extraRecipe.basePortions;
      g += st2.perG * meal.extraRecipe.basePortions;
      cost += st2.perCost * meal.extraRecipe.basePortions;
    }
  }

  if (meal.extraIngs) {
    meal.extraIngs.forEach(ex => {
      const ing = getIng(ex.ingId);
      if (ing) {
        const m = getIngMacrosForQty(ing, ex.qty);
        kcal += m.kcal; p += m.p; c += m.c; g += m.g; cost += m.cost;
        subParts.push(`+ ${ex.qty}${ing.unit} ${ing.name}`);
      }
    });
  }

  return {
    title: titleParts.join(' '),
    sub: subParts.join(' · '),
    kcal: Math.round(kcal),
    p: Math.round(p * 10) / 10,
    c: Math.round(c * 10) / 10,
    g: Math.round(g * 10) / 10,
    cost: Math.round(cost * 10) / 10
  };
}

function renderMenuAndTracker() {
  const days = Object.keys(WEEKLY_MENU_TEMPLATE);
  const selector = document.getElementById('day-selector');
  if (!selector) return;
  selector.innerHTML = days.map(dKey => {
    const d = WEEKLY_MENU_TEMPLATE[dKey];
    const isAct = state.activeDay === dKey;
    return `
      <button class="day-btn ${isAct ? 'active' : ''}" onclick="selectDay('${dKey}')">
        ${d.label}
        <small>${dKey === 'sab' || dKey === 'dom' ? 'Metepec' : 'CDMX'}</small>
      </button>
    `;
  }).join('');

  const curDayObj = WEEKLY_MENU_TEMPLATE[state.activeDay];
  document.getElementById('hdr-day-lbl').textContent = curDayObj.label;

  let plannedKcal = 0, plannedP = 0, plannedC = 0, plannedG = 0, plannedCost = 0;
  let eatenKcal = 0, eatenP = 0, eatenC = 0, eatenG = 0;

  const mealsHtml = curDayObj.meals.map(meal => {
    const det = resolveMealBlockDetails(meal);
    plannedKcal += det.kcal;
    plannedP += det.p;
    plannedC += det.c;
    plannedG += det.g;
    plannedCost += det.cost;

    const isDone = !!state.checkedMeals[meal.id];
    if (isDone) {
      eatenKcal += det.kcal;
      eatenP += det.p;
      eatenC += det.c;
      eatenG += det.g;
    }

    return `
      <div class="meal-item ${isDone ? 'done' : ''}" onclick="toggleMeal('${meal.id}')">
        <div class="check-box">${isDone ? '✓' : ''}</div>
        <div class="meal-info">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
            <span class="badge badge-accent">${meal.time}</span>
            <span class="t-mono-num" style="font-size:0.74rem; color:var(--c-success);">Costo adaptado: $${det.cost.toFixed(2)} MXN</span>
          </div>
          <div class="meal-name" style="margin-top:4px;">${det.title}</div>
          <div class="meal-sub">${det.sub}</div>
          <div class="meal-macros">
            <span>🔥 ${det.kcal} kcal</span>
            <span style="color:var(--c-tertiary);">🥩 ${det.p}g P</span>
            <span>🌾 ${det.c}g C</span>
            <span>🥑 ${det.g}g G</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const extras = state.extrasByDay[state.activeDay] || [];
  extras.forEach(ex => {
    eatenKcal += Number(ex.kcal) || 0;
    eatenP += Number(ex.p) || 0;
  });

  document.getElementById('day-banner-info').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <div>
        <h2 class="t-h3">${curDayObj.name}</h2>
        <p style="font-size:0.82rem; color:var(--c-secondary); margin-top:2px;">${curDayObj.banner}</p>
      </div>
      <div style="text-align:right; font-family:var(--font-mono); font-size:0.78rem;">
        <div>META ADAPTADA DEL DÍA: <strong>${plannedKcal} kcal</strong> | <strong>${Math.round(plannedP)}g P</strong> | <strong>${Math.round(plannedC)}g C</strong> | <strong>${Math.round(plannedG)}g G</strong></div>
        <div style="color:var(--c-success);">COSTO DEL DÍA: <strong>$${plannedCost.toFixed(2)} MXN</strong></div>
      </div>
    </div>
  `;

  document.getElementById('day-meals-container').innerHTML = mealsHtml;

  const displayKcal = eatenKcal > 0 ? eatenKcal : plannedKcal;
  const displayP = eatenP > 0 ? Math.round(eatenP) : Math.round(plannedP);
  const displayC = eatenC > 0 ? Math.round(eatenC) : Math.round(plannedC);
  const displayG = eatenG > 0 ? Math.round(eatenG) : Math.round(plannedG);
  const modeTag = eatenKcal > 0 ? '' : ' (Plan)';

  document.getElementById('hdr-kcal').textContent = `${displayKcal} / ${GOALS.kcal}${modeTag}`;
  document.getElementById('hdr-p').textContent = `${displayP} / ${GOALS.p}g`;
  document.getElementById('hdr-c').textContent = `${displayC} / ${GOALS.c}g`;
  document.getElementById('hdr-g').textContent = `${displayG} / ${GOALS.g}g`;

  document.getElementById('bar-kcal').style.width = Math.min(100, Math.round((displayKcal / GOALS.kcal) * 100)) + '%';
  document.getElementById('bar-p').style.width = Math.min(100, Math.round((displayP / GOALS.p) * 100)) + '%';
  document.getElementById('bar-c').style.width = Math.min(100, Math.round((displayC / GOALS.c) * 100)) + '%';
  document.getElementById('bar-g').style.width = Math.min(100, Math.round((displayG / GOALS.g) * 100)) + '%';

  const curW = state.waterByDay[state.activeDay] || 0;
  document.getElementById('water-badge').textContent = `${curW.toFixed(1)} / 3.0 L`;
  let wBtns = '';
  for (let i = 1; i <= 6; i++) {
    const val = i * 0.5;
    const active = curW >= val;
    wBtns += `<button class="btn ${active ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="setWater(${val})">💧 ${val.toFixed(1)}L</button>`;
  }
  document.getElementById('water-buttons').innerHTML = wBtns;

  const cDone = !!state.centrumByDay[state.activeDay];
  document.getElementById('centrum-box').innerHTML = `
    <div class="meal-item ${cDone ? 'done' : ''}" style="margin-bottom:0;" onclick="toggleCentrum()">
      <div class="check-box">${cDone ? '✓' : ''}</div>
      <div class="meal-info">
        <div class="meal-name">💊 1 Tableta Centrum (Costco) en la Comida</div>
        <div class="meal-sub">Tomar a las 2:30 PM junto con las grasas de tus hamburguesitas para absorber vitaminas A, D, E y K.</div>
      </div>
    </div>
  `;

  document.getElementById('extra-list-today').innerHTML = extras.map((ex, idx) => `
    <div class="ing-line">
      <span><strong>${ex.name}</strong> (+${ex.kcal} kcal, +${ex.p}g P)</span>
      <button class="btn btn-secondary btn-sm" onclick="removeExtraFood(${idx})">✕</button>
    </div>
  `).join('');
}

function selectDay(dKey) {
  state.activeDay = dKey;
  saveState();
  renderMenuAndTracker();
}

function toggleMeal(mealId) {
  state.checkedMeals[mealId] = !state.checkedMeals[mealId];
  saveState();
  renderMenuAndTracker();
}

function markAllDayMeals(val) {
  const curDayObj = WEEKLY_MENU_TEMPLATE[state.activeDay];
  curDayObj.meals.forEach(m => { state.checkedMeals[m.id] = val; });
  state.centrumByDay[state.activeDay] = val;
  if (val) state.waterByDay[state.activeDay] = 3.0;
  saveState();
  renderMenuAndTracker();
  showToast(val ? '✓ Día completado' : '↺ Día reiniciado');
}

function setWater(liters) {
  state.waterByDay[state.activeDay] = state.waterByDay[state.activeDay] === liters ? liters - 0.5 : liters;
  saveState();
  renderMenuAndTracker();
}

function toggleCentrum() {
  state.centrumByDay[state.activeDay] = !state.centrumByDay[state.activeDay];
  saveState();
  renderMenuAndTracker();
}

function parseAndLogFreeTextMeal() {
  const inp = document.getElementById('smart-meal-text');
  if (!inp || !inp.value.trim()) {
    showToast('⚠️ Escribe lo que comiste (ej. "2 hamburguesas de pollo, 2 huevos")');
    return;
  }
  const raw = inp.value;
  const segments = raw.split(/[,;\n]+/).map(s => s.trim()).filter(Boolean);
  let loggedCount = 0;

  segments.forEach(seg => {
    const segNorm = normalizeStr(seg);
    const numMatch = segNorm.replace(/3b/g, ' ').match(/(\d+(?:\.\d+)?)/);
    const num = numMatch ? parseFloat(numMatch[1]) : 1;

    const recKeywords = [
      { id: 'rec_hamb_pollo', kw: ['hamburguesa de pollo', 'hamburguesas de pollo', 'hamb pollo'] },
      { id: 'rec_hamb_res', kw: ['hamburguesa de res', 'hamburguesas de res', 'hamb res'] },
      { id: 'rec_hamb_atun', kw: ['hamburguesa de atun', 'hamburguesas de atun', 'croqueta de atun', 'tortita de atun'] },
      { id: 'rec_frittata', kw: ['frittata', 'cuadro de huevo', 'cuadros de huevo'] },
      { id: 'rec_hotcakes', kw: ['hot cake', 'hot cakes', 'hotcake', 'hotcakes'] },
      { id: 'rec_sandwich_panela', kw: ['sandwich', 'sándwich'] },
      { id: 'rec_overnight_oats', kw: ['overnight', 'avena nocturna'] },
      { id: 'rec_yogurt_bowl', kw: ['bowl de yogurt', 'yogurt con amaranto'] },
      { id: 'rec_arroz_batch', kw: ['bolsita de arroz', 'taza de arroz', 'porcion de arroz'] }
    ];

    let matchedRec = null;
    for (const rk of recKeywords) {
      if (rk.kw.some(k => segNorm.includes(k))) {
        matchedRec = state.recipes.find(r => r.id === rk.id);
        break;
      }
    }

    if (matchedRec) {
      const st = calcRecipeStats(matchedRec);
      const kcal = Math.round(st.perKcal * num);
      const p = Math.round(st.perP * num * 10) / 10;
      if (!state.extrasByDay[state.activeDay]) state.extrasByDay[state.activeDay] = [];
      state.extrasByDay[state.activeDay].push({
        name: `${num} × ${matchedRec.unitLabel} (${matchedRec.name})`,
        kcal,
        p
      });
      loggedCount++;
      return;
    }

    const parsedIngs = parseNaturalCestoText(seg);
    if (parsedIngs.length > 0) {
      const it = parsedIngs[0];
      const m = getIngMacrosForQty(it.ing, it.qty);
      if (!state.extrasByDay[state.activeDay]) state.extrasByDay[state.activeDay] = [];
      state.extrasByDay[state.activeDay].push({
        name: `${it.ing.name} (${it.qty}${it.ing.unit})`,
        kcal: Math.round(m.kcal),
        p: Math.round(m.p * 10) / 10
      });
      loggedCount++;
    }
  });

  if (loggedCount > 0) {
    inp.value = '';
    saveState();
    renderMenuAndTracker();
    showToast(`✅ ${loggedCount} alimento(s) interpretados y sumados a tus macros de hoy`);
  } else {
    showToast('⚠️ No se identificó la comida; prueba con "2 hamburguesas de pollo" o "pollo 3B 200g"');
  }
}

function addExtraFood() {
  const name = document.getElementById('extra-name').value.trim();
  const kcal = parseInt(document.getElementById('extra-kcal').value, 10) || 0;
  const p = parseFloat(document.getElementById('extra-p').value) || 0;
  if (!name) return;
  if (!state.extrasByDay[state.activeDay]) state.extrasByDay[state.activeDay] = [];
  state.extrasByDay[state.activeDay].push({ name, kcal, p });
  document.getElementById('extra-name').value = '';
  document.getElementById('extra-kcal').value = '';
  document.getElementById('extra-p').value = '';
  saveState();
  renderMenuAndTracker();
}

function removeExtraFood(idx) {
  state.extrasByDay[state.activeDay].splice(idx, 1);
  saveState();
  renderMenuAndTracker();
}

function copyDaySummary() {
  const curDayObj = WEEKLY_MENU_TEMPLATE[state.activeDay];
  const txt = `📊 Proyecto Food v6 (${curDayObj.label}) — ${document.getElementById('hdr-kcal').textContent} kcal | Prot: ${document.getElementById('hdr-p').textContent} | Agua: ${state.waterByDay[state.activeDay] || 0}L | Despensa Semanal: ${document.getElementById('hdr-budget').textContent}`;
  navigator.clipboard?.writeText(txt);
  showToast('📋 Resumen copiado al portapapeles');
}

/* ============================================================================
   7. RENDER: TAB 4 — PREP METEPEC CHECKLIST
   ============================================================================ */
function renderPrepChecklist() {
  const batchRecipes = state.recipes.filter(r => (r.category || '').includes('Batch'));
  const container = document.getElementById('prep-checklist-container');
  if (!container) return;
  container.innerHTML = batchRecipes.map(rec => {
    const st = calcRecipeStats(rec);
    const done = !!state.prepChecks[rec.id];
    const ingSummary = rec.ingredients.map(it => {
      const ing = getIng(it.ingId);
      const q = Math.round((Number(it.qty) || 0) * st.scale * 10) / 10;
      return ing ? `${q}${ing.unit} ${ing.name}` : '';
    }).filter(Boolean).join(' + ');

    return `
      <div class="meal-item ${done ? 'done' : ''}" onclick="togglePrepCheck('${rec.id}')">
        <div class="check-box">${done ? '✓' : ''}</div>
        <div class="meal-info">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="meal-name">${rec.name} (${rec.servings} × ${rec.unitLabel})</span>
            <span class="badge badge-ice">${rec.equipment}</span>
          </div>
          <div class="meal-sub" style="margin-top:4px;"><strong>Insumos adaptados:</strong> ${ingSummary}</div>
          <div class="meal-sub" style="margin-top:2px;">${rec.steps}</div>
        </div>
      </div>
    `;
  }).join('');
}

function togglePrepCheck(id) {
  state.prepChecks[id] = !state.prepChecks[id];
  saveState();
  renderPrepChecklist();
}

/* ============================================================================
   8. NAVIGATION & INITIALIZATION
   ============================================================================ */
function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll('.section-view').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('tab-' + tabId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-tab').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
  });
  saveState();
}

function renderAll() {
  renderCatalogAndEngine();
  renderRecetario();
  renderMenuAndTracker();
  renderPrepChecklist();
}

window.addEventListener('DOMContentLoaded', () => {
  loadState();
  switchTab(state.activeTab || 'compra');
  switchCompraSubView(state.compraSubView || 'cesto');
});

