function count(str)
{
   const num = str.match(/[aeiou]/gi);
   const total=num.length;
   console.log(total);
    }
count("Rajan Singh is a good boy");

//count the number of occurences of a character in a string
 