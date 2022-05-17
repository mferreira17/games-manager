<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>Games Manager</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>Games Manager - Login</v-card-title>
          <v-card-subtitle
            >Preencha os dados abaixo para prosseguir</v-card-subtitle
          >
          <v-card-text>
            <v-form>
              <v-text-field
                label="E-mail"
                type="email"
                placeholder="E-mail"
                clearable
                outlined
              ></v-text-field>
              <v-text-field
                label="Senha"
                type="password"
                placeholder="Senha"
                clearable
                outlined
              ></v-text-field>
              <v-btn depressed color="primary"> Acessar </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
    <v-footer> </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class LoginVue extends Vue {}
</script>

<style>
</style>