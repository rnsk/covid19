<template>
  <div class="MainPage">
    <page-header :icon="headerItem.icon" :title="headerItem.title" :date="headerItem.date" />
    <whats-new :items="newsItems" />
    <static-button
      :url="'/flow'"
      :text="'相談の手順を確認する'"
    />
    <v-row class="DataBlock">
      <v-col cols="12" md="6" class="DataCard">
        <svg-card title="検査陽性者の状況" :title-id="'details-of-confirmed-cases'" :date="confirmed.last_update">
          <pulse-loader v-if="!confirmed.loaded" :loading="!confirmed.loaded" color="#808080" />
          <confirmed-cases-table v-else v-bind="confirmedCases" />
        </svg-card>
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :loaded="patients_summary.loaded"
          title="陽性患者数"
          :title-id="'number-of-confirmed-cases'"
          :chart-id="'time-bar-chart-patients'"
          :chart-data="patientsGraph"
          :date="patients_summary.last_update"
          :unit="'人'"
          :url="
            'https://www.pref.gifu.lg.jp/kinkyu-juyo-joho/shingata_corona.html'
          "
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          :loaded="patients.loaded"
          :title="'陽性患者の属性'"
          :title-id="'attributes-of-confirmed-cases'"
          :chart-data="patientsTable"
          :chart-option="{}"
          :date="patients.last_update"
          :info="sumInfoOfPatients"
          :url="
            'https://www.pref.gifu.lg.jp/kinkyu-juyo-joho/shingata_corona.html'
          "
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :loaded="inspections.loaded"
          title="検査実施数"
          :title-id="'number-of-tested'"
          :chart-id="'time-bar-chart-inspections'"
          :chart-data="inspectionsGraph"
          :date="inspections.last_update"
          :unit="'件'"
          :info="'注：3/24登録のデータは3/12-3/24までの累計です'"
          :url="
            'https://www.pref.gifu.lg.jp/kinkyu-juyo-joho/shingata_corona.data/200312-2.pdf'
          "
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticButton from '@/components/StaticButton.vue'
import DataTable from '@/components/DataTable.vue'
import SvgCard from '@/components/SvgCard.vue'
import ConfirmedCasesTable from '@/components/ConfirmedCasesTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import sheetApi from '@/api/sheet'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    WhatsNew,
    StaticButton,
    DataTable,
    SvgCard,
    ConfirmedCasesTable,
    PulseLoader
  },
  created () {
    this.getNews()
    this.getData()
  },
  methods: {
    async getNews () {
      this.newsItems = await sheetApi.getNewsData()
    },
    async getData () {
      await sheetApi.graphMainSummary().then(response => {
        this.getConfirmedData(response)
        this.headerItem.date = response.last_update
      })
      await sheetApi.getPatientsSummary().then(response => {
        this.getPatientsData(response)
      })
      await sheetApi.getPatients().then(response => {
        this.getPatientsTableData(response)
      })
      await sheetApi.getInspectionsSummary().then(response => {
        this.getInspectionsData(response)
      })
    },
    getPatientsTableData (patients) {
      this.patientsTable = formatTable(patients.data)
      this.patients.last_update = patients.last_update
      this.patients.loaded = true
      this.sumInfoOfPatients = {
        lText: patients.data.length,
        sText: patients.date + 'の累計',
        unit: '人'
      }
    },
    getPatientsData (patients_summary) {
      this.patientsGraph = formatGraph(patients_summary.data)
      this.patients_summary.last_update = patients_summary.last_update
      this.patients_summary.loaded = true
    },
    getInspectionsData (inspections_summary) {
      this.inspectionsGraph = formatGraph(inspections_summary.data)
      this.inspections.last_update = inspections_summary.last_update
      this.inspections.loaded = true
    },
    getConfirmedData (main_summary) {
      this.confirmedCases = formatConfirmedCases(main_summary.data)
      this.confirmed.last_update = main_summary.last_update
      this.confirmed.loaded = true
    },
  },
  data() {
    const data = {
      patients: {
        loaded: false,
        last_update: "",
      },
      patients_summary: {
        loaded: false,
        last_update: "",
      },
      inspections: {
        loaded: false,
        last_update: "",
      },
      confirmed: {
        loaded: false,
        last_update: "",
      },
      /**
       * 全体の最終更新日
       */
      last_update: "",
      /**
       * 各グラフ系のデータ整理後のデータ
       */
      patientsTable: {},
      patientsGraph: [],
      inspectionsGraph: [],
      confirmedCases: {},
      sumInfoOfPatients: {},
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '県内の最新感染動向',
        date: ''
      },
      newsItems: [],
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
