export default {
    namespaced: true,
    state() {
        return {
            projectList: [],
            currentProject: {},
        }
    },


    mutations: {
        updateCurrentProject(state, currentProject) {
            state.currentProject = currentProject

        },
        updateProjectList(state, projectList) {
            state.projectList = projectList
        },
        modifyCurrentProjectActualMoney(state, money) {
            state.currentProject.actualMoney += money
            state.projectList.find((project) => {
                if (project.id === state.currentProject.id) {
                    project.actualMoney += money
                }
            })
        }

    },

    actions: {
        async initAllProjectList(context) {
            const response = await this.$axios.post('/project/all')
            console.log(response.data.data)
            if (response.status === 200) {
                context.commit('updateProjectList', response.data.data)
                console.log('初始化项目列表成功')
            } else {
                console.log('初始化项目列表失败')
            }
        },

    },

    getters: {}

}