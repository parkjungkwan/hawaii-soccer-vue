<template>
    <div id="app">
        <layout>
            <template #header="header">
                <h1>{{header.title}}</h1>
                <h3>로그인</h3>
                <h3>회원가입</h3>
            </template>
        </layout>
    </div>
</template>

<script>
import Layout from "@/components/common/Layout.vue"
export default {
    name: "Home",
    components : {Layout},
    data : ()=>{
        return {

        }
    }
}
</script>
