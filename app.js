const {reverse, capitalize, truncate} = require("./stringUtils")

const {unique, flatten, chunk, chunks} = require("./arrayUtils")

const {formatDate, isWeekend, daysBetween } = require("./dateUtils")

//stringUtils
console.log("reverse string ",reverse("hello"))
console.log("capitalize string ",capitalize("hello"))
console.log("truncate string ",truncate("hello world", 6))
console.log("truncate string ",truncate("hello", 7 ))


//arrayUtils
console.log("unique ", unique([2,3,4,4,5,2,7,8,8]))
console.log("flatten ", flatten([2,[5,6],[[3,6]]]))
console.log("chunk ", chunk(["apple","pineapple","peach", "banana", "apricot", "orange", "mango"], 3))
console.log("chunk ", chunk(["apple","pineapple","peach"], 7))

//dateUtils
console.log(formatDate(new Date(2024, 11, 5), "YYYY-MM-DD") === "2024-12-05")
console.log(formatDate(new Date(2024, 0, 1), "DD/MM/YYYY") === "01/01/2024")
console.log(formatDate(new Date(2024, 5, 10, 14, 30), "HH:mm:ss") === "14:30:00")

console.log(isWeekend(new Date(2024, 11, 7)) === true)
console.log(isWeekend(new Date(2024, 11, 8)) === true)
console.log(isWeekend(new Date(2024, 11, 9)) === false)

console.log(daysBetween(new Date(2024, 11, 5), new Date(2024, 11, 6)) === 1)
console.log(daysBetween(new Date(2024, 11, 5), new Date(2024, 11, 5)) === 0)
console.log(daysBetween(new Date(2024, 11, 5), new Date(2024, 11, 4)) === 1)