const types = require('./types');

export const mutations = {
  initialiseStore(state) {
    // Check if the ID exists
    if(localStorage.getItem('store')) {
      // Replace the state object with the stored item
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store')))
      );
    }
  },
  [types.SET_LATEST_ANIME](state, payload) {
    state.latestAnimes = payload;
  },
  [types.SET_VIDEO_ANIME](state , payload){
    state.videos = payload;
  },
  [types.SET_ANIME_LETTER](state , payload){
    state.animesByLetter = payload;
  },
  [types.IS_LOADING](state, payload) {
    state.isLoading = payload;
  }
};