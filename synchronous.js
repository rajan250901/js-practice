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
    console.log("eat " + data.food1[0] + " and " +data.food1[4] );
}
function process(argument)
{
    console.log("wake up at 7 am");
    console.log("brush your teeth");
    argument();
    console.log("take rest for a while");
    console.log("start study");
    console.log("study " + data.subjects[0]);
    console.log("get eady for school");
    console.log("go to school");
    console.log("return home from school");
    console.log("take lunch");
    console.log("eat " +data.food2[0]+" , " +data.food2[1]+ " and "+data.food2[4]);
    console.log("take rest for a while");
    console.log("go to play");
    console.log("play " +data.sports[2]);
    console.log(" come back home ");
    console.log("start study and do your homework ");
    console.log("go to sleep");
}
 process(breakfast);           