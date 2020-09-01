let arr = [
        { id: 1, name: 'name1', des: 'des1' },
        { id: 2, name: 'name2', des: 'des2' },
        { id: 3, name: 'name3', des: 'des3' },
        { id: 4, name: 'name4', des: 'des4' },
        { id: 1, name: 'name1', des: 'des1' },
        { id: 3, name: 'name3', des: 'des3' },
        { id: 4, name: 'name4', des: 'des4' },
        { id: 1, name: 'name1', des: 'des1' },
        { id: 2, name: 'name2', des: 'des6' },
        { id: 2, name: 'name3', des: 'des7' },
        { id: 4, name: 'name4', des: 'des4' }
    ]
    // 对象数组去重
function arrReset(arr, prototype) {
    for (let item of arr) {
        debugger
        let i = findItem(arr, prototype, item[prototype]);
        debugger
        if (i > -1) {
            arr.splice(i, 1)
        }
    }
    debugger
    console.log(arr)
}

function findItem(array, prototype, val) {
    return array.findIndex(function(item) {
        return item[prototype] == val
    })
}
arrReset(arr, 'name')