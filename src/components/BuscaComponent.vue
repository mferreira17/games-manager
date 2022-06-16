<template>
  <v-container>
    <v-card>
      <v-card-title>Games Manager</v-card-title>
      <v-card-subtitle>Gerenciador de jogos</v-card-subtitle>
      <v-card-text>
        <v-form @submit.prevent="loader=!loader">
          <v-text-field
            type="text"
            placeholder="Informe o nome do jogo para pesquisar"
            v-model.trim="strPesquisa"
            clearable
            outlined
          ></v-text-field>
          <v-btn
            type="submit"
            depressed
            color="primary"
            :loading="loader"
            :disabled="loader"
            @click="buscarJogo"
          >
            Buscar
            <template v-slot:loader>
              <span>Pesquisando...</span>
            </template>
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <v-spacer></v-spacer>
    <ListaJogosComponent :listaJogos="results"></ListaJogosComponent>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ListaJogosComponent from "./ListaJogosComponent.vue";
import axios from "axios";
import IJogo from "@/models/InformacaoJogo";

export default Vue.extend({
  name: "BuscaComponent",
  components: { ListaJogosComponent },
  methods: {
    async buscarJogo() {
      console.log("procurando por .: " + this.strPesquisa);
      const config = {
        method: "get",
        url:
          "https://api.rawg.io/api/games?key="+process.env.VUE_APP_API_KEY+"&search=" +
          this.strPesquisa,
        headers: {
          "Access-Control-Allow-Origin":"https://games-manager.netlify.app",
          "Access-Control-Request-Headers":
            "accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with, token, referer-trp, referer-referer, x-api-language, x-api-client, x-api-referer",
        },
      };
      await axios(config).then((response) => {
        const lista = new Array<any>();

        response.data.results.forEach((element: any) => {
          console.log;
          const jogo: IJogo = {
            nome: element.name,
            dataLancamento: element.released,
            imagem: element.background_image,
            rawgGameId: element.id,
            plataforma: "",
          };
          lista.push(jogo);
        });

        this.results = JSON.parse(JSON.stringify(lista));
        console.log(this.results);
        this.loader = !this.loader
      });
    },
  },
  data: () => ({
    strPesquisa: "",
    results: new Array<IJogo>(),
    loader: false,
  }),

});
</script>
