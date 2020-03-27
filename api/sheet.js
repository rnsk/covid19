import axios from 'axios'

class SheetApi {
  constructor() {
    this.apiBase = 'https://spreadsheets.google.com/feeds/list';
    this.macroApiBase = 'https://script.googleusercontent.com/macros/echo';
  }
 
  getNewsData() {
    return axios.get(`${this.apiBase}/15CHGPTLs5aqHXq38S1RbrcTtaaOWDDosfLqvey7nh8k/1/public/values?alt=json`)
      .then((res) => {
        const items = []
        const values = Object.values(res.data.feed.entry)
        values.forEach((value) => {
          const item = {
            text: value.gsx$title.$t,
            url: value.gsx$url.$t,
            date: value.gsx$date.$t,
          };
          items.push(item)
        });
        return items;
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
            リリース日: value.gsx$リリース日.$t,
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
          date: values[values.length - 1].gsx$update.$t
        }
        return patients;
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
