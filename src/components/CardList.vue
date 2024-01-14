<script setup>
import Card from './Card.vue'
defineProps({
  items: Object
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