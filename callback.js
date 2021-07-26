//1st method to display multiplication values
/*function display(k)
{
    console.log("multiplication of the numbers " + k);
}
function multiply(x , y)
{
    let p = x * y;
    return p;
}
let result = multiply(5,6);
display(result);

//2nd method to display the multiplication values

function display(p)
{
    console.log("multiplication of the numbers is " + p);
}
function multiply(x , y)
{
    let k = x * y;
    display(k);
}
multiply(10,30);
multiply(5,7);
*/
//3rd method for using callback

function display(p)
{
    console.log("multiplication of two numbers are ",p);
}
function multiply(x ,y , result)
{
    let k= x* y;
    result(k);
}
multiply(10 ,30 , display);
multiply(4 ,7 , display);