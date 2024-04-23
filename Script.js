function calcularIMC(){
    let peso =  document.getElementById("Peso_01").value;
    let altura = document.getElementById("Altura_01").value;

    if (peso == '' || altura == ''){
        alert("Os campos não podem ficar vazios!");
        return false
    }


let calculo = (peso / (altura * altura))
let resultado = document.getElementById("resultado") 
      
if (calculo < 18.5) {
    resultado.innerHTML = `IMC: ${calculo.toFixed(2)} abaixo do peso!`; 
    resultado.style.backgroundColor = "#9C27B0"

} else if (calculo < 25) {
    resultado.innerHTML = `IMC: ${calculo.toFixed(2)} peso adequado!`;
    resultado.style.backgroundColor = "4CAF50"

} else if (calculo < 30) {
    resultado.innerHTML = ` IMC: ${calculo.toFixed(2)} sobrepeso!`;
    resultado.style.backgroundColor =  "#FFC107"

} else if (calculo < 35 ) {
    resultado.innerHTML = `IMC: ${calculo.toFixed(2)} obesidade nível I`;
    resultado.style.backgroundColor = "#FF9800"

} else if (calculo < 40){
    resultado.innerHTML = `IMC: ${calculo.toFixed(2)} obesidade nível II`
    resultado.style.backgroundColor = " #FF5722"

}
else {
    resultado.textContent = `IMC: ${calculo.toFixed(2)} obesidade nível III`
    resultado.style.backgroundColor = " #795548"
}

return false;
}
