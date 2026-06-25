# Dashboard de Reportes Mensuales - PL Cocina

Dashboard estatico para GitHub Pages:

https://plcocina.github.io/reportes-mensuales/

## Como funciona

La app lee directamente los Google Sheets publicados usando el endpoint publico de Google Visualization. No usa backend, servidor local ni credenciales.

Flujo:

1. Eliges producto.
2. Eliges mes.
3. Marcas Pedidos, Produccion y/o Materias Primas.
4. La app lee la pestana mensual del Sheet publicado.
5. Genera KPIs, graficas y tablas en pantalla.

## Requisito importante

Cada Google Sheet debe estar disponible para lectura por enlace o publicado en la web.

Opcion recomendada:

1. Abrir el Google Sheet.
2. Ir a `Archivo > Compartir > Publicar en la web`.
3. Publicar el documento completo o las pestanas necesarias.
4. Confirmar que la pestana del mes existe con nombre `ENE`, `FEB`, `MAR`, etc.

Tambien puede funcionar con `Compartir > Cualquier persona con el enlace > Lector`, pero publicar en la web suele ser mas estable para GitHub Pages.

## Publicar en GitHub Pages

1. Crear el repositorio `dashboard-reportes-mensuales` en la cuenta `plcocina`.
2. Subir estos archivos a la rama principal:
   - `index.html`
   - `styles.css`
   - `src/app.js`
   - `README.md`
3. En GitHub: `Settings > Pages`.
4. Source: `Deploy from a branch`.
5. Branch: `main`, folder `/root`.
6. Abrir `https://plcocina.github.io/dashboard-reportes-mensuales/`.

## Catalogo

Los IDs de los 13 archivos estan configurados en `src/app.js`, dentro de `PRODUCTS`.
