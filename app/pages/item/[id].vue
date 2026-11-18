<script setup>
const route = useRoute()
const { data, pending, error } = useItem(route.params.id);
useHead({ title: () => data.value?.strMeal ?? "Detalle" });
</script>

<template>
  <div>
    <p v-if="pending">Cargando...</p>
    <p v-else-if="error">No se pudo cargar la receta</p>
    <p v-else-if="!data">Elemento no encontrado</p>

    <div v-else>
      <h1>{{ data.strMeal }}</h1>
      <img :src="data.strMealThumb" :alt="data.strMeal" />
      <p>{{ data.strCategory }} · {{ data.strArea }}</p>
      <p>{{ data.strInstructions }}</p>
    </div>
  </div>
</template>