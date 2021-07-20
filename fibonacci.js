var n1 = 0;
var n2 = 1;
var n = 12;
var y;
console.log("list of fibonacci series are");
console.log(+ n1 + "," + n2 + ",");
while(n > 2)
{
 y = n1 + n2 ;
console.log(y + ",");
n1 = n2;
n2 = y;
n--;
}