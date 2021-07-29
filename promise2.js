let myvariable = new Promise( () => {(resolve,reject)
let isfull=false;
if(isfull)
{
    resolve();
}
else
{
    reject();
}
});
myvariable.then(function(){console.log("well done bro !!");})
         .catch(function(){ console.log("Sorry bro !! mistake comes");});