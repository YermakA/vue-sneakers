<script setup>
import { onMounted, ref, watch, reactive, provide } from 'vue'
import Search from '@/components/Search.vue'
import TheHeader from '@/components/TheHeader.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/Drawer.vue'

import getItems from '@/services/pages/Home/get-items'
import fetchItems from '@/services/pages/Home/fetch-items'

const drawerItems = ref([])
const drawerIsOpen = ref(false)
const items = ref([])
const filters = reactive({
  sortBy: '',
  searchQuery: ''
})
watch(filters, () => fetchItems(filters, items, drawerItems))
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
provide('drawerIsOpen', drawerIsOpen)
//elements add into Card
provide('elements', { drawerItems, items })
</script>

<template>
  <Drawer v-if="drawerIsOpen" />
  <div class="bg-white w-4/5 mx-auto h-auto rounded-3xl shadow-xl mt-14 pb-12 mb-16">
    <TheHeader />
    <Search @on-change-select="onChangeSelect" @on-change-input-search="onChangeInputSearch" />
    <CardList :items="items" />
  </div>
</template>


<style>
</style>