function reverse(str)
{
    let text = "";
    for(var i = str.length-1 ; i>=0; i--)
    {
    text += str[i];
    }
    return(text);
}
const result=reverse("Rajan");
console.log(result);

// reverse of an array

const fruits=["apple" , "banana" , "orange" , "pineapple"];
console.log(fruits.reverse());