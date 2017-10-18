<template>
    <div id="echarts">
        图标
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        mounted(){
            this.draw();
        },
        methods:{
            draw(){
                let myEcharts = this.$echarts.init(document.getElementById('echarts'));
                // 绘制图表
                myEcharts.setOption({
                    title: { text: '在Vue中使用echarts' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        }
    }
</script>
<style scoped>
    #echarts{
        width:100%;
        height: 200px;
    }
</style>