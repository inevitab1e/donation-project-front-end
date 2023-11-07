export default {
    namespaced: true,
    state() {
        return {
            childList: [],
            currentChild: {}
        }
    },


    mutations: {
        updateCurrentChild(state, currentChild) {
            state.currentChild = currentChild
        },
        updateChildList(state, childList) {
            state.childList = childList
        },
        updateCurrentChildActualMoney(state, money) {
            state.currentChild.actualMoney += money
            state.projectList.find((child) => {
                if (child.id === state.currentChild.id) {
                    child.actualMoney += money
                }
            })
        }

    },

    actions: {
        async initAllChildList(context) {
            const response = await this.$axios.post('/child/all')
            console.log(response.data.data)
            if (response.status === 200) {
                context.commit('updateChildList', response.data.data)
                console.log('初始化儿童列表成功')
            } else {
                console.log('初始化儿童列表失败')
            }
        }
    },

    getters: {}

}