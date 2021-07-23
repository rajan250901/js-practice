function calculator(operator , val1 ,val2 )
{
    switch(operator)
    {
        case '+': result= val1+val2;
                  console.log(result);
                  break;
        case '-': result=val1 - val2;
                  console.log(result);   
                  break;    
        case '*': result=val1 * val2;
                  console.log(result);   
                  break;
         case '/': result=val1 / val2;
                  console.log(result);   
                  break; 
        default : console.log("invalid choice");                                  
    }
}
calculator('+',20,30);
calculator('-',50,30);
calculator('*',6,4);
calculator('/',20,4);