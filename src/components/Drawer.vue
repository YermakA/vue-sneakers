<script setup>
import { computed, inject } from 'vue'
import CartItem from '@/components/CartItem.vue'
const drawerIsOpen = inject('drawerIsOpen')
const drawerToggling = () => {
  return (drawerIsOpen.value = !drawerIsOpen.value)
}

const getTotal = computed(() => {
  let total = 0
  for (const item of drawerItems.value) {
    total += item.price
  }
  return total
})

const drawerItems = inject('elements').drawerItems
</script>

<template>
  <div
    @click="drawerToggling"
    class="fixed top-0 left-0 z-10 opacity-60 w-full h-full bg-black"
  ></div>
  <div class="top-0 right-0 h-full w-96 fixed z-20 bg-white p-6">
    <div class="flex gap-4 mb-5 items-center">
      <img
        @click="drawerToggling"
        class="w-5 hover:-translate-x-1 transition-all hover:w-6 h-6 hover:text-stone-500 cursor-pointer"
        src="../../public/drawer-arrow.svg"
        alt="drawer close"
      />
      <h1 class="font-bold text-3xl">Cart</h1>
    </div>
    <ul class="h-4/6 overflow-y-auto">
      <CartItem
        v-for="item of drawerItems"
        :key="item.id"
        :item-id="item.itemId"
        :title="item.title"
        :image-url="item.imageUrl"
        :price="item.price"
        :is-favorite="item.isFavorite"
        :is-added="item.isAdded"
      />
    </ul>
    <div class="mb-5">
      <div>
        <div>
          <span class="text-lg">Total:</span>
          <b class="block text-lg">{{ getTotal }} RUB</b>
        </div>
      </div>
      <div>
        <div>
          <span class="text-lg">Tax: 5%</span>
          <b class="block text-lg">{{ Math.floor(getTotal * 0.05) }} RUB</b>
        </div>
      </div>
    </div>
    <button
      class="transition bg-lime-400 rounded-3xl py-3 w-full font-bold disabled:bg-slate-300 text-slate-100 hover:bg-lime-700 active:bg-lime-800"
    >
      Place an order
    </button>
  </div>
</template>


<style>
</style>