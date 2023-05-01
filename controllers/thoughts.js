const Thoughts = require('../models/Thought')





module.exports = {

    getThoughts(req,res){
        Thoughts.find()
        .then(async(thought)=>{
            const thoughtObj = {
                thought,
            }
            return res.json(thoughtObj)
        })
        .catch((err)=> res.status(500).json(err))
    },
    createThought(req,res){
        Thoughts.create(req.body)
        .then((thought) => res.json(thought))
              .catch((err) =>{ 
                console.log(err) 
                res.status(500).json(err)});
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