const express= require("express")
const express= require("./routes/post.route.js")


const app=express()

app.listen(4000, () => {
    console.log("server strated")
})