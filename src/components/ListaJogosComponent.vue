<template>
  <v-container>
    <v-row>
      <v-col sm="1" md="4" v-for="(jogo, index) in listaJogos" :key="index">
        <v-card width="350">
          <v-img :src="jogo.imagem" height="250" width="350" />
          <v-card-title class="d-flex justify-center">{{
            jogo.nome
          }}</v-card-title>
          <v-card-subtitle class="d-flex justify-center"
            >Lançamento em : {{ jogo.dataLancamento }}
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-center">
            <v-menu transition="fab-transition" origin="center center">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-on="on" v-bind:attrs="attrs"
                  >Já tenho
                  <v-icon color="green darken-2" right>
                    mdi-checkbox-marked-circle
                  </v-icon>
                </v-btn>
                <v-spacer />
              </template>
              <v-list>
                <v-list-item
                  v-for="p in plataformas"
                  :key="p.nome"
                  @click="saveGame(jogo, p.nome)"
                >
                  <v-list-item-title v-text="p.nome"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn
              >Quero Comprar!
              <v-icon color="yellow darken-2" right> mdi-star </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import IJogo from "@/models/InformacaoJogo";
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  props: {
    listaJogos: [],
  },
  data: () => ({
    jogos: require("./values.json"),
    plataformas: require("../assets/plataformas.json"),
  }),

  methods: {
    saveGame(jogo: IJogo, plataforma: string) {
      console.log(plataforma)
      jogo.plataforma = plataforma
      axios.post(process.env.VUE_APP_BACKEND_API_URL, jogo).then((response) => {
        console.log(response.data);
      });
    },
  },
});
</script>

<style>
</style>