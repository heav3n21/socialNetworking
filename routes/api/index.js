// const thoughts = require('../../controllers/thoughts');

const router = require('express').Router();
const thoughtsapi = require('./thoughts')


router.use('/thoughts', thoughtsapi)




module.exports = router;