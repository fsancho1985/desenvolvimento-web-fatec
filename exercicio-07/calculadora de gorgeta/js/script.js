var btn = document.getElementById("btn-calcula");
var resultado = document.getElementsByClassName("result");

function calculaTip(event) {
    event.preventDefault();
    let valor1 = document.getElementById("valor").value;
    let valor2 = document.getElementById("tip").value;
    
    if(valor1 == '' || valor2 == '') {
        alert('Os campos de valores devem ser preenchidos!');
    } else {
        let valorConvertido1 = parseFloat(valor1);
        let valorConvertido2 = parseFloat(valor2);
        let gorgeta = valorConvertido1 * (valorConvertido2/100);
        
        showResult(gorgeta, valorConvertido1)
    }
};

function showResult(param1, param2) {
    resultado[0].innerHTML = 
    `
        <h3>Total a pagar com gorgeta</h3>
        <span><p>R$${param1 + param2}</p></span>
    `;
};


