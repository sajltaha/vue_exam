const name = "CATEGORIES";
const namespaced = true;
const state = {
  allCategories: [
    { name: "SHOPPING", expense: 0 },
    { name: "FOOD PRODUCTS", expense: 0 },
    { name: "MEDICAL SERVICE AND MEDICINES", expense: 0 },
    { name: "HOME APPLIANCE", expense: 0 },
  ],
};
const getters = {
  STATE: (state) => state,
};
const mutations = {
  PUSH_CATEGORY: (state, data) => {
    let check = state.allCategories.filter((option) => {
      if (option.name == data.toUpperCase()) {
        return data;
      }
    });
    if (check.length === 0) {
      state.allCategories = [
        ...state.allCategories,
        {
          name: data.toUpperCase(),
          expense: 0,
        },
      ];
    } else {
      alert("Already have!");
    }
  },
  SET_EXPENSE: (state, data) => {
    state.allCategories.map((category) => {
      if (category.name === data.name) {
        return (category.expense = category.expense + parseInt(data.expense));
      }
      return;
    });
  },
  DELETE_CATEGORY_EXPENSE: (state, data) => {
    state.allCategories.map((category) => {
      if (category.name === data.name) {
        return (category.expense = category.expense - parseInt(data.expense));
      }
      return;
    });
  },
};
const actions = {
  // GET_CATEGORIES: ({ commit }) => {
  //   const categories = JSON.parse(localStorage.getItem("categories")) || [];
  //   commit("SET_CATEGORIES", categories);
  // },
  CREATE_CATEGORY: ({ commit }, payload) => {
    commit("PUSH_CATEGORY", payload);
  },
  CHANGE_CATEGORY: ({ commit }, payload) => {
    commit("SET_EXPENSE", payload);
  },
  DELETE_CATEGORY_EXPENSE: ({ commit }, payload) => {
    commit("DELETE_CATEGORY_EXPENSE", payload);
  },
};
export default {
  name,
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
