import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  items: [],
  currentItem: null
}

const mutations = {
  GET_ITEMS(state, payload) {
    state.items = payload;
  },
  SET_ITEM(state, payload) {
    state.currentItem = payload;
  }
}

const actions = {
  getItems({
    commit
  }) {
    axios.get('/data.json').then((response) => {
      commit('GET_ITEMS', response.data)
    });
  },

  setItem(context, payload) {
    context.commit('SET_ITEM', payload)
  }
}

const getters = {
  items: state => state.items,
  currentItem: state => state.currentItem,
  //modalItem: state => id => state.items.find(item => item.id === id)
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;