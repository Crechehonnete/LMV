<template>
    <div class="w-full  bg-slate-100 px-4 justify-center ">
        <div class="text-center py-2">
<h2 class="  ">{{annonce}}</h2>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
const annonce = ref("Conscours de L'ENAM lancé, économisez jusqu'à 20% en vous inscrivant maintenant!!");
</script>

<style  scoped>

</style>