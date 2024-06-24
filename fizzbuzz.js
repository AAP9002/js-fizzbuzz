// mod function
function mod(i,k){
    return i%k == 0
}

// This is our main function
function fizzbuzz() {
   for(var i = 0; i < 100; i++){
    if(mod(i,3) && mod(i,5)){
        console.log("FizzBuzz")
    }else if(mod(i,3)){
        console.log("Fizz")
    }else if(mod(i,5)){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
   }

}

// Now, we run the main function:
fizzbuzz();

