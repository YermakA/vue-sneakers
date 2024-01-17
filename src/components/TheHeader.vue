<script setup>
import { inject, computed } from 'vue'
const drawerIsOpen = inject('drawerIsOpen')
const drawerToggling = () => {
  return (drawerIsOpen.value = !drawerIsOpen.value)
}
const drawerItems = inject('elements').drawerItems
const getTotal = computed(() => {
  let total = 0
  for (const item of drawerItems.value) {
    total += item.price
  }
  return total
})
</script>


<template>
  <header class="flex justify-between border-b px-10 py-8 border-slate-300 mb-5">
    <router-link to="/" class="flex items-center gap-4">
      <img class="w-10" src="/public/logo.png" alt="logo" />
      <div>
        <h2 class="text-xl uppercase font-bold">Ermak Vue</h2>
        <p class="text-slate-400">The best sheakers shop</p>
      </div>
    </router-link>
    <ul class="flex items-center gap-10">
      <li @click="drawerToggling" class="flex cursor-pointer hover:text-black gap-3 text-slate-500">
        <img src="/public/cart.svg" alt="cart" />
        <b>{{ getTotal }} RUB</b>
      </li>
      <li class="flex cursor-pointer hover:text-black text-slate-500">
        <router-link to="/favorites" class="flex gap-3">
          <img src="/public/heart.svg" alt="cart" />
          <b>Bookmarks</b>
        </router-link>
      </li>
      <li class="flex cursor-pointer hover:text-black gap-3 text-slate-500">
        <img src="/public/profile.svg" alt="cart" />
        <b>Profile</b>
      </li>
    </ul>
  </header>
</template>