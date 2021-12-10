let s3mInstance: any

export default {
    viewer: {},
    scene: {},
    s3mInstance: {},

    init(viewer={}, scene:any) {
        this.viewer = viewer;
        this.scene = scene;
        s3mInstance = new window.Cesium.S3MInstanceCollection(scene._context)
        this.s3mInstance = s3mInstance
        scene.primitives.add(this.s3mInstance)
    },

    add(params: any) {
        s3mInstance.add(params.id, {
            position: params.position
        }, params.buffer, params.bool)
    }
}