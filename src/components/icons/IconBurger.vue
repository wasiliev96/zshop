<template>
  <icon-base :icon-color="color" :stroke-color="stroke">
    <path d="M3 25H47Z" />
    <path
      d="M3 25H47"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M3 11H47Z" />
    <path
      d="M3 11H47"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M3 39H47Z" />
    <path
      d="M3 39H47"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </icon-base>
</template>

<script>
import IconBase from "@/components/icons/IconBase";

export default {
  name: "iconHanger",
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
      default: "var(--color_main)"
    }
  }
};
</script>

<style scoped></style>
