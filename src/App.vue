<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" v-if="isUsuarioAutenticado" >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item to="/comprados">
            <v-list-item-icon>
              <v-icon>mdi-cash</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Comprados</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Quero Comprar</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Games Manager</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="logout" v-if="isUsuarioAutenticado">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer> Developed by @mferreira17 </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Mutation } from "vuex-class";

@Component
export default class App extends Vue {
  @Getter
  isUsuarioAutenticado: any;

  @Mutation
  logout: any;

  drawer = false;
}
</script>
