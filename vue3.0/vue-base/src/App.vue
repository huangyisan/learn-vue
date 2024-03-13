<script setup>
import { ref } from 'vue'
let isButtonDisabled = ref(true)
const objectOfAttrs = {
  id: "container",
  class: "wrapper"
}
let message = ref("abcdefg")
</script>

<template>
    <button :disabled="isButtonDisabled" v-bind="objectOfAttrs">button</button>

  <p>
    {{ message.split('').reverse().join('') }}
  </p>
  
</template>

<style scoped>
</style>
