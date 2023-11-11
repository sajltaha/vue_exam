const name = "RECORDS";
const namespaced = true;
const state = {
  profits: [],
  expenses: [],
  maxProfit: 0,
  maxExpense: 0,
  totalProfit: 0,
  totalExpense: 0,
};
const getters = {
  STATE: (s) => s,
};
const mutations = {
  SET_PROFITS: (state, data) => {
    let ID = new Date().valueOf();

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    const withHyphens = [day, month, year].join(".");

    state.profits = [
      ...state.profits,
      {
        message: data.message,
        sum: data.sum,
        id: ID,
        date: withHyphens,
      },
    ];
  },
  SET_EXPENSES: (state, data) => {
    let ID = new Date().valueOf();

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    const withHyphens = [day, month, year].join(".");

    state.expenses = [
      ...state.expenses,
      {
        message: data.message,
        sum: data.sum,
        category: data.category,
        id: ID,
        date: withHyphens,
      },
    ];
  },
  SET_MAX_PROFIT: (state) => {
    let arr = state.profits.sort((a, b) => b.sum - a.sum);
    state.maxProfit = arr[0].sum;
  },
  SET_MAX_EXPENSE: (state) => {
    let arr = state.expenses.sort((a, b) => b.sum - a.sum);
    state.maxExpense = arr[0].sum;
  },
  SET_TOTAL_PROFIT: (state) => {
    const num = state.profits.reduce(
      (acc, profit) => acc + parseInt(profit.sum),
      0
    );
    state.totalProfit = num;
  },
  SET_TOTAL_EXPENSE: (state) => {
    const num = state.expenses.reduce(
      (acc, profit) => acc + parseInt(profit.sum),
      0
    );
    state.totalExpense = num;
  },
};
const actions = {
  SET_PROFITS: ({ commit }, payload) => {
    commit("SET_PROFITS", payload);
    commit("SET_MAX_PROFIT");
    commit("SET_TOTAL_PROFIT");
  },
  SET_EXPENSES: ({ commit }, payload) => {
    commit("SET_EXPENSES", payload);
    commit("SET_MAX_EXPENSE");
    commit("SET_TOTAL_EXPENSE");
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
