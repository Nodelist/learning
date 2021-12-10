// declare var Cesium: any;
declare global {
    interface Window {
        Map3D: any;
        Cesium: any;
    }
}
declare module 'Cesium';
// window.Map3D = window.Map3D || {}
// window.Cesium = window.Cesium || {}