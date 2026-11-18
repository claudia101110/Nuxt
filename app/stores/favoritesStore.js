export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);

  function isFavorite(id) {
    return favorites.value.some((meal) => meal.idMeal === id);
  }

  function addFavorite(item) {
    if (isFavorite(item.idMeal)) return;
    favorites.value.push(item);
  }

  function removeFavorite(id) {
    favorites.value = favorites.value.filter((meal) => meal.idMeal !== id);
  }

  return { favorites, isFavorite, addFavorite, removeFavorite };
});