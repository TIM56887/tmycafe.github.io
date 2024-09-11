<script setup lang="ts">
import { useDisplay } from 'vuetify'

const mapData = [
  {
    title: 'What is this for ?',
    text: `Discover Your Perfect Café with Us!
          Looking for a cozy spot to sip your favorite brew, meet friends, or get some work done? We’ve got you covered! Our platform helps you find the ideal café that matches your vibe—whether you’re after the best espresso in town, a quiet corner to study, or a trendy hangout spot. With detailed reviews, photos, and easy search options, finding the perfect café has never been easier. Let us guide you to your next favorite coffee spot!`,
    img: 'lineMap1.jpg',
  },
  {
    title: `Why you shouldn't work at home`,
    text: `Working from home may seem convenient, but it can blur boundaries and hinder productivity. Distractions, isolation, and the lack of a dedicated workspace can take a toll on your focus. Consider stepping out to a café or coworking space for a clearer mind and better work-life balance.`,
    img: 'lineMap2.jpg',
  },
  {
    title: 'Work at a Café Can Change Your Life',
    text: `Switching up your workspace can do wonders for your life. Working at a café offers more than just a caffeine boost—it brings fresh inspiration, new social connections, and a focused environment that can transform your productivity. The vibrant atmosphere and change of scenery can lead to creative breakthroughs and a better work-life balance. Experience how a simple shift in location can change the way you work and live.`,
    img: 'lineMap3.jpg',
  },
]
const { smAndDown } = useDisplay()
</script>

<template>
  <v-container fluid class="position-relative ">
    <div class="vertical-dashed-line" />
    <div class="dashed-line-with-circle" />
    <div class="dashed-line-with-circle-end" />
    <template v-for="item, index in mapData" :key="index">
      <v-row justify="center" align="center" class="main-content" :class="[{ 'flex-row-reverse': (index + 1) % 2 === 0, 'flex-column-reverse': smAndDown }]" no-gutters>
        <v-col cols="12" sm="6" md="4">
          <v-card
            color="transparent"
            flat
            class="mx-auto"
          >
            <v-card-item>
              <div>
                <p class="text-h3 mb-1 text-center font-weight-bold element">
                  {{ item.title }}
                </p>
                <br>
                <div class=" text-grey-darken-2 text-h5" :class="{ 'ps-4': smAndDown }">
                  {{ item.text }}
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-img
            :src="item.img"
          />
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<style scoped>
.element {
            position: relative;
            padding: 10px;
        }
.element::after {
    content: '';
    position: absolute;
    bottom: -10px; /* 调整线条距离元素的垂直距离 */
    left: 50%;
    transform: translateX(-50%);
    width: 20%; /* 调整线条的宽度 */
    height: 6px; /* 调整线条的高度 */
    background-color: orange;
}
.main-content {
    padding-top: 200px;
    min-height: 70vh;
}
@media (min-width: 768px) {

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
}
@media (max-width: 768px) {
    .main-content::after{
        content: ''; /* 伪元素内容为空 */
        position: absolute; /* 绝对定位 */
        left: 20%; /* 根据需要调整位置 */
        top: 110%; /* 圆圈的垂直位置 */
        transform: translate(-50%, -50%);
        width: 10px; /* 圆圈的宽度 */
        height: 10px; /* 圆圈的高度 */
        background-color: white; /* 圆圈的颜色 */
        border-radius: 50%; /* 圆形 */
        border: 1px solid rgba(30,30,30,.3);
        z-index: 100;
    }
    .vertical-dashed-line:after {
        content: '';
        position: absolute;
        left: 5%; /* 将线条放在中间 */
        top: 0;
        bottom: 0;
        border-left: 1px dashed rgb(172, 172, 172); /* 添加虚线 */

    }
    .dashed-line-with-circle:after {
        content: ''; /* 伪元素内容为空 */
        position: absolute; /* 绝对定位 */
        left: 4%; /* 根据需要调整位置 */
        top: 0px; /* 圆圈的垂直位置 */
        width: 10px; /* 圆圈的宽度 */
        height: 10px; /* 圆圈的高度 */
        background-color: white; /* 圆圈的颜色 */
        border-radius: 50%; /* 圆形 */
        border: 1px solid rgba(30,30,30,.3);
        z-index: 0;
    }
    .vertical-dashed-line:before {
        content: ''; /* 伪元素内容为空 */
        position: absolute; /* 绝对定位 */
        left: 4%; /* 根据需要调整位置 */
        top: 73%; /* 圆圈的垂直位置 */
        width: 10px; /* 圆圈的宽度 */
        height: 10px; /* 圆圈的高度 */
        background-color: white; /* 圆圈的颜色 */
        border-radius: 50%; /* 圆形 */
        border: 1px solid rgba(30,30,30,.3);
        z-index: 1000;
    }
    .dashed-line-with-circle:before {
        content: ''; /* 伪元素内容为空 */
        position: absolute; /* 绝对定位 */
        left: 4%; /* 根据需要调整位置 */
        top: 51%; /* 圆圈的垂直位置 */
        width: 10px; /* 圆圈的宽度 */
        height: 10px; /* 圆圈的高度 */
        background-color: white; /* 圆圈的颜色 */
        border-radius: 50%; /* 圆形 */
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
        left: 3%;
        bottom: -10px;
        background-color: #fff;
        border-radius: 50%;
        font-size: 30px;
    }
}
</style>
