<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/search">Buscar</NuxtLink>
      <NuxtLink to="/favorites">Favoritos</NuxtLink>
    </nav>

    <slot />
  </div>
</template>