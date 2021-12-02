// state
export const state = () => ({
  sidebar: true,
});

// getters
export const getters = {};

// actions
export const actions = {
  openSidebar({commit}){
    commit('toggleSidebar',true)
  },
  
  closeSidebar({commit}){
    commit('toggleSidebar',false)
  }
};

// mutations
export const mutations = {
  toggleSidebar(state,payload){
    state.sidebar = payload
  }
};
