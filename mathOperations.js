function add(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Parameter must be number")
    }
    return a + b
}

function subtract(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Parameter must be number")
    }
    return a - b
}

function multiply(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Parameter must be number")
    }
    return a * b
}

function divide(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Parameter must be number")
    }
    if(b == 0){
        throw new Error("Cannot devide by zero")
    }
    return a / b
}

console.log(add("fgd","gfkj"))

module.exports = {add, subtract, multiply, divide}