const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const light = document.getElementById('light');
let estado = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (estado){
        if (button.innerText === '=') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
        } else if (button.innerText === 'CE') {
        display.value = '';
        } else if (button.innerText === 'ON') {
            display.value = '';
        } else if (button.innerText === 'M+') {
            display.value = '';
        } else if (button.innerText === 'MC') {
            display.value = '';
        } else if (button.innerText === 'MR') {
            display.value = '';
        } else if (button.innerText === 'OFF') {
            display.value = '';
            estado = false;
            light.style.backgroundColor = 'red';
        } else {
        display.value += button.innerText;
        }
    }
    if (button.innerText === 'ON'){
        estado = true;
        light.style.backgroundColor = 'green';
    }
  });
});