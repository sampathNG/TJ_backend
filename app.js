const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const routes = require("./r")

app.use("/",routes)


app.listen(5000,console.log("running on port 5000"))