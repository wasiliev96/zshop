<template>
  <div
    class="fixed bottom-0 flex justify-center w-full cursor-pointer navigation-bar-wrapper z-50 "
  >
    <div
      class="fixed top-0 left-0 z-10 w-full h-full navigation-bar-overlay"
      v-if="activeMenuIndex === 1"
      @click="activeMenuIndex = 0"
    ></div>
    <div class="z-20 flex flex-col w-full max-w-md rounded-t-lg navigation-bar">
      <div class="flex justify-center navigation-header">
        <button
          class="flex-grow pt-2 pl-4 pr-5 rounded-tl-lg category focus:outline-none"
          :class="{ 'active shadow-md': activeMenuIndex === 1 }"
          @click="activeMenuIndex = 1"
        >
          <icon-hanger></icon-hanger>
        </button>
        <button
          class="flex-grow pl-3 pr-2 sm:px-5 pt-1 category focus:outline-none"
          :class="{ active: activeMenuIndex === 2 }"
          @click="activeMenuIndex = 2"
        >
          <icon-home></icon-home>
        </button>
        <div
          class="relative w-20 h-20 mx-1 overflow-hidden bg-white shadow-inner btn-cta focus:outline-none cursor-auto"
          :class="{
            collapsed:
              this.$route.name !== 'Cart' &&
              this.$route.name !== 'DetailedStrip'
          }"
        >
          <button
            class="absolute top-0 left-0 h-full min-w-full"
            :class="{ cta_collapsed: this.$route.name !== 'Cart' }"
          >
            <icon-cash></icon-cash>
          </button>
          <button
            class="absolute top-0 left-0 w-full h-full "
            :class="{ cta_collapsed: this.$route.name !== 'DetailedStrip' }"
          >
            <icon-cart></icon-cart>
          </button>
        </div>
        <router-link
          :to="{ name: 'Cart' }"
          class="flex items-center content-center flex-grow px-3 sm:px-5 pt-1 category focus:outline-none"
          :class="{ active: activeMenuIndex === 3 }"
          @click="activeMenuIndex = 3"
        >
          <icon-cart></icon-cart>
        </router-link>
        <button
          class="flex-grow pt-4 pl-5 pr-4 rounded-tr-lg category focus:outline-none"
          :class="{ active: activeMenuIndex === 4 }"
          @click="activeMenuIndex = 4"
        >
          <icon-burger></icon-burger>
        </button>
      </div>
      <transition name="fadeHeight">
        <div
          class="z-20 max-h-full px-2 color-main categories"
          :class="{ collapsed: activeMenuIndex !== 1 }"
        >
          <p class="py-5 text-lg uppercase">Весь каталог</p>
          <hr class="color-main" />
          <ul class="menuList" style="columns:3; column-gap: 0">
            <li
              class="hover:shadow-inner focus:shadow-inner"
              v-for="(item, index) in this.menuLinks"
              v-bind:key="index"
              @click="activeMenuIndex = null"
            >
              <router-link
                :to="'#'"
                v-text="item.title"
                class="flex py-3 pl-2"
              ></router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import icons from "@/components/icons/icons";

export default {
  data() {
    return {
      activeMenuIndex: null,
      menuLinks: [
        {
          title: "Верхняя одежда",
          href: "Home"
        },
        {
          title: "Платья",
          href: "Home"
        },
        {
          title: "Юбки",
          href: "Home"
        },
        {
          title: "Шорты",
          href: "Home"
        },
        {
          title: "Штаны",
          href: "Home"
        },
        {
          title: "Футболки, майки",
          href: "Home"
        },
        {
          title: "Блузы",
          href: "Home"
        },
        {
          title: "Кофты",
          href: "Home"
        },
        {
          title: "Комбинезоны",
          href: "Home"
        },
        {
          title: "Комплекты",
          href: "Home"
        },
        {
          title: "Аксессуары",
          href: "Home"
        },
        {
          title: "Обувь",
          href: "Home"
        }
      ]
    };
  },
  components: {
    "icon-hanger": icons.IconHanger,
    "icon-home": icons.IconHome,
    "icon-cart": icons.IconCart,
    "icon-burger": icons.IconBurger,
    "icon-cash": icons.IconCash
  },
  computed: {
    ctaVisible() {
      // return this.activeView !== "Cart" && this.activeView !== "DetailedStrip";
      return true;
    },
    activeView() {
      return this.$route.name;
    },
    currentRouteName() {
      return this.$route.name;
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
.navigation-bar {
  background-color: var(--color_bg);

  svg {
    //fill: var(--color_main);
    //stroke: var(--color_main);
  }
}

.router-link-active {
  //background-color: var(--color_main);
  @apply .shadow-inner;

  svg {
    //fill:  var(--color_bg);
    //stroke: var(--color_bg);
  }
}

.categories {
  max-height: calc(70vh - 100px);
  transition: max-height 0.2s ease-out;

  &.collapsed {
    max-height: 0;
    transition-timing-function: ease-out;
  }
}

button svg {
  margin: auto;
}

.btn-cta {
  border-radius: 50%;
  max-width: 80px;
  max-height: 80px;
  transform: translateY(-45%);
  opacity: 1;
  transition: all 0.15s ease-in-out;
  @media screen and (max-width: 600px) {
    max-width: 50px;
    max-height: 50px;
    & > svg {
    }
  }

  &.collapsed {
    max-width: 0;
    transition-timing-function: ease-out;
    transform: translate(0) scale(0) !important;

    button {
      opacity: 0;
    }
  }

  button {
    transition: all 0.3s ease-in-out;
    transform: translate(0);

    &.disabled {
      cursor: not-allowed;
    }

    &.cta_collapsed {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  overflow: hidden;
  @media screen and (max-width: 400px) {
    max-width: 60px;
    max-height: 60px;
  }

  svg {
    transition: fill 0.1s ease-in, stroke 0.1s ease-in;
  }
}
</style>
