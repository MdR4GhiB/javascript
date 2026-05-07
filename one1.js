let total = 0, count = 1;

while(count <= 10){
    total += count;
    count += 1;
}

console.log(total)

function greatestAmgThree(a, b, c){
    if(a >= b && a >= c){
        return a;
    }
    else if(b >= a && b >= c){
        return b;
    }
    else{
        return c;
    }
}

let max = greatestAmgThree(5,7,9);
console.log(max)


let ar = [];

ar.push(5);

console.log(ar)

let student = [{name:"amir", age:10}]

console.log(student[0].name)

student.push({name:"iqbal", age:20},{name:"sameer", age:24});

console.log(student)

student.splice(2, 1);
console.log(student)


let questionData = [
    {
        question:"The heigest peak of the world?",
        answer:[
            {text: "Mount Fuji", correct: false},
            {text: "Mount Averest", correct: true},
            {text: "Kil manjaro", correct: false},
            {text: "The Andese", correct: false}
        ]
    },
    {
        question:"The deepest part of the world?",
        answer:[
            {text: "Mariana Trench", correct: true},
            {text: "India Occen", correct: false},
            {text: "Arbia Sea", correct: false},
            {text: "The Atlantis", correct: false}
        ]
    }
]

for(let i = 0; i < questionData.length; i++){
    for(let j = 0; j < questionData[i].answer.length; j++){
        if(questionData[i].answer[j].correct === true){
            console.log(questionData[i].answer[j].text);
        }
    }
}

/*
for(let i = 0; i < questionData[0].answer.length; i++){
    if(questionData[0].answer[i].correct === true){
        console.log(questionData[0].answer[i].text);
    }
} 
*/

let city = [
    {
        name:"Delhi",
        pin: 50000,
        weather: "mostly sunny",
        motherToung: "mostly hindi"
    },
    {
        name:"Hyderabad",
        pin: 50002,
        weather: "mostly dry",
        motherToung: "mostly telgu"
    },
    {
        name:"Kerla",
        pin: 50005,
        weather: "mostly humid",
        motherToung: "mostly kerala"
    },
]

for(let i = 0; i < city.length; i++){
    console.log(city[i].name);
    console.log(city[i].pin);
}

let product = [
    {
        product_id: 1,
        name: "tshirt",
        price: "50$",
        colour: ["red","black","blue"],
        size:["s","m","xl"]
    },
    {
        product_id: 2,
        name: "shirt",
        price: "150$",
        colour: ["white","black","green"],
        size:["s","m","xl"]
    }
]

console.log(product);
for(let i = 0; i < product.length; i++){
    console.log(product[i].name);
    for(let j = 0; j < product[i].colour.length; j++){
        console.log(product[i].colour[j]);
    }   
}

let html = `<p>This is the paragraph</p>`;
console.log(html)