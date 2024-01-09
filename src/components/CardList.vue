<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Card from './Card.vue'
const items = ref([])
onMounted(async () => {
  try {
    const { data } = await axios.get('https://3b693c9b64066ada.mokky.dev/items')
    items.value = data
    console.log(items.value)
  } catch {
    console.log('err')
  }
})
</script>
<template>
  <ul class="grid grid-cols-4 gap-5 w-11/12 mx-auto">
    <Card
      v-for="item of items"
      :key="item.id"
      :image-url="item.imageUrl"
      :price="item.price"
      :title="item.title"
      :on-click-add="onClickAdd"
    />
  </ul>
</template>