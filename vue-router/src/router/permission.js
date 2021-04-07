import router from './index'

router.beforeEach((to, from, next) => {
    console.log("to", to)
    console.log("from", from)
    console.log("next", next)
    debugger
    if (to.query.boolean == "true") {
        next({ path: 'advanced' })
    } else {
        next()
    }

})
router.afterEach((to, from) => {
    debugger
})