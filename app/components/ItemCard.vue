<script setup>
defineProps({ item: Object });
</script>

<template>
  <div>
    <img :src="item.strMealThumb" :alt="item.strMeal" />
    <h3>{{ item.strMeal }}</h3>
    <slot name="actions" />
  </div>
</template>
