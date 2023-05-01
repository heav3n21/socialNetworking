const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // check string if its inbetween 1-280
        },

        createdAt: {
            type: Date,
            default: Date.now()

        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        reactions:[
            {
                type: Schema.Types.ObjectId,
                ref:'Reaction'
            }
        ]

    },
    {
        toJSON:{
            virtuals: true,
        }
    }
)


const Thought = model('thought',thoughtSchema);

module.exports = Thought;