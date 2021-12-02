<template>
  <nav class="flex  items-center nav bg-white border-b md:px-10 px-5 md:py-3 py-1">
    <div class="flex flex-wrap md:flex-row flex-row-reverse w-full justify-between  items-center">
      <Notification :className="'md:hidden'"/>
      <div class="">
        <img class="2xl:w-28 xl:w-24" :src="logo" alt="app logo" />
      </div>
      <button
        class="
          shadow-md
          border
          rounded-full
          h-8
          w-8
          border-0
          flex
          justify-center
          items-center
        "
        @click="toggleSidebar"
      >
        <img
          class="w-3"
          :src="arrow"
          alt="toggle"
          :class="[sidebar ? 'openbtn' : 'closebtn']"
        />
      </button>


      <div
        class="flex items-center h-12 search-bar md:px-5 px-2 md:mt-2 mt-2"
        style="background: #f1f1f1"
      >
        <select
          class="border-0 bg-transparent text-gray-400 w-14 px-2 outline-none"
          name="category"
          id=""
        >
          <option value="">All</option>
        </select>
        <input
          class="
            border-0 border-l
            px-3
            ml-1
            bg-transparent
            w-5/6
            text-sm
            outline-none
          "
          type="text"
          name="search"
          placeholder="Search for anything here"
        />
        <button class="border-0 bg-transparent ml-auto justify-self-end p-1">
          <img class="" :src="searchIcon" alt="search" />
        </button>
      </div>

      <div class="flex md:mt-2 mt-2">
        <Notification :className="'md:flex hidden'"/>
        <div class="md:mx-5 mr-5 mx-0">
          <img class="h-10 w-10 rounded-full" :src="profile" alt="profile" />
        </div>
        <div class="flex items-center">
          <p class="text-sm mr-3" style="color: #023a59">Solomon</p>
          <img class="w-3" :src="down" alt="arrow" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "../static/you-logo.png";
import profile from "../static/profile.png";
import down from "../static/caret-down.png";
import arrow from "../static/arrow.png";
import searchIcon from "../static/Search.png";
import Notification from "../components/Notification.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Navbar",
  components:{
    Notification
  },
  computed: mapState(["sidebar"]),
  data: () => ({
    profile,
    down,
    arrow,
    searchIcon,
    logo: logo,
  }),

  mounted(){
    if(window.innerWidth <= 576){
      this.closeSidebar();
    }
  },

  methods: {
    ...mapActions(["openSidebar", "closeSidebar"]),

    toggleSidebar() {
      if (this.sidebar) {
        this.closeSidebar();
      } else {
        this.openSidebar();
      }
    },
  },
};
</script>

<style lang="scss">
.nav {
  height: 62px;

  .nt {
    background: #c2e2e944;
  }

  .search-bar {
    width: 69%;
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

@media screen and (max-width:1024px) {
  .nav{
    height:124px;

    .search-bar {
      width: 50%;
    }
  }
}
</style>