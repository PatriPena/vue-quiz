<!--importamos componentes-->

<script>
import { RouterView } from 'vue-router';
</script>

 <!-- en Vue el HTML va en un solo contenedor, en este caso llamado "template"-->
<template>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
