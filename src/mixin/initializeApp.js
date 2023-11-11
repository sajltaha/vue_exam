import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      STATE_CATEGORIES: "CATEGORIES/STATE",
      STATE_BALANCE: "BALANCE/STATE",
      STATE_RECORDS: "RECORDS/STATE",
    }),
  },
  methods: {
    ...mapActions({
      SET_BALANCE: "BALANCE/SET_BALANCE",
      SET_INCOME: "BALANCE/SET_INCOME",
      SET_OUTCOME: "BALANCE/SET_OUTCOME",
      CREATE_CATEGORY: "CATEGORIES/CREATE_CATEGORY",
      SET_PROFITS: "RECORDS/SET_PROFITS",
      SET_EXPENSES: "RECORDS/SET_EXPENSES",
      CHANGE_CATEGORY: "CATEGORIES/CHANGE_CATEGORY",
    }),
    updateBalance() {
      this.SET_BALANCE();
    },
    addNewCategory(name) {
      this.CREATE_CATEGORY(name);
    },
    addNewProfit(sum) {
      this.SET_INCOME(sum);
    },
    addNewExpense(sum) {
      this.SET_OUTCOME(sum);
    },
    pushProfits(data) {
      this.SET_PROFITS(data);
    },
    pushExpenses(data) {
      this.SET_EXPENSES(data);
    },
    changeCategoryData(data) {
      this.CHANGE_CATEGORY(data);
    },
  },
};
