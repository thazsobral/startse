function hello(number) {
    const myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("hello brothers");
            if(number == 1) {
                reject();
            } else {
                resolve();
            }
        }, 0);
    });
    return myPromise;
};

function myCallback() {
    console.log("called me?");
};

function myFunctionToReject() {
    console.log("My Exception!!")
};

hello(1).then(myCallback).catch(myFunctionToReject);
