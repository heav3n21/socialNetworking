// const thoughts = require('../../controllers/thoughts');

const router = require('express').Router();
const thoughtsapi = require('./thoughts')
const reactionsapi = require('./reactions')

router.use('/thoughts', thoughtsapi)
router.use('/reactions',reactionsapi);




module.exports = router;