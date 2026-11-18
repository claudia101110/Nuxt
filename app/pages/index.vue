<script setup>
useHead({ title: "Inicio" });

const {
  categories,
  selected,
  items,
  loading,
  error,
  loadCategories,
  selectCategory,
} = useCategories();
const favoritesStore = useFavoritesStore();

onMounted(() => {
  loadCategories();
});
</script>

<template>
  <div>
    <h1>Home</h1>

    <div>
      <button
        v-for="cat in categories"
        :key="cat.idCategory"
        @click="selectCategory(cat.strCategory)"
      >
        {{ cat.strCategory }}
      </button>
    </div>

    <p v-if="loading">Cargando...</p>
    <p v-else-if="error">{{ error }}</p>

    <div v-else-if="selected">
      <h2>{{ selected }}</h2>
      <ItemCard v-for="meal in items" :key="meal.idMeal" :item="meal">
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
