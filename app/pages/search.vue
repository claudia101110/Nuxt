<script setup>
useHead({ title: "Buscar" });
const { query, results, loading, error, searched, search } = useSearch();
</script>

<template>
  <div>
    <h1>Buscar</h1>
    <SearchBar v-model="query" @search="search" />
    <p v-if="loading">Cargando...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else-if="searched && results.length === 0">No se encontró nada</p>

    <div v-else>
      <ItemCard v-for="meal in results" :key="meal.idMeal" :item="meal" />
    </div>
  </div>
</template>
