<template>
    <div>
        <h1>ES6字符串</h1>
        <!-- <h3>{{str}}</h3> -->
        <!-- <my-component :list="list"></my-component> -->
        <component :myData="list" :is="currentView"></component>
        
    </div>
</template>
<script>
    // import Vue from 'vue'
// Vue.component('my-component', {
//     props: {
//         list: {
//             type: Array,
//             default: () => []
//         }
//     },
//     render(createElement) {
//         if (this.list.length) {
//             return createElement('ul', this.list.map(item => createElement('li', item)))
//         } else {
//             return createElement('p', 'Empty list')
//         }
//     }
// });
import child from './child.js';
export default {
    data() {
        return {
            list: ['html', 'css', 'javascript'],
            currentView: child,
            // 字符串
            pro: '',
            dThis: this
        }
    },
    created() {
        // ES6字符串新特性
        // let str = 'Hello ES6';
        // console.log('includes:'+str.includes('H')); //验证字符串中有无该字符，有返回true,无返回false
        // console.log('startsWith:'+str.startsWith('H'));  //返回布尔值。验证是否在字符串头部 是返回true,否返回false
        // console.log('endsWith:'+str.endsWith('S'));  //返回布尔值。验证是否在字符串尾部  是返回true,否返回false

        // // 字符串拼接
        // let escStr = `字符串拼接${1 > 0.9 ? '大于' : '小于'}`;
        // console.log(escStr)

        // // ES6数组解构
        // let arr = [1,2,3];
        // let [a,b,c] = arr;
        // console.log(a,b,c)

        // 对象解构
        // let obj = {
        //     name: '小米',
        //     age: 21,
        //     language: {
        //         l_name: 'l_小米'
        //     },
        //     list: ['PHP', 'H5', 'VUE']
        // };

        // let { name, age, language, list } = obj;
        // console.log(name, age, language, list)
        // let [p, h, v] = list;
        // console.log(p, h, v)


        // function add(a, b = 1) {
        //     return a + b;
        // }
        // // 传一个参数
        // console.log(add(10, 2));

        // let print2 = obj => console.log(obj);

        // print2('objFun')


        // let person = {
        //     name: "jack",
        //     // 以前：
        //     eat: function(food) {
        //         console.log(this);
        //     },
        //     // 箭头函数版：
        //     eat2: (food) => {console.log(this)}, // 这里拿不到this
        //     // 简写版：
        //     eat3(food) {
        //         console.log(this);
        //     }
        // };
        // // console.log(this)
        // person.eat();
        // person.eat2();
        // person.eat3();

        function o_a() {
            // return {
            let a = (a) => {
                console.log(this)
            };
            let b = function() {
                console.log(this)
            }
            // }
        }


        let n_a = new o_a();
        
        // console.log(n_a.a())
        // o.a()
        // o.b()
    },
    mounted() {
        // this.dThis.aa()
    },
    methods: {
        aa() {
            console.log(this)
        }
    },
    destroyed() {}
}
</script>