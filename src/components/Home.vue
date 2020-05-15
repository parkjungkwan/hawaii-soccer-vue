<template>
    <div id="app">
        <Layout>
            <template #header="self">
                <router-link to="/"><h1 id="title">{{self.title}}</h1></router-link>
                <router-link to="/join"><span id="join">{{self.join}}</span></router-link>
                <router-link to="/login"><span id="login">{{self.login}}</span></router-link>
            </template>
            <template #sidebar>
                <ul class="menu">
                    <li v-for="i of sidebars" :key="i.menu">
                        {{i.menu}}
                    </li>
                </ul>
            </template>
            <template #content>
                <router-view/>
            </template>
            <template #footer="self" >
                <h3 id="footer">{{self.footer}}</h3>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "../components/common/Layout.vue"
export default {
    components : {Layout},
    data(){

        return {
            sidebars: [
                {menu: '쓰기'},
                {menu: '목록'},
                {menu: '검색'},
                {menu: '수정'},
                {menu: '삭제'}
            ]

        }
    },
    created () {
        //can use Data(this.title, this.titleComputed ...), events(vm.$on, vm.$once, vm.$off, vm.$emit)
        //don't use $el
    }
}
</script>
<style scoped>
    ul.menu{
        position: relative;
        padding: 5px;
        list-style: none;
        font-style: italic;
    }
    #title{width: 300px;margin: 0 auto}
    #login{margin-right: 50px; float: right}
    #join{margin-right: 50px; float: right}
    #footer{width: 300px; margin: 0 auto}
</style>
