<template>
  <div>
    <!--    <router-link v-if="!item.isForSale" :to="{name:'DetailsStrip', params:{id:item.id}}" class="relative flex"-->
    <!--                 :id="item.id">-->
    <!--      <img :src="'http://localhost:1337' + item.gallery[0].url" :alt="item.gallery[0].alternativeText">-->
    <!--    </router-link>-->
    <router-link
      class="relative flex"
      :to="{ name: 'DetailedStrip', params: { id: item.id } }"
      :id="item.id"
    >
      <img
        :src="'http://localhost:1337' + item.gallery[0].url"
        :alt="item.gallery[0].alternativeText"
      />
      <div
        v-if="!item.isForSale"
        class="absolute top-0 left-0 w-full h-full opacity-75 card-overlay bg-main"
      ></div>
      <span
        v-if="!item.isForSale"
        class="absolute text-2xl font-bold text-white uppercase sold-text"
        >Продано</span
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ThumbnailCard",
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.title {
  text-shadow: -1px 0.3em 20px var(--color_main);
}

.card {
  .lead-img {
    width: 100%;
  }

  .gallery {
    height: 90%;
    max-width: 900px;
    scroll-snap-type: x mandatory;

    img {
      object-fit: cover;
      object-position: center;
      scroll-snap-align: start;
    }
  }
}

.sold-text {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
