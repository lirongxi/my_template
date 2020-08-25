<template>
    <div class="box" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :key="banner" v-for="banner in banners">
                <img :src="banner">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            banners: ['http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 'http://a0.att.hudong.com/64/76/20300001349415131407760417677.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593509246417&di=e98d4300a7e9fc9568dbd9d8db0ad303&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg'],
            swiperOption: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                loop: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }, //这样写小圆点就有了
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
            }
        }
    },
    mounted() {
        console.log('Current Swiper instance object', this.mySwiper)
        // this.mySwiper.slideTo(3, 1000, false)
    }
}
</script>
<style>
.swiper-wrapper{
    width: 600px;
    height: 200px;
    margin: auto;
}
.swiper-slide {
    width: 100px;
    height: 200px;
    height: 200px;
    margin: 0 20px;
}

.swiper-slide img {
    /*width: 100%;*/
    height: 100%
}
/*.classname*/
</style>