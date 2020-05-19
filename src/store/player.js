const state = {
    userid : '',
    passwd : ''
}
const mutations = {
    login(){
        alert("로그인완료")
    },
    join(){
        alert("회원가입")
    }
}
const getters = {

}
const actions = {
    login({commit}){
        commit('login')
    },
    join({commit}){
        commit('join')
    }
}

export default {
    name: 'player',
    namespace : true,
    state,
    actions,
    mutations,
    getters
}