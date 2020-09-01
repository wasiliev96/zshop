<template>
  <icon-base :icon-color="color" :stroke-color="stroke">
    <path
      d="M25.7564 39.1667C19.888 39.1667 17.5806 36.6111 17.2672 33.3333H11C11.3418 39.4167 16.0138 42.8333 21.4833 43.9722V50H30.0295V44.0278C35.5845 43 40 39.8611 40 34.1667C40 26.2778 33.0776 23.5833 26.611 21.9444C20.1444 20.3056 18.0648 18.6111 18.0648 15.9722C18.0648 12.9444 20.942 10.8333 25.7564 10.8333C30.8271 10.8333 32.7073 13.1944 32.8782 16.6667H39.1739C38.9745 11.8889 35.9833 7.5 30.0295 6.08333V0H21.4833V6C15.9568 7.16667 11.5128 10.6667 11.5128 16.0278C11.5128 22.4444 16.9538 25.6389 24.9018 27.5C32.0236 29.1667 33.4479 31.6111 33.4479 34.1944C33.4479 36.1111 32.0521 39.1667 25.7564 39.1667V39.1667Z"
    />
  </icon-base>
</template>

<script>
import IconBase from "@/components/icons/IconBase";

export default {
  name: "iconCash",
  components: {
    "icon-base": IconBase
  },
  props: {
    color: {
      type: String,
      default: "var(--color_main)"
    },
    stroke: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
