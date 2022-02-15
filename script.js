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