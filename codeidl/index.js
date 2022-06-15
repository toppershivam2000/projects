const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');
const cookieParser=require('cookie-parser');
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(cookieParser());
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use('/',require('./routes/index'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err)
    console.log(`error in running: ${err}`);

    console.log(`server is running on port ${port}`);
})