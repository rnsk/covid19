<template>

  <div class="Consultations">
    <page-header :icon="'mdi-phone'" :title="$t('岐阜県コロナ相談窓口一覧')" />

    <v-container fluid>
      <v-card class="consultations-card">
        <v-card-title>
          <v-select
              v-model="search"
              clearable
              solo
              hide-details
              :items="cons"
              :label="$t('相談の内容を選択してください')"
            ></v-select>
        </v-card-title>
        <v-data-iterator
          :items="chartData.datasets"
          :search="search"
          :no-data-text="$t('No data available')"
          :no-results-text="$t('No matching records found')"
          :items-per-page.sync="itemsPerPage"
          :page="page"
          disable-sort
          :footer-props="{
            showFirstLastPage: true
          }"
        >
          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items" :key="item.id"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <v-card>
                  <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <p>{{ item.consultation }}</p>
                      <v-list-item-title>
                        <v-btn outlined block color="primary" :href="'tel:'+item.tel1">　
                          <v-icon>mdi-phone</v-icon>
                          <div class="phone">{{ item.tel1 }}</div>
                        </v-btn>
                      </v-list-item-title>
                      <v-list-item-subtitle>{{ item.tel2 }}</v-list-item-subtitle>
                      {{ item.ontime }}
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </template>
 
        </v-data-iterator>
      </v-card>
    </v-container>
  </div>

</template>

<script>
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
      await sheetApi.getConsultations().then(response => {
        this.getLinkData(response)
      })
    },
    getLinkData (response) {
      this.chartData.datasets = response.data;
      for (let i=0; i<this.chartData.datasets.length;i++) {
        let item = this.chartData.datasets[i];
        this.cons.push(item.consultation);
      }
    },
  },
  data() {
    const data = {
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 12,
      chartData: {
        headers: [],
        datasets: []
      },
      cons:[]
    }
    return data
  },
  head() {
    return {
      title: this.$t('岐阜県コロナ相談窓口一覧')
    }
  }
}
</script>
<style lang="scss">
.Consultations {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
th,
.v-data-table__mobile-row__header {
  white-space: nowrap;
}
.consultations-card {
  padding: 8px
}
.phone {
  margin-top: 3px;
  margin-bottom: 3px;
  font-size:13pt;
}
</style>
