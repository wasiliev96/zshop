<template>
  <div id="app" class="app">
    <TheHeader></TheHeader>
    <router-view class="mx-0 mt-3 sm:mx-5 page z-0" />
    <NavigationBar></NavigationBar>
  </div>
</template>

<style scoped lang="scss">
.page {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
<script>
import TheHeader from "@/components/TheHeader";
import NavigationBar from "@/components/NavigationBar";
import axios from "axios";
export default {
  components: {
    TheHeader: TheHeader,
    NavigationBar: NavigationBar
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("loadData");
    console.log("store:");
    console.table(this.$store.state.saleItems);

    axios.get("http://localhost:1337/sale-items").then(response => {
      this.itemsList = response.data;
      console.log(this.itemsList);
    });
  }
};
</script>
