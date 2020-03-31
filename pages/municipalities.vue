<template>
  <div class="Municipalities">
    <page-header :icon="'mdi-city'" :title="$t('岐阜県自治体コロナ対策情報一覧')" />
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          :label="$t('Search')"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="chartData.headers"
        :items="chartData.datasets"
        :mobile-breakpoint="0"
        :search="search"
        :no-data-text="$t('No data available')"
        :no-results-text="$t('No matching records found')"
        disable-pagination
        hide-default-footer
      >
        <template v-slot:item.対策ページ名称="{ item }">
          <a :href="item.リンク">{{ item.対策ページ名称 }}</a>
          <v-icon size="12">
            mdi-open-in-new
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import sheetApi from '@/api/sheet'

export default {
  components: {
    PageHeader
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      await sheetApi.getMunicipalityLink().then(response => {
        this.getLinkData(response)
      })
    },
    getLinkData (response) {
      this.chartData.datasets = response.data
    },
  },
  data() {
    const data = {
      search: '',
      chartData: {
        headers: [
          { text: this.$t('自治体名'), value: '自治体名', sortable: false },
          { text: this.$t('ふりがな'), value: 'ふりがな' },
          { text: this.$t('庁舎所在地'), value: '庁舎所在地', sortable: false },
          { text: this.$t('対策ページ'), value: '対策ページ名称', sortable: false, filterable: false },
        ],
        datasets: []
      },
    }
    return data
  },
  head() {
    return {
      title: this.$t('岐阜県自治体コロナ対策情報一覧')
    }
  }
}
</script>
<style lang="scss">
.Municipalities {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>
