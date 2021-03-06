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
            meta: {keepAlive: true},
          },
          {
            path: '/Drag',
            component: resolve => require(['../views/Drag.vue'], resolve),
            meta: {keepAlive: true},
          },
          {
            path: '/Date',
            component: resolve => require(['../views/Date.vue'], resolve),
            meta: {keepAlive: true},
          },
          {
            path: '/List',
            component: resolve => require(['../views/List.vue'], resolve),
            // meta:{keepAlive:true}
          },
          {
            path: '/test01',
            component: resolve => require(['../views/test01.vue'], resolve),
          },
          {
            path: '/test02',
            component: resolve => require(['../views/test02.vue'], resolve),
          },
          {
            path: '/jsPlumb',
            component: resolve => require(['../views/jsPlumb.vue'], resolve),
          },
          {
            path: '/ElementMenu',
            component: resolve => require(['../views/ElementMenu.vue'], resolve),
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