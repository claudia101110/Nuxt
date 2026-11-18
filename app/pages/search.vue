<script setup>
import { createCommunicationManager } from "~/services/communicationManager";

useHead({ title: "Buscar" });

const manager = createCommunicationManager();

const query = ref("");
const results = ref([]);
const loading = ref(false);
const error = ref(null);
const searched = ref(false);

async function search() {
  loading.value = true;
  error.value = null;
  try {
    results.value = await manager.searchItems(query.value);
  } catch (e) {
    error.value = "No se pudo conectar con la API";
  } finally {
    loading.value = false;
    searched.value = true;
  }
}
</script>

<template>
  <div>
    <h1>Buscar</h1>

    <input
      v-model="query"
      type="text"
      placeholder="Ej: chicken"
      @keyup.enter="search"
    />
    <button @click="search">Buscar</button>

    <p v-if="loading">Cargando...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else-if="searched && results.length === 0">No se encontró nada</p>

    <div v-else>
      <ItemCard v-for="meal in results" :key="meal.idMeal" :item="meal" />
    </div>
  </div>
</template>
