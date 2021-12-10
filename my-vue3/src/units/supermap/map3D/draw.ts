declare const Cesium: any
let handlerPoint: any
let handlerLine: any
let handlerPolygon: any
export default {
    viewer: {},
    handlerPoint: {},
    handlerLine: {},
    handlerPolygon: {},

    // 初始化绘制对象
    init(viewer={}) {
        this.viewer = viewer
        handlerPoint = new Cesium.DrawHandler(viewer, Cesium.DrawMode.Point)
        handlerLine = new Cesium.DrawHandler(viewer, Cesium.DrawMode.Line)
        handlerPolygon = new Cesium.DrawHandler(viewer, Cesium.DrawMode.Polygon)
        this.handlerPoint = handlerPoint
        this.handlerLine = handlerLine
        this.handlerPolygon = handlerPolygon
    },
    // 添加点对象绘制事件
    addPointEvent(type: string, callback: (arg0: any) => void) {
        handlerPoint[type].addEventListener(function (result: any) {
            callback(result)
        });
    },
    // 添加线对象绘制事件
    addLineEvent(type: string, callback: (arg0: any) => void) {
        handlerLine[type].addEventListener(function (result: any) {
            callback(result)
        })
    },
    // 添加面对象绘制事件
    addPolygonEvent(type: string, callback: (arg0: any) => void) {
        handlerPolygon[type].addEventListener(function (result: any) {
            callback(result)
        })
    },
    // 激活绘制对象
    activeHandler(type: string) {
        this.clearAndDeactivate();
        switch (type) {
            case 'Point':
                handlerPoint && handlerPoint.activate()
                break;
            case 'Line':
                handlerLine && handlerLine.activate()
                break;
            case 'Polygon':
                handlerPolygon && handlerPolygon.activate()
                break;
            default:
                break;
        }
        
    },
    // 清除绘制的图形
    clear() {
        handlerPoint.clear();
        handlerLine.clear();
        handlerPolygon.clear();
    },
    // 停用绘制对象
    deactivate() {
        handlerPoint.deactivate();
        handlerLine.deactivate();
        handlerPolygon.deactivate();
    },
    clearAndDeactivate() {
        this.clear();
        this.deactivate();
    }
}