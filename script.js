//display pin 
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length !=4){
        return getPin();
    }
    const pinDisplayInput = document.getElementById('pin-display');
    pinDisplayInput.value = pin;
}
//handle pin generator button
document.getElementById('pin-generator-button').addEventListener('click',function(){
    getPin();
});
// handle buttons 
document.getElementById('buttons').addEventListener('click',function(event){
    const number = event.target.innerText;
    const numberDisplayInput = document.getElementById('numbers-display');
    if(isNaN(number)){ 
        if(number == 'C'){
            numberDisplayInput.value = '';
        }   
    }
    else{
        previousNumber = numberDisplayInput.value;
        const newNumber = previousNumber + number;
        numberDisplayInput.value = newNumber;
    }
});
//handle submit button
document.getElementById('submit-button').addEventListener('click',function(){
    const generatedPin = document.getElementById('pin-display').value;
    const typedNumber = document.getElementById('numbers-display').value;
    if(generatedPin == typedNumber){
        document.getElementById('notify-succed').style.display = 'block';
        document.getElementById('notify-failed').style.display = 'none';
    }
    else{
        document.getElementById('notify-succed').style.display = 'none';
        document.getElementById('notify-failed').style.display = 'block';
        const tryLeftField = document.getElementById('try-left');
        let tryLeft = parseInt(tryLeftField.innerText);
        tryLeft = tryLeft-1;
        tryLeftField.innerText = tryLeft;
        if(tryLeft<1){
            document.getElementById('submit-button').style.display = 'none';
            document.getElementById('try-limit-cross').style.display = 'block';
            document.getElementById('notify-failed').style.display = 'none';
        }
    }
})