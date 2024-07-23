<script setup lang="ts">

</script>

<template>
  <v-app-bar density="comfortable" elevation="0" floating class="opacity-90">
    <v-container fluid>
      <v-layout row wrap height="100%">
        <v-row>
          <v-col cols="2">
            <router-link to="/">
              <div class="d-flex align-center">
                <h1 class="text-h5 font-weight-black h-100 me-2">
                  Taipei Cafe List
                </h1>
                <v-icon icon="mdi-coffee-outline" />
              </div>
            </router-link>
          </v-col>
          <v-col cols="8">
            <v-row justify="center" align="center">
              <v-col cols="8" class="text-center">
                <v-btn to="/">
                  <span class="text-h5 font-weight-black">Home</span>
                </v-btn>
                <v-btn>
                  <router-link active-class="text-h5 font-weight-black" to="/list">
                    <span class="text-h5 font-weight-black">List</span>
                  </router-link>
                </v-btn>
              </v-col>
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
</template>

<style scoped>

</style>
