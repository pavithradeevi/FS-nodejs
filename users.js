import { v4 as uuidv4 } from 'uuid';

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



export const getUsers =(req,res)=>{
    res.send(users);
    // console.log(users)
    // res.send("hello users")
}




export const createUser = (req,res) =>{
    
    // console.log(req.body);
    const user=req.body;
    // const userId = uuidv4(); 
    // const userWithId = { ...user, id:uuidv4}
    users.push({ ...user, id:uuidv4() });
    res.send(`User with the username ${user.name1} added to the database!`)
}

export const getUser =(req,res)=>{
    // res.send('The GET ID Route');
    // console.log(req.params);
    const {id}=req.params;

    const foundUser = users.find((user)=>user.id === id);
    res.send(foundUser)
    // res.send(req.params);
}

export const deleteUser = (req,res)=>{
    const {id}=req.params;

    users=users.filter((user)=>user.id != id);

    res.send(`user with the id ${id} deleted from the databse`)
}

export const updateUser = (req,res)=>{
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

}
