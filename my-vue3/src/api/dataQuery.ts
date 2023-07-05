import request from '@/units/request'

const baseUrl = "http://localhost:8090/iserver/services/"
export function dataQuery(params: any) {
    return request({
        url: baseUrl + `${params.server}/rest/data/featureResults.rjson?returnContent=true`,
        method: 'post',
        data: params.queryData
    })
}
export function boolOpt(params: string) {
    return request({
        url: baseUrl + 'spatialAnalysis-cc/restjsr/spatialanalyst/geometry/3d/booleanoperator.json?returnContent=true',
        method: 'post',
        data: params,
        timeout: 50000
    })
}

export function loft3D(params: string) {
    return request({
        url: baseUrl + 'spatialanalyst-sample/restjsr/spatialanalyst/geometry/3d/loft.json?returnContent=true',
        method: 'post',
        data: params,
        timeout: 50000
    })
}