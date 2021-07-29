let mypromise = new Promise(function(resolve,reject){
    const x = "Rajan ";
    const y = "Rajan ";
    if(x===y)
    {
        resolve();
    }
    else
    {
        reject();
    }
});
    mypromise.then(function(){console.log("success");},
                   function(){console.log("failure");})