// How to create an object in js

const obj = {
    name: "objectOne",
    onjId: "124"
}

// object store pair of key/value 
// Using dot notation to log name of object
console.log(obj.name)

console.log(Object.keys(obj))
console.log(Object.values(obj))

const fruit1 = {
    name: "apple",
    color: "red",
    shape: "round",
    taste: "sweet"
}

const fruit2 = {
    name: "orange",
    color: "orange",
    shape: "round",
    taste: "sour"
}

// const obj3 = Object.assign(fruit1, fruit2)

// console.log(obj3)

const newFruit = {...fruit1, ...fruit2}

console.log(newFruit)


