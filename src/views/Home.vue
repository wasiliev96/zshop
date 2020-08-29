<template>
  <div class="home">
    <ThumbnailCard
      v-for="(item, index) in this.$store.state.saleItems"
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
  created() {
    console.log("downloaded data:");
    console.log(this.$store.state.saleItems);
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
