<template>
    <div>
        <div>카운터: {{count}}</div>
        <button @click="increment">+</button>
        <br>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
export default {
    computed: mapGetters([
        'count'
    ]),
    methods: mapActions([
        'increment',
        'decrement'
    ])
}
</script>

<style scoped>

</style>