const http = require('http');

// node 创建 http 服务
http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // 发送响应数据
    response.end("Hello World!")
}).listen(9091)

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i, 1)
    }, 1000)
    console.log(new Date, i)
}
/*
    * 以上输出
    Tue Sep 15 2020 10:16:01 GMT+0800 (GMT+08:00) 0
    Tue Sep 15 2020 10:16:01 GMT+0800 (GMT+08:00) 1
    Tue Sep 15 2020 10:16:01 GMT+0800 (GMT+08:00) 2
    Tue Sep 15 2020 10:16:01 GMT+0800 (GMT+08:00) 3
    Tue Sep 15 2020 10:16:01 GMT+0800 (GMT+08:00) 4
    Tue Sep 15 2020 10:16:02 GMT+0800 (GMT+08:00) 0 1
    Tue Sep 15 2020 10:16:02 GMT+0800 (GMT+08:00) 1 1
    Tue Sep 15 2020 10:16:02 GMT+0800 (GMT+08:00) 2 1
    Tue Sep 15 2020 10:16:02 GMT+0800 (GMT+08:00) 3 1
    Tue Sep 15 2020 10:16:02 GMT+0800 (GMT+08:00) 4 1
*/

console.log(+true); // 1
console.log(!'str'); // false
let a = [1, 2, 3];
let b = [1, 2, 3];
let c = b;
console.log(c[0])
console.log(a == b); // false
console.log(a === b); // false
console.log(b == c) // true
console.log(b === c) // true
console.log(NaN == NaN); // false
console.log(NaN != NaN); // true
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
let A = { a: 1, b: 2 };
let B = A;
B.b = "str";
console.log(A); // {a: 1, b: 'str'}
console.log(B); // {a: 1, b: 'str'}

let arr = [1, 2, 3];
console.log(...arr) // 1 2 3 (序列)
let arrb = [...arr, 4, 5];
console.log(arrb) // [1,2,3,4,5] (数组)

console.log(1 + true) // 2
console.log(1 + false) // 1
console.log('' + true) // true
console.log('' + false) // false