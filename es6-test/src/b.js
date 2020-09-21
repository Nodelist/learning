// var a = "111";
// var b = "222";
// var c = {
//     d: 1,
//     e: "2"
// };

// export { a, b, c };

let num = 19934318
debugger
let a = num.toString(2);
console.log(a)
let b = a.split('')
let count = 0
b.forEach(item => {
    if (item & 1) {
        count++
    }
})
console.log(count)