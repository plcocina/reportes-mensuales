const PRODUCTS = [
  { id: "01", name: "Salsa Molca", file: "01 - Salsa Molca 2026", sheetId: "1OY19k7UGTn7Iygm_Y1SjD2BqO7rftI43bc2mkvSuKOE" },
  { id: "02", name: "Salsa Roja", file: "02 - Salsa Roja 2026", sheetId: "1MOz_6skWKY35Lv0-F1BpagKQQ1rvIHTcMsv4rmPZgX8" },
  { id: "03", name: "Salsa Verde", file: "03 - Salsa Verde 2026", sheetId: "1PL3AC-y8QO1kBMxVQWgt6Y5GqE05wq7yYuC3FzQInwU" },
  { id: "04", name: "Arroz", file: "04 - Arroz 2026", sheetId: "1cJYDREOzfcJVyk21DbsH3JgJFEHXLU3opdKcu4Ro9gg" },
  { id: "05", name: "Mezcla", file: "05 - Mezcla 2026", sheetId: "1-I79cSrZ0f_xEZJRzkJqbW9kdcrvGj5sPYo8NR9fb3I" },
  { id: "06", name: "Codito", file: "06 - Codito 2026", sheetId: "12zosueSzzKRYWbbcnZlTmevD4UMD8ns2X8hFDyxmwKo" },
  { id: "07", name: "Ensalada de Col", file: "07 - Ensalada de Col 2026", sheetId: "1MyOt2F5qpbjlipESdIhUSYRKUrSKTsMp8L77lLs2LEA" },
  { id: "08", name: "Aceite", file: "08 - Consumo de Aceite 2026", sheetId: "1790DbiD3G74Cli_0pZLFiRhix_0UP7LjrGGfXc2UeJ4" },
  { id: "09", name: "Pay de Fresa", file: "09 - Pay de Fresa 2026", sheetId: "1Sl2JEDDnohWXyk272tg1jG5ceFknfXY5QSj5u0105Ys" },
  { id: "10", name: "Pay de Queso", file: "10 - Pay de Queso 2026", sheetId: "1NKTgEFE6IrOkFXFIQl7RmkuffloJsVXCN5-lr9H7LW0" },
  { id: "11", name: "Flan", file: "11 - Flan 2026", sheetId: "1_7YECVMwE2ZCmjINdUfYBJ3Eadom1lh9o3vdFLp-X0w" },
  { id: "12", name: "Totopo", file: "12 - Totopo 2026", sheetId: "1DdXtpu4RtlHVgJLEKA9uOb0muff_u73OP3LGKwZSx_I" },
  { id: "13", name: "Tortilla", file: "13 - Tortilla 2026", sheetId: "1TfjnXvwT_ZAdZo5uYcT3G5cI5XXg_eACfx929kGQKQo" },
];

const MONTHS = [
  ["ENE", "Enero"],
  ["FEB", "Febrero"],
  ["MAR", "Marzo"],
  ["ABR", "Abril"],
  ["MAY", "Mayo"],
  ["JUN", "Junio"],
  ["JUL", "Julio"],
  ["AGO", "Agosto"],
  ["SEP", "Septiembre"],
  ["OCT", "Octubre"],
  ["NOV", "Noviembre"],
  ["DIC", "Diciembre"],
].map(([id, name]) => ({ id, name }));

const SECTIONS = {
  pedidos: { label: "Pedidos", color: "#e16b2d", unit: "cub" },
  produccion: { label: "Producción", color: "#2563eb", unit: "cub" },
  materias: { label: "Materias Primas", color: "#108a63", unit: "" },
};


const PRODUCT_UNITS = {
  "01": { pedido: "cubetas", produccion: "cubetas", stock: "cubetas", rendimiento: "cub/prod." },
  "02": { pedido: "cubetas", produccion: "cubetas", stock: "cubetas", rendimiento: "cub/prod." },
  "03": { pedido: "cubetas", produccion: "cubetas", stock: "cubetas", rendimiento: "cub/olla" },
  "04": { pedido: "kg", produccion: "kg", stock: "kg", rendimiento: "kg/olla" },
  "05": { pedido: "kg", produccion: "kg", stock: "bolsas", rendimiento: "kg/olla" },
  "06": { pedido: "kg", produccion: "kg", stock: "kg", rendimiento: "kg/olla" },
  "07": { pedido: "kg", produccion: "kg", stock: "bolsas", rendimiento: "" },
  "08": { pedido: "bidones / lt", produccion: "bidones / lt", stock: "bidones", rendimiento: "lt/bidón" },
  "09": { pedido: "piezas", produccion: "piezas", stock: "piezas", rendimiento: "pzas/prod." },
  "10": { pedido: "piezas", produccion: "piezas", stock: "piezas", rendimiento: "pzas/prod." },
  "11": { pedido: "piezas", produccion: "piezas", stock: "piezas", rendimiento: "pzas/prod." },
  "12": { pedido: "cajas", produccion: "cajas", stock: "cajas", rendimiento: "cajas/prod." },
  "13": { pedido: "piezas", produccion: "piezas", stock: "piezas", rendimiento: "pzas/prod." },
};

