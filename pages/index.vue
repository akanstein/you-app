<template>
<div class="h-full">
  <div class="pg-bar md:block hidden"></div>
  <div class="w-full relative pg-content">
    <img class="w-full max-h-full min-h-full object-cover" :src="distance" alt="background">
    <Taskbar/>
    <AgentsBar/>
  </div>
</div>
</template>

<script>
import distance from "../static/guyana-distance.png"
import AgentsBar from "../components/AgentsBar";
import Taskbar from "../components/Taskbar.vue";

export default {
  components:{
    Taskbar,
    AgentsBar
  },
  data:()=>({
    distance,
  })
}
</script>

<style lang="scss">
.pg-bar{
  height: 40px;
  background:#FDFDFD
}
.pg-content{
  height: calc(100% - 40px);
}

@media screen and (max-width:1024px){
  .pg-content{
    height: calc(100% - 62px);
  }
}

</style>
