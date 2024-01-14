<script setup>
import { onMounted, ref, watch, reactive } from 'vue'
import getItems from '@/services/get-items'
import Search from './components/Search.vue'
import TheHeader from './components/TheHeader.vue'
import CardList from './components/CardList.vue'

import Drawer from './components/Drawer.vue'
import fetchItems from '@/services/fetch-items'
const drawerIsOpen = ref(false)
const items = ref([])
const filters = reactive({
  sortBy: '',
  searchQuery: ''
})
watch(filters, () => fetchItems(filters, items))
onMounted(() => getItems(items))

const onChangeSelect = (e) => {
  filters.sortBy = e.target.value
  console.log(e.target.value)
}
const onChangeInputSearch = (e) => {
  let timeout
  const changeSearch = () => {
    filters.searchQuery = e.target.value
  }
  clearInterval(timeout)
  timeout = setTimeout(changeSearch, 1000)
}
</script>

<template>
  <Drawer v-if="drawerIsOpen" />
  <div class="bg-white w-4/5 mx-auto h-auto rounded-3xl shadow-xl mt-14 pb-12 mb-16">
    <TheHeader />
    <Search :onChangeSelect="onChangeSelect" :on-change-input-search="onChangeInputSearch" />
    <CardList :items="items" />
  </div>
</template>

<style scoped></style>
