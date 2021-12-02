<template>
  <aside class="sidebar h-full overflow-y-auto" :class="{'open':sidebar}">
    <div class="w-full prf px-5 py-4">
      <img class="mb-3 w-full" :src="company" alt="company name" />
      <p class="text-base app-text">RC123456789</p>
    </div>
    <ul class="flex flex-col py-10 w-full menu ">
      <li class="w-full h-12 my-2">
        <nuxt-link
          active-class="active"
          class="menu-item-link flex items-center"
          to="/"
        >
          <span class="flex items-center px-6">
            <img class="w-5 mr-2" :src="dashboard" alt="dashboard" /> Dashboard
          </span>
        </nuxt-link>
      </li>
      <li class="w-full h-12 my-2">
        <nuxt-link
          active-class="active"
          class="menu-item-link flex items-center"
          to="/agents"
        >
          <span class="flex items-center px-6">
            <img class="w-5 mr-2" :src="agents" alt="agents" /> Agents
          </span>
        </nuxt-link>
      </li>
      <li class="w-full h-12 my-2">
        <nuxt-link
          active-class="active"
          class="menu-item-link flex items-center"
          to="/task"
        >
          <span class="flex items-center px-6">
            <img class="w-5 mr-2" :src="task" alt="task" /> Task
          </span>
        </nuxt-link>
      </li>
      <li class="w-full h-12 my-2">
        <nuxt-link
          active-class="active"
          class="menu-item-link flex items-center"
          to="/teams"
        >
          <span class="flex items-center px-6">
            <img class="w-5 mr-2" :src="teams" alt="teams" /> Teams
          </span>
        </nuxt-link>
      </li>
      <li class="w-full h-12 my-2">
        <nuxt-link
          active-class="active"
          class="menu-item-link flex items-center"
          to="/users"
        >
          <span class="flex items-center px-6">
            <img class="w-5 mr-2" :src="users" alt="users" /> Users
          </span>
        </nuxt-link>
      </li>
      <li class="w-full h-12 my-2">
        <nuxt-link
          active-class="active"
          class="menu-item-link flex items-center"
          to="/settings"
        >
          <span class="flex items-center px-6">
            <img class="w-5 mr-2" :src="settings" alt="settings" /> Settings
          </span>
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import company from "../static/company.png";
import dashboard from "../static/category.png";
import agents from "../static/agents.png";
import task from "../static/Document.png";
import teams from "../static/Shield.png";
import users from "../static/Users.png";
import settings from "../static/Setting.png";
import {mapState} from "vuex"

export default {
  name: "Sidebar",
  computed:mapState(['sidebar']),
  data: () => ({
    company,
    dashboard,
    agents,
    task,
    teams,
    users,
    settings,
  }),
};
</script>

<style lang="scss">
.sidebar {
  width: 0px;
  background: #0f808c;
  transition: width 0.3s ease-in-out;

  &.open {
    width: 220px;
  }

  .prf {
    background: #1c697a;
  }

  .app-text {
    color: #c2e2e9;
  }

  .menu-item-link {
    width: 100%;
    height: 100%;
    color: #c2e2e9;

    &:hover{
      color:#fff;
    }

    &.active {
      background: #46b2c8;
      color: #fff;
      border-left: #fff 3px solid;
    }
  }

}

@media screen and (max-width:1024px) {
  .sidebar {
    position:fixed;
    top:124px;
    z-index: 10;

  }
}
</style>
