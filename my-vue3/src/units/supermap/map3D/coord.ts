let viewer: any,
    Cesium = window.Cesium
export default {
  viewer,

  init(viewer: any) {
    this.viewer = viewer
  },

  /**
   * 相对坐标转绝对坐标（笛卡尔坐标）
   * @param origin 相对坐标系的原点的绝对坐标
   * @param rotationZ 相对坐标系沿地面法向顺时针旋转的角度
   * @param localCoord 相对坐标，返回值为绝对坐标
   * @returns 
   */
  coordLocalToWorld(origin: any, rotationZ: any, localCoord: any) {
    let hpr = new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(rotationZ), 0, 0)
    let MatrixWorldToLocal = Cesium.Transforms.headingPitchRollToFixedFrame(origin, hpr);
    let worldCoord = new Cesium.Cartesian3(0, 0, 0);
    Cesium.Matrix4.multiplyByPoint(MatrixWorldToLocal, localCoord, worldCoord);
    return worldCoord
  },
}