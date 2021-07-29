let mypromise = new Promise(function(resolve,reject){
    const x = "My name is Rajan";
    const y = "My name is Rajan";
    if(x===y)
    {
        resolve();
    }
    else
    {
        reject();
    }
});
    mypromise.then(function(){console.log("success !!");},
                   function(){console.log("failure !!");})