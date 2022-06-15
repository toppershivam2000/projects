const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeidl_development');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error in connecting to mongoose"));
db.once('open',function(){
    console.log('Connected to databse::Mongodb');
});
module.exports=db;