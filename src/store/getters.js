const _ = require('lodash');

export const getters = {
  FILTER_ANIME_SEARCHED: (state) => (query) =>{
    return _.map(state.data , (data) =>{
      return data.title.includes(query);
    });
  }
};