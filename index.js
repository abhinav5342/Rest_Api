const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let bloglist = [];

app.get('/blogs', (req,res)=>{
    return res.status(404).json({
        data: bloglist,
        success: true,
    });
});

app.post('/blogs',(req,res)=>{
   bloglist.push({
                title:req.body.title, 
                content:req.body.content,
                id:Math.floor(Math.random()*1000), 
                 });
   return res.status(202).json({
    success:true,
   }) ;
});

app.get('/blogs/:id',(req,res)=>{
    const result = bloglist.filter((blog) => blog.id==req.params.id);
    return res.status(203).json({
        data:result,
        success:true,
    })
})

app.listen(PORT, () => {
    console.log("The server will start at ",PORT);
});

