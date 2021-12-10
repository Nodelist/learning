<template>
  <div class="sider-component-item">
    <div class="component-header">
      <div class="title">{{ title }}</div>
      <div class="data">
        <span class="type">
          <span class="value">{{ resourceData.type.value }}</span>
          <span class="unit">{{ resourceData.type.unit }}</span>
        </span>
        <span class="line">|</span>
        <span class="size">
          <span class="value">{{ resourceData.size.value }}</span>
          <span class="unit">{{ resourceData.size.unit }}</span>
        </span>
      </div>
    </div>
    <div class="data-type">
        <div class="item" v-for="item in waterData" :key="item.id">
            <img :src="item.url" alt="">
            <div class="value-name">
                <span class="value">{{item.value + ' ' + item.unit}}</span>
                <span class="name">{{item.name}}</span>
            </div>
        </div>
    </div>
    <div id="waterChart" class="chart"></div>
  </div>
</template>

<script>
export default {
  name: "WaterResources",
  data() {
    return {
      title: "水资源",
      resourceData: {
        type: {
          value: 2,
          unit: "类",
        },
        size: {
          value: 2.3,
          unit: "TB",
        },
      },
      waterData: [
          {
              id: 'res-1',
              name: '冰川水资源',
              value: 1401,
              unit: '条',
              url: require('@/assets/images/dataIcon.png')
          },
          {
              id: 'res-2',
              name: '水资源',
              value: 32,
              unit: 'GB',
              url: require('@/assets/images/dataIcon.png')
          }
      ],
      waterChart: null,
      options: {
        color: ['rgba(29, 230, 232, 1)'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
          },
          padding: 8,
          textStyle: {
            fontSize: 12
          },
          backgroundColor: 'rgba(25, 147, 255, 0.3)',
        //   formatter: (params)=>{
        //     return `${this.getTip(params[0])}`
        //   }
        },
        grid: {
          left: "5%",
          top: "11%",
          right: "5%",
          bottom: "3%",
          containLabel: true
        },
        textStyle: {
          color: 'rgba(255,255,255,0.9)'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false, // 不留白，从原点开始
          data: [ '2015', '2016', '2017', '2018', '2019' ],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.6)'
            }
          },
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          type: 'value',
          interval: 5,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'rgba(255,255,255,0.4)',
              width: 0.5
            }
          }
        },
        series: [{
          name: '土地复垦',
          type: 'line',
          symbol:'circle',
          showSymbol: false,
          smooth: true,
          barWidth: '60%',
          label: {
            // show: true,
            position: 'top',
            color: 'rgba(0, 255, 255,1)',
            fontWeight: 'bolder'
          },
          data: [7, 17, 12, 13, 18],
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 91, 175, .9)'
            }, {
                offset: 1,
                color: 'rgba(0, 91, 175, 0.2)'
            }])
          },
        }]
      },
    };
  },
  mounted() {
    this.waterChart = this.$echarts.init(document.getElementById("waterChart"));
    this.waterChart.setOption(this.options);
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/commonStyle";
$color: #1cd9da;
.data-type {
    width: 84%;
    margin: .625rem auto;
    display: flex;
    justify-content: space-between;
    .item {
        display: flex;
        width: 48%;
        img {
            width: 1.5rem;
            border: 2px solid $color;
            border-radius: 3px;
            padding: .375rem;
            margin-right: .9375rem;
        }
        .value-name {
            display: flex;
            flex-direction: column;
            .value {
                color: $color;
                font-size: 1rem;
                font-weight: 600;
            }
            .name {
                font-size: .875rem;
                color: #fff;
            }
        }
    }
}
</style>