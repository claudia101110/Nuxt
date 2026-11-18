# Colleccionista

Web hecha con Nuxt para buscar recetas, explorarlas por categorías, ver su detalle y guardar las favoritas.

## API

Uso TheMealDB (https://www.themealdb.com/api.php), una API gratuita de recetas. Elegí recetas porque era la que traía el enunciado y tiene todo lo necesario: búsqueda, categorías, imágenes y detalle.

Tecnologías: Nuxt 4, Vue 3, Axios, Pinia y JavaScript.

## Cómo ejecutarlo

1. Clonar el repositorio: `git clone https://github.com/claudia101110/Nuxt.git`
2. Entrar en la carpeta: `cd Nuxt/colleccionista`
3. Instalar: `npm install`
4. Arrancar: `npm run dev`
5. Abrir http://localhost:3000

## Carpetas

- `app/app.vue`: punto de entrada, monta el layout y la página.
- `app/layouts`: el menú que sale en todas las páginas.
- `app/pages`: las páginas. Cada archivo es una ruta (Home, Search, Favorites y `item/[id]` para el detalle).
- `app/components`: `ItemCard` (la tarjeta de receta) y `SearchBar` (el buscador).
- `app/services`: el CommunicationManager.
- `app/composables`: `useSearch`, `useCategories` y `useItem`.
- `app/stores`: el store de favoritos.
- `nuxt.config.ts`: configuración, con la dirección de la API en `runtimeConfig`.

## CommunicationManager

Es el único archivo que hace peticiones a la API, usando Axios. Tiene cuatro funciones: `getCategories`, `searchItems`, `getItemsByCategory` y `getItemById`. Así las páginas no saben nada de direcciones ni de HTTP, solo piden datos. La dirección base de la API está en `nuxt.config.ts` y se lee con `useRuntimeConfig()`.

## Composables

Un composable es una función que guarda estado con `ref` y las funciones que lo cambian. Sacan la lógica de las páginas para que estas solo se dediquen a pintar.

- `useSearch`: guarda el texto de búsqueda, los resultados, si está cargando y los errores.
- `useCategories`: carga las categorías y las recetas de la categoría elegida.
- `useItem`: carga los detalles de una receta con `useAsyncData`.

No pintan nada y no conocen los endpoints: para pedir datos usan el CommunicationManager. Nuxt los autoimporta, por eso en las páginas no hay `import` de ellos.

## Pinia

Lo uso para los favoritos, porque se tienen que ver desde varias páginas (Home, Search y Favorites). El store `favoritesStore` guarda la lista y tiene tres funciones: `addFavorite`, `removeFavorite` e `isFavorite`. Antes de añadir una receta comprueba si ya está, así no se duplican. Los favoritos se pierden al recargar la página, porque el store solo vive en memoria.

## useAsyncData()

Lo uso en `useItem`, que es lo que usa la página de detalle (`/item/[id]`). Lo uso porque así el servidor de Nuxt pide la receta y manda el HTML ya con los datos, y el navegador no repite la petición.

Lo comprobé con Ctrl+U (ver código fuente): en `/item/52772` el nombre de la receta ya está en el HTML, pero en `/search` no, porque ahí los datos se piden en el navegador al pulsar el botón. `useAsyncData` también da `data`, `pending` y `error`, que uso para mostrar "Cargando", el error o "Elemento no encontrado".
