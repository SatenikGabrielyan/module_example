
const reverse = (str) => {
    if(typeof str != "string"){
        throw new Error("Input must be a string")
    }

     return str.split("").reverse().join("")
     
}

const capitalize = (str) => {
    if(typeof str != "string"){
        throw new Error("Input must be a string")
    }
    let newStr = str.charAt(0).toUpperCase() + str.slice(1)
    return newStr
}

const truncate = (str, length) => {
    if(typeof str != "string"){
        throw new Error("Input must be a string")
    }
    if(str.length > length){
        return str.slice(0,length) + "..."
    }
    return str

}

module.exports = {reverse, capitalize, truncate}