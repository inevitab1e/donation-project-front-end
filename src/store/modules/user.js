import axios from "axios"

export default {
    namespaced: true,
    state() {
        return {
            user: {},
            userProjectList: [],
            userChildList: [],
            donationMoney: 0,
            loginState: true,
        }
    },


    mutations: {
        updateUser(state, user) {
            state.user = user
        },
        updateLoginState(state, loginState) {
            state.loginState = loginState
        },
        updateUserProjectList(state, userProjectList) {
            state.userProjectList = userProjectList
        },
        updateUserChildList(state, userChildList) {
            state.userChildList = userChildList
        },
        updateDonationMoney(state, donationMoney) {
            state.donationMoney = donationMoney
        }
    },

    actions: {
        async initUser(context, obj) {
            console.log('initUser')
            const response = await axios.post('/donor/login', obj)
            const user = response.data.data
            console.log(user)
            if (user === null) {
                return
            }
            context.commit('updateUser', user)
            context.commit('updateLoginState', true)
        },

        async updateUserInfo(context, obj) {
            const response = await this.$axios.post('/donor/modify', obj)
            if (response.data.code === 200) {
                context.commit('updateUser', obj)
                console.log('更新用户信息成功')
                return true
            } else {
                console.log('更新用户信息失败')
                return false
            }
        },
        async initUserProjectList(context, obj) {
            const response = await this.$axios.post('/ProjectRecord/queryRecord', obj)
            if (response.data.code === 200) {
                context.commit('updateUserProjectList', obj)
                console.log('更新用户捐助项目信息成功')
                return true
            } else {
                console.log('更新用户捐助项目信息失败')
                return false
            }
        },
        async initUserChildList(context, obj) {
            const response = await this.$axios.post('/childRecord/queryByDonor', obj)
            if (response.data.code === 200) {
                context.commit('updateUserChildList', obj)
                console.log('更新用户捐助儿童信息成功')
                return true
            } else {
                console.log('更新用户捐助儿童信息失败')
                return false
            }
        }
    },

    getters: {}

}