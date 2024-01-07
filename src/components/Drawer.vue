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
  </div>
</template>

<script setup>
import CartItem from './CartItem.vue'
</script>

<style>
</style>