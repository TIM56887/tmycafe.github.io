<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { useAppBarStore } from '@/stores/AppBar'

const AppBarStore = useAppBarStore()
const { lgAndUp } = useDisplay()
</script>

<template>
  <transition>
    <v-app-bar v-if="!AppBarStore.hide" density="comfortable" :elevation="AppBarStore.onTop ? 0 : 1 " class="opacity-90 pos-relative">
      <v-container fluid>
        <v-layout row wrap height="100%">
          <v-row>
            <v-col cols="2" sm="2">
              <router-link to="/">
                <div class="d-flex align-center">
                  <h1 v-if="lgAndUp" class="text-h6 font-weight-black h-100 me-2">
                    Taipei Cafe List
                  </h1>
                  <v-icon icon="mdi-coffee-outline" />
                </div>
              </router-link>
            </v-col>
            <v-col cols="8" sm="8">
              <v-row justify="center" align="center">
                <v-col cols="12" sm="8" class="text-center">
                  <v-btn to="/" :active="false">
                    <span class="text-h5 font-weight-black">Home</span>
                  </v-btn>
                  <v-btn>
                    <router-link active-class="text-h5 font-weight-black" to="/list">
                      <span class="text-h5 font-weight-black">List</span>
                    </router-link>
                  </v-btn>
                  <v-btn to="/bigmap" :active="false">
                    <span class="text-h5 font-weight-black">Map</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" sm="2" class="d-flex align-center">
              <a href="https://tim56887.dev/" target="_blank">
                <v-icon icon="mdi-github" class="mx-auto" size="30" />
              </a>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
    </v-app-bar>
  </transition>
</template>

<style scoped>

</style>
