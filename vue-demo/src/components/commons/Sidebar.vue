<template>
    <div>
        <nav>
            <Menu :active-name="activeMenu" width="auto" :open-names="['1']" @on-select="changeMenu">
                <MenuItem name="Index">
                <Icon type="ios-navigate"></Icon>
                Index1
                </MenuItem>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        Item
                    </template>
                    <MenuItem name="List">List</MenuItem>
                    <MenuItem name="test01">Test 1</MenuItem>
                    <MenuItem name="test02">Test 2</MenuItem>
                </Submenu>
                <MenuItem name="ES6">
                <Icon type="ios-navigate"></Icon>
                ES6
                </MenuItem>
                <MenuItem name="Slot">
                <Icon type="ios-navigate"></Icon>
                Slot
                </MenuItem>
                <!-- <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </template>
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu> -->
            </Menu>
        </nav>
    </div>
</template>
<script>
import bus from '../bus.js';
export default {
    data() {
        return {
            activeMenu: "Index",
            isCollapsed: false
        }
    },
    computed: {
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    },
    mounted() {
         this.activeMenu = this.onRoutes;
        // console.log(this.$route.meta)
        // console.log(this.$router.history)
        // var self = this;
        // bus.$on("collapsedSider",function(msg){
        //         self.isCollapsed = 0;
        //       });
    },
    methods: {
        changeMenu(v) {
            this.$router.replace(v, "");
        }
        // collapsedSider () {
        //              this.$refs.side1.toggleCollapse();
        //          }
    }
}
</script>
<style scoped>
nav {
    width: 200px;
    min-width: 200px;
    max-width: 200px;
    /*flex: 0 0 200px;*/
    position: fixed;
    height: 100vh;
    left: 0px;
    overflow: auto;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    background: #fff;
    box-shadow: 3px 0px 25px 0px rgba(0, 0, 0, 0.3);
    text-align: left;
}
</style>