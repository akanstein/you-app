<template>
  <div class="h-screen">
    <Navbar></Navbar>
    <div class="flex main">
      <div><Sidebar/></div>
      <div class="h-full w-full"><Nuxt/></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue"
import Sidebar from "./Sidebar.vue"

export default {
  components:{
    Navbar,
    Sidebar
  }
}

</script>

<style>
.main{
  height: calc(100vh - 62px);
}
</style>