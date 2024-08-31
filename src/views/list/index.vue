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

const lineColors = {
  red: '#e3012c',
  blue: '#0070bd',
  green: '#008659',
  orange: '#f8b61c',
  brown: '#c48c32',
  yellow: '#fcda03',
}

const lineNames = {
  red: '淡水信義線',
  blue: '板南線',
  green: '松山新店線',
  orange: '中和新蘆線',
  brown: '文湖線',
  yellow: '環狀線',
}

const mrtList = [
  { line: 'brown', name: '動物園' },
  { line: 'brown', name: '木柵' },
  { line: 'brown', name: '萬芳社區' },
  { line: 'brown', name: '萬芳醫院' },
  { line: 'brown', name: '辛亥' },
  { line: 'brown', name: '麟光' },
  { line: 'brown', name: '六張犁' },
  { line: 'brown', name: '科技大樓' },
  { line: ['brown', 'red'], name: '大安' },
  { line: ['blue', 'brown'], name: '忠孝復興' },
  { line: ['green', 'brown'], name: '南京復興' },
  { line: 'brown', name: '中山國中' },
  { line: 'brown', name: '松山機場' },
  { line: 'brown', name: '大直' },
  { line: 'brown', name: '劍南路' },
  { line: 'brown', name: '西湖' },
  { line: 'brown', name: '港墘' },
  { line: 'brown', name: '文德' },
  { line: 'brown', name: '內湖' },
  { line: 'brown', name: '大湖公園' },
  { line: 'brown', name: '葫洲' },
  { line: 'brown', name: '東湖' },
  { line: 'brown', name: '南港軟體園區' },
  { line: ['blue', 'brown'], name: '南港展覽館' },
  { line: 'brown', name: '象山' },
  { line: 'red', name: '世貿' },
  { line: 'red', name: '信義安和' },
  { line: 'red', name: '大安森林公園' },
  { line: 'red', name: '東門' },
  { line: 'red', name: '中正紀念堂' },
  { line: 'red', name: '台大醫院' },
  { line: ['blue', 'red'], name: '台北車站' },
  { line: ['green', 'red'], name: '中山' },
  { line: 'red', name: '雙連' },
  { line: 'red', name: '民權西路' },
  { line: 'red', name: '圓山' },
  { line: 'red', name: '劍潭' },
  { line: 'red', name: '士林' },
  { line: 'red', name: '芝山' },
  { line: 'red', name: '明德' },
  { line: 'red', name: '石牌' },
  { line: 'red', name: '唭哩岸' },
  { line: 'red', name: '奇岩' },
  { line: 'red', name: '北投' },
  { line: 'red', name: '新北投' },
  { line: 'red', name: '復興崗' },
  { line: 'red', name: '忠義' },
  { line: 'red', name: '關渡' },
  { line: 'red', name: '竹圍' },
  { line: 'red', name: '紅樹林' },
  { line: 'red', name: '淡水' },
  { line: 'green', name: '新店' },
  { line: 'green', name: '新店區公所' },
  { line: 'green', name: '七張' },
  { line: 'green', name: '小碧潭' },
  { line: 'green', name: '大坪林' },
  { line: 'green', name: '景美' },
  { line: 'green', name: '萬隆' },
  { line: 'green', name: '公館' },
  { line: 'green', name: '台電大樓' },
  { line: ['green', 'orange'], name: '古亭' },
  { line: 'green', name: '小南門' },
  { line: ['green', 'blue'], name: '西門' },
  { line: 'blue', name: '北門' },
  { line: 'green', name: '松江南京' },
  { line: 'green', name: '台北小巨蛋' },
  { line: 'green', name: '南京三民' },
  { line: 'green', name: '松山' },
  { line: 'orange', name: '南勢角' },
  { line: 'orange', name: '景安' },
  { line: 'orange', name: '永安市場' },
  { line: 'orange', name: '頂溪' },
  { line: ['blue', 'orange'], name: '忠孝新生' },
  { line: 'orange', name: '行天宮' },
  { line: 'orange', name: '中山國小' },
  { line: 'orange', name: '大橋頭' },
  { line: 'orange', name: '台北橋' },
  { line: 'orange', name: '菜寮' },
  { line: 'orange', name: '三重' },
  { line: 'orange', name: '先嗇宮' },
  { line: 'orange', name: '頭前庄' },
  { line: 'orange', name: '新莊' },
  { line: 'orange', name: '輔大' },
  { line: 'orange', name: '丹鳳' },
  { line: 'orange', name: '迴龍' },
  { line: 'orange', name: '三重國小' },
  { line: 'orange', name: '三和國中' },
  { line: 'orange', name: '徐匯中學' },
  { line: 'orange', name: '三民高中' },
  { line: 'orange', name: '蘆洲' },
  { line: 'blue', name: '頂埔' },
  { line: 'blue', name: '永寧' },
  { line: 'blue', name: '土城' },
  { line: 'blue', name: '海山' },
  { line: 'blue', name: '亞東醫院' },
  { line: 'blue', name: '府中' },
  { line: 'blue', name: '板橋' },
  { line: 'blue', name: '新埔' },
  { line: 'blue', name: '江子翠' },
  { line: 'blue', name: '龍山寺' },
  { line: 'blue', name: '善導寺' },
  { line: 'blue', name: '忠孝敦化' },
  { line: 'blue', name: '國父紀念館' },
  { line: 'blue', name: '市政府' },
  { line: 'blue', name: '永春' },
  { line: 'blue', name: '後山埤' },
  { line: 'blue', name: '昆陽' },
  { line: 'blue', name: '南港' },
  { line: 'yellow', name: '十四張' },
  { line: 'yellow', name: '秀朗橋' },
  { line: 'yellow', name: '景平' },
  { line: 'yellow', name: '中和' },
  { line: 'yellow', name: '橋和' },
  { line: 'yellow', name: '中原' },
  { line: 'yellow', name: '板新' },
  { line: 'yellow', name: '新埔民生' },
  { line: 'yellow', name: '幸福' },
  { line: 'yellow', name: '新北產業園區' },
]

