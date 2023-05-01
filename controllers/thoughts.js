const Thoughts = require('../models/Thought')
const User = require('../models/User')




module.exports = {

    getThoughts(req,res){
        Thoughts.find()
        .populate('reactions')
        .then(async(thought)=>{
            const thoughtObj = {
                thought,
            }
            return res.json(thoughtObj)
        })
        .catch((err)=> res.status(500).json(err))
    },
    createThought(req, res) {
        
        const {thoughtText, username} = req.body
        // username = username.toString();
        
            Thoughts.create({thoughtText,username})
              .then(async (thought) => {
                console.log(req.params.userId);
                return  await User.findOneAndUpdate(
                    
                  { _id: req.params.userId },
                  { $addToSet: { thoughts: thought._id } },
                  { new: true }
                );
              })
              .then((user) =>
                !user
                  ? res
                      .status(404)
                      .json({ message: 'Post created, but found no user with that ID' })
                  : res.json('Created the post 🎉')
              )
              .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
          },
   
        updateThought(req,res){
        
            Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtId},
               { $set: req.body },
                {  new: true },
            )
            .then((thought)=>{
                !thought
                ?res.status(404).json({message:'no thought with this id!'})
                : res.json(thought)
            })
            .catch((err)=> res.status(500).json(err));
          },
          deleteThought(req,res){
            console.log(req.params.thoughtId)
            Thoughts.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought)=>{
                res.json({ thought })
            })
              .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
              });
          },
          getOneThought(req,res){
            Thoughts.findOne({ _id: req.params.thoughtId })
              .then((thought)=>{
                res.json({ thought })
            })
              .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
              });
          }

}