const PRODUCT_COLUMN_OVERRIDES = {
  "02": {
    stockIniCol: 1,
    stockFinalCol: 8,
    rendimientoCol: 6,
    materiaColumns: [
      { label: "Tomate (KG)", index: 11 },
      { label: "Serrano (KG)", index: 12 },
      { label: "Sal (KG)", index: 13 },
    ],
  },
  "03": {
    stockFinalCol: 8,
    rendimientoCol: 6,
    materiaColumns: [
      { label: "Pulpa (Bolsas)", index: 11 },
      { label: "Serrano (KG)", index: 12 },
      { label: "Jalapeño Cocido (KG)", index: 13 },
      { label: "Tomate Verde (KG)", index: 14 },
      { label: "Tomatillo (KG)", index: 15 },
      { label: "Cilantro (KG)", index: 16 },
      { label: "Sal (KG)", index: 17 },
      { label: "Hielo (KG)", index: 18 },
      { label: "Agua (LT)", index: 19 },
      { label: "Agua chile (LT)", index: 20 },
      { label: "Aceite (LT)", index: 21 },
    ],
  },
  "04": {
    stockIniCol: 3,
    pedidosCol: 4,
    stockFinalCol: 21,
    produccionCol: 15,
    ollasCol: 16,
    rendimientoCol: 17,
    extraPedidoColumns: [
      { key: "pedidos_chicas_1kg", label: "Pedido en Bolsas Chicas (1 KG)", index: 5, color: "#d97706" },
      { key: "pedidos_grandes_2kg", label: "Pedido en Bolsas Grandes (2 KG)", index: 7, color: "#7c3aed" },
    ],
    extraProduccionColumns: [
      { key: "produccion_chicas_1kg", label: "Producción en Bolsas Chicas (1 KG)", index: 13 },
      { key: "produccion_grandes_2kg", label: "Producción en Bolsas Grandes (2 KG)", index: 14 },
    ],
    materiaColumns: [
      { label: "Arroz Blanco (KG)", index: 24 },
      { label: "Arroz Amarillo (KG)", index: 25 },
      { label: "Zanahoria (KG)", index: 26 },
      { label: "Calabacita (KG)", index: 27 },
      { label: "Morrón (KG)", index: 28 },
      { label: "Cebolla (KG)", index: 29 },
      { label: "Ajo (KG)", index: 30 },
      { label: "Agua (LT)", index: 31 },
      { label: "Aceite (LT)", index: 32 },
      { label: "Condimento (Bolsas)", index: 33 },
      { label: 'Condimento "Chicken" (KG)', index: 34 },
      { label: "Limón (LT)", index: 35 },
    ],
  },
  "05": {
    stockIniCol: 1,
    pedidosCol: 3,
    stockFinalCol: 11,
    produccionCol: 8,
    ollasCol: 9,
    rendimientoCol: 10,
    extraPedidoColumns: [
      { key: "pedidos_chicas_1kg", label: "Pedido en Bolsas de 1.2 KG", index: 2, color: "#d97706" },
    ],
    extraProduccionColumns: [
      { key: "produccion_chicas_1kg", label: "Producción en Bolsas de 1.2 KG", index: 7 },
    ],
    materiaColumns: [
      { label: "Tomate (KG)", index: 13 },
      { label: "Cebolla (KG)", index: 14 },
      { label: "Serrano (KG)", index: 15 },
      { label: "Tocino Crudo (KG)", index: 16 },
      { label: "Aceite (LT)", index: 17 },
    ],
  },
  "06": {
    pedidosCol: 6,
    produccionCol: 13,
    ollasCol: 14,
    rendimientoCol: 15,
    hidePedidoStockDetail: true,
    extraPedidoColumns: [
      { key: "pedidos_chicas_1kg", label: "Pedido en Bolsas Chicas (1.6 KG)", index: 4, color: "#d97706" },
      { key: "pedidos_grandes_2kg", label: "Pedido en Bolsas Grandes (5 KG)", index: 5, color: "#7c3aed" },
    ],
    extraProduccionColumns: [
      { key: "produccion_chicas_1kg", label: "Producción en Bolsas Chicas (1.6 KG)", index: 11 },
      { key: "produccion_grandes_2kg", label: "Producción en Bolsas Grandes (5 KG)", index: 12 },
    ],
    materiaColumns: [
      { label: "Codito (KG)", index: 18 },
      { label: "Jamón (KG)", index: 19 },
      { label: "Apio (KG)", index: 20 },
      { label: "Zanahoria (KG)", index: 21 },
      { label: "Crema (KG)", index: 22 },
      { label: "Mayonesa (KG)", index: 23 },
      { label: "Cebolla (KG)", index: 24 },
      { label: "Cond. 1 Mezcla (Sobre)", index: 25 },
      { label: "Cond. 2 Codito (Sobre)", index: 26 },
      { label: "Agua (LT)", index: 27 },
      { label: "Aceite (LT)", index: 28 },
    ],
  },
  "07": {
    stockIniCol: -1,
    pedidosCol: 3,
    produccionCol: 11,
    produccionSumCols: [11, 23],
    ollasCol: -1,
    rendimientoCol: -1,
    stockFinalCol: -1,
    hidePedidoStockDetail: true,
    hideRendimientoSection: true,
    extraPedidoColumns: [
      { key: "pedidos_chicas_1kg", label: "Pedido en Bolsas Chicas (1.6 KG)", index: 1, color: "#d97706" },
      { key: "pedidos_grandes_2kg", label: "Pedido en Bolsas Grandes (15 KG)", index: 2, color: "#7c3aed" },
    ],
    extraProduccionColumns: [
      { key: "produccion_chicas_1kg", label: "Producción Bolsas Chicas (kits 1.6 KG)", index: 11 },
      { key: "produccion_grandes_2kg", label: "Producción Bolsas Grandes (kits 5 KG)", index: 23 },
    ],
    stackedProductionCharts: [
      {
        title: "Producción x Ingrediente (Bolsas Chicas)",
        columns: [
          { key: "ensalada_chica_col_morada", label: "Col morada", index: 6, color: "#9700ff" },
          { key: "ensalada_chica_col_blanca", label: "Col Blanca", index: 7, color: "#b7b7b7" },
          { key: "ensalada_chica_zanahoria", label: "Zanahoria", index: 8, color: "#ff6b00" },
          { key: "ensalada_chica_aderezo", label: "Aderezo", index: 9, color: "#d5a3bf" },
        ],
      },
      {
        title: "Producción x Ingrediente (Bolsas Grandes)",
        columns: [
          { key: "ensalada_grande_col_morada", label: "Col morada", index: 18, color: "#9700ff" },
          { key: "ensalada_grande_col_blanca", label: "Col Blanca", index: 19, color: "#b7b7b7" },
          { key: "ensalada_grande_zanahoria", label: "Zanahoria", index: 20, color: "#ff6b00" },
          { key: "ensalada_grande_aderezo", label: "Aderezo", index: 21, color: "#d5a3bf" },
        ],
      },
    ],
    materiaColumns: [
      { label: "Col Morada (KG)", index: 33 },
      { label: "Col Blanca (KG)", index: 34 },
      { label: "Zanahoria (KG)", index: 35 },
      { label: "Mayonesa (KG)", index: 36 },
      { label: "Condimento (Sobres)", index: 37 },
      { label: "Porciones de Aderezo", index: 38 },
    ],
  },
};

function unitsFor(product) {
  return PRODUCT_UNITS[product?.id] || { pedido: "unidades", produccion: "unidades", stock: "unidades", rendimiento: "prod." };
}


const state = {
  productId: "",
  monthId: "",
  sections: { pedidos: true, produccion: true, materias: true },
  report: null,
  toast: "",
  error: "",
  loading: false,
  selectedDay: null,
  selectedTrendMonth: null,
  sidebarCollapsed: false,
};

function number(value) {
  if (value === undefined || value === null || value === "") return 0;
  const parsed = Number(String(value).replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

const WEEKDAYS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

function cleanText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function splitDay(raw, fallbackDay) {
  if (raw instanceof Date && !Number.isNaN(raw.valueOf())) {
    return { dia: WEEKDAYS[raw.getDay()], fecha: String(raw.getDate()).padStart(2, "0") };
  }

  const text = String(raw ?? "").trim();
  const clean = cleanText(text);
  if (!clean || /total|promedio|dif\.|moda|stdev/.test(clean)) return null;

  const numberMatch = clean.match(/(?:^|[^0-9])(\d{1,2})(?:[^0-9]|$)/);
  const dayNumber = numberMatch ? Number(numberMatch[1]) : Number(raw);
  if (!Number.isFinite(dayNumber) || dayNumber < 1 || dayNumber > 31) {
    if (!fallbackDay) return null;
    return { dia: "día", fecha: String(fallbackDay).padStart(2, "0") };
  }

  const dayName = WEEKDAYS.find((name) => clean.includes(cleanText(name))) || "día";
  return { dia: dayName, fecha: String(dayNumber).padStart(2, "0") };
}

function findColumn(headers, matcher, fallback) {
  const index = headers.findIndex((header) => matcher(cleanText(header)));
  return index >= 0 ? index : fallback;
}

function findExactColumn(headers, names, fallback) {
  const normalized = names.map(cleanText);
  const index = headers.findIndex((header) => {
    const h = cleanText(header).replace(/\s*\([^)]*\)/g, "").replace(/\.$/, "").trim();
    return normalized.map((name) => name.replace(/\.$/, "")).includes(h);
  });
  return index >= 0 ? index : fallback;
}

function findGroupedColumns(headers, groupRow, groupName) {
  const groups = groupRow.map(cleanText);
  const group = cleanText(groupName);
  let start = groups.findIndex((value) => value.includes(group));
  if (start < 0) return [];
  let end = groupRow.length;
  for (let index = start + 1; index < groupRow.length; index += 1) {
    const value = cleanText(groupRow[index]);
    if (value && !value.includes(group)) {
      end = index;
      break;
    }
  }
  return headers
    .slice(start, end)
    .map((label, offset) => ({ label, index: start + offset }))
    .filter((item) => cleanText(item.label) && !cleanText(item.label).includes("existencia"));
}

function findMetricColumn(headers, includeWords, excludeWords = [], fallback = -1) {
  const index = headers.findIndex((header) => {
    const h = cleanText(header);
    return includeWords.every((word) => h.includes(cleanText(word))) && !excludeWords.some((word) => h.includes(cleanText(word)));
  });
  return index >= 0 ? index : fallback;
}


function headerScore(row) {
  const joined = row.map(cleanText).join(" | ");
  return ["stock ini", "pedidos", "produccion", "stock final", "rendimiento"]
    .reduce((score, word) => score + (joined.includes(word) ? 1 : 0), 0);
}

function chooseHeaderRow(rows) {
  const candidates = [];
  if (Array.isArray(rows.__columns)) candidates.push(rows.__columns);
  rows.slice(0, 6).forEach((row) => candidates.push(row || []));
  return candidates.sort((a, b) => headerScore(b) - headerScore(a))[0] || [];
}

function chooseGroupRow(rows) {
  return rows.slice(0, 6).find((row) => row?.some((value) => cleanText(value).includes("materia prima"))) || [];
}


function findColumnInTopRows(rows, names, fallback) {
  const normalized = names.map((name) => cleanText(name).replace(/\.$/, ""));
  const candidates = [];
  if (Array.isArray(rows.__columns)) candidates.push(rows.__columns);
  rows.slice(0, 6).forEach((row) => candidates.push(row || []));
  for (const row of candidates) {
    const index = (row || []).findIndex((cell) => {
      const h = cleanText(cell).replace(/\s*\([^)]*\)/g, "").replace(/\.$/, "").trim();
      return normalized.includes(h);
    });
    if (index >= 0) return index;
  }
  return fallback;
}

