// This always genrate a number which is between 1 to 10
let rand = Math.random() * 1;

if(rand <= 1/3){
    console.log("The value is less that or equal to 3");
}
else if(rand >= 1/3 && rand < 2/3){
    console.log("The value is more than 1/3 but less than 2/3");
    
}
else{
    console.log('The value is more than 2/3');
    
}
