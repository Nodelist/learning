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
    <div class="data-list">
        <div class="result-data">
            <div class="border"></div>
            <span class="name">{{resultData.name}}</span>
            <span class="value-unit">
                <span class="value">{{resultData.value}}</span>
                <span class="unit">{{resultData.unit}}</span>
            </span>
        </div>
        <div class="item" v-for="item in groundData" :key="item.id">
            <span class="name">{{item.name}}</span>
            <span class="value">{{item.value + ' ' + item.unit}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroundResource",
  data() {
    return {
      title: "地表基质",
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
      resultData: {
          value: 5,
          unit: 'TB',
          name: '成果数据'
      },
      groundData: [
          {
              id: 'type-1',
              name: '地表基质调查',
              value: 70,
              unit: '景'
          },
          {
              id: 'type-2',
              name: '地质调查',
              value: 46,
              unit: '个'
          },
          {
              id: 'type-3',
              name: '矿山地质环境',
              value: 50,
              unit: '个'
          },
          {
              id: 'type-4',
              name: '地质灾害',
              value: 20,
              unit: '个'
          }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/commonStyle";
$color: #1cd9da;
.data-list {
    width: 84%;
    height: 88%;
    margin: .625rem auto;
    color: #fff;
    // overflow: hidden;
    .result-data {
        width: 90%;
        margin: .875rem auto;
        padding: .5rem 1.25rem;
        background: rgba($color: $color, $alpha: 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .value-unit {
            .value {
                color: $color;
                font-size: 1.5rem;
            }
            .unit {
                font-size: .875rem;
                margin-left: 5px;
            }
        }
        .border {
            position: absolute;
            bottom: 0px;
            width: 100%;
            &::before {
                content: '';
                position: absolute;
                left: -1.5625rem;
                bottom: -0.4375rem;
                border-left: 2px solid $color;
                border-bottom: 2px solid $color;
                width: 0.5rem;
                height: 0.5rem;
            }
            &::after {
                content: '';
                position: absolute;
                right: .9375rem;
                bottom: -0.4375rem;
                border-right: 2px solid $color;
                border-bottom: 2px solid $color;
                width: 0.5rem;
                height: 0.5rem;
            }
        }
        &::before {
            content: '';
            position: absolute;
            left: -0.3125rem;
            top: -0.4375rem;
            border-left: 2px solid $color;
            border-top: 2px solid $color;
            width: .5rem;
            height: .5rem;
        }
        &::after {
            content: '';
            position: absolute;
            right: -0.3125rem;
            top: -0.4375rem;
            border-right: 2px solid $color;
            border-top: 2px solid $color;
            width: .5rem;
            height: .5rem;
        }
    }
    .item {
        width: 86%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        line-height: 2.875rem;
        font-size: .875rem;
        padding: 0 .625rem;
        &:nth-child(even) {
            line-height: 2.25rem;
            background: linear-gradient(to right, rgba($color: $color, $alpha: 0) 0, rgba($color: $color, $alpha: 0.1) 50%, rgba($color: $color, $alpha: 0) 100%);
        }
    }
}
</style>