function headerCellText(cell) {
  return cleanText(cell).replace(/\s*\([^)]*\)/g, " ").replace(/[().-]/g, " ").replace(/\s+/g, " ").trim();
}

function topHeaderCandidates(rows) {
  const candidates = [];
  if (Array.isArray(rows.__columns)) candidates.push(rows.__columns);
  rows.slice(0, 6).forEach((row) => candidates.push(row || []));
  return candidates;
}

function findHeaderByWords(rows, requiredWords, excludedWords = [], fallback = -1, prefer = "first") {
  const matches = [];
  topHeaderCandidates(rows).forEach((row) => {
    (row || []).forEach((cell, index) => {
      const text = headerCellText(cell);
      if (!text) return;
      const hasRequired = requiredWords.every((word) => text.includes(cleanText(word)));
      const hasExcluded = excludedWords.some((word) => text.includes(cleanText(word)));
      if (hasRequired && !hasExcluded) matches.push(index);
    });
  });
  if (!matches.length) return fallback;
  return prefer === "last" ? Math.max(...matches) : Math.min(...matches);
}

function findGroupStart(rows, groupName) {
  const group = cleanText(groupName);
  for (const row of rows.slice(0, 6)) {
    const index = (row || []).findIndex((cell) => cleanText(cell).includes(group));
    if (index >= 0) return index;
  }
  return -1;
}

function sum(rows, key) {
  return rows.reduce((total, row) => total + number(row[key]), 0);
}

function avg(rows, key) {
  if (!rows.length) return 0;
  return sum(rows, key) / rows.length;
}

function std(values) {
  if (values.length < 2) return 0;
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return Math.sqrt(values.reduce((total, value) => total + Math.pow(value - mean, 2), 0) / values.length);
}

function mode(values) {
  const counts = new Map();
  values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0])[0] || [0, 0];
}

function parseProductionSheet(rows, product, month) {
  const headers = chooseHeaderRow(rows);
  const sectionRow = chooseGroupRow(rows);
  const columnOverride = PRODUCT_COLUMN_OVERRIDES[product.id] || {};
  const extraPedidoColumns = columnOverride.extraPedidoColumns || [];
  const extraProduccionColumns = columnOverride.extraProduccionColumns || [];
  const stackedProductionConfig = columnOverride.stackedProductionCharts || [];
  const stackedProductionColumns = stackedProductionConfig.flatMap((chart) => chart.columns || []);
  const stockIniCol = columnOverride.stockIniCol ?? findHeaderByWords(rows, ["stock", "ini"], ["pedidos"], 1, "first");
  const pedidosCol = columnOverride.pedidosCol ?? findMetricColumn(headers, ["pedidos"], ["stock ini", "avg"], 2);
  const pedidosSumCols = columnOverride.pedidosSumCols || null;
  const produccionCol = columnOverride.produccionCol ?? findMetricColumn(headers, ["produccion"], ["control"], 4);
  const produccionSumCols = columnOverride.produccionSumCols || null;
  const ollasCol = columnOverride.ollasCol ?? findColumn(headers, (h) => h.includes("ollas"), 5);
  const rendimientoCol = columnOverride.rendimientoCol ?? findHeaderByWords(rows, ["rendimiento"], [], findColumn(headers, (h) => h.includes("rendimiento"), 7), "first");
  const stockFinalCol = columnOverride.stockFinalCol ?? findHeaderByWords(rows, ["stock", "final"], [], 10, "last");
  const molcaMateriaLabels = [
    "Tomate (KG)",
    "Agua (LT)",
    "J. Tatemado (KG)",
    "Cebolla (KG)",
    "Cilantro (KG)",
    "Ajo (KG)",
    "SUR *Cubetas con limón",
    "Limón* (LT)",
    "Sal (KG)",
  ];
  let materiaColumns = product.id === "01"
    ? molcaMateriaLabels.map((label, offset) => ({ label, index: 12 + offset }))
    : columnOverride.materiaRange
    ? Array.from(
        { length: columnOverride.materiaRange.endCol - columnOverride.materiaRange.startCol + 1 },
        (_, offset) => {
          const index = columnOverride.materiaRange.startCol + offset;
          return { label: rows[columnOverride.materiaRange.headerRow]?.[index], index };
        },
      ).filter((item) => cleanText(item.label))
    : columnOverride.materiaColumns?.map((column) => typeof column === "number" ? ({ label: headers[column], index: column }) : column) || findGroupedColumns(headers, sectionRow, "MATERIA PRIMA");
  if (!materiaColumns.length) {
    const materiaStart = findGroupStart(rows, "MATERIA PRIMA");
    const nextGroup = materiaStart >= 0
      ? (sectionRow || []).findIndex((value, index) => index > materiaStart && cleanText(value) && !cleanText(value).includes("materia prima"))
      : -1;
    const materiaEnd = nextGroup > materiaStart ? nextGroup : Math.min(headers.length, materiaStart + 14);
    materiaColumns = materiaStart >= 0
      ? headers.slice(materiaStart, materiaEnd).map((label, offset) => ({ label, index: materiaStart + offset })).filter((item) => cleanText(item.label) && !cleanText(item.label).includes("existencia"))
      : [];
  }

  let fallbackDay = 1;
  const dailyRows = [];
  const firstDayIndex = rows.findIndex((row) => splitDay(row?.[0], null));
  const monthRows = firstDayIndex >= 0 ? rows.slice(firstDayIndex, firstDayIndex + 31) : rows.slice(3, 34);

  for (const row of monthRows) {
    const hasData = [stockIniCol, ...(pedidosSumCols || [pedidosCol]), ...(produccionSumCols || [produccionCol]), ollasCol, rendimientoCol, stockFinalCol, ...extraPedidoColumns.map(({ index }) => index), ...extraProduccionColumns.map(({ index }) => index), ...stackedProductionColumns.map(({ index }) => index)]
      .some((index) => row[index] !== undefined && row[index] !== "");
    const day = splitDay(row[0], fallbackDay);
    if (!hasData && !day) continue;
    if (!day) continue;
    fallbackDay = Number(day.fecha) + 1;

    dailyRows.push({
      ...day,
      stock_ini: number(row[stockIniCol]),
      pedidos: pedidosSumCols ? pedidosSumCols.reduce((total, index) => total + number(row[index]), 0) : number(row[pedidosCol]),
      produccion: product.id === "07" ? (number(row[11]) * 1.6) + (number(row[23]) * 5) : produccionSumCols ? produccionSumCols.reduce((total, index) => total + number(row[index]), 0) : number(row[produccionCol]),
      ollas: number(row[ollasCol]),
      rendimiento: number(row[rendimientoCol]),
      stock_final: number(row[stockFinalCol]),
      ...Object.fromEntries(extraPedidoColumns.map(({ key, index }) => [key, number(row[index])])),
      ...Object.fromEntries(extraProduccionColumns.map(({ key, index }) => [key, number(row[index])])),
      ...Object.fromEntries(stackedProductionColumns.map(({ key, index }) => [key, number(row[index])])),
      materias: materiaColumns.map(({ label, index }) => ({
        insumo: String(label || `Col ${index + 1}`).replace(/\s+/g, " ").trim(),
        cantidad: number(row[index]),
      })),
    });
  }

  const units = unitsFor(product);
  const totalPedidos = sum(dailyRows, "pedidos");
  const totalProduccion = sum(dailyRows, "produccion");
  const totalOllas = sum(dailyRows, "ollas");
  const rendimientos = dailyRows.map((row) => row.rendimiento).filter(Boolean);
  const rendimientoPromedio = avg(dailyRows.filter((row) => row.rendimiento), "rendimiento");
  const [modaProduccion, modaOcasiones] = mode(dailyRows.map((row) => row.produccion));
  const topPedido = [...dailyRows].sort((a, b) => b.pedidos - a.pedidos)[0] || { pedidos: 0, dia: "", fecha: "" };
  const topProduccion = [...dailyRows].sort((a, b) => b.produccion - a.produccion)[0] || { produccion: 0, dia: "", fecha: "" };
  const lowRendimiento = [...dailyRows].filter((row) => row.rendimiento).sort((a, b) => a.rendimiento - b.rendimiento)[0];
  const highRendimiento = [...dailyRows].filter((row) => row.rendimiento).sort((a, b) => b.rendimiento - a.rendimiento)[0];

  const materiaTotals = materiaColumns.map(({ label }, index) => ({
    insumo: String(label || `Insumo ${index + 1}`).replace(/\s+/g, " ").trim(),
    total: dailyRows.reduce((total, row) => total + number(row.materias[index]?.cantidad), 0),
  }));

  const extraPedidoTotals = extraPedidoColumns.map(({ key, label }) => ({
    key,
    label,
    total: sum(dailyRows, key),
  }));
  const extraProduccionTotals = extraProduccionColumns.map(({ key, label }) => ({
    key,
    label,
    total: sum(dailyRows, key),
  }));

  const extraPedidoCharts = extraPedidoColumns.map(({ key, label, color }) => ({
    key,
    label,
    color,
    average: avg(dailyRows, key),
    rows: dailyRows.map(({ dia, fecha, [key]: value }) => ({ dia, fecha, [key]: value })),
  }));

  const stackedProductionCharts = stackedProductionConfig.map((chart) => ({
    ...chart,
    rows: dailyRows.map((row) => ({
      dia: row.dia,
      fecha: row.fecha,
      ...Object.fromEntries((chart.columns || []).map(({ key }) => [key, row[key]])),
    })),
  }));

  const sigma = std(rendimientos);
  const cv = rendimientoPromedio ? (sigma / rendimientoPromedio) * 100 : 0;
  const consistency = cv < 3 ? "alta consistencia" : cv < 8 ? "variación moderada" : "alta variabilidad";
  const summary = columnOverride.hideRendimientoSection
    ? `${product.name} en ${month.name}: ${totalPedidos.toLocaleString("es-MX")} ${units.pedido} pedidos y ` +
      `${totalProduccion.toLocaleString("es-MX")} ${units.produccion} producidos. ` +
      `El mayor pedido fue ${format(topPedido.pedidos)} ${units.pedido} el ${topPedido.dia} ${topPedido.fecha}; ` +
      `la mayor producción fue ${format(topProduccion.produccion)} ${units.produccion} el ${topProduccion.dia} ${topProduccion.fecha}.`
    : `${product.name} en ${month.name}: ${totalPedidos.toLocaleString("es-MX")} ${units.pedido} pedidos y ` +
      `${totalProduccion.toLocaleString("es-MX")} ${units.produccion} producidos. ` +
      `El rendimiento promedio fue ${rendimientoPromedio.toFixed(2)} ${units.rendimiento} con ${consistency} ` +
      `(CV ${cv.toFixed(1)}%). El mayor pedido fue ${format(topPedido.pedidos)} ${units.pedido} el ${topPedido.dia} ${topPedido.fecha}; ` +
      `la mayor producción fue ${format(topProduccion.produccion)} ${units.produccion} el ${topProduccion.dia} ${topProduccion.fecha}.`;

  return {
    product,
    month,
    generatedAt: new Date().toLocaleDateString("es-MX", { day: "2-digit", month: "2-digit", year: "numeric" }),
    summary,
    kpis: {
      totalPedidos,
      totalProduccion,
      totalOllas,
      promedioPedidos: avg(dailyRows, "pedidos"),
      promedioProduccion: avg(dailyRows, "produccion"),
      extraPedidoTotals,
      extraProduccionTotals,
      rendimientoPromedio,
      sigma,
      cv,
      modaProduccion,
      modaOcasiones,
      highRendimiento,
      lowRendimiento,
    },
    pedidos: dailyRows.map((row) => ({
      dia: row.dia,
      fecha: row.fecha,
      pedidos: row.pedidos,
      stock_ini: row.stock_ini,
      stock_final: row.stock_final,
      ...Object.fromEntries(extraPedidoColumns.map(({ key }) => [key, row[key]])),
    })),
    extraPedidoCharts,
    stackedProductionCharts,
    produccion: dailyRows.map((row) => ({
      dia: row.dia,
      fecha: row.fecha,
      produccion: row.produccion,
      ollas: row.ollas,
      rendimiento: row.rendimiento,
      ...Object.fromEntries(extraProduccionColumns.map(({ key }) => [key, row[key]])),
    })),
    materias: materiaTotals,
    units,
  };
}

