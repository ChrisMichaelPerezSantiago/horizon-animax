const axios = require('axios');
const types = require('./types');
const PATH = require('./urls');

export const actions = {
  GET_LATEST_ANIME({commit}){
    axios.get(`${PATH.LATEST}`)
      .then(doc =>{
        let animes = doc.data.animes;
        commit(types.SET_LATEST_ANIME , animes);
        setTimeout(() => {
          commit(types.IS_LOADING , false)
        }, 1000);
      }).catch(err =>{
        console.log(err);
      });
  }
};