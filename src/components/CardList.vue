<script setup>
import { inject } from 'vue'
import Card from './Card.vue'
const items = inject('elements').items
</script>

<template>
  <ul v-auto-animate="{ duration: 100 }" class="grid grid-cols-4 gap-5 w-11/12 mx-auto">
    <Card
      v-for="item of items"
      :key="item.id"
      :item-id="item.id"
      :is-added="item.isAdded"
      :is-favorite="item.isFavorite"
      :image-url="item.imageUrl"
      :price="item.price"
      :title="item.title"
    />
  </ul>
</template>