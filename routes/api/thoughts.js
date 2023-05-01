const router = require('express').Router();
const {
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
    getOneThought,
} = require('../../controllers/thoughts');


// get all thoughts
router.route('/').get(getThoughts)

// get one single thought
router.route('/thought/:thoughtId').get(getOneThought)
// post a new  thought 
router.route('/').post(createThought)

// update a new thought
router.route('/:thoughtId').get(getThoughts).put(updateThought)
// delete a thought
router.route('/:thoughtId').delete(deleteThought)





module.exports = router