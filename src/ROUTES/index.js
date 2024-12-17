import {createMemoryHistory, createRouter} from 'vue-router';


import Acceuil from '../Pages/Accueil.vue';
import Politiques from '../Pages/politiques.vue';
import Termes from '../Pages/TermesU.vue';



const routes =[
    {path: '/', component:Acceuil},
    {path: '/Politiques', component:Politiques},
    {path: '/Termes', component:Termes},


]



const router = createRouter({
        history: createMemoryHistory(),
         routes,
        }) 
 
        
export default router;