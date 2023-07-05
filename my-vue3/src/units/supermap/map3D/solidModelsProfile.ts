import cfg from '../config'
let solidModelsProfile: any,
    geoCylinder: any,
    viewer: any;
const Cesium = window.Cesium

// 实体模型剖面类
export default {
    viewer,
    scene: {},
    modelUrls: new Array,
    models: new Array,
    solidModelsProfile,
    geoCylinder,

    init(viewer = {}, scene: any) {
        this.viewer = viewer;
        this.scene = scene;
        this.solidModelsProfile = new Cesium.SolidModelsProfile(scene)
    },
    // 添加模型对象
    addMoudles(dataSource: Array<any>) {
        dataSource.forEach(item => {
            if (item.isShow && item.dataSets && item.dataSets.length > 0) {
                item.dataSets.forEach((dataSet: { id: string; num: number; name: any; image: string; }) => {
                    for (let i = 1; i <= dataSet.num; i++) {
                        const modelUrl = `${cfg.map3D.server.baseUrl + cfg.map3D.server.dataServer}/rest/data/datasources/${item.name}/datasets/${dataSet.name}/features/${i}.stream`;
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
    addMoudle(id: string, modelUrl: string, image: string) {
        this.modelUrls.push(modelUrl);
        this.models.push({
            id: id,
            "model": modelUrl,
            texture: require('@/assets/images/' + image), //剖切用的纹理贴图
            textureMapParameter: {
                UTiling: 100,
                VTiling: 50
            }
        })
    },
    // 显示模型
    showModel() {
        this.solidModelsProfile = new Cesium.SolidModelsProfile(this.scene)
        this.solidModelsProfile.addModels(this.models);
        this.solidModelsProfile.addedEvent.addEventListener(() => {
            const s3mInstanceCollection = this.solidModelsProfile._s3mInstanceCollection;
            for (const url of this.modelUrls) {
                const instance = this.solidModelsProfile._s3mInstanceCollection._group[url].instances._array[0];
                // instance.updateColor(new Cesium.Color(1,1,1,0.2))
                instance.visible = true
                //添加pbr
                // s3mInstanceCollection.setPBRMaterialFromJSON(url, "../data/pbr/白模/scanLine.json");
            }
        })
    },
    // 画线剖切
    lineClip(data: any) {
        for (let i = 0; i < data.positions.length - 1; i++) {
            const point1 = data.positions[i];
            const point2 = data.positions[i + 1];

            const pointArray = [];
            pointArray.push(point1);
            pointArray.push(point2);
            this.solidModelsProfile.addProfileGeometry(pointArray);
        }
        this.solidModelsProfile.build();
    },
    // 画面剖切
    polygonClip(data: any, deep: number) {
        const point3dsArray = [];
        const positions = [].concat(data.positions);
        const point3ds = new Cesium.Point3Ds();

        for (let i = 0; i < positions.length; i++) {
            const cartographic = Cesium.Cartographic.fromCartesian(positions[i]);
            const pntx = Cesium.Math.toDegrees(cartographic.longitude);
            const pnty = Cesium.Math.toDegrees(cartographic.latitude);
            const pntz = cartographic.height + 1000;
            const pnt = new Cesium.Point3D(pntx, pnty, pntz);

            point3ds.add(pnt);
        }
        point3dsArray.push(point3ds);
        // 三维面对象类
        const geometry = new Cesium.GeoRegion3D(point3dsArray);
        if (this.solidModelsProfile.clippingType == Cesium.ClippingType.KeepOutside) {
            geometry.extrudedHeight = -deep;
        } else {
            geometry.extrudedHeight = -7000;
        }

        geometry.isLatLon = false;
        // 设置用于剖切的几何体
        this.solidModelsProfile.setClipGeometry(geometry);
        //封底
        const geometry2 = new Cesium.GeoRegion3D(point3dsArray);
        geometry2.isLatLon = false;
        if (this.solidModelsProfile.clippingType == Cesium.ClippingType.KeepOutside) {
            geometry2.bottomAltitude = geometry.extrudedHeight;
            this.solidModelsProfile.addProfileGeometry(geometry2);
        }

        for (let i = 0; i < positions.length; i++) {
            const singleA: never[] = [];
            singleA.push(positions[i]);

            if (i == positions.length - 1) {
                singleA.push(positions[0]);
            } else {
                singleA.push(positions[i + 1]);
            }
            // 添加用于封边的几何体
            this.solidModelsProfile.addProfileGeometry(singleA);
            // 执行剖切分析
            this.solidModelsProfile.build();
        }
    },
    // 点剖切（生成钻孔）
    pointsClip(pointsArray: Array<object>, isDegress=false, depth: number) {
        const r = 5;
        let h = depth, pntx, pnty, pntz
        for (let i = 0; i < pointsArray.length; i++) {
            const point = pointsArray[i];
            if (isDegress) {
                const p = this.deal(point)
                pntx = p.x
                pnty = p.y
                pntz = p.z - (p.depth)/2
                h = p.depth
            } else {
                const cartographic = Cesium.Cartographic.fromCartesian(point);
                pntx = Cesium.Math.toDegrees(cartographic.longitude);
                pnty = Cesium.Math.toDegrees(cartographic.latitude);
                pntz = cartographic.height - h/2;
            }
            const geoCylinder = new Cesium.GeoCylinder(r, r, h);
            geoCylinder.geoPosition = new Cesium.Point3D(pntx, pnty, pntz);
            console.log(geoCylinder)
            this.solidModelsProfile.addProfileGeometry(geoCylinder);
        }
        this.solidModelsProfile.build();
    },
    addProfileGeometryAndBuild(geometry:any) {
        this.solidModelsProfile.addProfileGeometry(geometry);
        this.solidModelsProfile.build();
    },
    clipByGeometry(geometry:any) {
        this.solidModelsProfile.setClipGeometry(geometry);
        this.solidModelsProfile.build();
    },
    clipByPoints(topPoint: any, bottomPoint: any) {
        const R = 2;
        let point = {
            x: (topPoint.x + bottomPoint.x) / 2,
            y: (topPoint.y + bottomPoint.y) / 2,
            z: (topPoint.z + bottomPoint.z) / 2
        };
        let h = this.getDistance(topPoint, bottomPoint)
        const geoCylinder = this.geoCylinder = new Cesium.GeoCylinder(R, R, h);
        geoCylinder.geoPosition = new Cesium.Point3D(point.x, point.y, point.z);
        geoCylinder.geoRotationZ = 240
        geoCylinder.geoRotationX = 19
        geoCylinder.geoRotationY = 0
        this.solidModelsProfile.addProfileGeometry(geoCylinder);
        console.log(geoCylinder)
        this.solidModelsProfile.build();
        this.viewer.flyTo(geoCylinder)
    },
    // 设置剖切类型 
    // KeepInside    KeepOutside
    setClippingType(type: string) {
        this.solidModelsProfile.clippingType = Cesium.ClippingType[type];
    },
    // 清除剖切结果
    clearProfile() {
        this.solidModelsProfile.clearProfile();
    },

    // 通过 url获取图层
    getLayerByUrl(url: string) {
        return this.solidModelsProfile._s3mInstanceCollection._group[url].instances._array[0]
    },

    // 设置图层透明度
    setLayerAlpha(url: string, alpha: number) {
        const instance = this.getLayerByUrl(url);
        if(instance) {
            instance.updateColor(new Cesium.Color(1, 1, 1, alpha))
        }
    },
    // 设置图层显隐
    setLayerVisibleByUrl(url: string, bool: boolean) {
        const instance = this.getLayerByUrl(url);
        if(instance) {
            instance.visible = bool
        }
    },


    deal(data: any) {
        return data
    },
    // 计算点之间的距离
    // 计算两点之间的距离
    getDistance (point1:any, point2:any) {
        const start = Cesium.Cartesian3.fromDegrees(point1.x, point1.y, point1.z)
		const end = Cesium.Cartesian3.fromDegrees(point2.x, point2.y, point2.z)
        return Cesium.Cartesian3.distance(start, end);
    }
}