function googleValue(cell) {
  if (!cell) return "";
  if (cell.f !== undefined) return cell.f;
  if (cell.v === undefined || cell.v === null) return "";
  return cell.v;
}

function fetchPublishedSheetRows(product, month) {
  return new Promise((resolve, reject) => {
    const callbackName = `plCocinaSheet_${Date.now()}_${Math.round(Math.random() * 100000)}`;
    const script = document.createElement("script");
    const cleanup = () => {
      delete window[callbackName];
      script.remove();
    };
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error("Google Sheets tardó demasiado en responder."));
    }, 12000);

    window[callbackName] = (table) => {
      window.clearTimeout(timer);
      cleanup();

      if (table?.status === "error") {
        reject(new Error(table.errors?.[0]?.detailed_message || "Google Sheets no devolvió datos."));
        return;
      }

      const columns = table?.table?.cols || [];
      const rows = table?.table?.rows || [];
      if (!rows.length) {
        reject(new Error("La pestaña no tiene datos visibles o no está publicada."));
        return;
      }

      const values = rows.map((row) => {
        const cells = row.c || [];
        return columns.map((_, index) => googleValue(cells[index]));
      });
      values.__columns = columns.map((column) => column.label || column.id || "");
      resolve(values);
    };

    const params = new URLSearchParams({
      sheet: month.id,
      headers: "0",
      range: "A1:ZZ34",
      tqx: `responseHandler:${callbackName}`,
    });
    script.src = `https://docs.google.com/spreadsheets/d/${product.sheetId}/gviz/tq?${params.toString()}`;
    script.onerror = () => {
      window.clearTimeout(timer);
      cleanup();
      reject(new Error("No pude cargar el Sheet publicado."));
    };
    document.body.appendChild(script);
  });
}


function html(strings, ...values) {
  return strings.reduce((result, string, index) => result + string + (values[index] ?? ""), "");
}

function renderSelectOptions(items, selected, label) {
  return items
    .map((item) => `<option value="${item.id}" ${item.id === selected ? "selected" : ""}>${label(item)}</option>`)
    .join("");
}

