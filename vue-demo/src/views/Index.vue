<template>
    <div class="box">
        <h1>Index</h1>
        <button @click="hanleBtn">Add</button>
        <!-- include="test02" exclude="test01" -->
        <keep-alive>
            <v-test1 v-if="test"></v-test1>
            <v-test2 v-else></v-test2>
        </keep-alive>
    </div>
</template>
<script>
import vTest1 from "./test01.vue"
import vTest2 from "./test02.vue"
export default {
    name: 'Index',
    data() {
        return {
            test: true,
            cache: ''
        }
    },
    beforeRouteLeave(to, from, next) {
        // 设置下一个路由的 meta
        // console.log(to)
        // console.log(from)
        next()
    },
    created() {
        /* 缓存对象 */
        this.cache = Object.create(null)
        console.log(this.cache)
    },
    /* destroyed钩子中销毁所有cache中的组件实例 */
    destroyed() {
        for (const key in this.cache) {
        	console.log(this.cache[key])
            pruneCacheEntry(this.cache[key])
        }
    },

    mounted() {

    },
    methods: {
        hanleBtn() {
            this.test = !this.test;
        },
    },
    components: { vTest1, vTest2 },

}
</script>
<style scoped>
.box {
    height: 100%;
    background: #FFFFFF;
}
</style>