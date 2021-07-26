function quadratic(a, b, c)
{
console.log("form of the quadratic equations is : " + a +"x^2 + " + b +"x + " + c);
let d = b*b - 4*a*c ;
if(d>0)
{
    console.log("roots are real and unequal ");
    console.log("roots of the quadratic equation are :" );
    console.log((-b+Math.sqrt(d))/2*a, (-b-Math.sqrt(d))/2*a);
}
if(d==0)
{
    console.log("roots are real and equal ");
    console.log("roots of the quadratic equation are :" );
    console.log((-b/2*a), (-b/2*a));
}
else
{
    console.log("imaginary roots");
}
}
quadratic(1,1,1);
quadratic(1,-2,3);
