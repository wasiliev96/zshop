<template>
  <div class="pt-2 cart bg-main">
    <div
      class=" cart-card my-5"
      v-for="(item, index) in this.$store.state.saleItems"
      v-bind:key="index"
    >
      <div class="flex w-10/12 md:w-5/6 mx-auto card-inner">
        <div
          class="relative w-5/6 max-w-2xl mt-1 overflow-hidden rounded-lg card-image pt-2/3 h-full"
        >
          <img
            class="absolute top-0 object-cover w-full h-full"
            :src="'http://localhost:1337' + item.gallery[0].url"
            :alt="item.gallery[0].alternativeText"
          />
        </div>
        <div
          class="flex flex-col ml-4 mr-2 md:mx-8 mt-0 font-bold text-white text-xl card-info"
        >
          <div class="my-2 card-brandname">
            <span class="block label">TM:</span>
            <span class="block" v-text="item.brandname"></span>
          </div>
          <div class="my-2 card-price">
            <span class="block label">Цена:</span>
            <span class="block">{{ item.cost }} грн</span>
          </div>
          <span class="block my-2 label">Размер:</span>
          <div class="w-1/2 mt-1 mb-2 size">
            <div class="flex justify-between uk">
              <span class="label">UK</span>
              <span class="" v-text="item.sizeUK"></span>
            </div>
            <div class="flex justify-between eu">
              <span class="label">EU</span>
              <span class="" v-text="item.sizeEU"></span>
            </div>
            <div class="flex justify-between usa">
              <span class="label">USA</span>
              <span class="" v-text="item.sizeUSA"></span>
            </div>
          </div>
          <div class="my-3 remove">
            <button class="block p-2 -ml-2 cursor-pointer">
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9375 3.5625H1.0625C0.77474 3.5625 0.525716 3.44808 0.31543 3.21924C0.105143 2.9904 0 2.71208 0 2.38428C0 2.05648 0.102376 1.77507 0.307129 1.54004C0.511882 1.30501 0.763672 1.1875 1.0625 1.1875H6.375C6.375 0.865885 6.47738 0.587565 6.68213 0.352539C6.88688 0.117513 7.13867 0 7.4375 0H9.5625C9.86133 0 10.1131 0.117513 10.3179 0.352539C10.5226 0.587565 10.625 0.865885 10.625 1.1875H15.9375C16.2253 1.1875 16.4743 1.30501 16.6846 1.54004C16.8949 1.77507 17 2.05648 17 2.38428C17 2.71208 16.8949 2.9904 16.6846 3.21924C16.4743 3.44808 16.2253 3.5625 15.9375 3.5625ZM15.9375 16.625C15.9375 17.2806 15.73 17.8403 15.3149 18.3042C14.8999 18.7681 14.3991 19 13.8125 19H3.1875C2.60091 19 2.1001 18.7681 1.68506 18.3042C1.27002 17.8403 1.0625 17.2806 1.0625 16.625V4.75H15.9375V16.625ZM5.3125 8.3125C5.3125 7.99089 5.20736 7.71256 4.99707 7.47754C4.78678 7.24251 4.53499 7.125 4.2417 7.125C3.9484 7.125 3.69938 7.24251 3.49463 7.47754C3.28988 7.71256 3.1875 7.99089 3.1875 8.3125V15.4375C3.1875 15.7715 3.28988 16.0529 3.49463 16.2817C3.69938 16.5106 3.9484 16.625 4.2417 16.625C4.53499 16.625 4.78678 16.5106 4.99707 16.2817C5.20736 16.0529 5.3125 15.7715 5.3125 15.4375V8.3125ZM9.5625 8.3125C9.5625 7.99089 9.45736 7.71256 9.24707 7.47754C9.03678 7.24251 8.78499 7.125 8.4917 7.125C8.19841 7.125 7.94938 7.24251 7.74463 7.47754C7.53988 7.71256 7.4375 7.99089 7.4375 8.3125V15.4375C7.4375 15.7715 7.53988 16.0529 7.74463 16.2817C7.94938 16.5106 8.19841 16.625 8.4917 16.625C8.78499 16.625 9.03678 16.5106 9.24707 16.2817C9.45736 16.0529 9.5625 15.7715 9.5625 15.4375V8.3125ZM13.8125 8.3125C13.8125 7.99089 13.7074 7.71256 13.4971 7.47754C13.2868 7.24251 13.035 7.125 12.7417 7.125C12.4484 7.125 12.1994 7.24251 11.9946 7.47754C11.7899 7.71256 11.6875 7.99089 11.6875 8.3125V15.4375C11.6875 15.7715 11.7899 16.0529 11.9946 16.2817C12.1994 16.5106 12.4484 16.625 12.7417 16.625C13.035 16.625 13.2868 16.5106 13.4971 16.2817C13.7074 16.0529 13.8125 15.7715 13.8125 15.4375V8.3125Z"
                  fill="#F4F4FF"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart"
};
</script>

<style scoped lang="scss">
.label {
  @apply opacity-50;
  @apply text-lg;
}
.cart {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: calc(100vh - 90px);
  &-card {
    scroll-snap-align: start;
  }
}
</style>
