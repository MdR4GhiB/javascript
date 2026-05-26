let marver_heros = ['Thor', 'IronMan', 'CanptinAmerica', 'SpiderMan']

let dc_heraos = ['Batman', 'Superman', 'Flash', 'Robin']

// Add to array to combine at one
let all_heros = marver_heros.concat(dc_heraos) // This is fine 

console.log(marver_heros)
console.log(dc_heraos)
console.log("-----------------------------")
console.log(all_heros)
console.log("-----------------------------")

// marver_heros.push(dc_heraos)
// console.log(marver_heros)

// You can add more array in it
let allNewhero = [...marver_heros, ...dc_heraos] // This make every element individual and you get more Access

console.log(allNewhero)


// D - Sructuring in objects
const course = {
    courseInstructor: "raghib",
    courseName: "Java Script"
}

const {courseInstructor: Instructor} = course;

console.log(Instructor)