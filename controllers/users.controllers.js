

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

// const getAllUsers=(rq, res)=>{
//     res.send("get all users")
// }

module.exports.getAllUsers=(req, res, next)=>{
    const {ip, query,params, body, headers }=req;
    console.log(ip, query,params, body, headers )
    res.send("got it");
//    res.json(users.slice(0,limit) );
}

module.exports.saveUsers=(req, res)=>{
    console.log(req.body);
    res.send(users);
}

module.exports.updateUsers=(req,res)=>{
const{id}=req.params;
const filter={_id:id};
const newUser =users.find(user => user.id ===parseInt(id));
newUser.id=id;
newUser.name=req.body.name;
res.send(newUser);

}
module.exports.getUserDetails=(req,res)=>{
    const{id}=req.params;
    console.log(id);
    const foundUser=users.find(user => user.id === parseInt(id))
    res.send(foundUser);
    }

module.exports.deleteUsers=(req,res)=>{
    const {id}=req.params;
    const filter={_id:id}
    users=users.filter(user => user.id !== parseInt(id));
    res.send(users);
    res.status(200).send({
        status:true,
        message:"success",
        data:foundUser
    })

}




