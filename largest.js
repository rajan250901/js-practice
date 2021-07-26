function maximum(arr)
{
large= Math.max.apply(null,arr);
console.log("largest number in the list " + large);
}
const arr1 = [23, 243,874,43,123,45,82];
maximum(arr1);

//another method to find largest number
console.log("another method to find largest number ");
let large1 = -Infinity;
let len = (arr1.length)-1;
while(len>=0)
{
if(arr1[len] > large1)
{
    large1 = arr1[len];
}
len--;
}
console.log("largest value in the list : " + large1);