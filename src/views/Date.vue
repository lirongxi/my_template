<template>
    <!-- <calander @assignment="assignment" :propshow="propshow" :boothArray="boothArray" :calanderList="calanderList"></calander> -->
    <div class="c-day">
        <div class="d-item" v-for="item in days">
            <div>{{item.num}}</div>
        </div>
    </div>
</template>
<script>
import calander from './temp.vue'
export default {
    components: {
        calander
    },
    data() {
        return {
            calanderList: [],
            boothArray: [1, 2],
            propshow: false,
            days:[]
        };
    },
    mounted(){
    	this.days = this.getFullChunkDates('2020-10-16')
    	console.log(this.days)
    },
    methods: {
        assignment() {
            // 组件调取父级方法
        },

        getDates(d, t = 0) {
            var curDate = new Date(d.replace(/-/g, '/'))
            var curMonth = curDate.getMonth()
            curDate.setMonth(curMonth + t + 1)
            curDate.setDate(0)
            var curDates = new Array(curDate.getDate()).fill(0).map((item, key) => {
                return key + 1
            })
            return curDates
        },
        getWeek(d) {
            var curDate = new Date(d.replace(/-/g, '/'))
            curDate.setDate(1)
            return curDate.getDay()
        },
        getFullChunkDates(d) {
            var curDates = this.getDates(d)
            var preDates = this.getDates(d, -1)
            var nexDates = this.getDates(d, 1)
            var curWeek = this.getWeek(d)
            curDates = curDates.map((i, k) => {
                return {
                    num: i,
                    fullDate: /(^\d{4})-(\d{1,2})-/.exec(d)[0] + i,
                    show: 1
                }
            })
            preDates = preDates.map(i => {
                return {
                    num: i,
                    show: 0
                }
            })
            nexDates = nexDates.map(i => {
                return {
                    num: i,
                    show: 0
                }
            })
            var preCurDates = preDates.slice(preDates.length - (curWeek === 0 ? 6 : curWeek - 1), preDates.length).concat(curDates)
            return preCurDates.concat(nexDates.slice(0, 42 - preCurDates.length))
        }
    }
}
</script>
<style scoped>
	.c-day{
    display: flex;
    width: 700px;
    flex-wrap: wrap;
    justify-content: space-around;
}

.d-item{
    display: flex;
    display: inline-block;
    width: 100px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    text-align: center;
    padding: 40px;
}
</style>