<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 50 50"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor" :stroke="strokeColor">
      <slot />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 50
    },
    height: {
      type: [Number, String],
      default: 50
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    }
  }
};
</script>
