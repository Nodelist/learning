/**
 * 乘积节点
 */
function MyProductNode() {
  this.addInput('x', 'number');
  this.addInput('y', 'number');
  this.addOutput('x*y', 'number');
  this.properties = { precision: 1 };
}
// 节点名称
MyProductNode.title = '求乘积';
//节点执行方法
MyProductNode.prototype.onExecute = function () {
  var A = this.getInputData(0);
  if (A === undefined) A = 0;
  var B = this.getInputData(1);
  if (B === undefined) B = 0;
  this.setOutputData(0, A * B);
};

function MySelectNode() {
  this.addInput('多支路选择')
  this.addProperty('data', '');
  this.addProperty('value', '');
  this.addProperty('label', '');
}
MySelectNode.title = '多分支选择';
MySelectNode.desc = 'Select Options';

MySelectNode.prototype.onPropertyChanged = function (name, v) {
  const that = this;
  // const val = new Array(v);
  // const val = JSON.parse(JSON.stringify(v));
  const val = JSON.parse(v);
  val.forEach((item) => {
    that.addOutput(item.label, '', { label: item.label, value: item.value });
  });
  this.selected = 0;
};
MySelectNode.prototype.onConnectionsChange = function (outputA, slot, bool, link_info, output) {
  this.setOutputData(slot, output.value);
}

function ScenePos() {
  this.addInput('x', 'number', 0);
  this.addInput('y', 'number', 0);
  this.addInput('z', 'number', 0);
  this.addProperty('x', 0, 'number');
  this.addProperty('y', 0, 'number');
  this.addProperty('z', 0, 'number');
  this.addOutput('out', 'object', {x: 0, y: 0, z: 1000})
}
ScenePos.title = '坐标设置'
ScenePos.desc = '坐标参数'

ScenePos.prototype.onExecute = function () {
  // let x = this.getInputData(0)
  // let y = this.getInputData(1)
  // let z = this.getInputData(2)

  this.setOutputData(0, this.properties);
};
// ScenePos.prototype.onPropertyChanged = function (name, val) {
//   this.setInputData() = name
// }

export { MyProductNode, MySelectNode, ScenePos };
