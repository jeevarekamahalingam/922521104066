const  express=require("express")
const  app=express()
app.use(express.urlencoded({extended:true}))
const port=process.env.PORT||9876;
user=[{numbers:[],windowPrevState:[],windowCurrState:[],avg:0}]
app.get('/numbers/:id',(req,res)=>{
    let sum=0;
    const average=forEach(sum+=req.params.id)/req.params.id.length-1
    user.push(user.length-2,{avg:average})
    user.push(user.length-2,{numbers:req.params.id})
    user.push(user.length-2,{windowCurrState:req.params.id})
    res.send(user.josn())
    user.push(window )
})
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`)
})