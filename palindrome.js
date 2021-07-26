// calculating reverse of any numbers
function palindrome(num)
{
let sum = 0;
let p = num;
while(p!=0)
{
     let k = p % 10;
     sum = (sum * 10) + k;
     p = parseInt(p / 10);
}
if(num == sum)
{
    console.log(num + " is a palindrome number ");
}
else
{
    console.log(num +" is not a palindrome number");
}
}
palindrome(321);
palindrome(323);
palindrome(121);
