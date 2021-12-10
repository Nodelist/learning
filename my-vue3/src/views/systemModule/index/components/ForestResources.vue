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
    <div id="forestChart" class="chart"></div>
  </div>
</template>

<script>
export default {
  name: "ForestResources",
  data() {
    return {
      title: "森林资源",
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
      curYear: "2015",
      forestChart: null,
      options: {
        color: ["#1fb9bf", "#1fb9bf", "#1fb9bf", "#1fb9bf"],
        grid: {
          left: "5%",
          top: "11%",
          right: "5%",
          bottom: "3%",
          //   containLabel: true,
        },
        radar: {
          indicator: [
            { name: "林业资源", max: 1 },
            { name: "林业重点工程", max: 1 },
            { name: "森林灾害", max: 1 },
            { name: "林业资产", max: 1 },
          ],
          splitNumber: 4,
          name: {
            textStyle: {
              fontSize: 12,
              color: "#ccc",
              // padding: function(param) {
              //     let padList = [[10, 40,0,0],[10, 40,0,0],[10, 40,0,0],[10, 40,0,0]];
              //     return padList[param.dataIndex]
              // }
            },
          },
          splitArea: {
            areaStyle: {
              color: [
                "rgba(46, 89, 108, 0.4)",
                "rgba(35, 88, 138, 0.4)",
                "rgba(46, 89, 108, 0.4)",
                "rgba(35, 88, 138, 0.4)",
              ],
              shadowColor: "rgba(0, 0, 0, 0.2)",
              shadowBlur: 10,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(21, 136, 221, 0.8)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(35, 88, 138, 0.8)",
            },
          },
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [0.5, 0.3, 0.8, 0.7],
                // name: "Actual Spending",
                areaStyle: {
                  color: new this.$echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: "rgba(29, 226, 231, 0.6)",
                      offset: 0,
                    },
                    {
                      color: "rgba(29, 226, 231, 0.6)",
                      offset: 1,
                    },
                  ]),
                },
                lineStyle: {
                  color: "rgba(29, 226, 231, 1)",
                },
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.forestChart = this.$echarts.init(
      document.getElementById("forestChart")
    );
    this.forestChart.setOption(this.options);
  },
  methods: {
    changeYear(year) {
      this.curYear = year;
      this.options.series[0].data = [18, 20, 13, 17, 22];
      this.landChart.setOption(this.options);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/commonStyle";
</style>