// Kilometers to Miles
function convert(km)
{
    console.log(km + " km is equal to " + (0.62 * km) + " miles");
}
convert(100);
convert(24);
convert(200);

// numbers to strings
function convert2(num)
{
    console.log(num.toString());
}
convert2(10);
convert2(50);

// string to numbers
function convert3(str)
{
    console.log(parseInt(str))
}
convert3("Rajan");
convert3("30");
convert3("40 50");