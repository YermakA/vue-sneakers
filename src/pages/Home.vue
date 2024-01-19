<script setup>
import { watch, reactive, inject } from 'vue'
import Search from '@/components/Search.vue'

import CardList from '@/components/CardList.vue'

import fetchItems from '@/services/fetch-items'

const filters = reactive({
  sortBy: '',
  searchQuery: ''
})
watch(filters, () => fetchItems(filters, elements.items, elements.drawerItems))

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
const elements = inject('elements')
</script>

<template>
  <Search @on-change-select="onChangeSelect" @on-change-input-search="onChangeInputSearch" />
  <CardList />
</template>


<style>
</style>