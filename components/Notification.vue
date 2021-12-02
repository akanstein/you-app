<template>
  <button
    class="
      rounded-lg
      nt
      flex
      items-center
      justify-center
      h-10
      w-10
      relative
    "
    :class="[className]" 
  >
    <img class="w-4" :src="notification" alt="notifications" />
    <span
      class="
        absolute
        top-1
        right-1
        flex
        items-center
        justify-center
        h-4
        w-4
        text-white text-xs
        rounded-full
      "
      style="background: #d72830"
      >2</span
    >
  </button>
</template>

<script>
import notification from "../static/Notification.png";

export default{
  props:['className'],
  data: () => ({
    notification,
  }),
}

</script>