const selectedStations = ref(['雙連'])
const coffeeList = computed(() => {
  return data.filter((item) => {
    return selectedStations.value.some(station => item.mrt.includes(station))
  })
})
</script>

<template>
  <v-container fluid class="pa-6">
    <v-card elevation="2" class="pa-4">
      <v-card-title class="text-h4 mb-4">
        台北咖啡廳列表
      </v-card-title>
      <v-autocomplete
        v-model="selectedStations"
        label="選擇捷運站"
        :items="mrtList"
        :item-title="item => item.name"
        :item-value="item => item.name"
        variant="outlined"
        density="compact"
        multiple
        chips
        clearable
        auto-select-first
        hide-no-data
        hide-details
        class="mb-4"
      >
        <template #prepend-inner>
          <v-icon>mdi-subway-variant</v-icon>
        </template>
        <template #item="{ item, props }">
          <v-list-item v-bind="props">
            <template #prepend>
              <template v-if="Array.isArray(item.raw.line)">
                <v-icon v-for="line in item.raw.line" :key="line" :color="lineColors[line as keyof typeof lineColors]" class="mr-1" size="small">
                  mdi-circle
                </v-icon>
              </template>
              <template v-else>
                <v-icon :color="lineColors[item.raw.line as keyof typeof lineColors]" class="mr-2" size="large">
                  mdi-circle
                </v-icon>
              </template>
            </template>
            <template #title>
              <span>{{ item.raw.name }}</span>
            </template>
            <template #subtitle>
              <span v-if="Array.isArray(item.raw.line)">
                {{ item.raw.line.map((l: string) => lineNames[l as keyof typeof lineNames]).join(' / ') }}
              </span>
              <span v-else>
                {{ lineNames[item.raw.line as keyof typeof lineNames] }}
              </span>
            </template>
          </v-list-item>
        </template>
      </v-autocomplete>
      <v-data-table
        :headers="headers"
        :items="coffeeList"
        :items-per-page="10"
        class="elevation-1"
      >
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
