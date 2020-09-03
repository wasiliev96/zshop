<template>
  <div class="home">
    <ThumbnailCard
      v-for="(item, index) in items"
      v-bind:key="index"
      :item="item"
    ></ThumbnailCard>
  </div>
</template>

<script>
import ThumbnailCard from "@/components/ThumbnailCard";
export default {
  name: "Home",
  components: {
    ThumbnailCard: ThumbnailCard
  },
  data() {
    return {};
  },
  mounted() {
    console.log("downloaded data:");
    console.log(this.$store.state.saleItems);
  },
  computed: {
    items: function() {
      const filters = this.$store.state.saleItems.map(a => a.type);
      if (this.$route.path === "/all") {
        return this.$store.state.saleItems;
      } else if (filters.includes(this.$route.params["filter"])) {
        return this.$store.state.saleItems.filter(
          item => item.type === this.$route.params["filter"]
        );
      }
      return this.$store.state.saleItems;
    }
  }
};
</script>
<style scoped lang="scss">
.home {
  //position: static;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1em;
  z-index: 1;
  @media screen and (min-width: 460px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
