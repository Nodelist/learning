<template>
  <div class="layerTreeWrapper" @click.stop="">
    <div class="lyr-tree-box">
      <el-tree
        class="myTree"
        :data="treeData"
        :props="defaultProps"
        :show-checkbox="showCheckbox"
        node-key="id"
        ref="tree"
        @check="handleCheckChange"
        :default-expanded-keys="[1, 2, 3, 4]"
      >
        <template #default="{ node, data }">
          <span class="custom-tree-node">
            <span v-if="node.isLeaf" :title="node.label" class="isleaf-label">{{
              node.label
            }}</span>
            <span v-else class="isTitle-label">
              <span
                >{{ node.label }} [{{
                  data.children && data.children.length
                }}]</span
              >
              <span class="icon">
                <img
                  src="../../../assets/images/alpha.png"
                  alt=""
                  @click="openTitleAlphaPanel(data)"
                  title="设置透明度"
                  class="alpha-icon"
                />
              </span>
            </span>
            <span v-if="node.isLeaf" class="icon">
              <img
                src="../../../assets/images/local.svg"
                alt=""
                @click="viewTo(data)"
                v-if="showLocation && data.destination && data.orientation"
                title="定位"
                class="local-icon"
              />
              <img
                src="../../../assets/images/alpha.png"
                alt=""
                @click="openAlphaPanel(data)"
                v-if="showAlpha && data.name"
                title="设置透明度"
                class="alpha-icon"
              />
            </span>
          </span>
        </template>
      </el-tree>
    </div>
    <LayerAlpha
      ref="alpha"
      class="layer-alpha"
      :layerData="layerData"
      v-if="alphaVisible"
      @close="close"
      :pos="pos"
    />
  </div>
</template>
<script>
import LayerAlpha from "@/components/SuperMap/LayerAlpha";
export default {
  name: "layerTree",
  props: {
    treeData: {
      type: Array,
      default: [],
    },
    defaultProps: {
      type: Object,
      default: {
        key: "id",
        children: "children",
        label: "label",
      },
    },
    isAllChecked: {
      type: Boolean,
      default: true,
    },
    showCheckbox: {
      type: Boolean,
      default: true,
    },
    showAlpha: {
      type: Boolean,
      default: true,
    },
    showLocation: {
      type: Boolean,
      default: true,
    },
  },
  components: { LayerAlpha },
  data() {
    return {
      alphaVisible: false,
      layerData: {
        name: "",
        layerName: [],
        opacity: 1,
      },

      pos: {
        left: "17.5rem",
        top: "0px",
      },
    };
  },
  mounted() {
    if (this.showCheckbox && this.isAllChecked) {
      this.$refs.tree.setCheckedNodes(this.treeData);
    }
  },
  methods: {
    handleCheckChange(item, treeInfo) {
        this.$emit('handleCheckChange', item, treeInfo)
    },
    // 打开设置透明度面板
    openAlphaPanel(data) {
      if (data.layer) {
        let layer = this.$Map3D.solidModelsProfiles.getLayerByUrl(data.layer);
        if (layer && layer.style3D) {
          this.layerData = {
            name: data.label,
            layerName: [data.layer],
            // opacity: layer.style3D.fillForeColor.alpha,
          };
          this.alphaVisible = true;
          if (this.$refs.alpha) {
            this.$refs.alpha.setOpacityVal(layer.style3D.fillForeColor.alpha);
          }
        } else {
          this.$message.warning("该图层不能设置透明度");
        }
      }
    },
    openTitleAlphaPanel(obj) {
      let layers = [];
      let data = obj.children;
      if (obj.label != "地质模型" && obj.label != "地表模型") {
        for (let i = 0; i < data.length; i++) {
          if (data[i].layer) {
            let layer = this.$Map3D.solidModelsProfiles.getLayerByUrl(
              data[i].layer
            );
            if (layer && layer.style3D) {
              layers.push(data[i].layer);
            }
            this.layerData = {
              name: obj.label,
              layerName: layers,
              // opacity: 1,
            };
            this.alphaVisible = true;
            if (this.$refs.alpha) {
              this.$refs.alpha.setOpacityVal(1);
            }
          }
        }
      } else {
        this.$message.warning("该图层不能设置透明度");
      }

      console.log(data, layers, this.layerData);
    },
    // 关闭面板
    close() {
      this.alphaVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
$color: rgba(
  $color: #1e2c7c,
  $alpha: 0.85,
);
$bgdColor: #fff;
.layerTreeWrapper {
  height: 100%;
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .title-search {
    width: 90%;
    margin: 0 auto;
    // :deep(.el-input__inner) {}
    ::v-deep .el-input__inner {
      height: 2rem;
      font-size: 0.8rem;
      color: #ccc;
      background: rgba(6, 31, 43, 0);
    }
    .el-input__icon {
      font-size: 0.8rem;
      line-height: 2rem;
    }
    .el-icon-search:before {
      font-size: 0.8rem;
      font-weight: 0.8rem;
    }
  }
  .lyr-tree-box {
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    .myTree {
      background-color: rgba(6, 31, 43, 0);
      .custom-tree-node {
        width: 75%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.95rem;
        color: #fff;
        cursor: pointer;
        .isleaf-label {
          width: 6.25rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .isTitle-label {
          display: flex;
          justify-content: space-between;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .icon {
          font-size: 1.1em;
          font-weight: bolder;
          margin-right: 0.75rem;
          display: none;
          img {
            margin-left: 0.9375rem;
          }
          .local-icon {
            width: 1.15rem;
          }
          .alpha-icon {
            width: 0.875rem;
            height: 0.875rem;
          }
          .iconActive {
            color: #00c6fb;
          }
        }
        .el-icon-map-location {
          margin-right: 0.625rem;
        }
        .el-icon-map-location:hover,
        .el-icon-sunny:hover {
          color: #00c6fb;
        }
        .fly-icon {
          font-size: 1.1em;
          font-weight: bolder;
          display: none;
          .el-icon-video-play {
            margin-right: 0.625rem;
          }
        }
        &:hover {
          .icon,
          .fly-icon {
            display: flex;
            align-items: center;
          }
        }
      }
      ::v-deep .el-tree-node {
        .el-tree-node__content {
          padding: 0.5rem 0;
          .el-tree-node__expand-icon {
            color: #fff;
            margin-left: 0.625rem;
            &.is-leaf {
              color: transparent;
              cursor: default;
            }
          }
        }
        .el-tree-node__content:hover {
          background-color: rgba($color: $bgdColor, $alpha: 0.1);
        }
      }
      ::v-deep .el-tree-node:focus > .el-tree-node__content {
        background-color: rgba($color: $bgdColor, $alpha: 0.1);
        .fly-icon {
          display: inline-block;
        }
      }
      ::v-deep .el-tree-node .is-current {
        // background-color: rgba($color: $bgdColor, $alpha: 0.8);
        .custom-tree-node {
          .icon,
          .fly-icon {
            display: flex;
          }
        }
      }
    }
  }
  .layer-alpha {
    pointer-events: auto;
    background: $color;
  }
}
</style>
