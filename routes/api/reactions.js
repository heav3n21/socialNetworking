const { createFriend,
    getReactions,
    deleteReaction,
    getOneReaction
} = require('../../controllers/reactionCrontroller');

const router = require('express').Router();



router.route('/:thoughtId').post(createFriend)
router.route('/').get(getReactions)
router.route('/:reactionId').get(getOneReaction)
router.route('/:reactionId').delete(deleteReaction)





module.exports = router;