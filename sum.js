//sum of two numbers
function sum(x,y)
{
    console.log(x+y);
}
sum(10,20);
sum(30,40);
sum(136,644);
//sum of two numbers in an array
function sum1(arr)
{
    let add = 0;
    console.log("list of array numbers ");
for(let i = 0 ; i < arr.length ; i++)
{
    add = add + arr[i];
    console.log(arr[i]);
}
console.log("sum of all the values in the list " + add);
}
const num = [10, 20 , 30 ,40];
sum1(num);

