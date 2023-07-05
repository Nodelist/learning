declare let Cesium: any;
import cfg from '../config'
let viewer: any
import s3mInstance from './s3mInstance';
import solidModelsProfile from './solidModelsProfile';
import draw from './draw';
import events from './events';
import dynamicLayer from './dynamicLayer';
import entity from './entity';
import coord from './coord';

let scene: any
export default {
    viewer,
    scene,
    s3mInstance,
    solidModelsProfile,
    draw,
    events,
    dynamicLayer,
    entity,
    coord,

    init(mapId: string) {
        this.viewer = new Cesium.Viewer(mapId)
        this.scene = this.viewer.scene
        this.s3mInstance.init(this.viewer, this.scene)
        this.solidModelsProfile.init(this.viewer, this.scene)
        this.draw.init(this.viewer)
        this.events.init(this.viewer, this.scene)
        this.dynamicLayer.init(this.viewer, this.scene)
        this.entity.init(this.viewer)
        this.coord.init(this.viewer)
        let credit = this.viewer.scene.frameState.creditDisplay
        credit.container.removeChild(credit._cesiumCreditContainer)
        credit.container.removeChild(credit._expandLink)
        this.setUndergroundMode()
    },

    setView(params: { destination: any; orientation: any; }) {
        this.viewer.camera.setView({
            destination: params.destination,
            orientation: params.orientation
        })
    },

    // 设置地下模式
    setUndergroundMode() {
        this.scene.undergroundMode = true;
        // this.scene.globe.globeAlpha = 0.3;
        // scene.globe.show = false;
        this.scene.skyAtmosphere.show = false;
        // 设置不创建裙边
        this.scene.terrainProvider.isCreateSkirt = false;
        // 开启或关闭摄影机与地形的碰撞检测
        this.scene.screenSpaceCameraController.enableCollisionDetection = false
        // this.scene.camera.flyClampToGround = false
        this.scene.screenSpaceCameraController.minimumZoomDistance = -1000; //设置相机最小缩放距离,距离地表-1000米
    },

    flyToTarget(target: any) {
        this.viewer.flyTo(target)
    }
}
