////VARIABLES////
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
//Valor textual del display
let displayText = "";

////FUNCIONES EXTERNAS////
//Agrega elementos a la lista
function agregarItems(){
    memoria.forEach((item) => {
        let li =
            document.createElement("li");
        li.innerText = item;
        lista.appendChild(li);
    })
    };

////MAIN////
//Agrega funcionalidad a los botones
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (estado){
        if (button.innerText === '=') {
        try {
            //Muestra valor de la operacion en el display
            displayText =display.value.replace("%","/100");
            display.value = eval(displayText);
            //Vacia el ul de la lista de memoria
            lista.innerHTML ="";
            //Establece el limite de memoria
            if (memoria.length === 15){
                memoria.shift();
                memoria.push(display.value);
            } else{
                memoria.push(display.value);
            }
            //Agrega los elementos de la memoria a el ul como li
            agregarItems();
        } catch (error) {
            display.value = 'Error';
        }
        } else if (button.innerText === 'CE') {
            display.value = '';
        } else if (button.innerText === 'ON') {
            lista.innerHTML ="";
            memoria.length = 0;
            display.value = '';
        } else if (button.innerText === 'M+') {
            if (memoria[memoria.length - 1]){
            display.value += `+${memoria[memoria.length - 1]}`;
        }
        } else if (button.innerText === 'MC') {
            //Vacia la memoria y tambien el display
            lista.innerHTML ="";
            memoria.length = 0;
            display.value = '';
        } else if (button.innerText === 'M-') {
            if (memoria[memoria.length - 1]){
                display.value += `-${memoria[memoria.length - 1]}`;
            }
        } else if (button.innerText === 'OFF') {
            //Vacia la memoria y tambien el display
            display.value = '';
            lista.innerHTML ="";
            memoria.length = 0;
            //Cambia el estado a false para apagar la calculadora
            estado = false;
            //Cambia el color de la luz que indica estado
            light.style.backgroundColor = 'red';
        } else {
        display.value += button.innerText;
        }
    }
    if (button.innerText === 'ON' && !estado){
        //Cambia el estado a true para encender la calculadora
        estado = true;
        //Cambia el color de la luz que indica estado
        light.style.backgroundColor = 'green';
    }
  });
});