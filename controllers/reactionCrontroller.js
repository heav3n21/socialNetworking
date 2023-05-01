const Reaction = require('../models/Reaction');
const Thought = require('../models/Thought');



module.exports = {
    getReactions(req,res){
        Reaction.find()
        .then(async(reaction)=>{
            const reactionObj = {
                reaction,
            }
            return res.json(reactionObj)
        })
        .catch((err)=> res.status(500).json(err))
    },
    createFriend(req,res){
        
        
            Reaction.create(req.body)
              .then(async (reaction) => {
                // console.log(req.params.thought.Id);
                return  await Thought.findOneAndUpdate(
                    
                  { _id: req.params.thoughtId },
                  { $addToSet: { reactions: reaction._id } },
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
          deleteReaction(req,res){
            Reaction.findOneAndRemove({ _id: req.params.reactionId })
            .then((reaction)=>{
                res.json({ reaction })
            })
              .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
              });

          },
          getOneReaction(req,res){
            Reaction.findOne({ _id: req.params.ReactionId })
              .then((reaction)=>{
                res.json({ reaction })
            })
              .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
              });
          }

}