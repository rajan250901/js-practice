const marks = [100, 200 , 300];
function pass(total,num)
{
    return total+num;
}
const store = marks.reduce(pass);
console.log(store);