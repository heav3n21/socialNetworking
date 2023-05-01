const { Schema, Types,model } = require('mongoose');


const schemaReaction = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
          
        },
        
        reactionBody: {
            type: String,
            required: true,
            //
            // check string if its inbetween 1-280

        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now()

        },
        
    },
    {
        toJSON:{
            virtuals: true,
        }
    }
)


const Reaction = model('reaction',schemaReaction);

module.exports = Reaction;