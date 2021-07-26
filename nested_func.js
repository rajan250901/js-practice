//nested function
function rectangle(width,height)
{
    let area = width * height;
    console.log("area of the rectangle is : ", + area);
    function square(w,h)
{
    console.log("area of the square is : " + (w*h));
}
    square(width,height);
}
rectangle(10,3);