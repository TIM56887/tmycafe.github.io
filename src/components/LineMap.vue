<script setup lang="ts">

</script>

<template>
  <v-container grid-list-md class="position-relative">
    <div class="vertical-dashed-line" />
    <div class="dashed-line-with-circle" />
    <div class="dashed-line-with-circle-end" />
    <v-row justify="center" class="main-content">
      <v-col cols="2">
        dfsa
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.main-content {
        padding-top: 200px;
        min-height: 70vh;
    }
    .main-content::after{
        content: '';
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        border: 1px solid rgba(30,30,30,.3);
        z-index: 100;
    }

    .vertical-dashed-line:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        border-left: 1px dashed rgb(172, 172, 172);
    }
    .vertical-dashed-line:before {
        content: '';
        position: absolute;
        left: 49.7%;
        top: 78%;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        border: 1px solid rgba(30,30,30,.3);
        z-index: 1000;
    }
    .dashed-line-with-circle:after {
        content: '';
        position: absolute;
        left: 49.75%;
        top: 0px;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        border: 1px solid rgba(30,30,30,.3);
    }
    .dashed-line-with-circle:before {
        content: '';
        position: absolute;
        left: 49.75%;
        top: 55%;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        border: 1px solid rgba(30,30,30,.3);
    }
    .dashed-line-with-circle-end:after{
        content: "\30FB";
        line-height: 0.7;
        text-indent: -6px;
        display: inline-block;
        color: #b2b2b2;
        box-sizing: border-box;
        border: 1px solid #b2b2b2;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 49.5%;
        bottom: -10px;
        background-color: #fff;
        border-radius: 50%;
        font-size: 30px;
    }
</style>
