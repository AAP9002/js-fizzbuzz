// mod function
function mod(i, k) {
    return i % k === 0
}

function output_result(i, words){
    if(mod(i, 17)){
        words = words.reverse()
        console.log(words.join(''))
    }
    else{
        console.log(words.join(''))
    }
}

function check_special_case(i){
    var words = []

    if (mod(i, 11)) {
        if (mod(i, 13)) {
            words.push("Fezz")
        }
        words.push("Bong")
        output_result(i, words)
        return true
    }
    return false
}

// This is our main function
function fizzbuzz() {
    for (var i = 0; i < 23206; i++) {
        var words = []

        if (check_special_case(i)) {
            continue
        }

        if (mod(i, 3)) {
            words.push("Fizz")
        }

        if (mod(i, 13)) {
            words.push("Fezz")
        }

        if (mod(i, 5)) {
            words.push("Buzz")
        }

        if (mod(i, 7)) {
            words.push("Bang")
        }

        if (words.length === 0) {
            console.log(i)
        }
        else {
            output_result(i, words)
        }
    }

}

// Now, we run the main function:
fizzbuzz();

