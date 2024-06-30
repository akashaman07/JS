// Immediately Invoked Function Expressions (IIFE)

// many time global scope pollution problem so, to remove that we use IIFE 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

