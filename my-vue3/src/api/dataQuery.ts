import request from '@/units/request'


export function dataQuery(params: any) {
    return request({
        url: `${params.server}/rest/data/featureResults.rjson?returnContent=true`,
        method: 'post',
        data: params.queryData
    })
}
export function boolOpt(params: string) {
    return request({
        url: 'spatialAnalysis-cc/restjsr/spatialanalyst/geometry/3d/booleanoperator.json?returnContent=true',
        method: 'post',
        data: params,
        timeout: 50000
    })
}

export function loft3D(params: string) {
    return request({
        url: 'spatialAnalysis-cc/restjsr/spatialanalyst/geometry/3d/loft.json?returnContent=true',
        method: 'post',
        data: params,
        timeout: 50000
    })
}