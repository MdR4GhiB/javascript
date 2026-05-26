
const inputScreen = document.querySelector('.bmi-output')
const stats = document.querySelector('.stats')
const button = document.querySelector('.calculate-btn');

button.addEventListener('click', function(){
    const height = Number(document.getElementById('input-height').value);
    const weight = Number(document.getElementById('input-weight').value);

    if(!height || !weight){
        alert('Please fill all field with number')
    }

    else{
        const heightInMeter = height / 100;
        const bmi = weight / (heightInMeter * heightInMeter);

        inputScreen.innerHTML = `You BMI is ${bmi.toFixed(2)}`;
        if(bmi <= 18.5){
            stats.innerHTML = `Your BMI is very low`;
            stats.style.color = 'red';
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            stats.innerHTML = `Your BMI is Normal`;
            stats.style.color = 'Green';
        }
        else if(bmi >= 25){
             stats.innerHTML = `Your BMI is heigh`;
            stats.style.color = 'blue';
        }
    }
    
});