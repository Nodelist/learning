let viewer: any,
    handler: any

export default {
    viewer: {},
    scene: {},
    handler: {},

    init(v: any, scene:any) {
        this.viewer = viewer = v;
        this.scene = scene;
    },

    initEvent(eventType: string, result: any) {
        handler = new window.Cesium.ScreenSpaceEventHandler(viewer.canvas);
        handler.setInputAction(function (movement: any) {
            result(movement)
        }, window.Cesium.ScreenSpaceEventType[eventType]);
        this.handler = handler
    }
}