import cfg from '../config'

let layer: any,
    scene: any
export default {
    viewer: {},
    scene: {},
    layer: {},

    init(viewer = {}, scene: any) {
        this.viewer = viewer;
        scene = this.scene = scene;
    },

    addLayers(scene: any, cells: []) {
        // scene = this.scene
        this.layer = new window.Cesium.DynamicLayer3D(scene._context, cells)
        layer = this.layer
        layer.updataInterval = 500;//动态图层更新时间
        layer.enableLocationOffset = true;//禁止模型局部偏移
        scene.primitives.add(layer);
        return layer
    },

    addStatus() {
        
    },
    
}