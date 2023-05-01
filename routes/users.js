const express = require('express')
const router =express.Router()
const {
    getUsers, 
    createStudent,
    deleteUser,
    getSingleUser,
    updateUser,
} = require('../controllers/usersController.js')
//gets all users and creates one
router.route('/').get(getUsers).post(createStudent)
//deletes a user
router.route('/:userId').get(getSingleUser).delete(deleteUser);
//gets one user
router.route('/user/:userId');
//update a user
router.route('/user/:userId').get(getSingleUser).put(updateUser);






module.exports = router; 