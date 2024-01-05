<script setup>
import Card from './Card.vue'
const onClickAdd = () => {
  alert('pizda')
}
</script>
<template>
  <ul class="grid grid-cols-4 gap-5 w-11/12 mx-auto">
    <Card :is-added="true" :is-favorite="true" :on-click-add="onClickAdd" />
    <Card />
    <Card />
    <Card />
  </ul>
</template>