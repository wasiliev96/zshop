import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saleItems: [],
    currentItemId: 1,
    cart: {
      items: [],
      value: 0
    }
  },
  mutations: {
    updatePosts(state, data) {
      state.saleItems = data;
    },
    addToCart(state, item) {
      if (state.cart.itemsId.includes(item.id)) {
        state.cart.itemsId.push(item.id);
      }
    },
    removeFromCart(state, item) {
      const index = state.cart.itemsId.indexOf(item.id);
      if (index > -1) {
        state.cart.itemsId.splice(index, 1);
      }
    },
    setCurrentItem(state, item) {
      state.currentItemId = +item.id;
      console.log("setted");
    }
  },
  getters: {
    currentItemId(state) {
      return state.currentItemId;
    }
  },
  actions: {
    loadData({ commit }) {
      axios
        .get("http://localhost:1337/sale-items")
        .then(response => {
          commit("updatePosts", response.data);
        })
        .catch(error => console.log(error));
    }
  },
  modules: {}
});
