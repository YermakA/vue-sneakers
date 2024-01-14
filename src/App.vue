<script setup>
import { onMounted, ref, watch, reactive } from 'vue'

import axios from 'axios'

import TheHeader from './components/TheHeader.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'

const drawerIsOpen = ref(false)
const items = ref([])
const filters = reactive({
  sortBy: '',
  searchQuery: ''
})

onMounted(async () => {
  try {
    const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/items')
    items.value = data
  } catch (e) {
    console.log('err:', e)
  }
})

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

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/items', { params })
    items.value = data
    console.log(items.value)
  } catch (e) {
    console.log('error: ', e)
  }
}

watch(filters, fetchItems)
</script>

<template>
  <Drawer v-if="drawerIsOpen" />
  <div class="bg-white w-4/5 mx-auto h-auto rounded-3xl shadow-xl mt-14 pb-12 mb-16">
    <TheHeader />
    <div class="p-10">
      <div class="flex justify-between items-center mb-10">
        <h1 class="text-3xl font-bold">Все кроссовки</h1>
        <div class="flex items-center gap-4">
          <select
            @change="onChangeSelect"
            class="py-2 px-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
          >
            <option value="name">По названию</option>
            <option value="price">По цене (дешевые)</option>
            <option value="-price">По цене (дорогие)</option>
          </select>
          <div class="relative">
            <input
              @input="onChangeInputSearch"
              type="text"
              class="border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400"
              placeholder="Поиск..."
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src="/search.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <CardList :items="items" />
  </div>
</template>

<style scoped></style>
