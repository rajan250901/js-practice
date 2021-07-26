function hcf(num1 , num2)
{
    factor(num1);
    factor(num2);
}
    function factor(num1)
{
    console.log("factors of the number " + num1 + " is" );
    for(let i = 1 ; i<=num1 ; i++)
    {
        if(num1 % i == 0)
        {
           console.log(i);
        } 
    }
}  
hcf(12, 18);