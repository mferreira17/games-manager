<template>
  <v-container>
    <v-card>
      <v-card-title>Games Manager</v-card-title>
      <v-card-subtitle>Gerenciador de jogos</v-card-subtitle>
      <v-card-text>
        <v-form @submit.prevent="buscarJogo">
          <v-text-field
            type="text"
            placeholder="Informe o nome do jogo para pesquisar"
            v-model.trim="strPesquisa"
            clearable
            outlined
          ></v-text-field>
          <v-btn type="submit" depressed color="primary"> Buscar </v-btn>
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
          "https://api.rawg.io/api/games?key=&search=" +
          this.strPesquisa,
        headers: {},
      };
      await axios(config).then((response) => {
        const lista = new Array<any>();

        response.data.results.forEach((element: any) => {
          const jogo: IJogo = {
            nome: element.name,
            dataLancamento: element.released,
            imagem: element.background_image,
          };
          lista.push(jogo);
        });

        this.results = JSON.parse(JSON.stringify(lista));
        console.log(this.results);
      });
    },
  },
  data: () => ({
    strPesquisa: "",
    results: new Array<IJogo>(),
  }),
});
</script>
