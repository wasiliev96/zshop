<template>
  <div class="details-strip">
    <!--    <div class="text-center uneccessary">-->
    <!--      <h1>Details View: {{ this.$route.name }}</h1>-->
    <!--      <h2>id:{{ this.$route.params.id }}</h2>-->
    <!--    </div>-->
    <!--    <agile :infinite="false">-->
    <!--    </agile>-->
    <div
      class="h-full border-2 card"
      v-for="(item, index) in this.$store.state.saleItems"
      v-bind:key="index"
      v-waypoint="{
        active: true,
        callback: onWaypoint,
        options: intersectionOptions
      }"
      :id="item.id"
    >
      <div class="relative mx-auto card-inner items-center">
        <div class="card-topbar w-full flex absolute z-50">
          <a @click="$router.go(-1)" class="block p-5 cursor-pointer icon-back">
            <svg
              width="57"
              height="36"
              viewBox="0 0 57 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071L17.6569 19.0711C18.0474 19.4616 18.6805 19.4616 19.0711 19.0711C19.4616 18.6805 19.4616 18.0474 19.0711 17.6569L13.4142 12L19.0711 6.34315C19.4616 5.95262 19.4616 5.31946 19.0711 4.92893C18.6805 4.53841 18.0474 4.53841 17.6569 4.92893L11.2929 11.2929ZM48 11L12 11L12 13L48 13L48 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0.636047"
                  width="57"
                  height="34.7279"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="-1" dy="6" />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.588235 0 0 0 0 0.568627 0 0 0 0 1 0 0 0 0.6 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          <div
            class=" text-2xl text-center capitalize item-brand color-main self-center"
          >
            <span
              class="inline-block brandname text-white"
              v-text="item.brandname"
            ></span>
          </div>
        </div>
        <div
          v-if="!item.isForSale"
          class="absolute top-0 left-0 z-40 w-full h-full opacity-25 overlay bg-main"
        ></div>
        <span
          v-if="!item.isForSale"
          class="absolute z-50 text-6xl font-bold text-white uppercase opacity-75 overlay-text"
          >продано</span
        >
        <agile
          class="relative h-full horizontal-strip"
          centerMode
          :navButtons="false"
          :dots="false"
        >
          <div
            class="h-full image-card"
            v-for="(image, index) in item.gallery"
            v-bind:key="index"
          >
            <img
              class="object-cover w-full h-full rounded-lg strip-image"
              :src="'http://localhost:1337' + image.url"
              :alt="image.alternativeText"
            />
          </div>
        </agile>
        <div class="absolute bottom-0 left-0 details">
          <div class="flex flex-col items-center p-4 mb-3 details_size">
            <div class="text-xl font-bold leading-none uppercase size-value">
              {{ item.size }} UK
            </div>
            <span class="size_description">размер</span>
          </div>
          <div
            class="relative flex items-center content-center p-2 sale-description"
          >
            <div class="font-medium state">
              <span
                class="block font-medium text-center lowercase border-b-2 border-white"
                >идеальное</span
              >
            </div>
            <span class="ml-6 text-xl font-bold leading-none price">
              {{ item.cost }}<br />грн
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  name: "DetailedStrip",
  components: {
    agile: VueAgile
  },
  data() {
    return {
      lastYScroll: window.scrollY,
      intersectionOptions: {
        root: null,
        threshold: [0.75, 0.75]
      }
    };
  },
  methods: {
    onWaypoint({ el, going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        // console.log('waypoint going in!')
        if (el.id) {
          this.$store.state.currentItemId = el.id;
        }
        // console.log(`current card: ${this.$store.state.currentItemId}`)
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        // console.log('waypoint going top!')
      }
    }
  },
  mounted() {
    const elem = document.getElementById(this.$route.params.id);
    elem.scrollIntoView();
  }
};
</script>

<style lang="scss">
.card {
  width: 100%;
  height: calc(100vh - 90px);
  scroll-snap-align: start;

  &-inner {
    max-width: 600px;
    height: 95%;
  }

  .image-card {
    width: 100vw;
    height: 100%;
  }
}
.card-topbar {
  background: linear-gradient(
    to bottom,
    hsla(243, 100%, 78%, 0.6),
    transparent
  );
}
.brandname {
  transform: translateX(-20%);
}
.details-strip {
  height: calc(100vh - 90px);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.details {
  pointer-events: none;
  transform: translate(0, -10vh);
  color: var(--color_bg);

  & > div {
    background-color: var(--color_main);
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
}

.sale-description {
  min-height: 90px;
}

.state {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 1.5;
  transform: translate(-0.4em, 35%);

  span {
    transform: rotate(-90deg) translateY(-100%);
  }
}

.item-brand {
  //text-shadow: -1px 6px 10px var(--color_main);
  flex: auto;
  justify-self: center;
}

.icon-back {
}

.overlay {
  pointer-events: none;

  &-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
}
.agile {
  &__list {
    height: 100%;
  }
  &__slides {
    max-height: 100%;
  }
  &__track {
    height: 100%;
  }
}
.agile__slides {
  height: 100%;
}
</style>
