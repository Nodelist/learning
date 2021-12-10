<template>
  <div class="drag-container" :style="{left: pos.left, top: pos.top}">
    <p class="drag-header">
      <span class="title">{{layerData.name}}透明度</span>
      <i class="el-icon-close" @click="handleClose"></i>
    </p>
    <div class="drag-content">
      <el-slider
        class="mySlider"
        v-model="opacityVal"
        :show-tooltip="true"
        :step="1"
        @input="opacityChanged"></el-slider>
    </div>
  </div>
</template>

<script>
	export default {
		name: "LayerOpacity",
    data(){
		  return{
        opacityVal: 0,
      }
    },
    props:{
      layerData: Object,
      pos: {
        type: Object,
        default: function() {
          return {
            left: '70%',
            top: '8%'
          }
        }
      }
    },
    mounted(){
      const that = this
		  this.$nextTick(()=>{
        that.opacityVal = (1 - that.layerData.opacity)*100
      })
    },
    methods:{
      opacityChanged(val){
        if (this.layerData.layerName){
          this.layerData.layerName.forEach(item => {
            let layer = Map3D.getLayerByName(item)
            if(layer) {
              layer.style3D.fillForeColor.alpha = (100-val)/100
            }
          });
        }
      },
      setOpacityVal(val) {
        this.opacityVal = (1 - val)*100
      },
      handleClose() {
        this.$emit('close')
      }
    }
	}
</script>

<style lang="scss" scoped>
  .drag-container{
    width: 15rem;
    position: absolute;
    background-color: rgba(6,32,43,0.8);
    border-radius: 5px;
    .drag-header{
      color: #fff;
      padding: 1.25rem 1.25rem .625rem;
      margin: 0;
      font-size: 1em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        letter-spacing: 2px;
      }
      .el-icon-close {
        cursor: pointer;
      }
    }
    .drag-content {
      padding: .625rem .9375rem;
      font-size: .875rem;
      color: #ccc;
      .mySlider{
        width: 95%;
      }
    }
  }

</style>
