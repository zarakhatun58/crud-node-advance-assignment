const express=require('express');
const limiter=require('../middleware/limiter')
const viewCount=require('../middleware/viewCount')
const usersControllers=require("../controllers/users.controllers");
const router= express.Router();


router
.route('/')
.get(usersControllers,usersControllers.getAllUsers)

.post(usersControllers, usersControllers.saveUsers)

router.route("/:id").get(limiter,viewCount, usersControllers.getUserDetails)
.patch(usersControllers.updateUsers)

.delete(usersControllers.deleteUsers)

module.exports=router;


