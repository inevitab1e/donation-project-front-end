export default {
    namespaced: true,
    state() {
        return {
            allChildList: [],
        }
    },


    mutations: {
        initAllChildList(state, allChildList) {
            state.allChildList = allChildList
        },
        
    },

    actions: {
        async initAllChildList(context) {
            const response = await context.axios.post('')
            console.log(response.data.data)
            if (response.status === 200) {
                context.commit('initAllChildList', response.data.data)
                console.log('初始化儿童列表成功')
            } else {
                console.log('初始化儿童列表失败')
            }
        }
    },

    getters: {}

}