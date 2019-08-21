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
  },
  GET_ANIME_VIDEO({commit} , doc){
    const id = doc.id;
    const eps = doc.eps;
    console.log(id , ' ' , eps);
    axios.get(`${PATH.VIDEO}/${id}/${eps}`)
      .then(doc =>{
        console.log(doc.data);
        commit(types.SET_VIDEO_ANIME , doc.data);
        setTimeout(() => {
          commit(types.IS_LOADING , false);
        }, 1000);
      }).catch(err =>{
        console.log(err);
      });
  }
};