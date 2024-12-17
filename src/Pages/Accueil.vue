<template>




  <Annonce></Annonce>
  <Header></Header> 
  <section class="h-[500px]">
    <caroussel></caroussel>
  </section>
  
  <section  class="h-[500px] lg:h-screen  text-white  bg-black">

    <div class="flex justify-center  h-full py-4   space-x-2  lg:space-x-20   lg:px-20 lg:py-8">

      <div class="overflow-hidden  py-4 w-[50%] lg:w-[40%]  ">

        
    <div class="flex  my-[15%] h-[400px] text-left justify-start  px-2 lg:py-8 no-scrollbar overflow-y-auto   ">

        
      <div class="  ">  <span class=" text-[60px] lg:text-[90px]  font-semibold " >D</span></div>

       <div class=" h-full  mt-8"> <h2 class=" font-bold font-poppins    text-[12px] lg:text-[30px] text-left"> evenons numérique.</h2>
        <p class="font-poppins text-[13px]  text-left   lg:text-xl  " data-aos="fade-up" data-aos-duration="600"  data-aos-delay="800"> écouvrez comment  nos différents services  de secrétariat bureautique digitalisés peuvent transformer votre entreprise et/ou votre personne. Nous mettons à votre diposition un personnel qualifié, une gestion efficace, une organisation optimale et un soutien administratif personnalisé pour vous concentrez sur ce qui  compte vraiment: " Votre succès".</p>
      </div>

      </div>
      </div>

      <div class=" justify-center items-center  w-[50%] ">
        <img class=" h-[250px] w-[180px]  lg:h-[500px] lg:w-[500px] md:h-[300px] md:w-[300px] mt-16 lg:mt-8 "  src="../assets/connexion/entre.jpg" alt=""  data-aos="fade-left" data-aos-duration="600"   data-aos-delay="300">
      </div>
    </div>
   
  </section>



  <section class=" service h-[350px]   lg:h-[700px] w-full " id="section_service">
    <div class="w-full h-full ">


     <h1 class=" text-center font-bold text-xl lg:text-3xl py-4 lg:p-8"> Nos Services </h1>

     <div class="flex flex-row  w-full justify-center    space-x-16 px-8 lg:px-36">


      <div class="flex flex-col space-y-8 w-[40%]   items-center   text-justify py-[16%] lg:py-40 md:py-24  ">
<ul class="list-disc text-justify text-[14px] lg:ml-24 lg:text-[24px]  font-semibold">
  <li>Bureautique</li>

  <li>Photographie& Infographie</li>

  <li>Services en ligne</li>

  <li>Web design</li>
</ul>

<button
class="h-12 lg:h-12  py-2 bg-gray-900/50    font-poppins font-semibold rounded-full w-[90%] lg:w-[30%] text-center text-white items-center hover:font-bold   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-900/40 duration-300 hover:cursor-pointer"
>
<a href="https://wa.me/+237690813963">Contacter</a>
</button>
      </div>



      <div class="flex flex-col w-[60%]     h-[300px] md:h-[300px] lg:h-[550px] py-8   ">

        <div class="flex  space-x-2  h-[50%]">
          <img class="w-[50%]" src="../assets/services/bureautique.jpg" alt="">
          <img class="w-[50%]" src="../assets/services/photographie.jpg" alt="">
</div>

<div class="flex space-x-2 h-[50%] mt-2">
  <img class="w-[50%]" src="../assets/services/servicesL.jpg" alt="">
  <img class="w-[50%]" src="../assets/services/designweb.jpg" alt="">
</div>
      </div>


     </div>



    </div>
      
  </section>


 <section class="h-[550px] w-screen   bg-black" id="propos" >
  <div class=" flex flex-col items-center py-8 space-y-4 lg:py-32 h-full  px-12 lg:px-36">
    <div class="space-y-4 h-full">
<h2 class="text-white font-bold text-md lg:text-3xl text-center " >à propos</h2>

<p class=" text-justify text-[12px] lg:text-[14px]  text-white">

  Bienvenue au Secrétariat bureautique  {{nom_entrep }} ! Nous sommes une entreprise spécialisée dans les services de secrétariat bureautique au Cameroun, dédiée à accompagner les professionnels et les entreprises dans la gestion de leurs tâches administratives quotidiennes.

  Notre mission est de vous offrir des services de secrétariat efficaces, fiables et adaptés à vos besoins spécifiques. Que ce soit pour la gestion des correspondances, la préparation de documents, le traitement des courriers, la prise de rendez-vous, ou la gestion de votre agenda, nous nous engageons à vous offrir un service de qualité qui vous permettra de vous concentrer sur votre cœur de métier.
  
  Notre équipe est composée de professionnels expérimentés, réactifs et rigoureux, qui mettent leur expertise à votre service pour vous offrir une solution sur mesure. En optant pour nos services, vous bénéficiez d’une collaboration transparente et de conseils adaptés, assurant ainsi le bon déroulement de vos activités.
  
  Avec [Nom de votre entreprise], simplifiez vos tâches administratives et gagnez en efficacité. Contactez-nous dès aujourd’hui pour découvrir comment nous pouvons vous accompagner dans votre réussite professionnelle.
</p>
    </div>
    <button
    class="h-20 py-2  bg-sky-300  font-poppins font-semibold rounded-full w-[40%] lg:w-[30%] text-center text-white items-center hover:font-bold bg-opacity-30 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:cursor-pointer "
  >
    <a href="https://wa.me/+237690813963">Contacter</a>
  </button>
  </div>
 </section>




  <TFooter></TFooter>


  
</template>

<script setup>
import Header from '../components/Header.vue'
import Annonce from '../components/Annonce.vue'
import TFooter from '../components/TFooter.vue';
import caroussel from '../components/caroussel.vue';

import { onMounted, ref } from 'vue';
import { RouterView} from 'vue-router';



const nom_entrep = ref('LES MERVEILLES SUR LE PAPIER');
console.log(nom_entrep.value);



</script>

<style  scoped>
.service{
  background-image: url("../assets/images/service.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover
}


.no-scrollbar::-webkit-scrollbar{
  display: none;
}

.no-scrollbar{
  scrollbar-width: none;;
}

</style>