<template>
    <div style="width:260px;margin: 100px auto" v-model="flag">
        <el-menu :unique-opened="true" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="9">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <!-- <i class="el-icon-location"></i> -->
                    <span>导航二</span>
                </template>
            </el-submenu>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
	data(){
            return{
                flag:true
            }
        },
        mounted(){
			this.$router.go(-1);
        },
    methods: {
        handleOpen(key, keyPath) {
            console.log('aaa',key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleSelect(key, path) {
            if (path.length == 2) {

                console.log(key, path)
            } else {
                // location.reload();
                this.$router.push('Index');
            }
        }
    }
}
</script>