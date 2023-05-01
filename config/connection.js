const { connect, connection } = require('mongoose');



const connectString =
process.env.MONGODB || 'mongodb://127.0.0.1:27017/matthewDB';

connect(connectString,{
    useNewUrlParser: true,
   
})

module.exports = connection;