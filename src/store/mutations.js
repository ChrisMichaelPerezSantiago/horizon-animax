const types = require('./types');

export const mutations = {
  [types.SET_LATEST_ANIME](state, payload) {
    state.latestAnimes = payload;
  },
  [types.IS_LOADING](state, payload) {
    state.isLoading = payload;
  }
};