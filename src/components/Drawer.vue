<template>
  <div class="fixed top-0 left-0 z-10 opacity-60 w-full h-full bg-black"></div>
  <div class="top-0 right-0 h-full w-96 fixed z-20 bg-white p-6">
    <h1
      class="font-bold text-3xl transition hover:-translate-y-1 cursor-pointer hover:text-stone-500"
    >
      Cart
    </h1>
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

<script setup>
import CartItem from './CartItem.vue'
</script>

<style>
</style>