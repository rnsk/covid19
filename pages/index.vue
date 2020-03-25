<template>
  <div class="MainPage">
    <page-header :icon="headerItem.icon" :title="headerItem.title" :date="headerItem.date" />
    <whats-new class="mb-4" :items="newsItems" />
    <static-info
      class="mb-4"
      :url="'/flow'"
      :text="'自分や家族の症状に不安や心配があればまずは電話相談をどうぞ'"
      :btn-text="'相談の手順を見る'"
    />
    <v-row class="DataBlock">
      <!-- <v-col cols="12" md="6" class="DataCard">
        <svg-card title="検査陽性者の状況" :title-id="'details-of-confirmed-cases'" :date="headerItem.date">
          <confirmed-cases-table v-bind="confirmedCases" />
        </svg-card>
      </v-col> -->
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          v-if="patients_summary.loaded"
          title="陽性患者数"
          :title-id="'number-of-confirmed-cases'"
          :chart-id="'time-bar-chart-patients'"
          :chart-data="patientsGraph"
          :date="patients_summary.date"
          :unit="'人'"
          :url="
            'https://www.pref.gifu.lg.jp/kinkyu-juyo-joho/shingata_corona.html'
          "
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          v-if="patients.loaded"
          :title="'陽性患者の属性'"
          :title-id="'attributes-of-confirmed-cases'"
          :chart-data="patientsTable"
          :chart-option="{}"
          :date="patients.date"
          :info="sumInfoOfPatients"
          :url="
            'https://www.pref.gifu.lg.jp/kinkyu-juyo-joho/shingata_corona.html'
          "
        />
      </v-col>
      <!-- <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="検査実施数"
          :title-id="'number-of-tested'"
          :chart-id="'time-bar-chart-inspections'"
          :chart-data="inspectionsGraph"
          :date="Data.inspections_summary.date"
          :unit="'件'"
          :url="
            'https://www.pref.gifu.lg.jp/kinkyu-juyo-joho/shingata_corona.data/200312-2.pdf'
          "
        />
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import DataTable from '@/components/DataTable.vue'
import SvgCard from '@/components/SvgCard.vue'
import ConfirmedCasesTable from '@/components/ConfirmedCasesTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import Data from '@/data/data.json'
import sheetApi from '@/api/sheet'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    WhatsNew,
    StaticInfo,
    DataTable,
    SvgCard,
    ConfirmedCasesTable
  },
  created () {
    this.getNews()
    this.getData()
  },
  methods: {
    async getNews () {
      this.newsItems = await sheetApi.news()
    },
    async getData () {
      this.graphData = await sheetApi.graphData()
      this.getPatientsTableData()
      this.getPatientsData()
    },
    getPatientsTableData () {
      this.patientsTable = formatTable(this.graphData.patients.data)
      this.patients.date = this.graphData.patients.date
      this.patients.loaded = true
    },
    getPatientsData () {
      this.patientsGraph = formatGraph(this.graphData.patients_summary.data)
      this.patients_summary.date = this.graphData.patients_summary.date
      this.patients_summary.loaded = true
      this.sumInfoOfPatients = {
        lText: this.patientsGraph[
          this.patientsGraph.length - 1
        ].cumulative.toLocaleString(),
        sText: this.patientsGraph[this.patientsGraph.length - 1].label + 'の累計',
        unit: '人'
      }
    }
  },
  data() {
    // // 退院者グラフ
    // const dischargesGraph = formatGraph(Data.discharges_summary.data)
    // // 検査実施日別状況
    // const inspectionsGraph = formatGraph(Data.inspections_summary.data)
    // // 検査陽性者の状況
    // const confirmedCases = formatConfirmedCases(Data.main_summary)

    const data = {
      patients: {
        loaded: false,
        date: "",
      },
      patients_summary: {
        loaded: false,
        date: "",
      },
      /**
       * 全体の最終更新日
       */
      last_update: "",
      /**
       * 各グラフ系のデータ整理後のデータ
       */
      graphData: {},
      patientsTable: {},
      patientsGraph: [],
      dischargesGraph: [],
      inspectionsGraph: [],
      confirmedCases: [],
      sumInfoOfPatients: {},
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '県内の最新感染動向',
        // date: Data.lastUpdate
      },
      newsItems: [],
      metroGraphOption: {
        responsive: true,
        legend: {
          display: true
        },
        scales: {
          xAxes: [
            {
              position: 'bottom',
              stacked: false,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 10,
                maxTicksLimit: 20,
                fontColor: '#808080'
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#808080',
                callback(value) {
                  return value.toFixed(2) + '%'
                }
              }
            }
          ]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title(tooltipItems, _) {
              const label = tooltipItems[0].label
              return `期間: ${label}`
            },
            label(tooltipItem, data) {
              const currentData = data.datasets[tooltipItem.datasetIndex]
              const percentage = `${currentData.data[tooltipItem.index]}%`

              return `${metroGraph.base_period}の利用者数との相対値: ${percentage}`
            }
          }
        }
      }
    }
    return data
  },
  head() {
    return {
      title: '県内の最新感染動向'
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
