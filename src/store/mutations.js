const types = require('./types');

export const mutations = {
  [types.SET_LATEST_ANIME](state, payload) {
    state.latestAnimes = payload;
  },
  [types.SET_VIDEO_ANIME](state , payload){
    state.videos = payload;
  },
  [types.IS_LOADING](state, payload) {
    state.isLoading = payload;
  }
};