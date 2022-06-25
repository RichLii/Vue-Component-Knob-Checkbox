<template>
  <div class="flex flex-col min-h-screen md:flex-row overflow-hidden">
    <router-view name="Header" />
    <div class="px-6 pt-8 mt-[100px] md:mt-0 md:ml-[200px] w-screen">
      <router-view class="container mx-auto lg:max-w-[1024px]" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
