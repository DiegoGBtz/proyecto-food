# 🥩 Plan Maestro de Nutrición, Motor de Compra y Recetario Adaptativo (v5)

> **Perfil:** Diego (25 años, `180 cm`, `75 kg` — Recomposición corporal normocalórica y fuerza)  
> **Logística:** Lun–Vie en **Cádiz 101** (SmartFit Galerías Insurgentes / Oficina Extremadura) · Fin de semana en **Metepec**  
> **Metas Diarias:** `~2,550 kcal` | `165–170 g Proteína` (`2.2 g/kg`) | `~275 g Carbohidratos` | `~85 g Grasas` | `3.0 L Agua`  
> **Tope Presupuestal Semanal:** **Máximo `$400 MXN` / semana** (incluyendo yogurt natural deslactosado)  
> **Sistema de Diseño:** Especificación formal en [`DESIGN.md`](file:///c:/Users/diego/Proyectos/Proyecto Food/DESIGN.md) (*Heritage Nutrition Studio*) implementada en [`plan_semanal_diego.html`](file:///c:/Users/diego/Proyectos/Proyecto Food/plan_semanal_diego.html).

---

## 1. Arquitectura de la Aplicación Interactiva (`plan_semanal_diego.html`)

La aplicación web ahora cuenta con un **Motor Reactivo de 5 Módulos** gobernado por los tokens de [`DESIGN.md`](file:///c:/Users/diego/Proyectos/Proyecto Food/DESIGN.md):

1. **🛒 Módulo 01 — Catálogo de Insumos, Presentaciones y Motor de Presupuesto (`≤ $400 MXN`):**
   - Permite registrar y editar para cada ingrediente su **Presentación comercial** (`Kg`, `Paquete 500 g`, `Charola 30 pz`, `Bote 1 kg`, `Paquete 24 reb`, `Lata 140 g`), **Contenido neto** (`g`, `ml`, `pz`, `latas`, `reb`), **Precio por presentación (`$ MXN`)** y **Origen** (`🛒 Compra Súper` vs `🏠 Casa Metepec $0`).
   - Al capturar tu **Compra Semanal**, el motor calcula en vivo:
     - **Costo Semanal Prorrateado** contra el tope de `$400 MXN`.
     - **Macros promedio diarios provistos por tu compra** (`kcal`, `P`, `C`, `G`).
     - **Sugerencias Inteligentes con botones de 1 clic:** Si te pasas de `$400 MXN`, sugiere qué recortar o intercambiar por insumos `$0` de Metepec; si te falta proteína o calorías, calcula cuántos gramos de pechuga/avena o piezas de huevo sumar.
   - Incluye formulario para **añadir nuevos insumos personalizados** al catálogo.

2. **📖 Módulo 02 — Recetario Dinámico Conectado al Stock:**
   - Toma automáticamente los precios, unidades y cantidades cargadas en tu compra semanal.
   - Muestra para cada receta:
     - **Macros exactos por porción y por lote completo** (`kcal`, `P`, `C`, `G`).
     - **Costo real por porción y por lote (`$ MXN`)**.
     - **Porciones máximas que puedes preparar con tu stock actual** (indicando qué ingrediente limita el lote si falta alguno).
     - Escalador interactivo de porciones (`-` / `+`) y edición directa de gramos/piezas por ingrediente, además de un creador de **Nuevas Recetas Personalizadas**.

3. **🍽️ Módulo 03 — Menú Semanal Adaptado (`Lun`–`Dom`) y Tracker Diario:**
   - Al pulsar **`⚡ Adaptar Menú a mi Compra`**, todas las comidas de la semana ajustan automáticamente sus porciones y gramos a lo que realmente compraste para que **nada se eche a perder**.
   - Incluye checklist diario de comidas, registro de **3.0 L de agua**, toma de **1 tableta Centrum en la comida** y registro de alimentos extra.

4. **🏠 Módulo 04 — Batch Cooking en Metepec (90 min) y Logística de Tuppers (`CUA`, `CH1`, `CH2`, `GD`, `GC`, `RED`):**
   - Adaptado a tu **refractario de horno** y **mini sartén de hierro** (sin necesidad de molde de muffins).

5. **📐 Módulo 05 — Especificación `DESIGN.md` y Ficha Clínica.**

---

## 2. Catálogo Base de Presentaciones y Compra Semanal (`$390.58 MXN`)

| Insumo | Presentación Comercial | Precio Pres. | Compra Semanal (Uso) | Costo Semanal | Macros Base (x 100g/ml o 1 u) |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Pechuga de pollo** | `1000 g` (1 kg) | `$135.00` | `700 g` | **`$94.50`** | `165 kcal` · `31g P` · `0g C` · `3.6g G` |
| **Res molida 90/10** | `500 g` (Paquete) | `$90.00` | `400 g` | **`$72.00`** | `176 kcal` · `20g P` · `0g C` · `10g G` |
| **Muslo de pollo s/piel** | `600 g` (Charola) | `$60.00` | `300 g` | **`$30.00`** | `177 kcal` · `24g P` · `0g C` · `8g G` |
| **Queso Panela** | `400 g` (Bloque) | `$55.00` | `260 g` | **`$35.75`** | `206 kcal` · `20g P` · `3g C` · `12g G` |
| **Yogurt Nat. Deslactosado** | `1000 g` (Bote 1 kg) | `$56.00` | `500 g` | **`$28.00`** | `62 kcal` · `5g P` · `6.5g C` · `1.8g G` |
| **Avena en hojuelas** | `1000 g` (Bolsa 1 kg) | `$35.00` | `560 g` | **`$19.60`** | `389 kcal` · `16.9g P` · `66.3g C` · `6.9g G` |
| **Arroz (peso crudo)** | `1000 g` (Bolsa 1 kg) | `$28.00` | `280 g` | **`$7.84`** | `360 kcal` · `7g P` · `79g C` · `0.7g G` |
| **Pan Integral Wonder** | `24 reb` (Paq 680 g) | `$48.00` | `8 reb` | **`$16.00`** | `70 kcal` · `3.5g P` · `12.5g C` · `1g G` *(x reb)* |
| **Amaranto natural** | `250 g` (Bolsa) | `$25.00` | `60 g` | **`$6.00`** | `371 kcal` · `13.6g P` · `65g C` · `7g G` |
| **Semillas de Chía** | `250 g` (Bolsa) | `$35.00` | `40 g` | **`$5.60`** | `486 kcal` · `16.5g P` · `42g C` · `30.7g G` |
| **Calabacitas** | `1000 g` (1 kg) | `$30.00` | `400 g` | **`$12.00`** | `17 kcal` · `1.2g P` · `3.1g C` · `0.3g G` |
| **Zanahoria** | `1000 g` (1 kg) | `$22.00` | `250 g` | **`$5.50`** | `41 kcal` · `0.9g P` · `9.6g C` · `0.2g G` |
| **Espinaca lavada** | `250 g` (Manojo) | `$20.00` | `150 g` | **`$12.00`** | `23 kcal` · `2.9g P` · `3.6g C` · `0.4g G` |
| **Plátano tabasco** | `6 pz` (Penca) | `$24.00` | `5 pz` | **`$20.00`** | `105 kcal` · `1.3g P` · `27g C` · `0.3g G` *(x pz)* |
| **Manzana** | `4 pz` (Bolsa) | `$32.00` | `2 pz` | **`$16.00`** | `95 kcal` · `0.5g P` · `25g C` · `0.3g G` *(x pz)* |
| **Aceite de Aguacate** | `1000 ml` (Botella) | `$185.00` | `45 ml` | **`$8.33`** | `884 kcal` · `0g P` · `0g C` · `100g G` |
| **Huevo entero** 🏠 | `30 pz` (Charola) | `$85.00` | `20 pz` | **`$0.00`** *(Casa)* | `72 kcal` · `6.3g P` · `0.4g C` · `4.8g G` *(x pz)* |
| **Atún en agua** 🏠 | `1 lata` (140 g) | `$22.00` | `3 latas` | **`$0.00`** *(Casa)* | `110 kcal` · `24g P` · `0g C` · `1g G` *(x lata)* |
| **Leche Deslactosada** 🏠 | `1000 ml` (1 L) | `$29.00` | `750 ml` | **`$0.00`** *(Casa)* | `48 kcal` · `3.3g P` · `4.8g C` · `1.5g G` |
| **TOTAL SEMANAL** | — | — | **100% Consumido** | **`$389.12 MXN`** | **Promedio: `2,555 kcal/día` · `168 g P/día`** |
