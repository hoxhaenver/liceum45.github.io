const input = document.getElementById("js-input");
const button = document.getElementById("js-button");
const output = document.getElementById("result");

button.addEventListener('click', () => {
    const randomValue = getRandomInt(10);
    const inputNum = Number(input.value);

    if (randomValue === inputNum) {
        output.innerHTML = "Ви вгадали число!"
    } else {
        output.textContent = `Ви не вгадали число! Правильне число ${randomValue}`
    }
});


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}