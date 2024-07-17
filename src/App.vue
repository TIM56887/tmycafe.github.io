<script setup lang="ts">
import { ref } from 'vue'

const toggle = ref('店家列表')
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-container fluid>
        <v-layout row wrap height="100%">
          <v-row>
            <v-col cols="2">
              <h1 class="text-h5 font-weight-black h-100">
                Cafe List
              </h1>
            </v-col>
            <v-col cols="8">
              <v-row justify="center" align="center">
                <v-col cols="8" class="text-center ">
                  <!-- <router-link to="/list" active-class="">
                    <span class="" />
                  </router-link> -->
                  <v-btn-toggle v-model="toggle">
                    <v-btn to="/list">
                      <span class="text-blue-darken-2 text-h5 font-weight-black">List</span>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
                <!-- <v-col cols="2">
                  <router-link to="map">
                    地圖
                  </router-link>
                </v-col> -->
                <!-- <v-col cols="2">
                  <router-link to="contact">
                    聯絡我們
                  </router-link>
                </v-col> -->
              </v-row>
            </v-col>
            <v-col cols="2">
              <a href="https://tim56887.dev/" target="_blank">
                <v-icon icon="mdi-github" class="ms-auto" size="30" />
              </a>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
