<script setup>
import { ref, onMounted, provide } from 'vue'

import Home from '@/pages/Home.vue'
import TheHeader from '@/components/TheHeader.vue'
import Drawer from '@/components/Drawer.vue'

import getAdded from '@/services/pages/Home/get-added'
import getItems from '@/services/pages/Home/get-items'

const items = ref([])
const drawerItems = ref([])
const drawerIsOpen = ref(false)

onMounted(() => {
  getItems(items)
  getAdded(items, drawerItems)
})

provide('drawerIsOpen', drawerIsOpen)
//elements add into Card
provide('elements', { drawerItems, items })
</script>

<template>
  <Drawer v-if="drawerIsOpen" />
  <div class="bg-white w-4/5 mx-auto h-auto rounded-3xl shadow-xl mt-14 pb-12 mb-16">
    <TheHeader />
    <Home />
  </div>
</template>

<style scoped></style>
