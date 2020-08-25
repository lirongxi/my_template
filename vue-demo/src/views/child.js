  export default {
      props: {
          myData: Array
      },
      // render: function(createElement) {
      //     console.log(createElement)
      //     return createElement('h3', { style: { color: 'red' }, attrs: { id: 'myData' }, on: { click: this.handleClick } }, this.myData);
      // },
      render: function(createElement) {
          return createElement('div', [ // 由createElement函数构建而成的数组
              createElement('h1', '主标'), // createElement函数返回VNode对象
              createElement('h2', '副标')
          ])
      },

      // render: function(createElement) {
      //     return createElement('h3', 'class':{
      //             foo: true,
      //             bar: false
      //         },
      //         style:{
      //             color: 'red',
      //             fontSize: '18px'
      //         },
      //         attrs: {
      //             id: 'my-data'
      //         },
      //         on: {
      //             click: this.handleClick
      //         }
      //         domProps: {
      //             innerHTML: this.myData
      //         })
      // },
      methods: {
          handleClick: function() {
              console.log(' I am data! ');
          }
      }
  }