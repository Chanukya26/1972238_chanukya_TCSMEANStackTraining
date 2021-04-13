let express = require("express");//load the module
let app = express(); // creating the referance of express module
let port =9090;

//get methods.
app.get("/",(req,res)=>{
    res.send("welcome to express module");
})

app.get("/aboutus",(req,res)=>{
    res.send ("welcome to aboutus page");
})
app.get("/contactus",(req,res)=>{
    res.send ("welcome to contactus page");
})
app.get("/login",(req,res)=>{
    res.send ("welcome to Login page");
})
 //passing single value using query
 // http://localhost:9090/singleQuery?name=Ajay
 app.get("/singleQuery",(req,res)=>{
     let name=req.query.name;
    res.send ("welcome user"+name);
})  //passing multiple value using query
// http://localhost:9090/multiple?name=Ajay&id=121&salary=65776
app.get("/multiple",(req,res)=>{
    let name=req.query.name;
    let id=req.query.id;
    let salary=req.query.salary;
    salary = eval(salary)+2000; // eval() is used to convert string to number
   res.send (`welcome user ${name},<br/> id is ${id}, <br/> gross salary is ${salary}`);
}) 
//Passing single value using path param
// http://localhost:9090/singlePath/Chanu
app.get("/singlePath/:name",(req,res)=>{
    let uname=req.params.name;
   res.send ("welcome user using path param"+uname);
})
//Passing multiple value using path param
// http://localhost:9090/multiPath/Chanu/121/35000
app.get("/multiPath/:name/:id/:salary",(req,res)=>{
   // res.send(req.params); // to directly send the parameters
    let uname=req.params.name;
    let uid=req.params.id;
    let usalary=req.params.salary;
    res.send (`${JSON.stringify(req.params)} <br/>welcome user ${uname},<br/> id is ${uid}, <br/> gross salary is ${usalary}`);
})





app.listen(port,()=>console.log(`server running on port number ${port}`));