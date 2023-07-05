export default {
    iServer: {
        // TJH
        // url: "http://113.200.160.45:8090/iserver/services/",
        // dataServer: 'data-DiCengMoXingGongZuoMianMoXing',

        // url: "http://localhost:8090/iserver/services/",
        // dataServer: 'data-cc',
        // 128 HBC
        url: "http://192.168.10.128:8090/iserver/services/",
        dataServer: 'data-DZCS',
    },

    // TJH数据
    // dataSource: [
    //     {
    //         id: 1,
    //         name: 'T_61302_掘进工作面',
    //         isShow: true,
    //         dataSets: [
    //             // {
    //             //     id: 101,
    //             //     name: 'T02_细砂岩',
    //             //     num: 1,
    //             //     image: '工作面模型/1.png'
    //             // },
    //             {
    //                 id: 102,
    //                 name: 'T03_4煤',
    //                 num: 1,
    //                 image: '工作面模型/2.png'
    //             },
    //             {
    //                 id: 103,
    //                 name: 'T04_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/3.png'
    //             },
    //             {
    //                 id: 104,
    //                 name: 'T05_粗砂岩',
    //                 num: 1,
    //                 image: '工作面模型/4.png'
    //             },
    //             {
    //                 id: 105,
    //                 name: 'T06_5煤层',
    //                 num: 1,
    //                 image: '工作面模型/5.png'
    //             },
    //             {
    //                 id: 106,
    //                 name: 'T07_泥岩',
    //                 num: 1,
    //                 image: '工作面模型/6.png'
    //             },
    //             {
    //                 id: 107,
    //                 name: 'T08_细砂岩',
    //                 num: 1,
    //                 image: '工作面模型/7.png'
    //             },
    //             {
    //                 id: 108,
    //                 name: 'T09_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/8.png'
    //             },
    //             {
    //                 id: 109,
    //                 name: 'T10_细砂岩',
    //                 num: 1,
    //                 image: '工作面模型/9.png'
    //             },
    //             {
    //                 id: 110,
    //                 name: 'T11_6煤',
    //                 num: 1,
    //                 image: '工作面模型/10.png'
    //             },
    //             {
    //                 id: 111,
    //                 name: 'T12_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/11.png'
    //             },
    //             {
    //                 id: 112,
    //                 name: 'T13_9_煤',
    //                 num: 1,
    //                 image: '工作面模型/12.png'
    //             },
    //             {
    //                 id: 113,
    //                 name: 'T14_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/13.png'
    //             },
    //             {
    //                 id: 114,
    //                 name: 'T15_细砂岩',
    //                 num: 1,
    //                 image: '工作面模型/14.png'
    //             },
    //             {
    //                 id: 115,
    //                 name: 'T16_9下煤',
    //                 num: 1,
    //                 image: '工作面模型/15.png'
    //             },
    //             {
    //                 id: 116,
    //                 name: 'T17_细砂岩',
    //                 num: 1,
    //                 image: '工作面模型/16.png'
    //             },
    //             {
    //                 id: 117,
    //                 name: 'T18_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/17.png'
    //             },
    //             {
    //                 id: 118,
    //                 name: 'T19_中砂岩',
    //                 num: 1,
    //                 image: '工作面模型/18.png'
    //             },
    //             {
    //                 id: 119,
    //                 name: 'T20_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/19.png'
    //             },
    //             {
    //                 id: 120,
    //                 name: 'T21_灰岩',
    //                 num: 1,
    //                 image: '工作面模型/20.png'
    //             }
    //         ]
    //     },
    //     {
    //         id: 2,
    //         name: 'T_地层模型',
    //         isShow: false,
    //         dataSets: [
    //             {
    //                 id: 201,
    //                 name: 'DC_1_第四系、新近系',
    //                 num: 1,
    //                 image: '地层模型/1.png.黄土'
    //             },
    //             {
    //                 id: 202,
    //                 name: 'DC_2_白垩系下统志丹群',
    //                 num: 1,
    //                 image: '地层模型/2志丹群.png'
    //             },
    //             {
    //                 id: 203,
    //                 name: 'DC_3_二叠系上统石千峰组',
    //                 num: 1,
    //                 image: '地层模型/3石千峰.png'
    //             },
    //             {
    //                 id: 204,
    //                 name: 'DC_4_二叠系上统上石盒子组',
    //                 num: 1,
    //                 image: '地层模型/4上石盒子.png'
    //             },
    //             {
    //                 id: 205,
    //                 name: 'DC_5_二叠系下统下石盒子组',
    //                 num: 1,
    //                 image: '地层模型/5下石盒子.png'
    //             },
    //             {
    //                 id: 206,
    //                 name: 'DC_6_二叠系下统山西组三段',
    //                 num: 1,
    //                 image: '地层模型/6山西组三段.png'
    //             },
    //             {
    //                 id: 207,
    //                 name: 'DC_7二叠系下统山西组二段',
    //                 num: 1,
    //                 image: '地层模型/7山西组二段.png'
    //             },
    //             {
    //                 id: 208,
    //                 name: 'DC_8_二叠系下统山西组一段',
    //                 num: 1,
    //                 image: '地层模型/8山西组一段.png'
    //             },
    //             {
    //                 id: 209,
    //                 name: 'DC_9_煤',
    //                 num: 1,
    //                 image: '地层模型/9.png.6煤层'
    //             },
    //             {
    //                 id: 210,
    //                 name: 'DC_10_石炭系上统太原组三段、二段',
    //                 num: 1,
    //                 image: '地层模型/10太原组二段.png'
    //             },
    //             {
    //                 id: 211,
    //                 name: 'DC_11_石炭系上统太原组三段',
    //                 num: 1,
    //                 image: '地层模型/11太原组一段.png'
    //             },
    //             {
    //                 id: 212,
    //                 name: 'DC_12_奥陶系下中统马家沟组',
    //                 num: 1,
    //                 image: '地层模型/12奥灰.png'
    //             }
    //         ],
    //     },
    //     {
    //         id: 3,
    //         name: 'T_61304_回采工作面',
    //         isShow: true,
    //         dataSets: [
    //             // {
    //             //     id: 301,
    //             //     name: 'T02_细砂岩',
    //             //     num: 1,
    //             //     image: '1'.png
    //             // },
    //             {
    //                 id: 302,
    //                 name: 'T03_4煤',
    //                 num: 1,
    //                 image: '工作面模型/2.png'
    //             },
    //             {
    //                 id: 303,
    //                 name: 'T04_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/3.png'
    //             },
    //             {
    //                 id: 304,
    //                 name: 'T05_粗砂岩',
    //                 num: 1,
    //                 image: '工作面模型/4.png'
    //             },
    //             {
    //                 id: 305,
    //                 name: 'T06_5煤',
    //                 num: 1,
    //                 image: '工作面模型/5.png'
    //             },
    //             {
    //                 id: 306,
    //                 name: 'T07_泥岩',
    //                 num: 1,
    //                 image: '工作面模型/6.png'
    //             },
    //             {
    //                 id: 307,
    //                 name: 'T08_细砂岩',
    //                 num: 1,
    //                 image: '工作面模型/7.png'
    //             },
    //             {
    //                 id: 308,
    //                 name: 'T09_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/8.png'
    //             },
    //             {
    //                 id: 309,
    //                 name: 'T10_细砂岩',
    //                 num: 1,
    //                 image: '工作面模型/9.png'
    //             },
    //             {
    //                 id: 310,
    //                 name: 'T11_6煤',
    //                 num: 1,
    //                 image: '工作面模型/10.png'
    //             },
    //             {
    //                 id: 311,
    //                 name: 'T12_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/11.png'
    //             },
    //             {
    //                 id: 312,
    //                 name: 'T13_9上煤',
    //                 num: 1,
    //                 image: '工作面模型/12.png'
    //             },
    //             {
    //                 id: 313,
    //                 name: 'T14_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/13.png'
    //             },
    //             {
    //                 id: 314,
    //                 name: 'T15_细砂岩',
    //                 num: 1,
    //                 image: '工作面模型/14.png'
    //             },
    //             {
    //                 id: 315,
    //                 name: 'T16_9下煤',
    //                 num: 1,
    //                 image: '工作面模型/15.png'
    //             },
    //             {
    //                 id: 316,
    //                 name: 'T17_细砂岩',
    //                 num: 1,
    //                 image: '工作面模型/16.png'
    //             },
    //             {
    //                 id: 317,
    //                 name: 'T18_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/17.png'
    //             },
    //             {
    //                 id: 318,
    //                 name: 'T19_中砂岩',
    //                 num: 1,
    //                 image: '工作面模型/18.png'
    //             },
    //             {
    //                 id: 319,
    //                 name: 'T20_砂泥岩',
    //                 num: 1,
    //                 image: '工作面模型/19.png'
    //             },
    //             {
    //                 id: 320,
    //                 name: 'T21_灰岩',
    //                 num: 1,
    //                 image: '工作面模型/20.png'
    //             }
    //         ]
    //     },
    //     {
    //         id: 4,
    //         name: '回采工作面',
    //         isShow: false,
    //         dataSets: [
    //             {
    //                 id: 401,
    //                 name: 'ModelMergeResult_1',
    //                 num: 1,
    //                 image: '地层模型/12奥灰.png'
    //             },
    //         ],
    //     }
    // ]

    dataSource: [
        // 老石旦
        {
            id: 1,
            name: 'DZ_CS',
            isShow: false,
            dataSets: [
                {
                    id: 123,
                    name: 'T1_阶地砾石层',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 124,
                    name: 'T2_风积沙',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 125,
                    name: 'T3_冲积度',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 126,
                    name: 'T9_页岩',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 127,
                    name: 'T10_粗砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 128,
                    name: 'T11_页岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 129,
                    name: 'T12_中粗砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 130,
                    name: 'T13_砂页岩',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 131,
                    name: 'T14_粗砂岩',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 132,
                    name: 'T15_砂页岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 133,
                    name: 'T16_粗砂岩',
                    num: 1,
                    image: '最终材质-HBC/铝土泥岩.png'
                },
                {
                    id: 134,
                    name: 'T17_砂页岩',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 125,
                    name: 'T18_粗砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 126,
                    name: 'T19_砂页岩',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 127,
                    name: 'T20_细砂岩_1煤',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 128,
                    name: 'T21_中砂岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 129,
                    name: 'T22_粗砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 123,
                    name: 'T23_砂页岩_2_3煤',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 124,
                    name: 'T24_粗砂岩',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 125,
                    name: 'T25_砂页岩_5煤',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 126,
                    name: 'T26_粗砂岩',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 127,
                    name: 'T27_砂页岩_黏土_7煤',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 128,
                    name: 'T28_黏土',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 129,
                    name: 'T29_细砂岩，局部砂质岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 130,
                    name: 'T30_黏土，9_1煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 131,
                    name: 'T31_黏土，9_2煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 132,
                    name: 'T32_黏土透镜体',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 133,
                    name: 'T33_黏土，9_3煤',
                    num: 1,
                    image: '最终材质-HBC/铝土泥岩.png'
                },
                {
                    id: 134,
                    name: 'T33_9_3煤，黏土透镜体',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },

                {
                    id: 123,
                    name: 'T34_细砂岩，局部黏土',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 124,
                    name: 'T35_11煤透镜体',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 125,
                    name: 'T35_11煤',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 126,
                    name: 'T36_细砂岩',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 127,
                    name: 'T36_细砂岩透镜体',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 128,
                    name: 'T37_砂质页岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 129,
                    name: 'T37_砂质页岩透镜体',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 130,
                    name: 'T38_细砂岩',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 131,
                    name: 'T39_12煤透镜体',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 132,
                    name: 'T39_砂页岩，12煤',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 133,
                    name: 'T40_细砂岩',
                    num: 1,
                    image: '最终材质-HBC/铝土泥岩.png'
                },
                {
                    id: 134,
                    name: 'T41_砂页岩',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 125,
                    name: 'T42_细砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 126,
                    name: 'T43_页岩',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 127,
                    name: 'T44_细砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 128,
                    name: 'T45_页岩，13煤',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 129,
                    name: 'T46_石灰岩，14煤',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 123,
                    name: 'T47_页岩，15煤',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 124,
                    name: 'T48_细砂岩，黏土，16',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 125,
                    name: 'T49_16_2煤',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 126,
                    name: 'T50_16_3煤',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 127,
                    name: 'T51_16_4煤',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 128,
                    name: 'T52_石英砂岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 129,
                    name: 'T53_页岩，砂质页岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 130,
                    name: 'T54_黏土，17煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 131,
                    name: 'T55_黏土',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 132,
                    name: 'T56_细砂岩，黏土',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 133,
                    name: 'T57_砂页岩，砂岩，黏土',
                    num: 1,
                    image: '最终材质-HBC/铝土泥岩.png'
                },
                {
                    id: 134,
                    name: 'T58_黏土，细砂岩，18煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 130,
                    name: 'T59_砂质页岩，19煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 131,
                    name: 'T60_细砂岩',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 132,
                    name: '底板',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                }
            ],
        },
        // 黄白茨
        {
            id: 2,
            name: 'HBC_DZ4490',
            isShow: true,
            dataSets: [
                {
                    id: 123,
                    name: 'T8_泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 124,
                    name: 'T9_1煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 125,
                    name: 'T10_细粒砂岩夹粉砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 126,
                    name: 'T11_泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 127,
                    name: 'T12_2煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 128,
                    name: 'T13_中粒砂岩夹细粒砂岩夹3煤和薄泥岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 129,
                    name: 'T14_中粒砂岩、粉砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 130,
                    name: 'T15_粗粒砂岩',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 131,
                    name: 'T16_4煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 132,
                    name: 'T17_粉砂岩夹4下煤',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 133,
                    name: 'T18_粗粒砂岩、下部见5煤',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 134,
                    name: 'T19_粉砂岩夹细粒砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 125,
                    name: 'T20_泥岩夹6煤',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 126,
                    name: 'T21_铝土岩',
                    num: 1,
                    image: '最终材质-HBC/铝土泥岩.png'
                },
                {
                    id: 127,
                    name: 'T22_7煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 128,
                    name: 'T23_中砾砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 129,
                    name: 'T24_粉砂岩夹细粒砂岩含植物化石',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 123,
                    name: 'T25_泥岩夹腕足类化石，下部见8煤',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 124,
                    name: 'T26_中粒砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 125,
                    name: 'T27_粉砂岩夹菱铁矿结核',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 126,
                    name: 'T28_中粒砂岩 ',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 127,
                    name: 'T29_粉砂岩夹菱铁矿结核',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 128,
                    name: 'T30_中粒砂岩、粉砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 129,
                    name: 'T31_泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 130,
                    name: 'T32_中粒砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 131,
                    name: 'T33_粉砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 132,
                    name: 'T34_泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 133,
                    name: 'T35_9煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 134,
                    name: 'T36_砂质泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },

                {
                    id: 123,
                    name: 'T37_10煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 124,
                    name: 'T38_粉砂岩夹细粒砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 125,
                    name: 'T39_泥岩夹11煤含植物化石',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 126,
                    name: 'T40_粉砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 127,
                    name: 'T41_粗粒砂岩',
                    num: 1,
                    image: '最终材质-HBC/粗砂岩.png'
                },
                {
                    id: 128,
                    name: 'T42_泥质砂岩夹12上煤',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 129,
                    name: 'T43_12煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 130,
                    name: 'T44_泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 131,
                    name: 'T45_细粒砂岩、粉砂岩夹植物化石',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 132,
                    name: 'T46_泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 133,
                    name: 'T47_粉砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 134,
                    name: 'T48_泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 125,
                    name: 'T49_13上2煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 126,
                    name: 'T50_粉砂岩夹13上1煤',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 127,
                    name: 'T51_中粒砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 128,
                    name: 'T52_粉砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 129,
                    name: 'T53_泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 123,
                    name: 'T54_13煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 124,
                    name: 'T55_泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 125,
                    name: 'T56_粉砂岩夹13下煤',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 126,
                    name: 'T57_泥岩',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 127,
                    name: 'T58_中粒砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 128,
                    name: 'T59_粉砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 129,
                    name: 'T60_泥岩夹14煤',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 130,
                    name: 'T61_15煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 131,
                    name: 'T62_中粒砂岩',
                    num: 1,
                    image: '最终材质-HBC/中砂岩.png'
                },
                {
                    id: 132,
                    name: 'T63_粉砂岩夹细粒砂岩含植物化石',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 133,
                    name: 'T64_泥岩夹16煤',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 134,
                    name: 'T65_细粒砂岩夹粉砂岩',
                    num: 1,
                    image: '最终材质-HBC/粉细砂岩.png'
                },
                {
                    id: 130,
                    name: 'T66_泥岩夹17煤',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 131,
                    name: 'T67_粉砂岩、细粒砂岩夹18煤',
                    num: 1,
                    image: '最终材质-HBC/煤层.png'
                },
                {
                    id: 132,
                    name: '模型底',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                },
                {
                    id: 132,
                    name: '乌达断层上盘',
                    num: 1,
                    image: '最终材质-HBC/泥岩.png'
                }
            ],
        }
    ],

    cells: [
        '/static/models/s3m/T9_1煤@HBC_DZ_4490.s3m',
        '/static/models/s3m/T12_2煤@HBC_DZ.s3m',
        '/static/models/s3m/T13_中粒砂岩夹细粒砂岩夹3煤和薄泥岩@HBC_DZ.s3m',
        '/static/models/s3m/T16_4煤@HBC_DZ_4490.s3m',
        '/static/models/s3m/T17_粉砂岩夹4下煤@HBC_DZ.s3m',
        '/static/models/s3m/T18_粗粒砂岩、下部见5煤@HBC_DZ.s3m',
    ],

    pointsArray: [
        {id: 1, x: 106.85072, y: 39.41106408, z: 1198.02, depth: 404.41, name: 121, layer:"3煤下细粒砂岩"},
        {id: 2, x: 106.8601551, y: 39.4226062, z: 1213.61, depth: 426.18, name: 136, layer:"4煤下细粒砂岩"},
        {id: 3, x: 106.8537754, y: 39.41496626, z: 1226.44, depth: 444.26, name: 139, layer:"3煤下岩土页岩"}
    ]
}