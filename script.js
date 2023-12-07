//Assignar variables a los botones
let counterElement = document.getElementById("counter");
let increaseButton = document.getElementById("increase");
let dicreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");

//Boton increase
increaseButton.addEventListener("click",function(){
    let currentValue = parseInt(counterElement.textContent);
    let newValue = currentValue + 1;

    counterElement.textContent = newValue;
});
//Boton dicrease
dicreaseButton.addEventListener("click",function(){
    let currentValue = parseInt(counterElement.textContent);
    if (currentValue!== 0){
        let newValue = currentValue - 1;
        counterElement.textContent = newValue;
    }
});
//Boton reset
resetButton.addEventListener("click",function(){
    let newValue = 0;
    counterElement.textContent = newValue;
});