import axios from "axios"

export default {
    namespaced: true,
    state() {
        return {
            user: {},
            userProjects: [],
            userChildren: [],
            loginState: true,
        }
    },


    mutations: {
        updateUser(state, user) {
            state.user = user
        },
        updateLoginState(state, loginState) {
            state.loginState = loginState
        }
    },

    actions: {
        async getUserInfo(context, obj) {
            const response = await axios.post('/users', obj)
            const user = response.data.data
            console.log(user)
            if (user === null) {
                return
            }
            context.commit('updateUser', user)
            context.commit('updateLoginState', true)
        },

        async updateUserInfo(context, obj) {
            const response = await axios.post('', obj)
            if (response.data.code === 200) {
                context.commit('updateUser', obj)
                console.log('更新用户信息成功')
                return true
            } else {
                console.log('更新用户信息失败')
                return false
            }
        }
    },

    getters: {}

}