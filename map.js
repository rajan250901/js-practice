//map() method creates a new array with the result of calling a function for each array elements
//map()does not change the original array, does not execute for empty elements
//calls the function once for each array elements
const numbers = [12, 25];
console.log("list of numbers");
    for(let x of numbers)
    {
        console.log(x);
    }
console.log("multiplication of numbers");
function multiply()
 {
     for(let y of numbers)
     {
    var p = y*y;
    console.log(p);
}
}
 numbers.map(multiply);
