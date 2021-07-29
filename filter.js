//filter() creates an array that filled with all array elements that passes a test
//this method does not change the original array
//this method does not execute the function for empty array elements
const arr = [54,14,76,16,11,12,32,22,15,23];
console.log("list of all numbers ");
for(let x in arr)
{
console.log(arr[x]);
}
console.log("values obtained after applying filter method ");
const arr1 = arr.filter(testvalues);
function testvalues(arr)
{
    return arr>=18;
}
for(let x in arr1)
{
    console.log(arr1[x]);
}