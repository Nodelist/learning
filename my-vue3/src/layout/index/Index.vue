<template>
  <div class="index-container">
    <Header />
    <div
      class="content-container"
      v-loading="loading"
      element-loading-text="计算时间较长，请稍等……"
      element-loading-background="rgba(0, 0, 0, 0.5)"
    >
      <Map3D />
      <Tools class="tool" @boolHole="boolHole" />
      <!-- <div class="layer-tree-container">
        <LayerTree
          :treeData="treeData"
          :defaultProps="defaultProps"
          class="layer-tree"
          @handleCheckChange="handleCheckChange"
        />
      </div> -->
      <!-- <router-viewer></router-viewer> -->
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Map3D from "@/components/SuperMap/Map3D.vue";
import Tools from "./components/Tools.vue";
import LayerTree from "./components/layerTree.vue";
import data from "@/assets/data/data";
import cfg from "@/units/supermap/config";

import { loft3D } from "@/api/dataQuery";
export default {
  name: "Index",
  components: {
    Header,
    Map3D,
    Tools,
    LayerTree,
  },
  data() {
    return {
      treeData: [],
      defaultProps: {
        key: "id",
        children: "dataSets",
        label: "name",
      },
      loading: false,
    };
  },
  mounted() {
    // this.$Map3D.solidModelsProfile.addMoudles(data.dataSource);
    for (let i = 0; i < 20; i++) {
      this.$Map3D.solidModelsProfile.addMoudle("111", `http://localhost:8090/iserver/services/data-cc/rest/data/datasources/cc/datasets/Mode2/features/${i+1}.stream`, "工作面模型/1.png");
    }
    this.$Map3D.solidModelsProfile.showModel();

    // let layer = this.$Map3D.dynamicLayer.addLayers(this.$Map3D.scene, data.cells)
    // X:  106.639881884425 Y:  39.5276074995326 Z:  1113.110
    // this.$Map3D.setView({
    //   destination: {
    //     x: -1407282.6777843689,
    //     y: 4715353.464036681,
    //     z: 4061870.437083227,
    //   },
    //   orientation: {
    //     heading: 2.3539091450618868,
    //     pitch: -0.5542169309369696,
    //     roll: 6.228176493955642,
    //   },
    // });
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
    this.treeData = this.filterArr(data.dataSource);
    // 绑定全局点击事件
    this.$Map3D.events.initEvent("LEFT_CLICK", (res) => {
      let camera = this.$Map3D.viewer.camera;
      let obj = {
        destination: camera.position,
        orientation: {
          heading: camera.heading,
          pitch: camera.pitch,
          roll: camera.roll,
        },
      };
      console.log(res, "相机参数：", obj);
    });

    // this.loft3D([
    //   { x: 106.639847297739, y: 39.5200295340405, z: 955.493 },
    //   { x: 106.639894756883, y: 39.5201718576182, z: 973.7440213 },
    // ]);
    // this.loft3D([
    //   { x: 106.639168668193, y: 39.520517270596, z: 1013.848597 },
    //   { x: 106.639850214063, y: 39.5200290638143, z: 955.493 },
    //   { x: 106.640498294695, y: 39.5195503734725, z: 932.228 }
    // ]);
    // let en = this.$Map3D.entity.addPolylineVolume([
    //   { x: 106.639168668193, y: 39.520517270596, z: 1013.848597 },
    //   { x: 106.639850214063, y: 39.5200290638143, z: 955.493 },
    //   { x: 106.640498294695, y: 39.5195503734725, z: 932.228 }
    // ])
  },
  methods: {
    boolHole(bool) {
      this.loading = bool;
    },
    filterArr(data) {
      let arr = [];
      data.forEach((item) => {
        if (item.isShow) {
          arr.push(item);
        }
      });
      return arr;
    },

    // 控制图层显隐
    handleCheckChange(item, treeInfo) {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>", item, treeInfo);
      let parentNode = treeInfo.halfCheckedNodes,
        parentName = "";
      const checked = treeInfo.checkedKeys.indexOf(item.id) !== -1;
      if (parentNode.length > 0) {
        parentName = parentNode[0].name;
        this.layerControl(item, checked, parentName);
      } else {
        this.layerControl(item, checked);
      }
    },
    // 递归控制树形图层显隐
    layerControl(data, checked, dataSource) {
      if (!data.dataSets || data.dataSets.length === 0) {
        let url = "";
        //   if (dataSource) {
        url = `${
          cfg.map3D.server.baseUrl + cfg.map3D.server.dataServer
        }/rest/data/datasources/${dataSource}/datasets/${
          data.name
        }/features/1.stream`;
        //   }
        this.$Map3D.solidModelsProfile.setLayerVisibleByUrl(url, checked);
      } else if (data.dataSets && data.dataSets.length > 0) {
        data.dataSets.forEach((val) => {
          this.layerControl(val, checked);
        });
      }
    },

    loft3D(points) {
      let geometrySkylineSectorBodyParameter = {
        loftRegion: { type: "CIRCLE", radius: "2", center: { x: 0, y: 0 } },
        loftLine: {
          type: "LINE3D",
          parts: [2],
          // hbc数据
          points,
        },
        chamfer: "50",
        lonlat: "TRUE",
      };
      var queryData = JSON.stringify(geometrySkylineSectorBodyParameter);
      loft3D(queryData).then((res) => {
        if (res.status === 200 || true) {
          console.log(res.data);
          let model = res.data.geometry.model;
          let position = res.data.geometry.position;
          let buffer = new Uint8Array(model).buffer;
          let params = {
            id: "result" + new Date().getTime(),
            position: window.Cesium.Cartesian3.fromDegrees(
              position.x,
              position.y,
              position.z
            ),
            buffer,
            bool: false,
          };
          this.$Map3D.s3mInstance.add(params);
          let label = this.$Map3D.entity.addLabel({
            position: params.position,
            text: "放样结果模型",
          });
          // this.$Map3D.viewer.flyTo(label);
          // this.$Map3D.solidModelsProfile.clipByGeometry(res.data.geometry);
        }
      });
    },
  },
  beforeUnmount() {
    this.$Map3D.viewer.destroy();
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  width: 100%;
  height: 100%;
  .content-container {
    width: 100%;
    height: calc(100% - 65px);
    position: relative;
    .left-container {
      width: 19%;
      height: 100%;
      position: absolute;
      left: 1%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .right-container {
      width: 19%;
      height: 100%;
      position: absolute;
      right: 1%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .bottom-container {
      width: 56%;
      height: 30%;
      margin: 0 auto;
      position: absolute;
      bottom: 0.625rem;
      left: 22%;
    }

    .tool {
      position: absolute;
      top: 0.625rem;
      left: 0.625rem;
      z-index: 9;
    }
    .layer-tree-container {
      width: 15%;
      height: 75%;
      position: absolute;
      left: 1.25rem;
      bottom: 1.875rem;
      z-index: 9;
      background: rgba($color: #015baf, $alpha: 0.8);
      border-radius: 5px;
      color: #fff;
      // .layer-tree {
      // }
    }
  }
}
</style>