export default {
    namespaced: true,
    state() {
        return {
            globalProjects: [],
            currentProject: {},
        }
    },


    mutations: {
        updateCurrentProject(state, currentProject) {
            state.currentProject = currentProject

        },
    },

    actions: {},

    getters: {}

}