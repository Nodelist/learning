declare let Cesium: any;
import cfg from '../config'
let viewer: any
import s3mInstance from './s3mInstance';
import solidModelsProfile from './solidModelsProfile';
import draw from './draw';
import events from './events';
import dynamicLayer from './dynamicLayer';
export default {
    viewer: {},
    scene: {},
    s3mInstance,
    solidModelsProfile,
    draw,
    events,
    dynamicLayer,

    init(mapId:string) {
        viewer = new Cesium.Viewer(mapId)
        this.viewer = viewer
        this.scene = viewer.scene
        this.s3mInstance.init(viewer, this.scene)
        this.solidModelsProfile.init(viewer, this.scene)
        this.draw.init(viewer)
        this.events.init(viewer, this.scene)
        this.dynamicLayer.init(viewer, this.scene)
        let credit = viewer.scene.frameState.creditDisplay
        credit.container.removeChild(credit._cesiumCreditContainer)
        credit.container.removeChild(credit._expandLink)
        this.setUndergroundMode(this.scene)
    },

    setView(params: { destination: any; orientation: any; }) {
        viewer.camera.setView({
            destination: params.destination,
            orientation: params.orientation
        })
    },

    // 设置地下模式
    setUndergroundMode(scene:any) {
        scene.undergroundMode = true;
        // this.scene.globe.globeAlpha = 0.3;
        // scene.globe.show = false;
        scene.skyAtmosphere.show = false;
        // 设置不创建裙边
        scene.terrainProvider.isCreateSkirt = false;
        // 开启或关闭摄影机与地形的碰撞检测
        scene.screenSpaceCameraController.enableCollisionDetection = false
            // this.scene.camera.flyClampToGround = false
        scene.screenSpaceCameraController.minimumZoomDistance = -1000; //设置相机最小缩放距离,距离地表-1000米
    },
    
}
