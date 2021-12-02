<template>
  <div class="absolute top-0 right-0 h-full flex items-start">
    <div>
      <button
        class="h-10 w-10 bg-black flex items-center justify-center"
        @click="toggleBar"
      >
        <img
          class="w-2"
          :src="right"
          alt=""
          :class="[open ? 'openbtn' : 'closebtn']"
        />
      </button>
    </div>
    <div
      class="w-80 bg-white h-full flex flex-col"
      :class="[open ? 'openbar' : 'closebar']"
    >
      <div
        class="h-10 w-full flex items-center px-5"
        style="background: #46b2c8;min-height:40px;"
      >
        <p class="text-white text-sm font-semibold">Agents</p>
      </div>
      <div class="flex h-14 border-b" style="min-height:56px">
        <div
          class="
            w-1/3
            flex
            justify-center
            items-center
            cursor-pointer
            border-b border-blue-500
          "
        >
          <p class="text-gray-400 text-sm app-text">All</p>
        </div>
        <div class="w-1/3 flex justify-center items-center cursor-pointer">
          <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <p class="text-gray-400 text-sm">Online</p>
        </div>
        <div class="w-1/3 flex justify-center items-center cursor-pointer">
          <span class="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
          <p class="text-gray-400 text-sm">Offline</p>
        </div>
      </div>
      <div class="w-full overflow-y-auto">
        <AgentCard />
        <AgentCard v-for="item in 6" :key="item" />
      </div>
    </div>
  </div>
</template>

<script>
import right from "../static/angle-right.png";
import AgentCard from "./cards/AgentCard.vue";

export default {
  components: {
    AgentCard,
  },

  data: () => ({
    right,
    open: true,
  }),

  mounted(){
    if(window.innerWidth <= 576){
      this.open = false;
    }
  },

  methods: {
    toggleBar() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss">
.app-text {
  color: #023a59;
}
.openbar {
  width: 320px;
  transition: width 0.4s ease-in-out;
}
.closebar {
  width: 0;
  opacity:0;
  animation: sideOut 0.4s ease-in-out;
}

@keyframes sideOut {
  from{
    width: 320px;
    opacity:1;
    z-index: 1;
  }
  to{
    width: 0;
    opacity:0;
    z-index: 0;

  }
}

@media screen and (max-width:375px) {
  .openbar{
    width:290px;
  }
}

.openbtn {
  transform: rotate(0);
  transition: transform 0.5s ease-in-out;
}

.closebtn {
  transform: rotate(180deg);
  transition: transform 0.5s ease-in-out;
}
</style>