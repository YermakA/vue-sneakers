<script setup>
import { inject } from 'vue'
import Card from '@/components/Card.vue'
const favorites = inject('elements').favorites
</script>


<template>
  <div v-if="favorites.length" class="flex items-center gap-6">
    <ul class="grid grid-cols-4 gap-5 w-11/12 mx-auto">
      <Card
        v-for="item of favorites"
        :key="item.id"
        :item-id="item.itemId"
        :is-added="item.isAdded"
        :is-favorite="item.isFavorite"
        :image-url="item.imageUrl"
        :price="item.price"
        :title="item.title"
      />
    </ul>
  </div>
  <div v-else class="flex flex-col items-center gap-6 w-80 h-72 m-auto mt-64">
    <img class="w-20 h-20" src="../../public/emoji-1.png" alt="" />
    <h2 class="font-bold text-3xl">Закладок нет :(</h2>
    <p>Вы ничего не добавляли в закладки</p>

    <button
      class="transition bg-lime-400 rounded-3xl py-3 w-full font-bold disabled:bg-slate-300 text-slate-100 hover:bg-lime-700 active:bg-lime-800 w-64"
    >
      Get back
    </button>
  </div>
</template>