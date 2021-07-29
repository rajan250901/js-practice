console.log("______________DAILY ROUTINE_____________");

const data = {
    food1 : ["egg" , "apple" , "banana ","chapaati", "bread" , "jam"],
    food2 : ["rice","biryaani", "daal", "salaad", "paapad"],
    food3 : ["chapaati", "sabji", "milk", "gulaabjaamun"],
    subjects : ["physics", "chemistry" , "maths", "biology","computer", "english"],
    sports : ["football", "badminton" , "cricket"]             
  };
function breakfast()
{
    console.log("Eat " + data.food1[0] + " and " +data.food1[4] );
}
function process(argument)
{
    console.log("Wake up at 7 am");
    console.log("Brush your teeth");
    argument();
    console.log("Take rest for a while");
    console.log("Start study");
    console.log("Study " + data.subjects[0]);
    console.log("Get eady for school");
    console.log("Go to school");
    console.log("Return home from school");
    console.log("Take lunch");
    console.log("Eat " +data.food2[0]+" , " +data.food2[1]+ " and "+data.food2[4]);
    console.log("Take rest for a while");
    console.log("Go to play");
    console.log("Play " +data.sports[2]);
    console.log("Come back home ");
    console.log("Start study and do your homework ");
    console.log("Go to sleep");
}
 process(breakfast);           