const express = require("express"); //imports express liabary
const app = express();
const port = process.env.PORT || 5001;


app.use("/static", express.static("public")); //telling app to use the public folder when the request is made to "/static"

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
}); //listing on local host for request to the web server
