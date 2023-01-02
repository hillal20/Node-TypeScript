const express = require('express');
const app = express();


app.get("/", (req: any, res:any )=> {
  res.send("api is working ")
})
app.listen(5000, ()=> {
  console.log("-- api is running on 5000 -- ")
})
