<template>
  <div>
    <nav class="menu">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/search">Buscar</NuxtLink>
      <NuxtLink to="/favorites">Favoritos</NuxtLink>
    </nav>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #ccc;
}
.menu a {
  text-decoration: none;
}
.menu a.router-link-active {
  font-weight: bold;
}
main {
  padding: 16px;
}
</style>