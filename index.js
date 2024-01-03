const express = require('express');

const port = 3000;

const app = express();

const adminRoutes = require('./routes/routes');

app.set('view engine', 'ejs');

app.use('/admin', adminRoutes);

// app.get('/admin',(req,res)=>{
//     return res.render('index')
// })

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server is running:- ${port}`);
});
