export class Map3D {
  // viewer: null;
  // scene: null;

  constructor(containerId) {
    this.id = containerId;
    this.viewer = new Cesium.Viewer(containerId, {
      infoBox: false,
      selectionIndicator: false,
    });
    this.scene = this.viewer.scene;
    this.camera = this.viewer.camera
  }
  
  flyToView(pos) {
    debugger
    console.log(pos)
    this.camera.flyTo({
      destination : new Cesium.Cartesian3.fromDegrees(pos.x, pos.y, pos.z)
  });
  }
} 