# Colleccionista

Web hecha con Nuxt para buscar recetas, ver su detalle y guardar las favoritas.

## API

Uso TheMealDB (https://www.themealdb.com/api.php), una API gratuita de recetas.

## Cómo ejecutarlo

1. Clonar el repositorio
2. `cd colleccionista`
3. `npm install`
4. `npm run dev`
5. Abrir http://localhost:3000

## Carpetas

- `app/pages`: las páginas. Cada archivo es una ruta.
- `app/layouts`: el menú que sale en todas las páginas.
- `app/components`: componentes reutilizables, como la tarjeta de receta.
- `app/services`: el archivo que hace las peticiones a la API.
- `nuxt.config.ts`: la configuración, con la dirección de la API.

## CommunicationManager

Es el archivo donde están todas las peticiones a la API con Axios. Así las páginas no tienen que saber las direcciones, solo piden los datos.

## Composables

Pendiente.

## Pinia

Pendiente.

## useAsyncData

Pendiente.
