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
    <div class="year-container">
      <span
        v-for="year in years"
        :key="year"
        :class="['year-item', { 'year-active': curYear === year }]"
        @click="changeYear(year)"
        >{{ year }}</span
      >
    </div>
    <div id="landChart" class="chart"></div>
  </div>
</template>

<script>
export default {
  name: "LandResource",
  data() {
    return {
      title: "土地资源",
      curYear: "2015",
      resourceData: {
        type: {
          value: 4,
          unit: "类",
        },
        size: {
          value: 2.3,
          unit: "TB",
        },
      },
      years: ["2015", "2016", "2017", "2018", "2019"],
      landChart: null,
      options: {
        color: ["rgba(0, 245, 255, 0.7)"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "none", // 默认为直线，可选为：'line' | 'shadow'
          },
          padding: 8,
          textStyle: {
            fontSize: 12,
          },
          backgroundColor: "rgba(25, 147, 255, 0.3)",
          formatter: (params) => {
            return `${this.getTip(params[0])}`;
          },
        },
        grid: {
          left: "5%",
          top: "11%",
          right: "5%",
          bottom: "3%",
          containLabel: true,
        },
        textStyle: {
          color: "rgba(255,255,255,0.9)",
        },
        xAxis: {
          type: "category",
          data: ["国土调查", "耕地资源", "永久基本", "高标准农"],
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.6)",
            },
          },
          axisLabel: {
            interval: 0,
          },
        },
        yAxis: {
          type: "value",
          // min: 0,
          // max: 100,
          interval: 5,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(255,255,255,0.4)",
              width: 0.5,
            },
          },
          data: ["差", "", "良", "", "优"],
        },
        series: [
          {
            name: "土壤质量",
            type: "bar",
            symbol: "circle",
            showSymbol: false,
            barWidth: "23%",
            label: {
              position: "top",
              color: "rgba(0, 255, 255,1)",
              fontWeight: "bolder",
            },
            data: [17, 12, 14, 18],
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(0, 192, 255, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(0, 192, 255, 0.1)",
                },
              ]),
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.landChart = this.$echarts.init(document.getElementById("landChart"));
    this.landChart.setOption(this.options);
    // window.addEventListener('resize', () => {
    //   this.landChart.resize()
    // })
    // document.getElementById('landChart').addEventListener('resize', () => {
    //   this.landChart.resize()
    // })
  },
  methods: {
    changeYear(year) {
      this.curYear = year;
      this.options.series[0].data = [18, 20, 13, 17,22]
      this.landChart.setOption(this.options)
    },

    getTip(obj) {
       return `${obj.axisValueLabel} <br /> ${obj.seriesName}：${this.getLevel(obj.data)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/commonStyle";
</style>