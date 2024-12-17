

<template>
    <div class="relative w-full h-full overflow-hidden">
      <transition name="fade">
        <div
        v-if="showCurrentSlide"
        class=" absolute inset-0 flex items-center justify-center bg-cover bg-center "
        :style="{ backgroundImage: `url(${slides[currentIndex].image})` }"
      >
        <h2 class="text-2xl font-bold text-white text-center p-4 bg-black bg-opacity-50 rounded-md">
          {{ slides[currentIndex].message }}
        </h2>
      </div>
      </transition>
      



      <transition name="fade">
        <div
          v-if="showCurrentSlide"
          class="absolute inset-0  hidden  items-center justify-center lg:flex caroussel   bg-no-repeat bg-cover bg-center"
          :style="{ backgroundImage: `url(${slides[currentIndex].image})` }"
        >
          <h2 class="text-2xl font-bold text-white text-center p-4 bg-black bg-opacity-50 rounded-md">
            {{ slides[currentIndex].message }}
          </h2>
        </div>
      </transition>






      <transition name="fade">
        <div
          v-if="showCurrentSlide"
          class="absolute inset-0 flex items-center justify-center lg:hidden  bg-no-repeat bg-cover bg-center px-8"
          :style="{ backgroundImage: `url(${slides[currentIndex].image})` }"
        >
          <h2 class="text-2xl font-bold text-white text-center p-4 bg-black bg-opacity-40 rounded-md">
            {{ slides[currentIndex].message }}
          </h2>
        </div>
      </transition>
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 space-x-2">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="inline-block w-3 h-3 rounded-full bg-gray-600 cursor-pointer"
          :class="{ 'bg-gray-800': index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import image1 from '../assets/images/bienvenue.jpg'

  import image2 from '../assets/connexion/bannière5.jpg'
  import image3 from "../assets/services/webdesign.jpg"
  import image4 from "../assets/services/bureautique2.jpg"



  
  const slides = [
    {
      message: 'Bienvenue dans notre secrétariat bureautique',
      image: image1, 
    },
    {
      message: 'Votre meilleur partenaire pour des services de qualités',
      image: image2, 
    },
    {
      message: 'Économisez jusqu’à 20% pour tout service demandé chez nous',
      image: image3, 
    },
    {
      message: 'Soyez au parfum de vos concours nationaux et internationaux',
      image: image4, 
    },
  ];
  
  const currentIndex = ref(0);
  const showCurrentSlide = ref(true);
  
  const startAutoSlide = () => {
    setInterval(() => {
      showCurrentSlide.value = false;
      setTimeout(() => {
        nextSlide();
        showCurrentSlide.value = true;
      }, 500); // Durée de la transition
    }, 8000);
  };
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
  };
  
  const goToSlide = (index) => {
    showCurrentSlide.value = false;
    setTimeout(() => {
      currentIndex.value = index;
      showCurrentSlide.value = true;
    }, 500);
  };
  
  onMounted(() => {
    startAutoSlide();
  });
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .caroussel{
    background-size: 1500px;
  }

  .caroussel_back{
    

  }
  </style>
   