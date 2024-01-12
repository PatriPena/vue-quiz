// encargado de solucinoar el problema de a donde vamos si pinchamos en...
import { createRouter, createWebHistory} from 'vue-router'
import Quizesview from '../views/Quizesview.vue'
import Quizview from '../views/Quizview.vue'

const router = createRouter ({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
    {
path: '/',
name: 'quizes',
component: Quizesview
},
{
path: '/quiz/:id',
name: 'quiz',
component: Quizview
}
]
})

export default router
