import express from 'express';

import { createUser,getUsers } from '../controllers/users';




const router = express.Router();

let users=[
    // {
    //     "name1":"kamal",
    //     "name2":"pavi",
    //     "age":27
    // },
    // {
    //     "name1":"kannan",
    //     "name2":"pavi",
    //     "age":27
    // }
]

router.get('/',getUsers);





router.post('/',createUser);

router.get('/:id',);

router.delete('/:id',(req,res)=>{
    const {id}=req.params;

    users=users.filter((user)=>user.id != id);

    res.send(`user with the id ${id} deleted from the databse`)
});

router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    const {name1,name2,age}=req.body;

    const user = users.find((user)=>user.id === id);
    if(name1) user.name1 =name1;
    if(name2) user.name2 =name2;
    if(age) user.age =age;

    res.send(`User with the id ${id} has been updated`)
    // if(name1){
    //     user.name1=name1;
    // }
    // if(name2){
    //     user.name2=name2;
    // }
    // if(age){
    //     user.age=age;
    // }

})



export default router;