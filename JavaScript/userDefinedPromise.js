var option = prompt("enter your option")
var obj=new Promise(function(resolve,rejected){
    if(option=="yes"){
        resolve("succefully done the task!")
    }else{
        rejected("Failure--Error generated")
    }
});
//Asynchronous callback function then execute only if
//promise resolve else catch execute
obj.then(data=>document.write(data)).catch(error=>document.write(error));