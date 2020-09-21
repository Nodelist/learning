const http = require('http');

// node 创建 http 服务
http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // 发送响应数据
    response.end("Hello World!")
}).listen(9091)

// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i, 1)
//     }, 1000)
//     console.log(new Date, i)
// }
// console.log(+true); // 1
// console.log(!'str'); // false
// let a = [1, 2, 3];
// let b = [1, 2, 3];
// let c = b;
// console.log(c[0])
// console.log(a == b); // false
// console.log(a === b); // false
// console.log(b == c) // true
// console.log(b === c) // true
// console.log(NaN == NaN); // false
// console.log(NaN != NaN); // true
/*
    * 以上输出
    Tue Sep 15 2020 10:16:01 GMT+0800 (GMT+08:00) 0
    Tue Sep 15 2020 10:16:01 GMT+0800 (GMT+08:00) 1
    Tue Sep 15 2020 10:16:01 GMT+0800 (GMT+08:00) 2
    Tue Sep 15 2020 10:16:01 GMT+0800 (GMT+08:00) 3
    Tue Sep 15 2020 10:16:01 GMT+0800 (GMT+08:00) 4
    1
    false
    false
    false
    false
    true
    Tue Sep 15 2020 10:16:02 GMT+0800 (GMT+08:00) 0 1
    Tue Sep 15 2020 10:16:02 GMT+0800 (GMT+08:00) 1 1
    Tue Sep 15 2020 10:16:02 GMT+0800 (GMT+08:00) 2 1
    Tue Sep 15 2020 10:16:02 GMT+0800 (GMT+08:00) 3 1
    Tue Sep 15 2020 10:16:02 GMT+0800 (GMT+08:00) 4 1
*/
// let A = { a: 1, b: 2 };
// let B = A;
// B.b = "str";
// console.log(A); // {a: 1, b: 'str'}
// console.log(B); // {a: 1, b: 'str'}

// let arr = [1, 2, 3];
// console.log(...arr) // 1 2 3 (序列)
// let arrb = [...arr, 4, 5];
// console.log(arrb) // [1,2,3,4,5] (数组)

// console.log(1 + true) // 2
// console.log(1 + false) // 1
// console.log('' + true) // true
// console.log('' + false) // false


/**
 * @description 求 k 的 m 进制数中含有多少个 n
 * @param {*} k 
 * @param {*} n 
 * @param {*} m 
 */
function returnCount(k, n, m) {
    var count = 0
    var km = k.toString(m);
    for (var i = 0; i < km.length; i++) {
        if (km[i] == n) {
            count += 1
        }
    }
    return count;
}
// console.log(returnCount(24, 2, 3))


/**
 * @description 有一个整型数组，从数组中取出两个最大的值，用大值减去小值，若果结果不为 0，则将结果放回数组，重复上面操作，直到数组中只有一个元素或为空，若只有一个元素，则返回该元素，若为空，则返回 0
 * @param {*} arr 
 */
function max(arr) {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        let max1 = Math.max(...arr);
        arr.splice(find(arr, max1), 1)
        let max2 = Math.max(...arr);
        arr.splice(find(arr, max2), 1)
        if (max1 - max2 != 0) {
            arr.push(max1 - max2);
        }
        console.log(arr)
        return max(arr)

    }
}

function find(arr, num) {
    return arr.findIndex((item) => {
        return item == num
    })
}
// console.log(max([1, 7, 9, 15, 44]))


/**
 * @description 32位有符号证整数反转，溢出返回 0
 * @param {*} params 
 */
function reverse(params) {
    debugger
    var arr = Math.abs(params).toString().split("")
    arr.reverse();
    var a = parseInt(arr.join(''))
    if (params > 0) {
        return a > 2 ** 31 - 1 ? 0 : a
    } else {
        return a > 2 ** 31 ? 0 : -a
    }
}
// console.log(reverse(1534236469))
// console.log(reverse(123))
// console.log(reverse(-123))

/**
 * @description 全排序
 * @param {Array} params 
 */
function squence(params) {
    let len = params.length;
    let used = [params.length];
    params.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {

    }
}


/**
 * @description 判断是不是回文数
 * @param {Number} params 
 */
function palindrome(params) {
    // 解法一
    // let arr = params.toString().split("")
    // let len = arr.length
    // for (let i = 0; i < Math.floor(len / 2); i++) {
    //     if (arr[i] == arr[len - i - 1]) {
    //         continue;
    //     } else {
    //         return false
    //     }
    // }
    // return true

    // 解法二
    let newStr = params.toString().split("").reverse().join("");
    if (newStr === params.toString()) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome(1031))