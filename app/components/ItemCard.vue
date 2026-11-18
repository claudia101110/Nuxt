<script setup>
defineProps({ item: Object });
</script>

<template>
  <div>
    <NuxtLink :to="'/item/' + item.idMeal">
      <img :src="item.strMealThumb" :alt="item.strMeal" />
      <h3>{{ item.strMeal }}</h3>
    </NuxtLink>
    <slot name="actions" />
  </div>
</template>
