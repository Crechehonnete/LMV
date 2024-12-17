<template >
    <div class=" flex flex-wrap  lg:flex-row justify-center items-center space-x-8 border border-green-700 py-4  ">
 <template v-for="(prestation, i) in service"  :key="i"
 :value="prestation.value">
        <div class="border-2 border-black w-[100px] h-[200px] lg:w-[250px] lg:h-[300px] mt-2 cursor-pointer  font-poppins ">
            <div class="papou w-full  h-full py-[50%] ">
                <div class=" p-2 lg:p-4 bg-gray-500 bg-opacity-70 w-full text-md text-center justify-center font-semibold">{{prestation.title}}</div>
            </div>
            

        </div>
    </template>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  service: Array,
  required: true,
});
</script>

<style  scoped>
.papou{
    background-image: url('../assets/connexion/bannière5.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

</style>