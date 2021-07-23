//calculating factors of any numbers
function factor(num)
{
    console.log("factors of the number " + num + " is" );
    for(let i = 1 ; i<=num ; i++)
    {
        if(num % i == 0)
        {
            console.log(i);
        }
    }
}
factor(12);
factor(30);
factor(65);