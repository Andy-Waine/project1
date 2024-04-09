<script setup>
import { RouterLink, RouterView } from 'vue-router' // not needed unless we want to use vue-router
import LandingPage from './components/LandingPage.vue'
</script>

<template>
  <header>
    <div class="app-container">
      <LandingPage />
    </div>
  </header>

</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
}
</style>
