<script setup>
import { inject } from 'vue'
const drawerIsOpen = inject('drawerIsOpen')
const drawerToggling = () => {
  return (drawerIsOpen.value = !drawerIsOpen.value)
}
</script>

<template>
  <div class="fixed top-0 left-0 z-10 opacity-60 w-full h-full bg-black"></div>
  <div @click="drawerToggling" class="top-0 right-0 h-full w-96 fixed z-20 bg-white p-6">
    <div class="flex gap-4 mb-5 items-center">
      <img
        class="w-5 hover:-translate-x-1 transition-all hover:w-6 h-6 hover:text-stone-500 cursor-pointer"
        src="../../public/drawer-arrow.svg"
        alt="drawer close"
      />
      <h1 class="font-bold text-3xl">Cart</h1>
    </div>
    <ul>
      <CartItem />
      <CartItem />
    </ul>
    <div class="mb-5">
      <div>
        <div>
          <span class="text-lg">Total:</span>
          <b class="block text-lg">12990 RUB</b>
        </div>
      </div>
      <div>
        <div>
          <span class="text-lg">Tax: 5%</span>
          <b class="block text-lg">900 RUB</b>
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