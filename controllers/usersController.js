// const { ObjectId } = require('mongoose').Types
const Users = require('../models/User');


    module.exports = {
        // Get all students
        getUsers(req, res) {
          Users.find()
          .populate('thoughts')
            .then(async (users) => {
              const userObj = {
                users,
              };
              return res.json(userObj);
            })
            .catch((err) => {
              console.log(err);
              return res.status(500).json(err);
            });
        },
        createStudent(req, res) {
            Users.create(req.body)
              .then((user) => res.json(user))
              .catch((err) =>{ 
                console.log(err) 
                res.status(500).json(err)});
          },
          getSingleUser(req, res) {
            console.log(req.params.userId)
            Users.findOne({ _id: req.params.userId })
            .populate('thoughts')
              .then((user)=>{
                res.json({ user })
            })
              .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
              });
          },
          deleteUser(req, res) {
            Users.findOneAndRemove({ _id: req.params.userId })
            .then((user)=>{
                res.json({ user })
            })
              .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
              });
          },
          updateUser(req,res){
        
            Users.findOneAndUpdate(
                { _id: req.params.userId},
                { $set: req.body },
                {  new: true },
            )
            .then((user)=>{
                !user
                ?res.status(404).json({message:'no user with this id!'})
                : res.json(user)
            })
            .catch((err)=> res.status(500).json(err));
          }
};