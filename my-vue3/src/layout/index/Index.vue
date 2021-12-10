<template>
  <div class="index-container">
    <Header />
    <div class="content-container">
      <Map3D />
      <Tools class="tool" />
      <div class="layer-tree-container">
        <LayerTree
          :treeData="treeData"
          :defaultProps="defaultProps"
          class="layer-tree"
          @handleCheckChange="handleCheckChange"
        />
      </div>
      <router-viewer></router-viewer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Map3D from "@/components/SuperMap/Map3D.vue";
import Tools from "./components/Tools.vue";
import LayerTree from "./components/layerTree.vue";
import data from "@/assets/data/data";
import cfg from '@/units/supermap/config'
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
    };
  },
  mounted() {
    this.$Map3D.solidModelsProfile.addMoudles(data.dataSource);
    this.$Map3D.solidModelsProfile.showModel();
    this.$Map3D.setView({
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
    this.treeData = this.filterArr(data.dataSource);
  },
  methods: {
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
        let parentNode = treeInfo.halfCheckedNodes,
            parentName = ''
        const checked = treeInfo.checkedKeys.indexOf(item.id) !== -1;
        if (parentNode.length > 0) {
            parentName = parentNode[0].name
            this.layerControl(item, checked, parentName);
        } else {
            this.layerControl(item, checked);
        }
    },
    // 递归控制树形图层显隐
    layerControl(data, checked, dataSource) {
      if (!data.dataSets || data.dataSets.length === 0) {
          let url = ''
        //   if (dataSource) {
              url = `${cfg.map3D.server.baseUrl + cfg.map3D.server.dataServer}/rest/data/datasources/${dataSource}/datasets/${data.name}/features/1.stream`
        //   }
          debugger
          this.$Map3D.solidModelsProfile.setLayerVisibleByUrl(
                url,
                checked
              );
      } else if (data.dataSets && data.dataSets.length > 0) {
        data.dataSets.forEach((val) => {
          this.layerControl(val, checked);
        });
      }
    },
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
      width: 18%;
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