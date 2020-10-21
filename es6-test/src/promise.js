const http = require('http');

http.createServer((request, response) => {
    response.write("Hello World!")
}).listen(8091)
let data = {
    a: [1, 2, 3, 4],
    b: ['a', 'b', 'c', 'd']
}
console.log("1", 111)
setTimeout(function() {
    console.log("4")
    new Promise(resolve => {
        resolve(data)
        console.log("5")
    }).then(res => {
        console.log("6", res)
    })
})
new Promise(resolve => {
    resolve(data.a)
    console.log("2")
}).then(res => {
    console.log("3", res)
})

new Promise.all