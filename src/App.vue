<script setup>
import AOS from "aos";

import { onMounted } from 'vue';


onMounted( async()=> {
  AOS.init();
  
})



</script>

<template>
  <RouterView/>

</template>

<style scoped>

</style>
