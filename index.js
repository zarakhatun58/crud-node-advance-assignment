// const express=require('express');
// const cors=require('cors');
// require("dotenv").config();
// const app=express();

// const port =process.env.PORT || 5000;


// const dbConnect = require('./utils/dbConnect')
// const viewCount=require('./middleware/viewCount')
// const usersRoutes=require('./utils/users')
// const {default :rateLimit} =require('express-rate-limit');
// const errorHandler=require('./middleware/errorHandler')

// app.use(cors());

// app.use(express.json());
// // app.use(express.static("public"));
// dbConnect();

// app.use("/api/users", usersRoutes);

// app.get( (req, res) =>{
//     res.send("hello world");
    
// })

// app.use(errorHandler);



// app.listen(( req, res) =>{
//     res.send(`my users operation ${port}`);
// })

const express = require('express')
const app = express()
const port = 5000

let users=[
    {
        "Id": 1,
        "gender": "male",
        "name": "Mohammed Ansar",
        "contact": "9876362362",
        "address": "kolkata, westbengal -700014",
        "photoUrl": "http://placehold.it/32x32"
    },
    {
        "Id": 2,
        "gender": "male",
        "name": "Seikh Mahidul ",
        "contact": "9876311362",
        "address": "kolkata, westbengal -700014",
        "photoUrl": "http://placehold.it/32x32"
    },
    {
        "Id": 3,
        "gender": "male",
        "name": "Fayez Seikh",
        "contact": "9567632362",
        "address": "kolkata, westbengal -700014",
        "photoUrl": "http://placehold.it/32x32"
    },
    {
        "Id": 4,
        "gender": "female",
        "name": "Jahanara Khatun",
        "contact": "9527632362",
        "address": "kolkata, westbengal -700014",
        "photoUrl": "http://placehold.it/32x32"
    },
    {
        "Id": 5,
        "gender": "female",
        "name": "Julekha parvin",
        "contact": "9117632362",
        "address": "kolkata, westbengal -700014",
        "photoUrl": "http://placehold.it/32x32"
    }
]

app.get('/', (req, res) => {
    const {ip, query,params, body, headers }=req;
    console.log(ip, query,params, body, headers )
    //res.send("got it");
    //res.download(__dirname + "./users.controller.js");
   
    const { limit, page } = req.query;
  console.log(limit, page);
    res.json({"name": "abc" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})