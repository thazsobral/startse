function hello(callback) {
    setTimeout(function() {
        console.log("hello brothers");
        if(callback) { // garantir que a função de callback foi passada
            callback();
        }
    }, 0);
}

function myCallback() {
    console.log("called me?");
}
// Obs.: descomente o exemplo que deseja ver

// exemplo de assincronismo
hello();
myCallback();

// exemplo simples de callback
hello(myCallback);