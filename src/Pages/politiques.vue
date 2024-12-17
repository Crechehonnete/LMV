<template>
  <Header></Header>

    <div class=" bg-gray-900 text-white h-auto  justify-center px-8  py-8">

        <div class=" h-full flex flex-col items-center text-justify text-white" >
            
                <h3>Politique de Confidentialité</h3>
                <br>
                
                <h4>Dernière mise à jour : {{date}}</h4><br>
                <p>

Cette politique de confidentialité décrit comment notre entreprise  collecte, utilise et protège les informations personnelles que vous  pouvez fournir sur notre site web [URL de votre site web.

1. Informations que nous collectons
Nous pouvons collecter les types d'informations suivants :

Informations personnelles : nom, adresse e-mail, numéro de téléphone, et toute autre information que vous choisissez de nous fournir.
Informations techniques : adresse IP, type de navigateur, pages visitées, durée de la visite, et autres données de connexion.
2. Utilisation des informations
Nous utilisons les informations collectées pour :

Fournir, gérer et améliorer nos services.
Communiquer avec vous, y compris pour répondre à vos demandes et vous envoyer des informations sur nos services.
Analyser l'utilisation de notre site pour améliorer l'expérience utilisateur.
3. Partage des informations
Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec :

Des prestataires de services tiers qui nous aident à gérer notre site ou nos services, sous réserve qu'ils s'engagent à protéger vos informations.
Les autorités compétentes si la loi l'exige ou si nous croyons de bonne foi que cela est nécessaire pour protéger nos droits.
4. Sécurité des informations
Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre la perte, le vol, et l'accès non autorisé. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est sécurisée à 100 %. Nous ne pouvons garantir une sécurité absolue.

5. Vos droits
Vous avez le droit de :

Accéder à vos informations personnelles.
Demander la correction de vos informations personnelles.
Demander la suppression de vos informations personnelles.
Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : [adresse e-mail de contact].

6. Cookies
Notre site utilise des cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers stockés sur votre appareil. Vous pouvez choisir de désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter votre expérience sur notre site.

7. Modifications de cette politique
Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la manière dont nous protégeons vos informations.
            </p>
        </div>

    </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import {ref} from 'vue'

const date = ref('01/01/2025');

</script>

<style  scoped>

</style>