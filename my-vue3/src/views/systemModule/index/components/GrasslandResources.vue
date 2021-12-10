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
    <div id="grassChart" class="chart">
      <div class="chart-item" v-for="item in charts" :key="item.id">
        <div class="top">
          <span>{{ item.name }}</span>
          <span>
            <span :style="{ color: item.color }" class="value">{{
              item.value
            }}</span>
            <span>{{ item.unit }}</span>
          </span>
        </div>
        <div class="progress">
          <div class="outer">
            <div
              class="inner"
              :style="{
                '--color': item.color,
                '--progress': (item.value / item.totle) * 100 + '%',
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrasslandResources",
  data() {
    return {
      title: "草原资源",
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
      charts: [
        {
          id: 1,
          name: "草原资源清查",
          value: 12654,
          unit: "条",
          color: "#ff7723",
          totle: 15000,
        },
        {
          id: 2,
          name: "草原生态",
          value: 2054,
          unit: "条",
          color: "#1de6e8",
          totle: 6000,
        },
      ],
    };
  },

  methods: {
    changeYear(year) {
      this.curYear = year;
      this.options.series[0].data = [18, 20, 13, 17, 22];
      this.landChart.setOption(this.options);
    },
    getColor(color) {
        color.substring(1, color.length - 1)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/commonStyle";
#grassChart {
  .chart-item {
    width: 86%;
    // height: 30%;
    margin: 1.25rem auto;
    padding-top: 1.25rem;
    color: #f0f0f0;
    .top {
      display: flex;
      justify-content: space-between;
      .value {
        font-size: 1.25rem;
        margin-right: 4px;
      }
    }
    .progress {
      margin-top: 0.9375rem;
      .outer {
        height: 0.5rem;
        background: #38424a;
        .inner {
          width: var(--progress);
          height: 100%;
        //   background-image: linear-gradient(to right, rgba($color: var(getColor(--color)), $alpha: 0.2), rgba($color: var(--color), $alpha: 1));
          background: var(--color);
          position: relative;
          &::after {
            content: "";
            width: 0.5rem;
            height: 1rem;
            border-radius: 40%;
            background: var(--color);
            position: absolute;
            top: -0.25rem;
            right: 0;
          }
        }
      }
    }
  }
}
</style>