// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(string = 'go to the office', ) {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(highlight = "*") {
    return function(string = "a hard worker") {
        return `You are ${highlight}${string}${highlight}!`
    }
}


const Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"


function actionApplyer(num, array) {
    return num
}

actionApplyer(13, [
    function(a) { return a * 2 },
    function(a) { return a + 1000 },
    function(a) { return a % 7 }
])
saturdayFun("bathe my dog")
mondayWork("work from home")
wrapAdjective("||")