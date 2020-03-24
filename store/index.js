import Vuex from 'vuex'
 
const appStore = () => {
    return new Vuex.Store({
        state: {
            newsItems: {},
        },
        mutations: {
            news_list_update(state, payload) {
                state.newsItems = {...payload}
            },
        }
    })
};
 
export default appStore;
