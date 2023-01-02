const express = require('express');
const { Request , Response, NextFunction } = express;
const app = express();
app.use(express.json());


app.use((req:Request , res:Response  , next: NextFunction ) => {
  next();
})

app.get("/", (req: Request, res:Response)=> {
  res.status(200).json({data: "api is working "});
})

app.post("/hello", (req: any, res:any )=> {
  res.send("api is working ")
})

app.listen(5000, ()=> {
  console.log("-- api is running on 5000 -- ")
});
