<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import data from '@/data.json'

const headers = reactive([
  {
    title: '店名',
    align: 'start',
    key: 'name',
    width: '30%',
  },
  {
    title: '捷運站',
    align: 'center',
    key: 'mrt',
    width: '30%',
  },
  {
    title: '地圖 / 官網',
    align: 'center',
    key: 'actions',
    width: '40%',
  },
] as const)

const $router = useRouter()
function goMap(data: any) {
  $router.push({
    path: '/map',
    query: data,
  })
}

const mrtList = [
  '動物園',
  '木柵',
  '萬芳社區',
  '萬芳醫院',
  '辛亥',
  '麟光',
  '六張犁',
  '科技大樓',
  '大安',
  '忠孝復興',
  '南京復興',
  '中山國中',
  '松山機場',
  '大直',
  '劍南路',
  '西湖',
  '港墘',
  '文德',
  '內湖',
  '大湖公園',
  '葫洲',
  '東湖',
  '南港軟體園區',
  '南港展覽館',
  '象山',
  '世貿',
  '信義安和',
  '大安',
  '大安森林公園',
  '東門',
  '中正紀念堂',
  '台大醫院',
  '台北車站',
  '中山',
  '雙連',
  '民權西路',
  '圓山',
  '劍潭',
  '士林',
  '芝山',
  '明德',
  '石牌',
  '唭哩岸',
  '奇岩',
  '北投',
  '新北投',
  '復興崗',
  '忠義',
  '關渡',
  '竹圍',
  '紅樹林',
  '淡水',
  '新店',
  '新店區公所',
  '七張',
  '小碧潭',
  '大坪林',
  '景美',
  '萬隆',
  '公館',
  '台電大樓',
  '古亭',
  '小南門',
  '西門',
  '北門',
  '松江南京',
  '台北小巨蛋',
  '南京三民',
  '松山',
  '南勢角',
  '景安',
  '永安市場',
  '頂溪',
  '忠孝新生',
  '行天宮',
  '中山國小',
  '大橋頭',
  '台北橋',
  '菜寮',
  '三重',
  '先嗇宮',
  '頭前庄',
  '新莊',
  '輔大',
  '丹鳳',
  '迴龍',
  '三重國小',
  '三和國中',
  '徐匯中學',
  '三民高中',
  '蘆洲',
  '頂埔',
  '永寧',
  '土城',
  '海山',
  '亞東醫院',
  '府中',
  '板橋',
  '新埔',
  '江子翠',
  '龍山寺',
  '善導寺',
  '忠孝敦化',
  '國父紀念館',
  '市政府',
  '永春',
  '後山埤',
  '昆陽',
  '南港',
  '十四張',
  '秀朗橋',
  '景平',
  '中和',
  '橋和',
  '中原',
  '板新',
  '新埔民生',
  '幸福',
  '新北產業園區',
]

const condition = ref('雙連')
const coffeeList = computed(() => {
  return data.filter((item) => {
    return item.mrt.includes(condition.value)
  })
})
</script>

<template>
  <v-container fluid class="pa-6">
    <v-card elevation="2" class="pa-4">
      <v-card-title class="text-h4 mb-4">台北咖啡廳列表</v-card-title>
      <v-autocomplete
        v-model="condition"
        label="選擇捷運站"
        :items="mrtList"
        outlined
        dense
        clearable
        auto-select-first
        hide-no-data
        hide-details
        class="mb-4"
      >
        <template #prepend-inner>
          <v-icon>mdi-subway-variant</v-icon>
        </template>
      </v-autocomplete>
      <v-data-table
        :headers="headers"
        :items="coffeeList"
        :items-per-page="10"
        class="elevation-1"
      >
        <template #header.mrt="{ header }">
          <div class="w-100 bg-blue"></div>
        </template>
        <template #[`item.name`]="{ item }">
          <p class="font-weight-bold">
            {{ item.name }}
          </p>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-btn color="secondary" small outlined class="mr-sm-2 mr-xs-0" @click="goMap(item)">
            <v-icon left small>
              mdi-map-marker
            </v-icon>
            地圖
          </v-btn>
          <v-btn v-if="item.url" color="primary" small outlined :href="item.url" target="_blank">
            <v-icon left small>
              mdi-web
            </v-icon>
            官網
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-data-table {
  border-radius: 8px;
}
</style>
