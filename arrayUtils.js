function unique(arr){
    if(!Array.isArray(arr)){
        throw new Error("Input must be an array")
    } 
    return [...new Set(arr)]
}

function flatten(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array")
    }

    let newArr = []

    for (let i = 0; i < arr.length; ++i) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }

    return newArr
}


function chunk(arr, size){
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array")
    }
    if (typeof size !== "number" || size <= 0) {
        throw new Error("Chunk size must be a positive number");
    }
    let chunk = []
    
    if(size > arr.length) {
        return arr

    } 
    for(let i = 0; i < arr.length; i += size){
        chunk.push(arr.slice(i, i + size))
       
    }
    return chunk
   
}

function* chunks(arr, size){
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array")
    }
    if (typeof size !== "number" || size <= 0) {
        throw new Error("Chunk size must be a positive number");
    }

    for(let i = 0; i < arr.length; i += size){
        yield arr.slice(i, i + size)
    }

}

for(const i of chunks([1,2,3,4,5,6,7,8], 3)){
    console.log(i)

}



module.exports = {unique, flatten, chunk, chunks}