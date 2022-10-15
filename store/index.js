// holds your root state
export const state = () => ({
  test_counter: 0,
  ajax_loading: false,
});

// contains your actions
export const actions = {
  counterUp({ state, commit }) {
    commit("setCounter", state.test_counter + 1);
  },
};
// contains your mutations
export const mutations = {
  setCounter(state, value) {
    state.test_counter = value;
  },
  setAjaxLoadingStatus_store(state, value) {
    state.ajax_loading = value;
  },
};
// your root getters
export const getters = {
  myGetter(state) {
    return state.test_counter + 1000;
  },
};
