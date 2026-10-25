# 🥩 Proyecto Food v6 — Heritage Nutrition Studio

Aplicación PWA y motor adaptativo de despensa, presupuesto semanal (`≤ $400 MXN`), recetario dinámico de macros y registro nutricional diario para Diego.

## Características Principales

- **🧺 Cesto / Despensa con Intérprete de Lenguaje Natural:** Escribe libremente tu compra (ej. `pollo 3B 1 pz, res 1 paq, avena 600g, huevo 20 pz, atun 3 latas`) y el motor traduce automáticamente piezas/paquetes a gramos y costos reales (`Pollo 3B 1 pz = 500 g · $79 MXN`).
- **🏪 Catálogo Maestro de Productos (Tiendas 3B Metepec / Súper Cádiz / Casa $0):** Administra, edita o borra cualquier insumo y presentación comercial.
- **📖 Recetario Dinámico Conectado al Stock:** Calcula en vivo calorías, macros (`P`, `C`, `G`), costo por porción y máximo de porciones cocinables según tu despensa activa.
- **🍽️ Menú Semanal Adaptado & Registro por Texto Libre:** Escala porciones automáticamente para que nada se eche a perder y permite registrar comidas del día escribiendo en texto libre.
- **📐 Especificación Formal `DESIGN.md`:** Construido bajo el estándar `@google/design.md` (*Heritage Nutrition Studio* — `Public Sans` + `Space Grotesk`).
- **📱 PWA Offline & Respaldo JSON:** Instalable en móvil con Service Worker (`sw.js`) y exportación/importación de respaldo `.json`.
