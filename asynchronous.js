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
    setTimeout( () =>{console.log("wake up at 7 am");},1000);
    setTimeout( () =>{console.log("brush your teeth");},2000);
    setTimeout( () => {argument();},3000);
    setTimeout( () =>{console.log("take rest for a while");},4000);
    setTimeout( () =>{console.log("start study");},5000);
    setTimeout( () =>{console.log("study " + data.subjects[0]);},6000);
    setTimeout( () =>{console.log("get ready for school");},7000);
    setTimeout( () =>{console.log("go to school");},8000);
    setTimeout( () =>{console.log("return home from school");},9000);
    setTimeout( () =>{console.log("take lunch");},10000);
    setTimeout( () =>{console.log("eat " +data.food2[0]+" , " +data.food2[1]+ " and "+data.food2[4]);},11000);
    setTimeout( () =>{console.log("take rest for a while");},12000);
    setTimeout( () =>{console.log("go to play");},13000);
    setTimeout( () =>{console.log("play " +data.sports[2]);},14000);
    setTimeout( () =>{console.log("come back home ");},15000);
    setTimeout( () =>{console.log("start study and do your homework ");},16000);
    setTimeout( () =>{console.log("take dinner");},17000);
    setTimeout( () => { console.log("Eat " + data.food3[0] + " and " + data.food3[1]);},17500);
    setTimeout( () =>{console.log("go to sleep");},18000);
}
 process(breakfast);   
 setTimeout( () => { console.log("*********************");},19000);
 setTimeout( () => { console.log("this is my daily routine ");},20000);
 setTimeout( () => { console.log("_______________THANK YOU______________");},21000);        