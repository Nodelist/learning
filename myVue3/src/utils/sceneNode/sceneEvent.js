function SceneEvent() {
  this.addProperty('event', '', 'string');
  this.addProperty('clickType', '', 'string');
  this.addOutput('out', 'object')
}

// 场景事件节点
SceneEvent.prototype.onExecute = function () {
  let viewer = window.viewer3D.viewer
  const event = this.properties['event']
  debugger
  if (!event) {
    console.warn('场景事件未指定具体事件')
    return;
  }
  if (event === 'click') {
    const clickType = this.properties['clickType']
    if (event && this[event]) {
      this[event](viewer, clickType);
    }
  } else {
    this[event] && this[event](viewer);
  }
}
SceneEvent.title = '场景事件'
SceneEvent.desc = '场景事件节点'

/**
 * 场景点击事件
 * @param {场景对象} viewer 
 * @param {点击事件事件类型} clickType 
 */
SceneEvent.prototype.click = function (viewer, clickType) {
  let scene = viewer.scene
  var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
  //设置鼠标左键单击回调事件
  handler.setInputAction(function (e) {
    //首先移除之前添加的点
    viewer.entities.removeAll();
    //获取点击位置笛卡尔坐标
    var position = scene.pickPosition(e.position);

    //将笛卡尔坐标转化为经纬度坐标
    var cartographic = Cesium.Cartographic.fromCartesian(position);
    var longitude = Cesium.Math.toDegrees(cartographic.longitude);
    var latitude = Cesium.Math.toDegrees(cartographic.latitude);
    var height = cartographic.height;
    if (height < 0) {
      height = 0;
    }

    //创建弹出框信息
    var entity = new Cesium.Entity({
      name: "位置信息",
      description: createDescription(Cesium, [longitude, latitude, height.toFixed(4)])
    });
    viewer.selectedEntity = entity;

    //在点击位置添加对应点
    viewer.entities.add(new Cesium.Entity({
      point: new Cesium.PointGraphics({
        color: new Cesium.Color(1, 1, 0),
        pixelSize: 10,
        outlineColor: new Cesium.Color(0, 1, 1)
      }),
      position: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 0.5)
    }));
    console.log(longitude, latitude, height)
  }, Cesium.ScreenSpaceEventType[clickType]);
}

// 相机定位
function CameraFly() {
  this.addInput('input', 'object');

}
CameraFly.title = '相机飞行'
CameraFly.desc = '相机飞行定位'

CameraFly.prototype.onExecute = function () {
  let pos = this.getInputData(0);
  window.viewer3D.flyToView(pos)
};

// 场景初始化完成



export {
  SceneEvent,
  CameraFly
}

//创建描述位置的对话框
function createDescription(Cesium, properties) {
  var simpleStyleIdentifiers = ['经度', '纬度', '高度'];
  var html = '';
  for (var key in properties) {
      if (properties.hasOwnProperty(key)) {
          if (simpleStyleIdentifiers.indexOf(key) !== -1) {
              continue;
          }
          var value = properties[key];
          if (Cesium.defined(value) && value !== '') {
              html += '<tr><td>' + simpleStyleIdentifiers[key] + '</td><td>' + value + '</td></tr>';
          }
      }
  }
  if (html.length > 0) {
      html = '<table class="zebra" style="position: fixed; top: 20px; right: 0"><tbody>' + html + '</tbody></table>';
  }
  return html;
}