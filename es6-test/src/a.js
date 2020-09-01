let obj = {
    name: 'wang',
    age: 23
};

let o = Object.create(obj, {
    sex: {
        writable: true,
        configurable: true,
        value: 'male'
    }
})
console.log(o)
console.log(Object.keys(o))
    // console.log(Object.getPrototypeOf(obj))
    // console.log(obj.constructor.prototype)
    // console.log(Object.getPrototypeOf(o))
    // console.log(o.name)
    // console.log(o)