let num:Array<number>=[100,200,300,400,500,600];
console.log("using classical for loop");
for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}
console.log("using for in loop");
for(let i in num)
{
    console.log("index"+i+"value is"+num[i]);
}
console.log("using of loop");
for(let n of num)
{
    console.log("value"+n);
}