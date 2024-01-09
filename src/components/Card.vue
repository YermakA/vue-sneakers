<script setup>
defineProps({
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
})
</script>


<template>
  <li
    class="relative flex flex-col w-full border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
  >
    <div click="" class="absolute top-8 left-8">
      <img :src="isFavorite ? '/public/like-2.svg' : '/public/like-1.svg'" alt="Favorite" />
    </div>
    <img @click="onClickAdd" :src="imageUrl" class="w-full" alt="Sneaker" />
    <p>{{ title }}</p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col gap-2">
        <span class="text-slate-200">Цена:</span>
        <span class="font-bold">{{ price }} руб.</span>
      </div>
      <img :src="!isAdded ? '/plus.svg' : '/public/checked.svg'" alt="Plus" />
    </div>
  </li>
</template>