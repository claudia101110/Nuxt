<script setup>
const route = useRoute()
useHead({ title: "Detalle" });
</script>

<template>
  <h1>Detalle</h1>
  <p>El id es: {{ route.params.id }}</p>
</template>