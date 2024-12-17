<template>
  <header
    class="sticky z-50 top-0 bg-black h-[100px] lg:h-[140px] md:h-[110px] text-white "
  >
    <div class="w-full h-full space-y-2 px-4   py-4">
       <div class="flex justify-between w-full h-full lg:h-[40%]  lg:px-16   py-2  ">
        
        <div @click="conter" class="w-12 h-12 lg:hidden md:hidden mt-2  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M80 160h352M80 256h352M80 352h352"
            />
          </svg>
  
          <Transition>
            <div
              v-show="menu == true"
              class="w-[55%] h-[300px] absolute left-0 z-30 bg-black border-slate-200 border px-4 py-2 text-white font-semibold md:hidden lg:hidden"
            >
              <div class="flex flex-col space-y-4 h-auto w-full">
                <RouterLink to="/" class="block p-2 border-b text-sky-200"
                  >Accueil</RouterLink
                >
                <a
                  href="https://www.minfopra.gov.cm/index.php/fr/ouverture-des-concours"
                  class="block p-2 border-b text-sky-200"
                  >Concours</a
                >
              </div>
            </div>
          </Transition>
        </div>



        <span class="p-0  w-20 -mt-4 h-20 overflow-hidden"
          ><img class="w-full h-full " src="../assets/images/logo.png" alt=""
        /></span>

        <h1
          class="lg:flex hidden font-bold text-center text-md md:text-2xl lg:text-[35px] text-white"
        >
          LES MERVEILLES SUR LE PAPIER
        </h1>

        
         
            <button
              class="  h-10 lg:h-12 px-2 bg-sky-300 rounded w-24 text-center hover:font-bold bg-opacity-30 hover:text-sky-300 hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            >
              <a href="https://wa.me/+237690813963" class="text-center">Contacter</a>
            </button>
          
        
      </div>

     


      <div class="hidden lg:flex md:flex justify-center   h-[40%]">
        <nav class="w-[50%]  mt-2 font-poppins ">
          <ul class="flex justify-center space-x-8 text-sm">
            <RouterLink to="/">
              <li class="border-b hover:sky-300 p-2 text-sky-200">
                Accueil
              </li></RouterLink
            >
            <li class="hover:border-b border-sky-300 p-2 text-sky-200">
              <a href="#section_service">Services</a>
            </li>
            <li class="hover:border-b border-sky-300 p-2 text-sky-200">
              <a
                href="https://www.minfopra.gov.cm/index.php/fr/ouverture-des-concours"
                >Concours</a
              >
            </li>
           
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

//const menu_tel;
const menu = ref(false);
var cont = ref(0);
var conter = () => {
  cont.value++;
  menu.value = !menu.value;
  console.log(menu.value);
  console.log(cont.value);
};
</script>

<style scoped></style>
