const {Schema,model} = require('mongoose');
const Thoughts = require('./Thought')

// const { User } = require('./');
// const assigmentSchema = require('./')





const UserSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email:{
            type: String,
            required: false,
            unique: true,
        },
        thoughts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        }    
        ],
    //     friends:[
    //         {
    //             type: Schema.Types.ObjectId,
    //             ref: 'Friend,'
    //         }    
    //     ]

     },
    {
        toJSON:{
            virtuals:true,
        },
         id: false,

    }
);

const User = model('user',UserSchema);


module.exports = User;