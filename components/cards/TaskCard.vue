<template>
  <div class="w-full flex items-start p-5 border-b">
    <div class="w-1/5">
      <div
        class="w-8 h-8 rounded-full flex items-center justify-center mb-2"
        style="background: #46b2c8"
      >
        <img class="w-4 h-4" :src="cross" alt="" />
      </div>
      <p class="text-gray-400 text-xs">Assign Agent</p>
    </div>
    <div class="flex items-center justify-between w-4/5">
      <div class="">
        <p class="font-semibold text-xs mb-2">Abiodun Olawale Solomon</p>
        <p class="text-gray-400 text-xs mb-2">
          12b Emmanuel Hign street, Sur...
        </p>
        <div class="flex mb-2">
          <img class="w-4 h-4" :src="entity" alt="" />
          <p class="text-gray-400 text-xs ml-1">Sterling Bank PLC</p>
        </div>
        <nuxt-link class="text-xs" style="color: #3056d3" to="/"
          >2 day ago</nuxt-link
        >
      </div>
      <img class="w-6 h-6" :src="angle" alt="" />
    </div>
  </div>
</template>

<script>
import cross from "../../static/cross.png";
import angle from "../../static/dark-angle-right.png";
import entity from "../../static/entity.png";

export default {
  data: () => ({
    cross,
    angle,
    entity,
  }),
};
</script>

<style lang="scss">
</style>