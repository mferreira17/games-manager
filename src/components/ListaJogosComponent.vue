<template>
  <v-container>
    <v-row>
      <v-col sm="1" md="4" v-for="(jogo, index) in jogos" :key="index">
        <v-card width="350">
          <v-img :src="jogo.imagem" height="250" width="350" />
          <v-card-title class="d-flex justify-center">{{
            jogo.nome
          }}</v-card-title>
          <v-card-subtitle class="d-flex justify-center"
            >Lançamento em : {{ jogo.dataLancamento }}
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-center">
            <v-btn>Já tenho</v-btn> <v-spacer />
            <v-btn>Quero Comprar!</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    listaJogos: [],
  },

  data: () => ({
    jogos: require("./values.json"),
  }),
});
</script>

<style>
</style>