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

const SAMPLE_ROWS = [
  ["", "SALSA VERDE - CONTROL DE PRODUCCIÓN"],
  ["", "Stock Ini.\n(Cub.)", "PRODUCCIÓN", "", "", "", "", "SOBRANTES", "", "", "Cambios / devoluciones\n(Cub.)", "MATERIA PRIMA"],
  ["abril", "", "(-)Pedidos \n(Cub.)", "Stock Ini (-) Pedidos", "(+)Producción (Cub.)", "Ollas", "RENDIMIENTO \nCub. x Olla", "Sobrante Prod. \n(KG)", "Stock Final \n(Cub.)", "Cubeta de sobrantes (KG)", "", "Pulpa \n(Bolsas)", "Serrano \n(KG)", "Jp. Cocido (KG)", "Tomate V. \n(KG)", "Tomatillo \n(KG)", "Cilantro (KG)", "Sal \n(KG)", "Hielo \n(KG)", "Agua \n(LT)", "Agua chile \n(LT)", "Aceite \n(LT)", "Existencia pulpa final"],
  ["miércoles, 01", "1", "136", "-135", "139", "25", "5.56", "16", "4", "0", "0", "175", "17.5", "87.5", "512.5", "175.0", "62.5", "35.0", "500.0", "400.0", "100.0", "62.5", "0"],
  ["jueves, 02", "4", "174", "-170", "172", "31", "5.55", "7", "2", "0", "0", "217", "21.7", "108.5", "635.5", "217.0", "77.5", "43.4", "620.0", "496.0", "124.0", "77.5", "0"],
  ["viernes, 03", "2", "168", "-166", "170", "31", "5.48", "0", "4", "0", "0", "217", "21.7", "108.5", "635.5", "217.0", "77.5", "43.4", "620.0", "496.0", "124.0", "77.5", "0"],
  ["sábado, 04", "4", "149", "-145", "145", "26", "5.58", "16", "0", "0", "0", "182", "18.2", "91.0", "533.0", "182.0", "65.0", "36.4", "520.0", "416.0", "104.0", "65.0", "0"],
  ["domingo, 05", "0", "137", "-137", "140", "25", "5.60", "8", "3", "0", "0", "175", "17.5", "87.5", "512.5", "175.0", "62.5", "35.0", "500.0", "400.0", "100.0", "62.5", "0"],
  ["lunes, 06", "3", "100", "-97", "100", "18", "5.56", "10", "3", "0", "0", "126", "12.6", "63.0", "369.0", "126.0", "45.0", "25.2", "360.0", "288.0", "72.0", "45.0", "0"],
  ["martes, 07", "3", "124", "-121", "125", "22", "5.68", "0", "4", "0", "0", "154", "15.4", "77.0", "451.0", "154.0", "55.0", "30.8", "440.0", "352.0", "88.0", "55.0", "0"],
  ["miércoles, 08", "4", "125", "-121", "122", "22", "5.55", "17", "1", "0", "0", "154", "15.4", "77.0", "451.0", "154.0", "55.0", "30.8", "440.0", "352.0", "88.0", "55.0", "0"],
  ["jueves, 09", "1", "119", "-118", "122", "21", "5.81", "10", "4", "0", "0", "147", "14.7", "73.5", "430.5", "147.0", "52.5", "29.4", "420.0", "336.0", "84.0", "52.5", "0"],
  ["viernes, 10", "4", "132", "-128", "130", "23", "5.65", "4", "2", "0", "0", "161", "16.1", "80.5", "471.5", "161.0", "57.5", "32.2", "460.0", "368.0", "92.0", "57.5", "0"],
  ["sábado, 11", "2", "158", "-156", "156", "27", "5.78", "6", "0", "0", "0", "189", "18.9", "94.5", "553.5", "189.0", "67.5", "37.8", "540.0", "432.0", "108.0", "67.5", "0"],
  ["domingo, 12", "0", "167", "-167", "167", "30", "5.57", "12", "5", "0", "0", "210", "21.0", "105.0", "615.0", "210.0", "75.0", "42.0", "600.0", "480.0", "120.0", "75.0", "0"],
  ["lunes, 13", "5", "110", "-105", "108", "19", "5.68", "14", "3", "0", "0", "133", "13.3", "66.5", "389.5", "133.0", "47.5", "26.6", "380.0", "304.0", "76.0", "47.5", "0"],
  ["martes, 14", "3", "110", "-107", "109", "19", "5.74", "6", "2", "2", "0", "133", "13.3", "66.5", "389.5", "133.0", "47.5", "26.6", "380.0", "304.0", "76.0", "47.5", "0"],
  ["miércoles, 15", "4", "122", "-118", "123", "22", "5.59", "0", "5", "0", "0", "154", "15.4", "77.0", "451.0", "154.0", "55.0", "30.8", "440.0", "352.0", "88.0", "55.0", "0"],
  ["jueves, 16", "5", "124", "-119", "123", "22", "5.59", "13", "4", "0", "0", "154", "15.4", "77.0", "451.0", "154.0", "55.0", "30.8", "440.0", "352.0", "88.0", "55.0", "0"],
  ["viernes, 17", "4", "148", "-144", "144", "26", "5.54", "6", "0", "0", "0", "182", "18.2", "91.0", "533.0", "182.0", "65.0", "36.4", "520.0", "416.0", "104.0", "65.0", "0"],
  ["sábado, 18", "0", "158", "-158", "158", "29", "5.45", "12", "0", "0", "0", "203", "20.3", "101.5", "594.5", "203.0", "72.5", "40.6", "580.0", "464.0", "116.0", "72.5", "0"],
  ["domingo, 19", "0", "169", "-169", "169", "30", "5.63", "0", "0", "0", "0", "210", "21.0", "105.0", "615.0", "210.0", "75.0", "42.0", "600.0", "480.0", "120.0", "75.0", "0"],
  ["lunes, 20", "0", "108", "-108", "108", "20", "5.40", "0", "0", "0", "0", "140", "14.0", "70.0", "410.0", "140.0", "50.0", "28.0", "400.0", "320.0", "80.0", "50.0", "0"],
  ["martes, 21", "0", "96", "-96", "101", "18", "5.61", "8", "5", "0", "0", "126", "12.6", "63.0", "369.0", "126.0", "45.0", "25.2", "360.0", "288.0", "72.0", "45.0", "0"],
  ["miércoles, 22", "5", "125", "-120", "125", "22", "5.68", "3", "5", "1", "0", "154", "15.4", "77.0", "451.0", "154.0", "55.0", "30.8", "440.0", "352.0", "88.0", "55.0", "0"],
  ["jueves, 23", "6", "100", "-94", "95", "17", "5.59", "8", "1", "0", "0", "119", "11.9", "59.5", "348.5", "119.0", "42.5", "23.8", "340.0", "272.0", "68.0", "42.5", "0"],
  ["viernes, 24", "1", "138", "-137", "137", "25", "5.48", "0", "0", "0", "0", "175", "17.5", "87.5", "512.5", "175.0", "62.5", "35.0", "500.0", "400.0", "100.0", "62.5", "0"],
  ["sábado, 25", "0", "181", "-181", "185", "33", "5.61", "12", "4", "0", "0", "231", "23.1", "115.5", "676.5", "231.0", "82.5", "46.2", "660.0", "528.0", "132.0", "82.5", "0"],
  ["domingo, 26", "4", "174", "-170", "171", "31", "5.52", "0", "1", "0", "0", "217", "21.7", "108.5", "635.5", "217.0", "77.5", "43.4", "620.0", "496.0", "124.0", "77.5", "0"],
  ["lunes, 27", "1", "120", "-119", "121", "21", "5.76", "5", "2", "0", "0", "147", "14.7", "73.5", "430.5", "147.0", "52.5", "29.4", "420.0", "336.0", "84.0", "52.5", "0"],
  ["martes, 28", "2", "117", "-115", "119", "21", "5.67", "8", "4", "0", "0", "147", "14.7", "73.5", "430.5", "147.0", "52.5", "29.4", "420.0", "336.0", "84.0", "52.5", "0"],
  ["miércoles, 29", "4", "139", "-135", "138", "24", "5.75", "0", "3", "0", "0", "168", "16.8", "84.0", "492.0", "168.0", "60.0", "33.6", "480.0", "384.0", "96.0", "60.0", "0"],
  ["jueves, 30", "3", "184", "-181", "188", "34", "5.53", "10", "7", "0", "0", "238", "23.8", "119.0", "697.0", "238.0", "85.0", "47.6", "680.0", "544.0", "136.0", "85.0", "0"],
];

