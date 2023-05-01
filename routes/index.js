const router = require('express').Router();
const userRoutes = require('./users')
const apiRoute = require('./api/index')


router.use('/',userRoutes)
router.use('/api',apiRoute)



module.exports = router;