<template>
    <div class="layout">
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="center">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
            
        </div>
    </div>
</template>

<script>
  import Sidebar from '@/components/commons/Sidebar.vue'
  import Header from '@/components/commons/Header.vue'
export default {
    name: 'Home',
    components:{Header, Sidebar},
    props: {
        msg: String
    },
    data(){
        return{
            switch1: false
        }
    },
      
    methods: {
        change (status) {
            this.$Message.info('开关状态：' + status);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.center{
        position: absolute;
        left: 200px;
        right: 0;
        top: 65px;
        bottom:0;
        width: auto;
        padding:15px;
        box-sizing: border-box;
        overflow:auto;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #eeeeee;
    }
</style>
