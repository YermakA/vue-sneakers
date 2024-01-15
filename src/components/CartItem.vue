
<script setup>
import deleteItem from '@/services/components/CartItem/delete-item'
import { inject } from 'vue'
const item = defineProps({
  itemId: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean
})
const elements = inject('elements')
</script>

<template>
  <li class="flex items-center gap-5 p-4 w-80 border border border-l-neutral-300 rounded-3xl mb-5">
    <img class="w-20 h-20" :src="imageUrl" alt="" />
    <div class="flex flex-col">
      <h2 class="text-sm">{{ title }}</h2>
      <p class="font-bold m-0">{{ price }} RUB.</p>
    </div>
    <img
      @click="() => deleteItem(elements.drawerItems, elements.items, item)"
      class="self-end cursor-pointer"
      src="/public/close.svg"
      alt="delete shoe"
    />
  </li>
</template>


<style>
</style>