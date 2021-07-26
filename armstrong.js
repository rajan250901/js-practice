function armstrong(num)
{
    let p=num;
    let sum = 0;
while(num!=0)
{
    let k = num % 10;
    sum += k*k*k ;
    num=parseInt(num/10);
}
if(p==sum)
{
    console.log(p + " is an armstrong number");
}
else
{
    console.log(p +" is not an armstrong number");
}
}
armstrong(153);
armstrong(234);