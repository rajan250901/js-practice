function leapyear(year)
{
    if(year % 4 == 0)
    {
        console.log(year + " is a leap year");
    }
    else
    {
        console.log(year + " is not a leap year");
    }
}
const d = new Date();
leapyear(d.getFullYear());
leapyear(2020);