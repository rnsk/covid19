import axios from 'axios'
import dayjs from 'dayjs'

class SheetApi {
  constructor() {
    this.apiBase = 'https://spreadsheets.google.com/feeds/list';
    this.macroApiBase = 'https://script.googleusercontent.com/macros/echo';
  }

  getNewsData() {
    return axios.get(`${this.apiBase}/15CHGPTLs5aqHXq38S1RbrcTtaaOWDDosfLqvey7nh8k/1/public/values?alt=json`)
      .then((res) => {
        let num = 2
        const items = []
        const values = Object.values(res.data.feed.entry)
        for (let i = 0; i < num; i++) {
          const item = {
            text: values[i].gsx$title.$t,
            url: values[i].gsx$url.$t,
            date: values[i].gsx$date.$t,
          };
          items.push(item)
        }
        return items;
      })
      .catch(e => ({ error: e }));
  }

  graphMainSummary() {
    return axios.get(`${this.apiBase}/15CHGPTLs5aqHXq38S1RbrcTtaaOWDDosfLqvey7nh8k/2/public/values?alt=json`)
      .then((res) => {
        const data = res.data.feed.entry[0]
        const main_summary = {
          data: {
            attr: '検査実施件数',
            value: Number(data.gsx$検査実施件数.$t),
            children: [
              {
                attr: '陽性患者数',
                value: Number(data.gsx$陽性患者数.$t),
                children: [
                  {
                    attr: '入院中・入院調整中',
                    value: Number(data.gsx$入院中入院調整中.$t),
                    children: [
                      {
                        attr: '軽症・中等症',
                        value: Number(data.gsx$軽症中等症.$t),
                      },
                      {
                        attr: '重症',
                        value: Number(data.gsx$重症.$t),
                      }
                    ]
                  },
                  {
                    attr: '退院',
                    value: Number(data.gsx$退院.$t),
                  },
                  {
                    attr: '死亡',
                    value: Number(data.gsx$死亡.$t),
                  }
                ]
              }
            ]
          },
          last_update: data.gsx$lastupdate.$t,
        }
        return main_summary;
      })
      .catch(e => ({ error: e }));
  }

  getPatients() {
    return axios.get(`${this.apiBase}/15CHGPTLs5aqHXq38S1RbrcTtaaOWDDosfLqvey7nh8k/3/public/values?alt=json`)
      .then((res) => {
        const items = []
        const values = Object.values(res.data.feed.entry)
        values.forEach((value) => {
          const item = {
            リリース日: dayjs(value.gsx$リリース日.$t, 'YYYY/MM/DD').format() ?? '不明',
            曜日: value.gsx$曜日.$t,
            居住地: value.gsx$居住地.$t,
            年代: value.gsx$年代.$t,
            性別: value.gsx$性別.$t,
            備考: value.gsx$備考.$t,
            退院: value.gsx$退院.$t,
          }
          items.push(item)
        });
        const patients = {
          data: items,
          last_update: values[values.length - 1].gsx$updated.$t,
          date: dayjs(values[values.length - 1].gsx$updated.$t).format('YYYY/MM/DD')
        }
        return patients;
      })
      .catch(e => ({ error: e }));
  }

  getPatientsSummary() {
    return axios.get(`${this.apiBase}/15CHGPTLs5aqHXq38S1RbrcTtaaOWDDosfLqvey7nh8k/4/public/values?alt=json`)
      .then((res) => {
        const items = []
        const values = Object.values(res.data.feed.entry)
        values.forEach((value) => {
          const item = {
            日付: dayjs(value.gsx$日付.$t, 'YYYY/MM/DD').format() ?? '不明',
            小計: Number(value.gsx$小計.$t),
          }
          items.push(item)
        });
        const inspections_summary = {
          data: items,
          last_update: values[values.length - 1].gsx$updated.$t
        }
        return inspections_summary;
      })
      .catch(e => ({ error: e }));
  }

  getInspectionsSummary() {
    return axios.get(`${this.apiBase}/15CHGPTLs5aqHXq38S1RbrcTtaaOWDDosfLqvey7nh8k/5/public/values?alt=json`)
      .then((res) => {
        const items = []
        const values = Object.values(res.data.feed.entry)
        values.forEach((value) => {
          const item = {
            日付: dayjs(value.gsx$日付.$t, 'YYYY/MM/DD').format() ?? '不明',
            小計: Number(value.gsx$実施件数.$t),
          }
          items.push(item)
        });
        const inspections_summary = {
          data: items,
          last_update: values[values.length - 1].gsx$updated.$t
        }
        return inspections_summary;
      })
      .catch(e => ({ error: e }));
  }

  getMunicipalityLink() {
    return axios.get(`${this.apiBase}/1Dm9dsei-QXmilRN9V7IVmgnZuC8aRsFQE5RPR0-L7bI/1/public/values?alt=json`)
      .then((res) => {
        const items = []
        const values = Object.values(res.data.feed.entry)
        values.forEach((value) => {
          const item = {
            自治体名: value.gsx$自治体名.$t,
            庁舎所在地: value.gsx$庁舎所在地.$t,
            ふりがな: value.gsx$ふりがな.$t,
            対策ページ名称: value.gsx$対策ページ名称.$t,
            リンク: value.gsx$リンク.$t,
            電話番号: value.gsx$電話番号.$t
          }
          items.push(item)
        });
        const links = {
          data: items
        }
        return links;
      })
      .catch(e => ({ error: e }));
  }

  /**
   * 岐阜県相談窓口一覧情報の取得
   */
  getConsultations() {
    return axios.get(`${this.apiBase}/10b0NTVctq3jjSvaA6-Vc-dQJYt5FFEP292MLzkCdazs/1/public/values?alt=json`)
      .then((res) => {
        const items = []
        const values = Object.values(res.data.feed.entry)
        values.forEach((value) => {
          const item = {
            id:items.length,
            consultation: value.gsx$consultation.$t,
            name: value.gsx$name.$t,
            tel1: value.gsx$tel1.$t,
            tel2: value.gsx$tel2.$t,
            ontime: value.gsx$ontime.$t,
            addr: value.gsx$addr.$t,
            locname: value.gsx$locname.$t,
            lon: value.gsx$lon.$t,
            lat: value.gsx$lat.$t,
            classification: value.gsx$classification.$t,
            color: value.gsx$color.$t
          }
          items.push(item)
        });
        const links = {
          data: items
        }
        return links;
      })
      .catch(e => ({ error: e }));
  }

  graphData() {
    return axios.get(`${this.macroApiBase}?user_content_key=lttTvfv73JB1_0b3dWmanW_0P9DGkUcm-AfsaNdLi66LA3jZN-2LxoI61hsD1XcvX7wjJPbA-aQMU8fYuYzu_il2z3j02F4um5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnP9k53dGa_9bOh55uXRyK3KuHQRrFP7y3JXXDLFBzyALBHA50y4X5nQTHbX7VSKaSRdIug5zkO6q&lib=MkDaaQ5v_1yAZBU3X6zh8HTFkUrmYniUZ`)
      .then((res) => {
        return res.data;
      })
      .catch(e => ({ error: e }));
  }
}

const sheetApi = new SheetApi();

export default sheetApi;
