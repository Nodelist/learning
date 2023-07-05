let viewer: any,
    scene: any,
    handler: any,
    Cesium = window.Cesium

export default {
    viewer,
    scene,
    handler,

    init(v: any, scene:any) {
        this.viewer = v;
        this.scene = scene;
    },

    initEvent(eventType: string, result: any) {
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
        const that = this
        this.handler.setInputAction(function (e: any) {
            if (e.position) {
                let position = that.viewer.scene.pickPosition(e.position);
                result(that.viewer.scene.pick(e.position), e, position);
            } else if (e.endPosition) {
                let position = that.viewer.scene.pickPosition(e.endPosition);
                result(that.viewer.scene.pick(e.endPosition), e, position);
            }
        }, Cesium.ScreenSpaceEventType[eventType]);
    }
}