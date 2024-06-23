//Busca la pantalla de la calculadora por id
const display = document.getElementById('display');
//Guarda todos los botones
const buttons = document.querySelectorAll('button');
//Guarda el indicador de encendido y apagado por id
const light = document.getElementById('light');
//Para saber si esta prendida o apagada
let estado = false;
//Guarda la lista de la memoria por id
let lista = document.getElementById("myList");
//Para ir guardando los valores
let memoria = [];

//Agrega funcionalidad a los botones
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (estado){
        if (button.innerText === '=') {
        try {
            display.value = eval(display.value);
            memoria.push(display.value);
            lista.innerHTML ="";
            memoria.forEach((item) => {
                let li =
                    document.createElement("li");
                li.innerText = item;
                lista.appendChild(li);
            });
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

//Agrega elementos a la lista
memoria.forEach((item) => {
    let li =
        document.createElement("li");
    li.innerText = item;
    lista.appendChild(li);
});