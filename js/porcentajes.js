function calcularQuincePorciento(){
    let resultado = document.getElementById('resultado');
    let cantidad = document.getElementById('cantidad').value;
    let valor = document.getElementById('valor').value;
    let decuento = 0.85 * (valor * cantidad)
    resultado.innerText = decuento
}

function calcularCincuentaPorciento(){
    let resultado = document.getElementById('resultado');
    let cantidad = document.getElementById('cantidad').value;
    let valor = document.getElementById('valor').value;
    let decuento = 0.5 * (valor * cantidad)
    resultado.innerText = decuento
}

function noCalcular(){
    let resultado = document.getElementById('resultado');
    let cantidad = document.getElementById('cantidad').value;
    let valor = document.getElementById('valor').value;
    let calculo = valor * cantidad
    resultado.innerText = calculo
}
