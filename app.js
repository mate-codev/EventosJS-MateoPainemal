/* let formulario = document.getElementById("form");
let ingresaPeso = document.getElementById("ingresaPeso");
let ingresaAltura = document.getElementById("ingresaAltura");
let resultado = document.getElementById("resultado");
formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	resultado.value = resultado1(ingresaAltura.value, ingresaPeso.value);
});
function resultado1(ingresaAltura, ingresaPeso) {
	return ingresaPeso / (ingresaAltura / 100) ** 2;
} */

// ------------------------------------------------------- //

/* let formulario = document.getElementById("formulario")
const pesoArg = document.getElementById("pesoArg")
const dolar = document.getElementById("dolar")
const resultado = document.getElementById("resultado")


formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    let pesos = parseFloat(pesoArg.value)
    let dolares = parseFloat(dolar.value)
    if (pesos){
    pesoArg.value = "" 
    let mensaje = El resultado del cambio de pesos a dolares es de: ${cambioPesos(pesos).toFixed(2)}
    resultado.textContent = mensaje
    }
    if (dolares){
        dolar.value = ""
        let mensaje = El resultado del cambio de dolares a pesos es de: ${cambioDolar(dolares).toFixed(2)}
        resultado.textContent = mensaje
    }
})

function cambioPesos(monedaUno){
    const pesos = 140
    return monedaUno / pesos;
}
function cambioDolar(monedaDos){
    const pesoDolar = 140
    return monedaDos * pesoDolar;
} */
