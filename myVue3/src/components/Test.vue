<template>
  <div class="test-container">
    <div class="btn start-btn" @click="start">开始</div>
    <div class="btn stop-btn" @click="stop">停止</div>
    <div class="canvas-editor">
      <canvas id="mycanvas" width="100%" height="100%"></canvas>
    </div>
    <div id="map3D"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import bgImg from "../assets/grid.png";

import {
  MyProductNode,
  MySelectNode,
  ScenePos
} from "@/utils/myNode.js";
import { SceneEvent, CameraFly } from "@/utils/sceneNode/sceneEvent.js"
import { Map3D } from "@/utils/map3D.js";

let map3DViewer = null;
let graph = null;
let canvas = null;
onMounted(() => {
  window.viewer3D = map3DViewer = new Map3D("map3D");
  graph = new LGraph();
  canvas = new LGraphCanvas(document.getElementById("mycanvas"), graph);
  canvas.background_image = bgImg;

  graph.onAfterExecute = function () {
    canvas.draw(true);
  };
  canvas.resize();

  LiteGraph.registerNodeType("自定义/求乘积", MyProductNode);
  LiteGraph.registerNodeType("自定义/多分支选择", MySelectNode);
  LiteGraph.registerNodeType("自定义/坐标设置", ScenePos);
  LiteGraph.registerNodeType("自定义/相机飞行定位", CameraFly);
  LiteGraph.registerNodeType("自定义/场景事件", SceneEvent);

});
const start = () => {
  graph && graph.start(0);
};
const stop = () => {
  graph && graph.stop();
};
</script>

<style scoped>
.test-container {
  width: 100%;
  height: 100%;
  display: flex;
}
.btn {
  position: fixed;
  padding: 10px 20px;
  background: #fff1f1;
  z-index: 9999;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
}
.btn:hover {
  color: cornflowerblue;
}
.start-btn {
  top: 20px;
  left: 20px;
}
.stop-btn {
  top: 20px;
  left: 120px;
}
.canvas-editor {
  background: #1a1a1a;
  width: 50%;
  height: 100%;
}
#mycanvas {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}

#map3D {
  width: 50%;
  height: 100%;
  background: #5e5e5e;
}
</style>
