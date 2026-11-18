<script setup>
useHead({ title: "Buscar" });
const { query, results, loading, error, searched, search } = useSearch();
const favoritesStore = useFavoritesStore();
</script>

<template>
  <div>
    <h1>Buscar</h1>
    <SearchBar v-model="query" @search="search" />
    <p v-if="loading">Cargando...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else-if="searched && results.length === 0">No se encontró nada</p>

    <div v-else class="grid">
      <ItemCard v-for="meal in results" :key="meal.idMeal" :item="meal">
        <template #actions>
          <button
            v-if="favoritesStore.isFavorite(meal.idMeal)"
            @click="favoritesStore.removeFavorite(meal.idMeal)"
          >
            Quitar de favoritos
          </button>
          <button v-else @click="favoritesStore.addFavorite(meal)">
            Añadir a favoritos
          </button>
        </template>
      </ItemCard>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
}
</style>
