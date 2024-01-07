<script setup>
import TheHeader from './components/TheHeader.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'
</script>

<template>
  <Drawer />
  <div class="bg-white w-4/5 mx-auto h-auto rounded-3xl shadow-xl mt-14 pb-3">
    <TheHeader />
    <CardList />
  </div>
</template>

<style scoped></style>
