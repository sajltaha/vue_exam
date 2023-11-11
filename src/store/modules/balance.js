const name = "BALANCE";
const namespaced = true;
const state = {
  income: 0,
  outcome: 0,
  balance: 0,
  limit: 50000,
};
const getters = {
  STATE: (state) => state,
};
const mutations = {
  SET_DIFFERENCE: (state) => {
    state.balance = state.income - state.outcome;
  },
  SET_INCOME: (state, data) => {
    state.income = state.income + parseInt(data);
  },
  SET_OUTCOME: (state, data) => {
    state.outcome = state.outcome + parseInt(data);
  },
};
const actions = {
  SET_BALANCE: ({ commit }) => {
    commit("SET_DIFFERENCE");
  },
  SET_INCOME: ({ commit }, payload) => {
    commit("SET_INCOME", payload);
    commit("SET_DIFFERENCE");
  },
  SET_OUTCOME: ({ commit }, payload) => {
    commit("SET_OUTCOME", payload);
    commit("SET_DIFFERENCE");
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
