const axios = require('axios');
const types = require('./types');
const PATH = require('./urls');

const pagin = require('../js/paginator.js');

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
  GET_LETTER_ANIME({commit} , doc){
    const letter = doc.letter;
    const page = doc.page;
    axios.get(`${PATH.LETTER}/${letter}/${page}`)
      .then(doc =>{
        console.log("doc: ", doc);
        const animes = doc.data.animes;
        const dataPaginated = pagin.paginator(animes , page , 12)
        commit(types.SET_ANIME_LETTER , dataPaginated);
        setTimeout(() => {
          commit(types.IS_LOADING , false);
        } , 1000);
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
  },
  GET_ANIME_SEARCH({commit} , query){
    axios.get(`${PATH.SEARCH}/${query}`)
      .then(doc =>{
        const animes = doc.data.animes;
        commit(types.SET_ANIME_SEARCH , animes);
        setTimeout(() => {
          commit(types.IS_LOADING , false);
        } , 1000);
      }).catch(err =>{
        console.log(err);
      });
  }
};