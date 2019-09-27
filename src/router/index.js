import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
	{
		path: '/',
      	redirect: '/Index'
	},{
      	path: '/Home',
      	component: resolve => require(['../components/commons/Home.vue'], resolve),
      	alias: '/Index',
      	meta: {
        	requiresAuth: true
      	},
      	children:[
          {
            path: '/',
            component: resolve => require(['../views/Index.vue'], resolve),
            meta: {keepAlive: false},
          },
          {
            path: '/List',
            component: resolve => require(['../views/List.vue'], resolve),
            // meta:{keepAlive:true}
          },
      	]
  	}
];
const Router = new VueRouter({
	mode: 'history',
	routes: routes
});

export default Router;

// {
//   path: '/Sidebar',
//   component: resolve => require(['../components/commons/Sidebar.vue'], resolve),
//   meta: {
//     title: '菜单',
//       list:[
//         {
//           name:'面包屑1',
//         },
//         {
//           name:'面包屑2',
//         },
//         {
//           name:'面包屑3',
//         }
//       ]
//   },
// },
// {
//   path: '/Header',
//   component: resolve => require(['../components/commons/Header.vue'], resolve),
// }