export const state = () => ({
  news_list: {}
})

export const mutations = {
  news_list_update(state, payload) {
    state.news_list = {...payload}
  },
}
