<template>
  <div class="tools-container">
    <div class="dzt-operate">
      <el-button @click="boolopeartor" class="button black">布尔运算</el-button>
      <el-button @click="clipLine" class="button black">画线剖切</el-button>
      <el-button @click="clip" class="button black">画面剖切</el-button>
      <el-button @click="dig" class="button black">开挖</el-button>
      <el-button @click="addHole" class="button black">交互钻孔</el-button>
      <el-button @click="showHole" class="button black">显示钻孔</el-button>
      <el-button @click="clipByPoints" class="button black">倾斜钻孔</el-button>
      <el-button @click="boolHole" class="button black">布尔运算钻孔</el-button>
      <el-button @click="clear" class="button black">清除</el-button>
    </div>

    <div class="dzt-operate">
      <label class="form-label">开挖/钻孔深度(米) :</label>
      <input type="text" class="form-control" v-model="depth" />
    </div>
    <el-button @click="defaultCamera" class="button black"
      >初始化视角</el-button
    >
  </div>
</template>

<script>
import { dataQuery, boolOpt, loft3D } from "@/api/dataQuery";
import data from "@/assets/data/data.ts";
export default {
  name: "Tools",
  data() {
    return {
      depth: 500,
      pointsArray: [],
    };
  },
  mounted() {
    const that = this;
    this.$Map3D.draw.addPointEvent("drawEvt", (res) => {
      const point = window.Cesium.Cartesian3.clone(res.object.position);
      that.pointsArray.push(point);
      that.$Map3D.draw.handlerPoint.activate(); //再激活，画多个钻孔
    });
    this.$Map3D.draw.addLineEvent("drawEvt", (res) => {
      that.$Map3D.draw.clear();
      that.$Map3D.solidModelsProfile.lineClip(res.object);
    });
    this.$Map3D.draw.addPolygonEvent("drawEvt", (res) => {
      that.$Map3D.draw.clear();
      that.$Map3D.solidModelsProfile.polygonClip(res.object, that.depth);
    });
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
            datasetNames: ["cc:Mode2"],
            getFeatureMode: "SQL",
            queryParameter: {
              attributeFilter: "SMID=10",
            },
          },
        };
        dataQuery(params2).then((res) => {
          let sourceGeometry = res.data.features[0].geometry;
          let params3 = {
            sourceGeometry: sourceGeometry,
            operateGeometry: operateGeometry,
            // mode: "ERASE", // 求差
            // mode: "UNION", // 合并
            mode: "INTERSECT", // 求交
          };
          boolOpt(params3).then((res) => {
            let geometry = res.data.geometry;
            if (geometry) {
              let buffer = new Uint8Array(geometry.model).buffer;
              let position = geometry.position;
              let params = {
                id: "result",
                position: window.Cesium.Cartesian3.fromDegrees(
                  position.x,
                  position.y,
                  position.z
                ),
                buffer,
                bool: false,
              };
              this.$Map3D.s3mInstance.add(params);
              this.$Map3D.viewer.scene.camera.setView({
                destination: {
                  x: -1768075.146065385,
                  y: 4561344.376696695,
                  z: 4093720.4480682877,
                },
                orientation: {
                  heading: 2.998686369954206,
                  pitch: -0.02298373499486872,
                  roll: 6.2831853071795845,
                },
              });
            }
          });
        });
      });
    },
    // 画线剖切
    clipLine() {
      this.$Map3D.solidModelsProfile.setClippingType("KeepInside");
      this.$Map3D.draw.activeHandler("Line");
      // this.$Map3D.draw.clear();
    },
    // 画面剖切
    clip() {
      this.$Map3D.solidModelsProfile.setClippingType("KeepInside");
      this.$Map3D.draw.activeHandler("Polygon");
    },
    // 开挖
    dig() {
      this.$Map3D.solidModelsProfile.setClippingType("KeepOutside");
      this.$Map3D.draw.activeHandler("Polygon");
    },
    // 添加交互钻孔
    addHole() {
      const that = this;
      this.$Map3D.events.initEvent("RIGHT_CLICK", (res) => {
        that.$Map3D.draw.clear();
        that.$Map3D.solidModelsProfile.pointsClip(
          that.pointsArray,
          false,
          that.depth
        );
      });
      this.$Map3D.draw.activeHandler("Point");
    },
    // 显示钻孔
    showHole() {
      this.$Map3D.solidModelsProfile.pointsClip(
        data.pointsArray,
        true,
        this.depth
      );
    },
    // 清除
    clear() {
      this.$Map3D.draw.clearAndDeactivate();
      this.$Map3D.solidModelsProfile.clearProfile();
      this.pointsArray = [];
    },
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

    clipByPoints() {
      this.$Map3D.solidModelsProfile.clipByPoints(
        { x: 106.639850214063, y: 39.5200290638143, z: 955.493 },
        { x: 106.639168668193, y: 39.520517270596, z: 1013.848597 }
      );
    },

    // 布尔运算钻孔
    boolHole() {
      const that = this;
      this.$emit("boolHole", true);
      // return
      let points = [
        { x: 111.185634993347, y: 39.9201579816931, z: 828.448 },
        { x: 111.185891520004, y: 39.920257804378, z: 828.156 },
        { x: 111.186060657813, y: 39.9203723184441, z: 793.319 },
        { x: 111.186090047656, y: 39.920387802355, z: 790.184 },
        { x: 111.186517264899, y: 39.9205987096911, z: 749.262 },
        { x: 111.187741950685, y: 39.9211342329055, z: 663.823 },
        // { x: 111.189933356518, y: 39.9206920549129, z: 829.07 },
        // { x: 111.19000852261, y: 39.9208353018706, z: 815.936 },
        // { x: 111.1900722454, y: 39.9209548889452, z: 802.854 },
        // { x: 111.190313536578, y: 39.9214319850698, z: 757.383 },
        // { x: 111.190365961064, y: 39.9215362122036, z: 747.383 },
        // { x: 111.190538322147, y: 39.9218788847485, z: 714.505 },
      ];
      let geometrySkylineSectorBodyParameter = {
        loftRegion: { type: "CIRCLE", radius: "2", center: { x: 0, y: 0 } },
        loftLine: {
          type: "LINE3D",
          parts: [2],
          points,
        },
        chamfer: "50",
        lonlat: "TRUE",
      };
      var queryData = JSON.stringify(geometrySkylineSectorBodyParameter);
      loft3D(queryData).then((res) => {
        if (res.status === 200 || true) {
          console.log(res.data);
          let operateGeometry = res.data.geometry;
          let params2 = {
            server: "data-cc",
            queryData: JSON.stringify({
              datasetNames: ["cc:workface"],
              getFeatureMode: "SQL",
              queryParameter: {
                attributeFilter: "SMID=1",
              },
            }),
          };
          dataQuery(params2).then((res) => {
            let sourceGeometry = res.data.features[0].geometry;
            let params3 = {
              sourceGeometry: sourceGeometry,
              operateGeometry: operateGeometry,
              // mode: "ERASE", // 求差
              // mode: "UNION", // 合并
              mode: "INTERSECT", // 求交
            };
            boolOpt(params3).then((res) => {
              for (let i = 0; i < 20; i++) {
                this.$Map3D.solidModelsProfile.setLayerVisibleByUrl(`http://localhost:8090/iserver/services/data-cc/rest/data/datasources/cc/datasets/Mode2/features/${i+1}.stream`, false);
              }
              let geometry = res.data.geometry;
              if (geometry) {
                let buffer = new Uint8Array(geometry.model).buffer;
                let position = geometry.position;
                let params = {
                  id: "result",
                  position: window.Cesium.Cartesian3.fromDegrees(
                    position.x,
                    position.y,
                    position.z
                  ),
                  buffer,
                  bool: false,
                };
                this.$Map3D.s3mInstance.add(params);
                that.$emit("boolHole", false);
                this.$Map3D.setView({
                  destination: {
                    x: -1768223.7586359459,
                    y: 4561823.805242427,
                    z: 4093408.381200676,
                  },
                  orientation: {
                    heading: 6.123379728382593,
                    pitch: -0.603434071842464,
                    roll: 2.6645352591003757e-14,
                  },
                });
              }
            });
          });
        }
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