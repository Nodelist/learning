import cfg from '../config'
let solidModelsProfile: any
export default {
    viewer: {},
    scene: {},
    modelUrls: new Array,
    models: new Array,
    solidModelsProfile: {},

    init(viewer = {}, scene: any) {
        this.viewer = viewer;
        this.scene = scene;
        this.solidModelsProfile = new window.Cesium.SolidModelsProfile(scene)
    },
    // 添加模型对象
    addMoudles(dataSource: Array<any>) {
        dataSource.forEach(item => {
            if (item.isShow && item.dataSets && item.dataSets.length > 0) {
                item.dataSets.forEach((dataSet: { id: string; num: number; name: any; image: string; }) => {
                    for (let i = 1; i <= dataSet.num; i++) {
                        let modelUrl = `${cfg.map3D.server.baseUrl + cfg.map3D.server.dataServer}/rest/data/datasources/${item.name}/datasets/${dataSet.name}/features/${i}.stream`;
                        this.modelUrls.push(modelUrl);
                        this.models.push({
                            id: dataSet.id,
                            "model": modelUrl,
                            texture: require('@/assets/images/' + dataSet.image), //剖切用的纹理贴图
                            textureMapParameter: {
                                UTiling: 100,
                                VTiling: 50
                            }
                        })
                    }
                })
            }
        })
    },
    // 显示模型
    showModel() {
        solidModelsProfile = new window.Cesium.SolidModelsProfile(this.scene)
        solidModelsProfile.addModels(this.models);
        solidModelsProfile.addedEvent.addEventListener(() => {
            let s3mInstanceCollection = solidModelsProfile._s3mInstanceCollection;
            for (let url of this.modelUrls) {
                let instance = solidModelsProfile._s3mInstanceCollection._group[url].instances._array[0];
                // instance.updateColor(new Cesium.Color(1,1,1,0.2))
                instance.visible = true
                //添加pbr
                // s3mInstanceCollection.setPBRMaterialFromJSON(url, "../data/pbr/白模/scanLine.json");
            }
        })
        this.solidModelsProfile = solidModelsProfile;
    },
    // 画线剖切
    lineClip(data: any) {
        for (let i = 0; i < data.positions.length - 1; i++) {
            let point1 = data.positions[i];
            let point2 = data.positions[i + 1];

            let pointArray = [];
            pointArray.push(point1);
            pointArray.push(point2);

            solidModelsProfile.addProfileGeometry(pointArray);
        }
        solidModelsProfile.build();
    },
    // 画面剖切
    polygonClip(data: any, deep: number) {
        let point3dsArray = [];
        let positions = [].concat(data.positions);
        let point3ds = new window.Cesium.Point3Ds();

        for (let i = 0; i < positions.length; i++) {
            const cartographic = window.Cesium.Cartographic.fromCartesian(positions[i]);
            const pntx = window.Cesium.Math.toDegrees(cartographic.longitude);
            const pnty = window.Cesium.Math.toDegrees(cartographic.latitude);
            const pntz = cartographic.height + 1000;
            const pnt = new window.Cesium.Point3D(pntx, pnty, pntz);

            point3ds.add(pnt);
        }
        point3dsArray.push(point3ds);
        // 三维面对象类
        let geometry = new window.Cesium.GeoRegion3D(point3dsArray);
        if (solidModelsProfile.clippingType == window.Cesium.ClippingType.KeepOutside) {
            geometry.extrudedHeight = -deep;
        } else {
            geometry.extrudedHeight = -7000;
        }

        geometry.isLatLon = false;
        // 设置用于剖切的几何体
        solidModelsProfile.setClipGeometry(geometry);
        //封底
        let geometry2 = new window.Cesium.GeoRegion3D(point3dsArray);
        geometry2.isLatLon = false;
        if (solidModelsProfile.clippingType == window.Cesium.ClippingType.KeepOutside) {
            geometry2.bottomAltitude = geometry.extrudedHeight;
            solidModelsProfile.addProfileGeometry(geometry2);
        }

        for (let i = 0; i < positions.length; i++) {
            let singleA: never[] = [];
            singleA.push(positions[i]);

            if (i == positions.length - 1) {
                singleA.push(positions[0]);
            } else {
                singleA.push(positions[i + 1]);
            }
            // 添加用于封边的几何体
            solidModelsProfile.addProfileGeometry(singleA);
            // 执行剖切分析
            solidModelsProfile.build();
        }
    },
    // 点剖切（生成钻孔）
    pointsClip(pointsArray: Array<object>, isDegress=false, depth: number) {
        debugger
        let r = 5, h = depth, pntx, pnty, pntz
        for (let i = 0; i < pointsArray.length; i++) {
            let point = pointsArray[i];
            if (isDegress) {
                let p = this.deal(point)
                pntx = p.x
                pnty = p.y
                pntz = p.z - (p.depth)/2
                h = p.depth
            } else {
                const cartographic = window.Cesium.Cartographic.fromCartesian(point);
                pntx = window.Cesium.Math.toDegrees(cartographic.longitude);
                pnty = window.Cesium.Math.toDegrees(cartographic.latitude);
                pntz = cartographic.height - h/2;
            }
            let geoCylinder = new window.Cesium.GeoCylinder(r, r, h);
            geoCylinder.geoPosition = new window.Cesium.Point3D(pntx, pnty, pntz);
            solidModelsProfile.addProfileGeometry(geoCylinder);
        }
        solidModelsProfile.build();
        console.log(solidModelsProfile)
    },
    // 设置剖切类型 
    // KeepInside    KeepOutside
    setClippingType(type: string) {
        solidModelsProfile.clippingType = window.Cesium.ClippingType[type];
    },
    // 清除剖切结果
    clearProfile() {
        solidModelsProfile.clearProfile();
    },

    // 通过 url获取图层
    getLayerByUrl(url: string) {
        return solidModelsProfile._s3mInstanceCollection._group[url].instances._array[0]
    },

    // 设置图层透明度
    setLayerAlpha(url: string, alpha: number) {
        let instance = this.getLayerByUrl(url);
        if(instance) {
            instance.updateColor(new window.Cesium.Color(1, 1, 1, alpha))
        }
    },
    // 设置图层显隐
    setLayerVisibleByUrl(url: string, bool: boolean) {
        let instance = this.getLayerByUrl(url);
        if(instance) {
            instance.visible = bool
        }
    },


    deal(data: any) {
        return data
    }
}