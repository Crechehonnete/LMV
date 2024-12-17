<template>
  <Header></Header>

    <div class="bg-gray-900 h-auto text-white px-8 py-8">
        <divc class="h-full flex flex-col items-center text-justify text-wite">
         <h3> Termes d'Utilisation</h3>
          <h5>Dernière mise à jour : {{date}}</h5>
          
          Bienvenue sur le site web des Merveilles sur le papier. En accédant et en utilisant ce site, vous acceptez de vous conformer aux termes et conditions suivants. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser le site.
          
          1. Acceptation des termes
          En utilisant ce site, vous déclarez que vous avez lu, compris et accepté ces termes d'utilisation. Nous nous réservons le droit de modifier ces termes à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour. Votre utilisation continue du site après la publication de modifications constitue votre acceptation de ces modifications.
          
          2. Utilisation du site
          Vous vous engagez à utiliser le site uniquement à des fins légales et conformément à ces termes. Vous ne devez pas :
          
          Utiliser le site d'une manière qui enfreint toute loi ou réglementation applicable.
          Transmettre des contenus illégaux, menaçants, diffamatoires, obscènes ou inappropriés.
          Tenter d'accéder sans autorisation à d'autres systèmes informatiques ou réseaux connectés au site.
          3. Propriété intellectuelle
          Tous les contenus présents sur le site, y compris, mais sans s'y limiter, les textes, graphiques, logos, images et logiciels, sont la propriété de [Nom de votre secrétariat bureautique] ou de ses concédants de licence et sont protégés par les lois sur la propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer, modifier ou créer des œuvres dérivées sans notre autorisation écrite préalable.
          
          4. Liens vers des sites tiers
          Notre site peut contenir des liens vers des sites tiers. Ces liens sont fournis uniquement pour votre commodité. Nous n'avons aucun contrôle sur ces sites et ne sommes pas responsables de leur contenu. L'accès à ces sites se fait à vos propres risques.
          
          5. Limitation de responsabilité
          Notre entreprise ne pourra être tenu responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de votre accès ou de votre utilisation du site, y compris, mais sans s'y limiter, la perte de profits, de données ou d'autres pertes intangibles.
          
          6. Indemnisation
          Vous acceptez d'indemniser et de dégager de toute responsabilité notre entreprise, ses employés, agents et partenaires, contre toute réclamation, perte, responsabilité, dommage ou dépense (y compris les frais d'avocat) résultant de votre utilisation du site ou de votre violation de ces termes.
          
          7. Droit applicable
          Ces termes d'utilisation sont régis par les lois de [votre pays ou région]. Tout litige découlant de ces termes sera soumis à la compétence exclusive des tribunaux de notre juridiction.
        </divc>

    </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import {ref} from 'vue'


const date = ref("01/01/2025");
</script>

<style  scoped>

</style>