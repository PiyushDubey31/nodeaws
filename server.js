const express=require('express');
const PORT=process.env.PORT||3000
const app=express();
app.get("/",(req,res)=>{
    res.json({"message":"hellow nodeaws"})
})
app.listen(PORT,()=>{
    console.log(`server started at port number ${PORT}`)
})
