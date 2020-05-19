export const increment = state =>{
    state.count++
    state.history.push('increment')
}
export const decrement = state => {
    state.count--
    state.history.push('decrement')
}
export const login =() =>{
    alert("로그인완료")
}
export const join =()=>{
    alert("회원가입")
}