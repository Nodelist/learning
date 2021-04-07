export function checkArray(arr,key) {
    let index = arr.indexOf(key)
    if (index > -1) {
        return true // 有权限
    } else {
        return false // 无权限
    }                                             
}