<script setup>
defineProps({ item: Object });
</script>

<template>
  <div class="card">
    <NuxtLink :to="'/item/' + item.idMeal">
      <img :src="item.strMealThumb" :alt="item.strMeal" />
      <h3>{{ item.strMeal }}</h3>
    </NuxtLink>
    <slot name="actions" />
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;

  flex-direction: column;
  gap: 8px;
}
.card img {
  width: 100%;
  border-radius: 10px;
}
.card h3 {
  font-size: 16px;
}
.card a {
  color: inherit;
  text-decoration: none;
}
</style>
