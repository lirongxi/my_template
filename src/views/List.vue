<template>
    <div class="box">
        <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
                <img :src="item" />
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 左右箭头 -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
    </div>
</template>
<script>
export default {
    data() {
        return {
            carouselArr: ['http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 'http://a0.att.hudong.com/64/76/20300001349415131407760417677.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593509246417&di=e98d4300a7e9fc9568dbd9d8db0ad303&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg'],
            swiperOption: {
                 slidesPerView: 3,
                slidesPerGroup: 3,
                //显示分页
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                //设置点击箭头
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev'
                // },
                //自动轮播
                autoplay: {
                    delay: 2000,
                    //当用户滑动图片后继续自动轮播
                    disableOnInteraction: false,
                },
                //开启循环模式
                loop: true
            }


        }
    },
    // mounted() {

    //     this.handle();
    // },
    // methods: {
    //     promiseDemo(ms) {
    //         return new Promise((resolve, reject) => {
    //             setTimeout(resolve, ms)
    //         })
    //     },
    //     async handle() {
    //         console.log("aaa");
    //         await this.promiseDemo(2000);
    //         console.log("bbb");
    //     }
    // }
}
</script>
<style scoped>
.box {
    height: 100%;
    background: #fff
}
.swiper-slide {
    width: 200px;
    height: 200px;
    margin: 0 20px;
}

.swiper-slide img {
    /*width: 100%;*/
    height: 100%
}
</style>