function format(value, digits = 0) {
  return Number(value || 0).toLocaleString("es-MX", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function barChart(rows, key, color, average, section) {
  if (!rows?.length) return "";
  const width = 1100;
  const height = 300;
  const pad = { top: 22, right: 24, bottom: 38, left: 48 };
  const maxValue = Math.max(...rows.map((row) => number(row[key])), average || 0) * 1.12 || 1;
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const gap = 5;
  const barW = Math.max(10, chartW / rows.length - gap);
  const avgY = pad.top + chartH - (average / maxValue) * chartH;
  const selectedFecha = state.selectedDay?.section === section ? state.selectedDay.fecha : null;

  const bars = rows
    .map((row, index) => {
      const value = number(row[key]);
      const h = (value / maxValue) * chartH;
      const x = pad.left + index * (barW + gap);
      const y = pad.top + chartH - h;
      const selected = selectedFecha === row.fecha;
      return `
        <g class="chart-bar${selected ? " is-selected" : ""}" data-chart-bar="true" data-section="${section}" data-fecha="${row.fecha}" tabindex="0" role="button" aria-label="${row.dia} ${row.fecha}: ${format(value)}">
          <rect class="bar-focus" x="${x - 2}" y="${pad.top}" width="${barW + 4}" height="${chartH}" rx="5"></rect>
          <rect class="bar-shape" x="${x}" y="${y}" width="${barW}" height="${h}" rx="4" fill="${color}"></rect>
          <title>${row.dia} ${row.fecha}: ${format(value)}</title>
          <text x="${x + barW / 2}" y="${height - 12}" text-anchor="middle" font-size="10" fill="#69778a">${row.fecha}</text>
        </g>`;
    })
    .join("");

  return `
    <svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Gráfica de ${key}">
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${pad.top + chartH}" y2="${pad.top + chartH}" stroke="#d8dee9"></line>
      <line x1="${pad.left}" x2="${pad.left}" y1="${pad.top}" y2="${pad.top + chartH}" stroke="#d8dee9"></line>
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${avgY}" y2="${avgY}" stroke="#526071" stroke-dasharray="7 5" stroke-width="2"></line>
      <rect x="${width - pad.right - 128}" y="${pad.top - 16}" width="124" height="24" rx="6" fill="#ffffff" stroke="#cfd6e2"></rect>
      <text x="${width - pad.right - 66}" y="${pad.top + 1}" text-anchor="middle" font-size="12" font-weight="800" fill="#405066">Media ${format(average, 1)}</text>
      ${bars}
    </svg>`;
}

function stackedIngredientChart(chart) {
  const rows = chart.rows || [];
  const columns = chart.columns || [];
  if (!rows.length || !columns.length) return "";
  const width = 1100;
  const height = 430;
  const pad = { top: 74, right: 24, bottom: 82, left: 54 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const gap = 7;
  const barW = Math.max(14, chartW / rows.length - gap);
  const totals = rows.map((row) => columns.reduce((total, column) => total + number(row[column.key]), 0));
  const maxValue = Math.max(...totals) * 1.16 || 1;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((ratio) => Math.round((maxValue * ratio) / 10) * 10);
  const legend = columns.slice().reverse().map((column, index) => {
    const x = pad.left + 360 + index * 142;
    return `
      <g>
        <rect x="${x}" y="28" width="14" height="14" rx="2" fill="${column.color}"></rect>
        <text x="${x + 22}" y="40" font-size="14" font-weight="700" fill="#202938">${column.label}</text>
      </g>`;
  }).join("");
  const grid = ticks.slice(1).map((tick) => {
    const y = pad.top + chartH - (tick / maxValue) * chartH;
    return `
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${y}" y2="${y}" stroke="#d8dee9"></line>
      <text x="${pad.left - 8}" y="${y + 4}" text-anchor="end" font-size="12" fill="#69778a">${format(tick)}</text>`;
  }).join("");
  const bars = rows.map((row, index) => {
    const x = pad.left + index * (barW + gap);
    let yCursor = pad.top + chartH;
    const segments = columns.map((column) => {
      const value = number(row[column.key]);
      const h = (value / maxValue) * chartH;
      const y = yCursor - h;
      yCursor = y;
      const labelFill = column.label === "Col Blanca" || column.label === "Aderezo" ? "#111827" : "#ffffff";
      return `
        <rect x="${x}" y="${y}" width="${barW}" height="${Math.max(0, h)}" fill="${column.color}"></rect>
        ${value && h > 13 ? `<text x="${x + barW / 2}" y="${y + h / 2 + 5}" text-anchor="middle" font-size="12" font-weight="900" fill="${labelFill}">${format(value)}</text>` : ""}`;
    }).join("");
    return `
      <g>
        ${segments}
        <text x="${x + barW / 2}" y="${height - 56}" text-anchor="end" transform="rotate(-50 ${x + barW / 2} ${height - 56})" font-size="11" fill="#263244">${row.dia} ${row.fecha}</text>
      </g>`;
  }).join("");

  return `
    <svg class="chart stacked-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="${chart.title}">
      <text x="${pad.left}" y="38" font-size="22" font-weight="800" fill="#526071">${chart.title}</text>
      ${legend}
      ${grid}
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${pad.top + chartH}" y2="${pad.top + chartH}" stroke="#202938" stroke-width="1.5"></line>
      ${bars}
    </svg>`;
}

function lineChart(rows) {
  const valid = rows.filter((row) => row.rendimiento);
  if (valid.length < 2) return "";
  const width = 1100;
  const height = 280;
  const pad = { top: 36, right: 24, bottom: 38, left: 48 };
  const values = valid.map((row) => row.rendimiento);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const sigma = std(values);
  const cv = mean ? (sigma / mean) * 100 : 0;
  const min = Math.min(...values, mean - sigma) - 0.08;
  const max = Math.max(...values, mean + sigma) + 0.08;
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const xFor = (index) => pad.left + (index / (valid.length - 1)) * chartW;
  const yFor = (value) => pad.top + chartH - ((value - min) / (max - min || 1)) * chartH;
  const path = valid.map((row, index) => `${index === 0 ? "M" : "L"} ${xFor(index)} ${yFor(row.rendimiento)}`).join(" ");
  const bandTop = yFor(mean + sigma);
  const bandBottom = yFor(mean - sigma);
  const selectedFecha = state.selectedDay?.section === "rendimiento" ? state.selectedDay.fecha : null;

  const dots = valid
    .map((row, index) => {
      const out = Math.abs(row.rendimiento - mean) > sigma;
      const selected = selectedFecha === row.fecha;
      return `
        <g class="chart-point${selected ? " is-selected" : ""}" data-chart-point="true" data-section="rendimiento" data-fecha="${row.fecha}" tabindex="0" role="button" aria-label="${row.dia} ${row.fecha}: ${row.rendimiento.toFixed(2)}">
          <circle cx="${xFor(index)}" cy="${yFor(row.rendimiento)}" r="${selected ? 7 : out ? 5 : 4}" fill="${out ? "#cb3d3d" : "#6255d9"}" stroke="#fff" stroke-width="2"></circle>
          <title>${row.dia} ${row.fecha}: ${row.rendimiento.toFixed(2)}</title>
          <text x="${xFor(index)}" y="${height - 12}" text-anchor="middle" font-size="10" fill="#69778a">${row.fecha}</text>
        </g>`;
    })
    .join("");

  return `
    <svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Rendimiento diario">
      <rect x="${pad.left}" y="${bandTop}" width="${chartW}" height="${bandBottom - bandTop}" fill="#6255d9" opacity="0.08"></rect>
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${yFor(mean)}" y2="${yFor(mean)}" stroke="#526071" stroke-dasharray="7 5" stroke-width="2"></line>
      <rect x="${width - pad.right - 280}" y="${pad.top - 38}" width="268" height="38" rx="9" fill="#ffffff" stroke="#cfd6e2" stroke-width="1.5"></rect>
      <text x="${width - pad.right - 146}" y="${pad.top - 13}" text-anchor="middle" font-size="18" font-weight="900" fill="#405066">Prom. ${mean.toFixed(2)} · CV ${cv.toFixed(1)}%</text>
      <path d="${path}" fill="none" stroke="#6255d9" stroke-width="3"></path>
      ${dots}
    </svg>`;
}

function monthlyTrendChart(rows, key = "pedidos", color = "#108a63", unit = "pedidos") {
  if (!rows?.length) return "";
  const width = 1100;
  const height = 300;
  const pad = { top: 34, right: 34, bottom: 44, left: 58 };
  const values = rows.map((row) => number(row[key]));
  const maxValue = Math.max(...values) * 1.16 || 1;
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const xFor = (index) => rows.length === 1 ? pad.left + chartW / 2 : pad.left + (index / (rows.length - 1)) * chartW;
  const yFor = (value) => pad.top + chartH - (value / maxValue) * chartH;
  const points = rows.map((row, index) => ({ ...row, x: xFor(index), y: yFor(row[key]) }));
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const areaPath = `${path} L ${points[points.length - 1].x} ${pad.top + chartH} L ${points[0].x} ${pad.top + chartH} Z`;
  const selectedMonth = state.selectedTrendMonth || rows[rows.length - 1]?.id;
  const fillId = `monthlyTrendFill-${key}`;

  const dots = points.map((point) => {
    const selected = selectedMonth === point.id;
    const value = number(point[key]);
    return `
      <g class="chart-month${selected ? " is-selected" : ""}" data-chart-month="true" data-month="${point.id}" tabindex="0" role="button" aria-label="${point.name}: ${format(value)} ${unit}">
        <circle cx="${point.x}" cy="${point.y}" r="${selected ? 7 : 5}" fill="${color}" stroke="#ffffff" stroke-width="2"></circle>
        <title>${point.name}: ${format(value)} ${unit}</title>
        <text x="${point.x}" y="${height - 14}" text-anchor="middle" font-size="11" font-weight="800" fill="#526071">${point.label}</text>
      </g>`;
  }).join("");

  return `
    <svg class="chart monthly-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="${unit} mes a mes">
      <defs>
        <linearGradient id="${fillId}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.22"></stop>
          <stop offset="100%" stop-color="${color}" stop-opacity="0.02"></stop>
        </linearGradient>
      </defs>
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${pad.top + chartH}" y2="${pad.top + chartH}" stroke="#d8dee9"></line>
      <line x1="${pad.left}" x2="${pad.left}" y1="${pad.top}" y2="${pad.top + chartH}" stroke="#d8dee9"></line>
      <path d="${areaPath}" fill="url(#${fillId})"></path>
      <path class="chart-month-line" d="${path}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
      ${dots}
    </svg>`;
}
function selectedTrendDetail(rows, key = "pedidos", unit = "pedidos") {
  if (!rows?.length) return "";
  const selected = rows.find((row) => row.id === state.selectedTrendMonth) || rows[rows.length - 1];
  const index = rows.findIndex((row) => row.id === selected.id);
  const previous = index > 0 ? rows[index - 1] : null;
  const selectedValue = number(selected[key]);
  const previousValue = previous ? number(previous[key]) : 0;
  const diff = previous ? selectedValue - previousValue : 0;
  const diffPct = previousValue ? (diff / previousValue) * 100 : 0;
  const trendLabel = !previous ? "Mes inicial" : `${diff >= 0 ? "+" : ""}${format(diff)} ${unit} (${diffPct >= 0 ? "+" : ""}${format(diffPct, 1)}%)`;

  return `
    <div class="day-detail trend-detail">
      <div class="day-detail-card">
        <span>Mes</span>
        <strong>${selected.name}</strong>
      </div>
      <div class="day-detail-card">
        <span>Total</span>
        <strong>${format(selectedValue)} ${unit}</strong>
      </div>
      <div class="day-detail-card">
        <span>Vs. mes anterior</span>
        <strong>${trendLabel}</strong>
      </div>
    </div>`;
}
function monthlyTrendSection(report, config) {
  const rows = report.monthlyPedidos || [];
  if (!rows.length) return "";
  const first = rows[0];
  const last = rows[rows.length - 1];
  const value = number(last[config.key]);
  return `
    <section class="panel trend-panel">
      <div class="trend-head">
        <div>
          <h3 class="panel-title">${config.title}</h3>
          <p>${first.name} a ${last.name} · ${report.product.name}</p>
        </div>
        <strong>${format(value)} ${config.unit}</strong>
      </div>
      ${monthlyTrendChart(rows, config.key, config.color, config.unit)}
      ${selectedTrendDetail(rows, config.key, config.unit)}
    </section>`;
}

function monthlyTrendPanel(report) {
  if (!report.monthlyPedidos?.length) return "";
  const configs = [
    { key: "pedidos", title: "Fiebre mensual de pedidos en KG", unit: report.units.pedido, color: "#108a63" },
  ];

  if (report.kpis.extraPedidoTotals?.length) {
    configs.push({
      key: "pedidosChicas",
      title: report.product.id === "05"
        ? "Fiebre mensual de pedidos en Bolsas de 1.2 KG"
        : report.product.id === "06" || report.product.id === "07"
        ? "Fiebre mensual de pedidos en Bolsas Chicas de 1.6 KG"
        : "Fiebre mensual de pedidos en Bolsas Chicas",
      unit: "bolsas",
      color: "#d97706",
    });
    if (report.kpis.extraPedidoTotals.some((item) => item.key === "pedidos_grandes_2kg")) {
      configs.push({
        key: "pedidosGrandes",
        title: report.product.id === "07"
          ? "Fiebre mensual de pedidos en Bolsas Grandes de 15 KG"
          : report.product.id === "06"
          ? "Fiebre mensual de pedidos en Bolsas Grandes de 5 KG"
          : "Fiebre mensual de pedidos en Bolsas Grandes",
        unit: "bolsas",
        color: "#7c3aed",
      });
    }
  }

  return configs.map((config) => monthlyTrendSection(report, config)).join("");
}
function renderTable(rows, columns, section) {
  if (!rows?.length) return "";
  const selectedFecha = state.selectedDay?.section === section ? state.selectedDay.fecha : null;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${columns.map((col) => `<th>${col.label}</th>`).join("")}</tr></thead>
        <tbody>
          ${rows
            .map(
              (row) => `<tr class="${selectedFecha === row.fecha ? "is-selected" : ""}" data-table-row="true" data-section="${section}" data-fecha="${row.fecha || ""}" tabindex="${row.fecha ? "0" : "-1"}">${columns
                .map((col) => `<td>${col.format ? col.format(row[col.key], row) : row[col.key]}</td>`)
                .join("")}</tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
}

function selectedDayDetail(report, section) {
  if (state.selectedDay?.section !== section) return "";
  const fecha = state.selectedDay.fecha;
  const pedido = report.pedidos.find((row) => row.fecha === fecha);
  const produccion = report.produccion.find((row) => row.fecha === fecha);
  const rendimiento = report.produccion.find((row) => row.fecha === fecha);
  const base = section === "pedidos" ? pedido : section === "rendimiento" ? rendimiento : produccion;
  if (!base) return "";
  const units = report.units || unitsFor(report.product);

  const cards = section === "pedidos"
    ? PRODUCT_COLUMN_OVERRIDES[report.product.id]?.hidePedidoStockDetail || report.product.id === "05"
      ? [
          ["Día", `${pedido.dia} ${pedido.fecha}`],
          ["Pedidos", `${format(pedido.pedidos)} ${units.pedido}`],
        ]
      : [
          ["Día", `${pedido.dia} ${pedido.fecha}`],
          ["Pedidos", `${format(pedido.pedidos)} ${units.pedido}`],
          ["Stock inicial", `${format(pedido.stock_ini)} ${units.stock}`],
          ["Stock final", `${format(pedido.stock_final)} ${units.stock}`],
        ]
    : section === "rendimiento"
    ? [
        ["Día", `${rendimiento.dia} ${rendimiento.fecha}`],
        ["Rendimiento", `${format(rendimiento.rendimiento, 2)} ${units.rendimiento}`],
        ["Producción", `${format(rendimiento.produccion)} ${units.produccion}`],
        ["Ollas", format(rendimiento.ollas)],
      ]
    : PRODUCT_COLUMN_OVERRIDES[report.product.id]?.hideRendimientoSection
    ? [
        ["Día", `${produccion.dia} ${produccion.fecha}`],
        ["Producción", `${format(produccion.produccion)} ${units.produccion}`],
      ]
    : [
        ["Día", `${produccion.dia} ${produccion.fecha}`],
        ["Producción", `${format(produccion.produccion)} ${units.produccion}`],
        ["Ollas", format(produccion.ollas)],
        ["Rendimiento", `${format(produccion.rendimiento, 2)} ${units.rendimiento}`],
      ];

  return `
    <div class="day-detail">
      ${cards.map(([label, value]) => `
        <div class="day-detail-card">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>`).join("")}
    </div>`;
}

function selectedExtraPedidoDetail(chart) {
  if (state.selectedDay?.section !== chart.key) return "";
  const row = chart.rows.find((item) => item.fecha === state.selectedDay.fecha);
  if (!row) return "";

  const cards = [
    ["Día", `${row.dia} ${row.fecha}`],
    ["Cantidad", `${format(row[chart.key])} bolsas`],
  ];

  return `
    <div class="day-detail">
      ${cards.map(([label, value]) => `
        <div class="day-detail-card">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>`).join("")}
    </div>`;
}

function renderKpiCard(label, value, note) {
  return '<div class="kpi"><div class="kpi-label">' + label + '</div><div class="kpi-value">' + value + '</div><div class="kpi-note">' + note + '</div></div>';
}

function renderKpis(report) {
  if (report.kpis.extraPedidoTotals?.length) {
    const pedidoChicas = report.kpis.extraPedidoTotals?.find((item) => item.key === "pedidos_chicas_1kg")?.total || 0;
    const pedidoGrandes = report.kpis.extraPedidoTotals?.find((item) => item.key === "pedidos_grandes_2kg")?.total || 0;
    const produccionChicas = report.kpis.extraProduccionTotals?.find((item) => item.key === "produccion_chicas_1kg")?.total || 0;
    const produccionGrandes = report.kpis.extraProduccionTotals?.find((item) => item.key === "produccion_grandes_2kg")?.total || 0;
    const isArroz = report.product.id === "04";
    const isMezcla = report.product.id === "05";
    const isCodito = report.product.id === "06";
    const isEnsalada = report.product.id === "07";
    const hideRendimiento = PRODUCT_COLUMN_OVERRIDES[report.product.id]?.hideRendimientoSection;
    const pedidoChicaNote = isArroz ? "bolsas de 1 kg" : isMezcla ? "bolsas de 1.2 kg" : isCodito || isEnsalada ? "bolsas de 1.6 kg" : "bolsas chicas";
    const pedidoGrandeNote = isArroz ? "bolsas de 2 kg" : isCodito ? "bolsas de 5 kg" : isEnsalada ? "bolsas de 15 kg" : "bolsas grandes";
    const produccionChicaNote = isArroz ? "bolsas de 1 kg" : isMezcla ? "bolsas de 1.2 kg" : isCodito ? "bolsas de 1.6 kg" : isEnsalada ? "kits de 1.6 kg" : "bolsas chicas";
    const produccionGrandeNote = isArroz ? "bolsas de 2 kg" : isCodito ? "bolsas de 5 kg" : isEnsalada ? "kits de 5 kg" : "bolsas grandes";
    const pedidoCards =
      renderKpiCard("Total pedidos KG", format(report.kpis.totalPedidos), "kg del mes") +
      renderKpiCard(isMezcla ? "Bolsas 1.2 KG" : "Bolsas chicas", format(pedidoChicas), pedidoChicaNote) +
      (isMezcla ? "" : renderKpiCard("Bolsas grandes", format(pedidoGrandes), pedidoGrandeNote));
    const produccionCards = isEnsalada
      ? renderKpiCard("Bolsas Chicas", format(produccionChicas), produccionChicaNote) +
        renderKpiCard("Bolsas Grandes", format(produccionGrandes), produccionGrandeNote) +
        renderKpiCard("Equivalencia en KG", format(report.kpis.totalProduccion), "kg del mes")
      : renderKpiCard("Producción KG", format(report.kpis.totalProduccion), "kg del mes") +
        renderKpiCard(isMezcla ? "Bolsas 1.2 KG" : "Bolsas chicas", format(produccionChicas), produccionChicaNote) +
        (isMezcla ? "" : renderKpiCard("Bolsas grandes", format(produccionGrandes), produccionGrandeNote)) +
        (hideRendimiento ? "" : renderKpiCard("Rendimiento", format(report.kpis.rendimientoPromedio, 2), report.units.rendimiento) +
        renderKpiCard("Consistencia", format(report.kpis.cv, 1) + "%", "coeficiente de variación"));
    const pedidoClass = isMezcla ? "kpis kpis-two" : "kpis kpis-three";
    const produccionClass = hideRendimiento ? "kpis kpis-three" : isMezcla ? "kpis kpis-four" : "kpis kpis-five";
    return '<section class="kpi-section">' +
      '<div class="kpi-group"><h3 class="kpi-group-title">Pedidos</h3><div class="' + pedidoClass + '">' + pedidoCards + '</div></div>' +
      '<div class="kpi-group"><h3 class="kpi-group-title">Producción</h3><div class="' + produccionClass + '">' + produccionCards + '</div></div>' +
    '</section>';
  }

  return '<section class="kpis">' +
    renderKpiCard("Pedidos", format(report.kpis.totalPedidos), report.units.pedido + " del mes") +
    renderKpiCard("Producción", format(report.kpis.totalProduccion), report.units.produccion) +
    renderKpiCard("Rendimiento", format(report.kpis.rendimientoPromedio, 2), report.units.rendimiento) +
    renderKpiCard("Consistencia", format(report.kpis.cv, 1) + "%", "coeficiente de variación") +
  '</section>';
}
function reportView(report) {
  const visible = state.sections;
  return html`
    <article class="report-card">
      <header class="report-head">
        <div>
          <h2 class="report-title">${report.product.name} · ${report.month.name}</h2>
          <p class="report-meta">${report.product.file} · Generado ${report.generatedAt}</p>
        </div>
      </header>
      <div class="content">
        <p class="summary">${report.summary}</p>
        ${renderKpis(report)}

        <div class="report-stack">
          ${visible.pedidos ? `
            <section class="panel">
              <h3 class="panel-title">Pedidos por día en KG</h3>
              ${barChart(report.pedidos, "pedidos", SECTIONS.pedidos.color, report.kpis.promedioPedidos, "pedidos")}
              ${selectedDayDetail(report, "pedidos")}
            </section>
            ${report.extraPedidoCharts?.map((chart) => `
              <section class="panel">
                <h3 class="panel-title">${chart.label}</h3>
                ${barChart(chart.rows, chart.key, chart.color, chart.average, chart.key)}
                ${selectedExtraPedidoDetail(chart)}
              </section>`).join("") || ""}
            <section class="panel">
              <h3 class="panel-title">Tabla de pedidos</h3>
              ${renderTable(report.pedidos, report.extraPedidoCharts?.length ? [
                { key: "fecha", label: "Día", format: (v, row) => `${row.dia} ${row.fecha}` },
                { key: "pedidos", label: report.product.id === "06" || report.product.id === "07" ? "PEDIDOS KG" : "Pedidos en KG", format: (v) => format(v) },
                { key: "pedidos_chicas_1kg", label: report.product.id === "05" ? "Pedidos en Bolsas de 1.2 KG" : report.product.id === "06" || report.product.id === "07" ? "BOLSAS CHICAS (1.6 KG)" : "Pedidos en Bolsas Chicas (1 KG)", format: (v) => format(v) },
                ...(report.product.id === "05" ? [] : [{ key: "pedidos_grandes_2kg", label: report.product.id === "07" ? "BOLSAS GRANDES (15 KG)" : report.product.id === "06" ? "BOLSAS GRANDES (5 KG)" : "Pedidos en Bolsas Grandes (2 KG)", format: (v) => format(v) }]),
              ] : [
                { key: "fecha", label: "Día", format: (v, row) => `${row.dia} ${row.fecha}` },
                { key: "pedidos", label: `Pedidos (${report.units.pedido})`, format: (v) => format(v) },
                { key: "stock_ini", label: `Stock inicial (${report.units.stock})`, format: (v) => format(v) },
                { key: "stock_final", label: `Stock final (${report.units.stock})`, format: (v) => format(v) },
              ], "pedidos")}
            </section>` : ""}
          ${visible.produccion ? `
            ${report.stackedProductionCharts?.length ? report.stackedProductionCharts.map((chart) => `
            <section class="panel">
              ${stackedIngredientChart(chart)}
            </section>`).join("") : `
            <section class="panel">
              <h3 class="panel-title">Producción por día</h3>
              ${barChart(report.produccion, "produccion", SECTIONS.produccion.color, report.kpis.promedioProduccion, "produccion")}
              ${selectedDayDetail(report, "produccion")}
            </section>`}
            <section class="panel">
              <h3 class="panel-title">Tabla de producción</h3>
              ${renderTable(report.produccion, PRODUCT_COLUMN_OVERRIDES[report.product.id]?.hideRendimientoSection ? [
                { key: "fecha", label: "Día", format: (v, row) => `${row.dia} ${row.fecha}` },
                { key: "produccion", label: `Producción (${report.units.produccion})`, format: (v) => format(v) },
                { key: "produccion_chicas_1kg", label: "Kits chicas (1.6 KG)", format: (v) => format(v) },
                { key: "produccion_grandes_2kg", label: "Kits grandes (5 KG)", format: (v) => format(v) },
              ] : [
                { key: "fecha", label: "Día", format: (v, row) => `${row.dia} ${row.fecha}` },
                { key: "produccion", label: `Producción (${report.units.produccion})`, format: (v) => format(v) },
                { key: "ollas", label: "Ollas", format: (v) => format(v) },
                { key: "rendimiento", label: `Rendimiento (${report.units.rendimiento})`, format: (v) => format(v, 2) },
              ], "produccion")}
            </section>
            ${PRODUCT_COLUMN_OVERRIDES[report.product.id]?.hideRendimientoSection ? "" : `
            <section class="panel">
              <h3 class="panel-title">Rendimiento diario</h3>
              ${lineChart(report.produccion)}
              ${selectedDayDetail(report, "rendimiento")}
            </section>`}` : ""}
          ${visible.materias ? `
            <section class="panel">
              <h3 class="panel-title">Materias primas</h3>
              ${renderTable(report.materias, [
                { key: "insumo", label: "Insumo" },
                { key: "total", label: "Total", format: (v) => format(v, 1) },
              ], "materias")}
            </section>` : ""}
        </div>
        ${monthlyTrendPanel(report)}
        <section class="report-cta">
          <div>
            <h3>Reporte listo para compartir</h3>
            <p>${report.product.name} · ${report.month.name}</p>
          </div>
          <button class="button" data-action="download-pdf">Descargar reporte en PDF</button>
        </section>
      </div>
    </article>`;
}

function emptyView() {
  const product = PRODUCTS.find((item) => item.id === state.productId);
  const month = MONTHS.find((item) => item.id === state.monthId);
  const productLabel = product?.name || "elige un producto";
  const monthLabel = month?.name || "elige un mes";
  return `
    <article class="report-card empty">
      <div class="empty-inner">
        <h2>${state.loading ? "Leyendo reporte..." : "Elige el reporte que necesitas"}</h2>
        <p>Seleccionado: <strong>${productLabel}</strong> · <strong>${monthLabel}</strong>. Presiona Generar reporte para leer pedidos, producción y materias primas.</p>
        ${state.error ? `<p class="error-note">${state.error}</p>` : ""}
      </div>
    </article>`;
}

function sidebarView() {
  const product = PRODUCTS.find((item) => item.id === state.productId);
  const canGenerate = Boolean(product && state.monthId);
  return `
    <aside class="sidebar">
      <div class="field">
        <label for="product">Producto</label>
        <select id="product" class="select">
          <option value="">Elige una opción de producto</option>
          ${renderSelectOptions(PRODUCTS, state.productId, (item) => `${item.id} · ${item.name}`)}
        </select>
      </div>
      <div class="field">
        <label for="month">Mes</label>
        <select id="month" class="select">
          <option value="">Elige una opción de mes</option>
          ${renderSelectOptions(MONTHS, state.monthId, (item) => `${item.id} · ${item.name}`)}
        </select>
      </div>
      <div class="actions">
        <button class="button" data-action="generate" ${state.loading || !canGenerate ? "disabled" : ""}>${state.loading ? "Leyendo..." : "Generar reporte"}</button>
        <button class="button ghost" data-action="open-drive" ${product ? "" : "disabled"}>Abrir archivo en Drive</button>
      </div>
      <p class="helper">${product ? `Archivo activo: <strong>${product.file}</strong>. ` : "Selecciona un producto para ver el archivo activo. "}La app lee la pestaña elegida desde Google Sheets publicado; no necesita servidor ni backend.</p>
    </aside>`;
}

function appView() {
  return `
    <div class="shell ${state.sidebarCollapsed ? "is-sidebar-collapsed" : ""}">
      <header class="topbar">
        <div class="brand-mark">PL</div>
        <div>
          <h1 class="brand-title">Dashboard de Producción</h1>
          <p class="brand-subtitle">PL Cocina · Reportes desde Google Sheets</p>
        </div>
        <button class="menu-toggle" data-action="toggle-sidebar" aria-pressed="${state.sidebarCollapsed}">${state.sidebarCollapsed ? "Mostrar menú" : "Ocultar menú"}</button>
        <div class="status-pill"><span class="status-dot"></span>Sheets publicados</div>
      </header>
      <div class="layout">
        ${sidebarView()}
        <section class="main">${state.report ? reportView(state.report) : emptyView()}</section>
      </div>
      ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
    </div>`;
}

function setToast(message) {
  state.toast = message;
  render();
  window.setTimeout(() => {
    state.toast = "";
    render();
  }, 2600);
}



async function fetchMonthlyPedidosTrend(product, selectedMonth, selectedReport) {
  const selectedIndex = MONTHS.findIndex((month) => month.id === selectedMonth.id);
  const trendMonths = MONTHS.slice(0, selectedIndex + 1);
  const results = await Promise.all(trendMonths.map(async (month) => {
    try {
      const monthReport = month.id === selectedMonth.id
        ? selectedReport
        : parseProductionSheet(await fetchPublishedSheetRows(product, month), product, month);
      return {
        id: month.id,
        name: month.name,
        label: month.id,
        pedidos: monthReport.kpis.totalPedidos,
        pedidosChicas: monthReport.kpis.extraPedidoTotals?.find((item) => item.key === "pedidos_chicas_1kg")?.total || 0,
        pedidosGrandes: monthReport.kpis.extraPedidoTotals?.find((item) => item.key === "pedidos_grandes_2kg")?.total || 0,
      };
    } catch {
      return {
        id: month.id,
        name: month.name,
        label: month.id,
        pedidos: 0,
        pedidosChicas: 0,
        pedidosGrandes: 0,
      };
    }
  }));
  return results;
}
function downloadReportPdf() {
  if (!state.report) return;
  const previousTitle = document.title;
  document.title = `PL Cocina - ${state.report.product.name} - ${state.report.month.name}`;
  window.print();
  window.setTimeout(() => {
    document.title = previousTitle;
  }, 800);
}

async function generateReport() {
  const product = PRODUCTS.find((item) => item.id === state.productId);
  const month = MONTHS.find((item) => item.id === state.monthId);
  if (!product || !month) {
    state.error = "Selecciona producto y mes antes de generar el reporte.";
    render();
    return;
  }
  state.loading = true;
  state.error = "";
  state.report = null;
  render();

  try {
    const rows = await fetchPublishedSheetRows(product, month);
    const report = parseProductionSheet(rows, product, month);
    report.monthlyPedidos = await fetchMonthlyPedidosTrend(product, month, report);
    state.report = report;
    state.selectedDay = null;
    state.selectedTrendMonth = month.id;
    setToast("Reporte leído desde Google Sheets.");
  } catch {
    state.error =
      "No pude leer ese Sheet desde GitHub Pages. Revisa que el archivo esté publicado o compartido para lectura por enlace, y que exista la pestaña seleccionada.";
  }
  state.loading = false;
  render();
}


function bindEvents() {
  document.querySelector("#product")?.addEventListener("change", (event) => {
    state.productId = event.target.value;
    state.report = null;
    state.selectedDay = null;
    state.selectedTrendMonth = null;
    state.error = "";
    render();
  });
  document.querySelector("#month")?.addEventListener("change", (event) => {
    state.monthId = event.target.value;
    state.report = null;
    state.selectedDay = null;
    state.selectedTrendMonth = null;
    state.error = "";
    render();
  });
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const action = event.currentTarget.dataset.action;
      if (action === "toggle-sidebar") {
        state.sidebarCollapsed = !state.sidebarCollapsed;
        render();
        return;
      }
      if (action === "download-pdf") {
        downloadReportPdf();
        return;
      }
      if (action === "generate") await generateReport();
      if (action === "open-drive") {
        const product = PRODUCTS.find((item) => item.id === state.productId);
        if (!product) return;
        window.open(`https://docs.google.com/spreadsheets/d/${product.sheetId}/edit`, "_blank", "noopener");
      }
    });
  });
  document.querySelectorAll("[data-chart-bar], [data-chart-point], [data-table-row], [data-chart-month]").forEach((item) => {
    item.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (target.dataset.month) {
        state.selectedTrendMonth = target.dataset.month;
        render();
        return;
      }
      if (!target.dataset.fecha || !target.dataset.section || target.dataset.section === "materias") return;
      state.selectedDay = {
        section: target.dataset.section,
        fecha: target.dataset.fecha,
      };
      render();
    });
    item.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.currentTarget.click();
    });
  });

}

function render() {
  document.querySelector("#app").innerHTML = appView();
  bindEvents();
}

render();
