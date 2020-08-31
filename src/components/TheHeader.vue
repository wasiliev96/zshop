<template>
  <header class="sticky top-0 z-50 w-full h-20 pt-12 pb-8">
    <div
      v-if="false"
      class="header-inner  h-full flex justify-center items-center"
    >
      <router-link :to="{ name: 'Home' }">
        <icon-logo
          class="cursor-pointer"
          @click="activeMenuIndex = 0"
        ></icon-logo>
      </router-link>
      <div class="header-shadow"></div>
    </div>

    <div v-else class="header-inner h-full">
      <nav class="flex justify-end h-full nav">
        <router-link :to="{ name: 'Home' }">
          <icon-logo
            background="var(--color_main)"
            class="absolute bottom-0 left-0 logo cursor-pointer rounded-full"
            @click="activeMenuIndex = 0"
          >
          </icon-logo>
        </router-link>
        <ul class="flex items-center justify-center pr-2 nav-main-list">
          <li
            v-for="(link, index) in navLinks"
            v-bind:key="index"
            @click="activeMenuIndex = index"
            :class="{ active: activeMenuIndex === index }"
            class="block h-full px-2 font-bold uppercase color-main"
          >
            <router-link
              class="flex items-center h-full"
              :to="{ name: link.component }"
              ><span v-text="link.title"></span
            ></router-link>
          </li>
          <li class="px-2 text-xs font-bold uppercase color-main">
            <router-link
              to="/reviews"
              class="flex flex-col items-center justify-center h-full"
            >
              <icon-heart color="var(--color_main)"></icon-heart>
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="header-shadow"></div>
    </div>
  </header>
</template>

<script>
import IconHeart from "@/components/icons/IconHeart";

// import Logo from "@/components/Logo";
import IconLogo from "@/components/icons/IconLogo";
export default {
  name: "TheHeader",
  components: {
    "icon-logo": IconLogo,
    "icon-heart": IconHeart
  },
  data() {
    return {
      navLinks: [
        {
          title: "Новинки",
          component: "New"
        },
        {
          title: "Скидки",
          component: "Sale"
        }
      ],
      activeMenuIndex: null
    };
  }
};
</script>

<style scoped>
header-inner {
  height: 90px;
}

.logo {
  transform: translate(30%, 0%);
  box-shadow: -1px 18px 15px hsla(243, 100%, 78%, 0.4);
}

.header-shadow {
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  background: linear-gradient(
    180deg,
    rgba(79, 71, 255, 0.3) 0%,
    rgba(150, 145, 255, 0) 100%
  );
}
</style>
