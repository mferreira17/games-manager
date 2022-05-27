<template>
  <BuscaComponent />
</template>

<script lang="ts">
  import Vue from 'vue'
  import BuscaComponent from '../components/BuscaComponent.vue'

  export default Vue.extend({
    name: 'HomeComponent',

    components: {
      BuscaComponent,
    },
  })
</script>
