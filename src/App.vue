<script setup>
import { ref, onMounted, provide } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import Drawer from '@/components/Drawer.vue'

import getAdded from '@/services/get-added'
import getItems from '@/services/get-items'
import getFavorite from '@/services/get-favorite'

const items = ref([])
const drawerItems = ref([])
const drawerIsOpen = ref(false)
const favorites = ref([])
onMounted(() => {
  getItems(items)
  getAdded(items, drawerItems)
  getFavorite(items, favorites)
})

provide('drawerIsOpen', drawerIsOpen)
//elements add into Card
provide('elements', { drawerItems, items, favorites })
</script>

<template>
  <Drawer v-if="drawerIsOpen" />
  <div class="bg-white w-4/5 mx-auto h-auto rounded-3xl shadow-xl mt-14 pb-12 mb-16 min-h-svh">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>
