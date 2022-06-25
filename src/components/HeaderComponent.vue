<template>
  <header
    class="z-[99] flex items-center h-[100px] w-full border-b bg-white fixed md:border-r md:w-[200px] md:flex-col md:h-screen"
  >
    <div class="m-auto py-4 flex gap-4 text-center md:flex-col md:w-full">
      <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
      <router-link :to="{ name: 'checkbox' }" class="nav-link"
        >checkbox</router-link
      >
      <router-link :to="{ name: 'knob' }" class="nav-link">Knob</router-link>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  padding: 1rem;
  border-radius: 0.25rem;
}
.nav-link:hover {
  background: #d1edff;
}
.router-link-exact-active {
  background: #d1edff;
}
@media screen and (min-width: 768px) {
  .nav-link {
    border-radius: 0;
  }
}
</style>
