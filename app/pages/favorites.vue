<script setup>
useHead({ title: "Favoritos" });
const favoritesStore = useFavoritesStore();
</script>

<template>
  <div>
    <h1>Favoritos</h1>

    <p v-if="favoritesStore.favorites.length === 0">
      Todavía no tienes favoritos
    </p>

    <div v-else class="grid">
      <ItemCard
        v-for="meal in favoritesStore.favorites"
        :key="meal.idMeal"
        :item="meal"
      >
        <template #actions>
          <button @click="favoritesStore.removeFavorite(meal.idMeal)">
            Eliminar de favoritos
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
}
</style>
