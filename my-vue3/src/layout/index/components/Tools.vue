<template>
  <div class="tools-container">
    <div class="dzt-operate">
      <el-button @click="boolopeartor" class="button black"
        >布尔运算</el-button
      >
      <el-button @click="clipLine" class="button black"
        >画线剖切</el-button
      >
      <el-button @click="clip" class="button black"
        >画面剖切</el-button
      >
      <el-button @click="dig" class="button black"
        >开挖</el-button
      >
      <el-button @click="addHole" class="button black"
        >交互钻孔</el-button
      >
      <el-button @click="showHole" class="button black"
        >显示钻孔</el-button
      >
      <el-button @click="clear" class="button black"
        >清除</el-button
      >
    </div>

    <div class="dzt-operate">
      <label class="form-label">开挖/钻孔深度(米) :</label>
      <input type="text" class="form-control" v-model="depth" />
    </div>
    <div>
      <label style="color: #ffffff">显示钻孔</label>
      <input type="checkbox" @change="showDrilling" />
    </div>
    <el-button @click="defaultCamera" class="button black"
      >初始化视角</el-button
    >
  </div>
</template>

<script>
import { dataQuery, boolOpt } from "@/api/dataQuery";
import data from "@/assets/data/data.ts"
export default {
  name: "Tools",
  data() {
    return {
      depth: 500,
      pointsArray: []
    };
  },
  mounted() {
    const that = this
    this.$Map3D.draw.addPointEvent('drawEvt', res => {
      const point = Cesium.Cartesian3.clone(res.object.position);
      that.pointsArray.push(point);
      that.$Map3D.draw.handlerPoint.activate();//再激活，画多个钻孔
      
    })
    this.$Map3D.draw.addLineEvent('drawEvt', res => {
      that.$Map3D.draw.clear()
      that.$Map3D.solidModelsProfile.lineClip(res.object)
    })
    this.$Map3D.draw.addPolygonEvent('drawEvt', res => {
      that.$Map3D.draw.clear()
      that.$Map3D.solidModelsProfile.polygonClip(res.object, that.depth)
    })
    this.$Map3D.events.initEvent('RIGHT_CLICK', res => {
      that.$Map3D.draw.clear()
      that.$Map3D.solidModelsProfile.pointsClip(this.pointsArray, false, that.depth)
    })
  },
  methods: {
    // 布尔运算
    boolopeartor() {
      let params1 = {
        server: "data-cc",
        queryData: JSON.stringify({
          datasetNames: ["cc:BuilderResult"],
          getFeatureMode: "SQL",
          queryParameter: {
            attributeFilter: "SMID=1",
          },
        }),
      };
      dataQuery(params1).then((res) => {
        let operateGeometry = res.data.features[0].geometry;
        let params2 = {
            server: "data-cc",
            queryData: {
                "datasetNames": ["cc:Mode2"],
                getFeatureMode: "SQL",
                queryParameter: {
                    attributeFilter: "SMID=10"
                }
            },
        };
        dataQuery(params2).then((res) => {
            let sourceGeometry = res.data.features[0].geometry;
            let params3 = {
                "sourceGeometry": sourceGeometry,
                "operateGeometry": operateGeometry,
                "mode": "ERASE"
            }
            boolOpt(params3).then(res => {
                let geometry = res.data.geometry
                if (geometry) {
                    let buffer = new Uint8Array(geometry.model).buffer;
                    let position = geometry.position;
                    let params = {
                      id: "result",
                      position: window.Cesium.Cartesian3.fromDegrees( position.x, position.y, position.z ),
                      buffer,
                      bool: false
                    }
                    this.$Map3D.s3mInstance.add(params);
                    this.$Map3D.viewer.scene.camera.setView({
                        destination: {
                            x: -1768075.146065385,
                            y: 4561344.376696695,
                            z: 4093720.4480682877
                        },
                        orientation: {
                            heading: 2.998686369954206,
                            pitch: -0.02298373499486872,
                            roll: 6.2831853071795845
                        }
                    })

                }
            })
        });
      });
    },
    // 画线剖切
    clipLine() {
      this.$Map3D.solidModelsProfile.setClippingType('KeepInside')
      this.$Map3D.draw.activeHandler('Line')
      // this.$Map3D.draw.clear();
    },
    // 画面剖切
    clip() {
      this.$Map3D.solidModelsProfile.setClippingType('KeepInside')
      this.$Map3D.draw.activeHandler('Polygon')
    },
    // 开挖
    dig() {
      this.$Map3D.solidModelsProfile.setClippingType('KeepOutside')
      this.$Map3D.draw.activeHandler('Polygon')
    },
    // 添加交互钻孔
    addHole() {
      this.$Map3D.draw.activeHandler('Point')
    },
    // 显示钻孔
    showHole() {
      this.$Map3D.solidModelsProfile.pointsClip(data.pointsArray, true, this.depth)
    },
    // 清除
    clear() {
      this.$Map3D.draw.clearAndDeactivate()
      this.$Map3D.solidModelsProfile.clearProfile()
      this.pointsArray = []
    },
    showDrilling() {},
    // 初始化视角
    defaultCamera() {
      this.$Map3D.viewer.scene.camera.setView({
        destination: {
          x: -1777539.859513632,
          y: 4564524.826305293,
          z: 4092352.1736984774,
        },
        orientation: {
          heading: 5.331404109136935,
          pitch: -0.4790678889350506,
          roll: 6.2831853071795205,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tools-container {
  width: 37.5rem;
  height: 18.75rem;
  pointer-events: none;
  & > * {
    pointer-events: auto;
  }
}
</style>