const state = {
  productId: "03",
  monthId: "ABR",
  sections: { pedidos: true, produccion: true, materias: true },
  report: null,
  requestText: "",
  toast: "",
  error: "",
  loading: false,
};

function number(value) {
  if (value === undefined || value === null || value === "") return 0;
  const parsed = Number(String(value).replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function splitDay(raw) {
  const [day = "", date = ""] = String(raw).split(",").map((part) => part.trim());
  return { dia: day, fecha: date.padStart(2, "0") };
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
  const headers = rows[2] || [];
  const dailyRows = rows
    .slice(3)
    .filter((row) => row[0] && /^\D+,\s*\d{1,2}$/.test(String(row[0]).trim()))
    .map((row) => {
      const day = splitDay(row[0]);
      return {
        ...day,
        stock_ini: number(row[1]),
        pedidos: number(row[2]),
        produccion: number(row[4]),
        ollas: number(row[5]),
        rendimiento: number(row[6]),
        stock_final: number(row[8]),
        materias: headers.slice(11, 22).map((label, index) => ({
          insumo: String(label || `Col ${index + 12}`).replace(/\s+/g, " ").trim(),
          cantidad: number(row[index + 11]),
        })),
      };
    });

  const totalPedidos = sum(dailyRows, "pedidos");
  const totalProduccion = sum(dailyRows, "produccion");
  const totalOllas = sum(dailyRows, "ollas");
  const rendimientos = dailyRows.map((row) => row.rendimiento).filter(Boolean);
  const rendimientoPromedio = avg(dailyRows.filter((row) => row.rendimiento), "rendimiento");
  const [modaProduccion, modaOcasiones] = mode(dailyRows.map((row) => row.produccion));
  const topPedido = [...dailyRows].sort((a, b) => b.pedidos - a.pedidos)[0];
  const topProduccion = [...dailyRows].sort((a, b) => b.produccion - a.produccion)[0];
  const lowRendimiento = [...dailyRows].filter((row) => row.rendimiento).sort((a, b) => a.rendimiento - b.rendimiento)[0];
  const highRendimiento = [...dailyRows].filter((row) => row.rendimiento).sort((a, b) => b.rendimiento - a.rendimiento)[0];

  const materiaTotals = headers.slice(11, 22).map((label, index) => ({
    insumo: String(label || `Col ${index + 12}`).replace(/\s+/g, " ").trim(),
    total: dailyRows.reduce((total, row) => total + number(row.materias[index]?.cantidad), 0),
  }));

  const sigma = std(rendimientos);
  const cv = rendimientoPromedio ? (sigma / rendimientoPromedio) * 100 : 0;
  const consistency = cv < 3 ? "alta consistencia" : cv < 8 ? "variación moderada" : "alta variabilidad";

  return {
    product,
    month,
    generatedAt: new Date().toLocaleDateString("es-MX", { day: "2-digit", month: "2-digit", year: "numeric" }),
    summary:
      `${product.name} en ${month.name}: ${totalPedidos.toLocaleString("es-MX")} cubetas pedidas y ` +
      `${totalProduccion.toLocaleString("es-MX")} cubetas producidas en ${totalOllas.toLocaleString("es-MX")} ollas. ` +
      `El rendimiento promedio fue ${rendimientoPromedio.toFixed(2)} cub/olla con ${consistency} ` +
      `(CV ${cv.toFixed(1)}%). El mayor pedido fue ${topPedido.pedidos} cub el ${topPedido.dia} ${topPedido.fecha}; ` +
      `la mayor producción fue ${topProduccion.produccion} cub el ${topProduccion.dia} ${topProduccion.fecha}.`,
    kpis: {
      totalPedidos,
      totalProduccion,
      totalOllas,
      promedioPedidos: avg(dailyRows, "pedidos"),
      promedioProduccion: avg(dailyRows, "produccion"),
      rendimientoPromedio,
      sigma,
      cv,
      modaProduccion,
      modaOcasiones,
      highRendimiento,
      lowRendimiento,
    },
    pedidos: dailyRows.map(({ dia, fecha, pedidos, stock_ini, stock_final }) => ({ dia, fecha, pedidos, stock_ini, stock_final })),
    produccion: dailyRows.map(({ dia, fecha, produccion, ollas, rendimiento }) => ({ dia, fecha, produccion, ollas, rendimiento })),
    materias: materiaTotals,
    rawRows: rows,
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
      resolve(values);
    };

    const params = new URLSearchParams({
      sheet: month.id,
      headers: "0",
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

function buildRequest() {
  const product = PRODUCTS.find((item) => item.id === state.productId);
  const month = MONTHS.find((item) => item.id === state.monthId);
  const chosen = Object.entries(state.sections)
    .filter(([, enabled]) => enabled)
    .map(([key]) => SECTIONS[key].label);

  return [
    "PL COCINA - REPORTE DE PRODUCCIÓN",
    `Producto: ${product.name}`,
    `Archivo: ${product.file}`,
    `Spreadsheet ID: ${product.sheetId}`,
    `Mes/pestaña: ${month.id} (${month.name})`,
    `Secciones: ${chosen.join(", ")}`,
    "",
    "Detalle usado por el dashboard público para leer la pestaña indicada desde Google Sheets publicado.",
  ].join("\n");
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

function barChart(rows, key, color, average) {
  if (!rows?.length) return "";
  const width = 900;
  const height = 260;
  const pad = { top: 20, right: 16, bottom: 34, left: 42 };
  const maxValue = Math.max(...rows.map((row) => number(row[key])), average || 0) * 1.12 || 1;
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const gap = 4;
  const barW = Math.max(8, chartW / rows.length - gap);
  const avgY = pad.top + chartH - (average / maxValue) * chartH;

  const bars = rows
    .map((row, index) => {
      const value = number(row[key]);
      const h = (value / maxValue) * chartH;
      const x = pad.left + index * (barW + gap);
      const y = pad.top + chartH - h;
      return `
        <g>
          <rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="4" fill="${color}"></rect>
          <title>${row.dia} ${row.fecha}: ${format(value)}</title>
          <text x="${x + barW / 2}" y="${height - 11}" text-anchor="middle" font-size="10" fill="#69778a">${row.fecha}</text>
        </g>`;
    })
    .join("");

  return `
    <svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Gráfica de ${key}">
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${pad.top + chartH}" y2="${pad.top + chartH}" stroke="#d8dee9"></line>
      <line x1="${pad.left}" x2="${pad.left}" y1="${pad.top}" y2="${pad.top + chartH}" stroke="#d8dee9"></line>
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${avgY}" y2="${avgY}" stroke="#8a94a6" stroke-dasharray="5 5"></line>
      <text x="${width - pad.right}" y="${avgY - 6}" text-anchor="end" font-size="11" fill="#69778a">Media ${format(average, 1)}</text>
      ${bars}
    </svg>`;
}

function lineChart(rows) {
  const valid = rows.filter((row) => row.rendimiento);
  if (valid.length < 2) return "";
  const width = 900;
  const height = 240;
  const pad = { top: 20, right: 16, bottom: 32, left: 42 };
  const values = valid.map((row) => row.rendimiento);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const sigma = std(values);
  const min = Math.min(...values, mean - sigma) - 0.08;
  const max = Math.max(...values, mean + sigma) + 0.08;
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const xFor = (index) => pad.left + (index / (valid.length - 1)) * chartW;
  const yFor = (value) => pad.top + chartH - ((value - min) / (max - min || 1)) * chartH;
  const path = valid.map((row, index) => `${index === 0 ? "M" : "L"} ${xFor(index)} ${yFor(row.rendimiento)}`).join(" ");
  const bandTop = yFor(mean + sigma);
  const bandBottom = yFor(mean - sigma);

  const dots = valid
    .map((row, index) => {
      const out = Math.abs(row.rendimiento - mean) > sigma;
      return `
        <circle cx="${xFor(index)}" cy="${yFor(row.rendimiento)}" r="${out ? 5 : 3.5}" fill="${out ? "#cb3d3d" : "#6255d9"}" stroke="#fff" stroke-width="2">
          <title>${row.dia} ${row.fecha}: ${row.rendimiento.toFixed(2)} cub/olla</title>
        </circle>
        <text x="${xFor(index)}" y="${height - 10}" text-anchor="middle" font-size="10" fill="#69778a">${row.fecha}</text>`;
    })
    .join("");

  return `
    <svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Rendimiento diario">
      <rect x="${pad.left}" y="${bandTop}" width="${chartW}" height="${bandBottom - bandTop}" fill="#6255d9" opacity="0.08"></rect>
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${yFor(mean)}" y2="${yFor(mean)}" stroke="#8a94a6" stroke-dasharray="5 5"></line>
      <path d="${path}" fill="none" stroke="#6255d9" stroke-width="3"></path>
      ${dots}
      <text x="${width - pad.right}" y="${yFor(mean) - 6}" text-anchor="end" font-size="11" fill="#69778a">Prom. ${mean.toFixed(2)} · CV ${((sigma / mean) * 100).toFixed(1)}%</text>
    </svg>`;
}

function renderTable(rows, columns) {
  if (!rows?.length) return "";
  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${columns.map((col) => `<th>${col.label}</th>`).join("")}</tr></thead>
        <tbody>
          ${rows
            .map(
              (row) => `<tr>${columns
                .map((col) => `<td>${col.format ? col.format(row[col.key], row) : row[col.key]}</td>`)
                .join("")}</tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
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
        <div class="report-actions">
          <button class="button secondary" data-action="copy-request">Copiar detalle</button>
          <button class="button ghost" data-action="reset">Nuevo reporte</button>
        </div>
      </header>
      <div class="content">
        <p class="summary">${report.summary}</p>
        <section class="kpis">
          <div class="kpi"><div class="kpi-label">Pedidos</div><div class="kpi-value">${format(report.kpis.totalPedidos)}</div><div class="kpi-note">cubetas del mes</div></div>
          <div class="kpi"><div class="kpi-label">Producción</div><div class="kpi-value">${format(report.kpis.totalProduccion)}</div><div class="kpi-note">${format(report.kpis.totalOllas)} ollas</div></div>
          <div class="kpi"><div class="kpi-label">Rendimiento</div><div class="kpi-value">${format(report.kpis.rendimientoPromedio, 2)}</div><div class="kpi-note">cubetas por olla</div></div>
          <div class="kpi"><div class="kpi-label">Consistencia</div><div class="kpi-value">${format(report.kpis.cv, 1)}%</div><div class="kpi-note">coeficiente de variación</div></div>
        </section>

        <div class="grid-two">
          <div>
            ${visible.pedidos ? `
              <section class="panel">
                <h3 class="panel-title">Pedidos por día</h3>
                ${barChart(report.pedidos, "pedidos", SECTIONS.pedidos.color, report.kpis.promedioPedidos)}
              </section>` : ""}
            ${visible.produccion ? `
              <section class="panel">
                <h3 class="panel-title">Producción por día</h3>
                ${barChart(report.produccion, "produccion", SECTIONS.produccion.color, report.kpis.promedioProduccion)}
              </section>
              <section class="panel">
                <h3 class="panel-title">Rendimiento diario</h3>
                ${lineChart(report.produccion)}
              </section>` : ""}
          </div>
          <div>
            ${visible.pedidos ? `
              <section class="panel">
                <h3 class="panel-title">Tabla de pedidos</h3>
                ${renderTable(report.pedidos, [
                  { key: "fecha", label: "Día" },
                  { key: "dia", label: "Semana" },
                  { key: "pedidos", label: "Pedidos", format: (v) => format(v) },
                  { key: "stock_ini", label: "Stock ini.", format: (v) => format(v) },
                  { key: "stock_final", label: "Stock final", format: (v) => format(v) },
                ])}
              </section>` : ""}
            ${visible.produccion ? `
              <section class="panel">
                <h3 class="panel-title">Tabla de producción</h3>
                ${renderTable(report.produccion, [
                  { key: "fecha", label: "Día" },
                  { key: "produccion", label: "Producción", format: (v) => format(v) },
                  { key: "ollas", label: "Ollas", format: (v) => format(v) },
                  { key: "rendimiento", label: "Rend.", format: (v) => format(v, 2) },
                ])}
              </section>` : ""}
            ${visible.materias ? `
              <section class="panel">
                <h3 class="panel-title">Materias primas</h3>
                ${renderTable(report.materias, [
                  { key: "insumo", label: "Insumo" },
                  { key: "total", label: "Total", format: (v) => format(v, 1) },
                ])}
              </section>` : ""}
          </div>
        </div>
      </div>
    </article>`;
}

function emptyView() {
  const product = PRODUCTS.find((item) => item.id === state.productId);
  const month = MONTHS.find((item) => item.id === state.monthId);
  return `
    <article class="report-card empty">
      <div class="empty-inner">
        <h2>${state.loading ? "Leyendo reporte..." : "Elige el reporte que necesitas"}</h2>
        <p>Seleccionado: <strong>${product.name}</strong> · <strong>${month.name}</strong>. Marca pedidos, producción y/o materias primas, y presiona Generar reporte.</p>
        ${state.error ? `<p class="error-note">${state.error}</p>` : ""}
        ${state.requestText ? `
          <div class="request-box">
            <pre>${state.requestText}</pre>
          </div>` : ""}
      </div>
    </article>`;
}

function sidebarView() {
  const product = PRODUCTS.find((item) => item.id === state.productId);
  return `
    <aside class="sidebar">
      <div class="field">
        <label for="product">Producto</label>
        <select id="product" class="select">
          ${renderSelectOptions(PRODUCTS, state.productId, (item) => `${item.id} · ${item.name}`)}
        </select>
      </div>
      <div class="field">
        <label for="month">Mes</label>
        <select id="month" class="select">
          ${renderSelectOptions(MONTHS, state.monthId, (item) => `${item.id} · ${item.name}`)}
        </select>
      </div>
      <div class="field">
        <span class="mini-label">Secciones</span>
        <div class="section-options">
          ${Object.entries(SECTIONS)
            .map(
              ([key, section]) => `
              <label class="check-row">
                <input type="checkbox" data-section="${key}" ${state.sections[key] ? "checked" : ""}>
                <span>${section.label}</span>
              </label>`,
            )
            .join("")}
        </div>
      </div>
      <div class="actions">
        <button class="button" data-action="generate" ${state.loading ? "disabled" : ""}>${state.loading ? "Leyendo..." : "Generar reporte"}</button>
        <button class="button secondary" data-action="sample">Cargar ejemplo real</button>
        <button class="button ghost" data-action="copy-request">Copiar detalle</button>
        <button class="button ghost" data-action="open-drive">Abrir archivo en Drive</button>
      </div>
      <p class="helper">Archivo activo: <strong>${product.file}</strong>. La app lee la pestaña elegida desde Google Sheets publicado; no necesita servidor ni backend.</p>
      <div class="field" style="margin-top:14px">
        <label for="rawRows">Pegar filas exportadas</label>
        <textarea id="rawRows" class="textarea" placeholder='Pega JSON con "values" o un arreglo de filas'></textarea>
      </div>
      <button class="button secondary" data-action="parse-pasted">Procesar filas pegadas</button>
    </aside>`;
}

function appView() {
  return `
    <div class="shell">
      <header class="topbar">
        <div class="brand-mark">PL</div>
        <div>
          <h1 class="brand-title">Dashboard de Producción</h1>
          <p class="brand-subtitle">PL Cocina · Reportes desde Google Sheets</p>
        </div>
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

async function copy(text) {
  await navigator.clipboard.writeText(text);
  setToast("Solicitud copiada.");
}

async function generateReport() {
  const product = PRODUCTS.find((item) => item.id === state.productId);
  const month = MONTHS.find((item) => item.id === state.monthId);
  state.requestText = buildRequest();
  state.loading = true;
  state.error = "";
  state.report = null;
  render();

  try {
    const rows = await fetchPublishedSheetRows(product, month);
    state.report = parseProductionSheet(rows, product, month);
    setToast("Reporte leído desde Google Sheets.");
  } catch {
    state.error =
      "No pude leer ese Sheet desde GitHub Pages. Revisa que el archivo esté publicado o compartido para lectura por enlace, y que exista la pestaña seleccionada.";
  }
  state.loading = false;
  render();
}

function parsePastedRows() {
  const text = document.querySelector("#rawRows")?.value.trim();
  if (!text) {
    setToast("Pega primero las filas exportadas.");
    return;
  }
  try {
    const parsed = JSON.parse(text);
    const rows = parsed.values || parsed.rows || parsed;
    if (!Array.isArray(rows)) throw new Error("Formato no reconocido.");
    const product = PRODUCTS.find((item) => item.id === state.productId);
    const month = MONTHS.find((item) => item.id === state.monthId);
    state.report = parseProductionSheet(rows, product, month);
    state.requestText = buildRequest();
    render();
    setToast("Filas procesadas.");
  } catch {
    setToast("No pude leer ese JSON.");
  }
}

function bindEvents() {
  document.querySelector("#product")?.addEventListener("change", (event) => {
    state.productId = event.target.value;
    state.report = null;
    render();
  });
  document.querySelector("#month")?.addEventListener("change", (event) => {
    state.monthId = event.target.value;
    state.report = null;
    render();
  });
  document.querySelectorAll("[data-section]").forEach((input) => {
    input.addEventListener("change", (event) => {
      state.sections[event.target.dataset.section] = event.target.checked;
      render();
    });
  });
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const action = event.currentTarget.dataset.action;
      if (action === "generate") await generateReport();
      if (action === "sample") {
        state.productId = "03";
        state.monthId = "ABR";
        state.sections = { pedidos: true, produccion: true, materias: true };
        state.report = parseProductionSheet(SAMPLE_ROWS, PRODUCTS[2], MONTHS[3]);
        state.requestText = buildRequest();
        render();
      }
      if (action === "copy-request") await copy(buildRequest());
      if (action === "open-drive") {
        const product = PRODUCTS.find((item) => item.id === state.productId);
        window.open(`https://docs.google.com/spreadsheets/d/${product.sheetId}/edit`, "_blank", "noopener");
      }
      if (action === "reset") {
        state.report = null;
        render();
      }
      if (action === "parse-pasted") parsePastedRows();
    });
  });
}

function render() {
  document.querySelector("#app").innerHTML = appView();
  bindEvents();
}

render();
