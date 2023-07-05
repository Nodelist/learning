let viewer: any;
let Cesium = window.Cesium
export default {
  viewer,
  scene: {},

  init(viewer: any) {
    this.viewer = viewer;
    this.scene = viewer.scene;
  },

  addLabel(params: any) {
    let position
    if (params.position.x) {
      position = params.position
    } else {
      position = new Cesium.Cartesian3.fromDegrees(params.position.longitude, params.position.latitude, params.position.height)
    }
    return this.viewer.entities.add({
      position: position,
      // orientation: orientation,
      type: params.entityType ? params.entityType : '',
      obj: params.obj || {},
      label: {
        text: params.text,
        font: params.font || '36px Helvetica',
        showBackground: true,
        backgroundPadding: new Cesium.Cartesian2(15, 15),
        backgroundColor: new Cesium.Color(0, 0, 1, 0.5),
        // fillColor: Cesium.Color.RED,
        // 源点的方向
        horizontalOrigin: Cesium.HorizontalOrigin[params.horizontalOrigin ? params.horizontalOrigin : 'CENTER'], //CENTER:0;LEFT: 1;RIGHT: -1
        verticalOrigin: Cesium.VerticalOrigin[params.verticalOrigin ? params.verticalOrigin : 'CENTER'],
        scale: .8,
        scaleByDistance: new Cesium.NearFarScalar(100, .8, 300, .5, 500, .3, 1000, 0.0),
        pixelOffset: new Cesium.Cartesian3(1, 0, -30),
        // 在相机距离范围内显示
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 3000)
      },
      point: {
        color: Cesium.Color.BLUE,
        pixelSize: 20,
        scaleByDistance: new Cesium.NearFarScalar(50, .8, 500, .5),
      },
      description: params.des ? params.des : '',
      classificationType: Cesium.ClassificationType.CESIUM_3D_TILE,  // 贴在3D TILE表面
      chartDataOption: params.chartOption ? params.chartOption : '',
    })
  },

  addCylinder() {
    return this.viewer.entities.add({
      name: "Green cylinder with black outline",
      position: Cesium.Cartesian3.fromDegrees(106.639847297739, 39.5200295340405, 955.493),
      cylinder: {
        length: 100.0,
        topRadius: 2.0,
        bottomRadius: 2.0,
        material: Cesium.Color.GREEN.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.DARK_GREEN,
      },
    })
  },
  
  addPolylineVolume(positions: Array<any>) {
    let points: any[];
    points = []
    positions.forEach(item=> {
      points.push(Cesium.Cartesian3.fromDegrees(item.x, item.y, item.z))
    })
    return this.viewer.entities.add({
      polylineVolume: {
        positions: points,
        shape: computeCircle(2),
        material: Cesium.Color.WHITE,
      },
    });
  }
}

function computeCircle(radius:any) {
  const positions = [];
  for (let i = 0; i < 360; i++) {
    const radians = Cesium.Math.toRadians(i);
    positions.push(
      new Cesium.Cartesian2(
        radius * Math.cos(radians),
        radius * Math.sin(radians)
      )
    );
  }
  return positions;
}