<script>
import initializeApp from "./mixin/initializeApp";
import logItFunc from "./services/api/core/request";

export default {
  components: {},
  mixins: [initializeApp, logItFunc],
  data: () => {
    return {};
  },
  mounted() {
    this.initApp();
    this.logIt();
  },
};
</script>

<template>
  <div class="container"></div>
</template>

<style>
.container {
  width: 1380px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border: 1px solid black;
  padding: 40px 0 0 0;
}
</style>
