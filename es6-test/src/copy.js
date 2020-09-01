var http = require('http');

http.createServer(function(request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(9092);

// 深拷贝与浅拷贝
let obj1 = {
        name: 'wq',
        age: 24,
        fav: {
            sport: 'run',
            food: 'meat',
            movies: [1, 2, 3],
            musi: {
                a: 'a',
                b: 'b',
                c: 'c'
            }
        }
    }
    // 使用JSON方法进行深拷贝
let obj2 = JSON.parse(JSON.stringify(obj1))
let obj3 = obj1
let obj4 = deepCopy(obj1)
obj1.age = 100
obj1.fav.food = "aaa"
obj1.fav.movies[0] = 111
obj1.fav.musi.a = 'aaa'
debugger
console.log(obj2)
console.log(obj3)
console.log(obj4)
    // 使用递归进行深拷贝
function deepCopy(obj) {
    let objCopy = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] == 'object') {
                objCopy[key] = deepCopy(obj[key])
            } else {
                objCopy[key] = obj[key]
            }
        }
    }
    return objCopy;
}