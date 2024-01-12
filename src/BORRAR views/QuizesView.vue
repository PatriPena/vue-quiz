<script> 
import q from '../data/quizes.json'
import { ref, watch } from 'vue'
import Card from '../components/Card.vue'
import gsap from 'gsap'

const quizes = ref (q)
const search = ref('')

watch(search, () => {
    quizes.value = q.filter((quiz) => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

//constante que  alude a style . Estas dos constantes afectan al estilo de presentacion de los objetos en el dom
const beforeEnter = (el) => {
    // coge cualquier objeto del dom posiciona el objeto 100 puntos hacia arriba en opacidad 0 antes de acceder al documento
    el.style.opacity = 0
    el.style.transform = 'translateV(-100px)'
}
//una vez accedamos, la opacidad pasa a 1 y en 0.3 segundos se presentan los elementos en pantalla.
const enter = (el) => {
    gsap.to(el, {
    y: 0,
    opacity:1,
    duration: 0.3,
    delay: el.dataset.index * 0.3,
    })
}
</script>
 
<template> 
    <div>
        <header>
            <h1>Cuestionarios</h1>
            <input v-model.trim="search" type="text" placeholder="Buscar..."/>
        </header>
        <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img src="quiz.img" alt=""/>
            <div class="card-text">
                <h2>{{ quizz-name }}</h2>
                <p>{{ quiz.questions.length }} questions</p>
            </div>
        </div>
    </div>
</template>
 
<style lang="scss" scoped>

    header {
        margin-bottom: 10px;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: start;
        h1{
            font-weight: bold;
            margin-right: 30px;
        }
        input{
            border: none;
            background-color: rgba (128,128,128,0.1);
            padding: 10px;
            border-radius: 5px;
            max-width: 300px;
            margin-left: 5px;
        }
    }

    .options-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 40px;
    }

    @media (max-width: 800px) {
        header {
        flex-direction: column;
    }
}

</style>