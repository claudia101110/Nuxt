<script setup>
defineProps({ modelValue: String });
const emit = defineEmits(["update:modelValue", "search"]);
</script>

<template>
  <div>
    <input
      type="text"
      placeholder="Ej: chicken"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @keyup.enter="emit('search')"
    />
    <button @click="emit('search')">Buscar</button>
  </div>
</template>
