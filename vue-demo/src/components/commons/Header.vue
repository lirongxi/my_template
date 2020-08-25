<template>
	<div>
		<Layout>
	        <Header>
				<Menu mode="horizontal" theme="dark" active-name="1" class="bg">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-expand" />
                        </MenuItem>
                        <MenuItem name="2">
                            <!-- <Icon type="ios-repeat" /> -->
                        </MenuItem>
                        <MenuItem name="3">
		        			<Dropdown placement="bottom-start" trigger="click">
	        					<Icon type="ios-globe-outline" />
		        				<DropdownMenu slot="list">
							        <DropdownItem @click.native="languageSwitch('zh')">中文</DropdownItem>
							        <DropdownItem @click.native="languageSwitch('es')">英文</DropdownItem>
							    </DropdownMenu>
		        			</Dropdown>
                        </MenuItem>
                        <MenuItem name="4">
                        	<Col span="12">
					            <ColorPicker v-model="color4" recommend @on-active-change="changeTheme"/>
					        </Col>
                        </MenuItem>
                    </div>
                </Menu>
	        </Header>
	    </Layout>
	</div>
</template>
<script>
	import bus from '../bus.js';
	export default{
		data(){
			return{
				color4: '#19be6b',
			}
		},
		methods:{
			changeTheme(v){
				console.log(v)
			},
			languageSwitch(){

			},
			themeFun(){

			}
		}
	}
</script>
<style scoped>
.layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    background: #adf;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    color: #fff;
}
.layout-nav{
    width: 300px;
    margin: 0 auto;
    margin-right: 20px;
}
.ivu-icon{
	font-size: 32px;
	color: #ffffff;
}
.ivu-icon:hover{
	color: #ffffff
}
.ivu-dropdown-rel>a{
	color: #ffffff;
}

</style>