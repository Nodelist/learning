declare let Cesium: any;
import cfg from '../config'
let viewer: any
import s3mInstance from './s3mInstance';
import solidModelsProfile from './solidModelsProfile';
import draw from './draw';
import events from './events';
export default {
    viewer: {},
    scene: {},
    s3mInstance,
    solidModelsProfile,
    draw,
    events,

    init(mapId:string) {
        viewer = new Cesium.Viewer(mapId)
        this.viewer = viewer
        this.scene = viewer.scene
        this.s3mInstance.init(viewer, this.scene)
        this.solidModelsProfile.init(viewer, this.scene)
        this.draw.init(viewer)
        this.events.init(viewer, this.scene)
        let credit = viewer.scene.frameState.creditDisplay
        credit.container.removeChild(credit._cesiumCreditContainer)
        credit.container.removeChild(credit._expandLink)
    },

    setView(params: { destination: any; orientation: any; }) {
        viewer.camera.setView({
            destination: params.destination,
            orientation: params.orientation
        })
    }
    
}
