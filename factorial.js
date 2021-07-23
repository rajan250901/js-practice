function factorial(num)
{
    let fact = 1;
    for(let i=num ; i>0 ; i--)
    {
        fact = fact * i;
    }
    console.log(fact);
}
factorial(4);
factorial(6);
factorial(5);
