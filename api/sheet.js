import axios from 'axios'
 
class SheetApi {
    constructor() {
        this.apiBase = 'https://spreadsheets.google.com/feeds/list';
    }
 
    news() {
        return axios.get(`${this.apiBase}/1O5hfDv0hmbMQtq8T4102HPkEUs24NQKp6Ps0Y4IVpHI/od6/public/values?alt=json`)
            .then(json => {
                return json.data.feed.entry;
            })
            .catch(e => ({ error: e }));
    }
}
 
const sheetApi = new SheetApi();
 
export default sheetApi;
