// mod function
function mod(i,k){
    return i%k === 0
}

// This is our main function
function fizzbuzz() {
    for(var i = 0; i < 100; i++){
        var words = []

    if(mod(i,3)){
        words.push("Fizz")
    }
    
    if(mod(i,5)){
        words.push("Buzz")
    }
    
    if(mod(i,7)){
        words.push("Bang")
    }

    if (words.length === 0){
        console.log(i)
    }
    else{
        console.log(words.join(''))
    }
   }

}

// Now, we run the main function:
fizzbuzz();

