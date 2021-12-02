<template>
  <div class="w-full flex items-center p-5 border-b">
    <div class="flex items-start justify-between  w-4/5">
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center"
        style="background: #46b2c8"
      >
        <img class="w-full" :src="image || profile" alt="" />
      </div>
      <div class="">
        <p class="font-semibold text-xs mb-2">Abiodun Olawale Solomon</p>
        <p class="text-gray-400 text-xs mb-2">08069786754</p>
        <p class="text-gray-400 text-xs">Akure</p>
      </div>
    </div>
    <div class="flex items-center justify-end w-1/5">
      <img class="w-6 h-6" :src="angle" alt="" />
    </div>
  </div>
</template>

<script>
import angle from "../../static/dark-angle-right.png";
import entity from "../../static/entity.png";
import profile from "../../static/profile.png";

export default {
  props:['image'],
  data: () => ({
    angle,
    entity,
    profile
  }),
};
</script>

<style lang="scss">

</style>