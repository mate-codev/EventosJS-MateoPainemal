/* let formulario = document.getElementById("form-body");
let peso = document.getElementById("input-peso");
let altura = document.getElementById("input-altura");
let calculoMasa = document.getElementById("input-masa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  calculoMasa.value = calcularMasa(altura.value, peso.value);
});

function calcularMasa(alturaInfo, pesoInfo) {
  return pesoInfo / (alturaInfo / 100) ** 2;
}
 */

/* ---------------------------------------------------------- */

/* let formulario = document.getElementById("form-divisa");
const pesoArg = document.getElementById("pesoarg");
const dolar = document.getElementById("dolar");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let pesos = parseFloat(pesoArg.value);
  let dolares = parseFloat(dolar.value);
  if (pesos) {
    pesoArg.value = "";
    let mensaje = `El resultado del cambio de pesos a dolares es de: $${cambioPesos(
      pesos
    ).toFixed(2)} dolares.`;
    resultado.textContent = mensaje;
  }
  if (dolares) {
    dolar.value = "";
    let mensaje = `El resultado del cambio de dolares a pesos es de: $${cambioDolar(
      dolares
    ).toFixed(2)} pesos`;
    resultado.textContent = mensaje;
  }
});

function cambioPesos(monedaUno) {
  const pesos = 140;
  return monedaUno / pesos;
}
function cambioDolar(monedaDos) {
  const pesoDolar = 140;
  return monedaDos * pesoDolar;
} *



/* ---------------------------------------------------------- */

let formularioNotas = document.getElementById("formulario");
let tituloInput = document.getElementById("input-titulo");
let textarea = document.getElementById("textArea");
let btnborrar = document.querySelector('#formulario input[value="borrar"]');
let botonsumbit = document.getElementById("botonsumbit");
let boxNotas = document.getElementById("div-notas");
const inputDeBusqueda = document.getElementById("busqueda");
const checks = document.getElementById("realizadas");
let notas = [
	{
		titulo: "Ir a comprar",
		descripcion: "Comida",
		realizada: false,
		id: 0,
	},
	{
		titulo: "Darle de comer al gato",
		descripcion: "Comida",
		realizada: false,
		id: 1,
	},
	{
		titulo: "Ir a jugar al futbol",
		descripcion: "Comida",
		realizada: false,
		id: 2,
	},
];
let idNotas = 3;

imprimirNotas(notas, boxNotas);

formularioNotas.addEventListener("submit", (e) => {
	e.preventDefault();
	if (tituloInput.value && textArea.value) {
		let nota = {
			titulo: tituloInput.value,
			descripcion: textArea.value,
			realizada: false,
			id: idNotas,
		};
		idNotas++;
		reiniciarForm(tituloInput, textArea);
		notas.push(nota);
		imprimirNotas(notas, boxNotas);
	} else {
		alert("Todos los campos son obligatorios");
	}
	console.log(notas);
});

btnborrar.addEventListener("click", () => {
	reiniciarForm(tituloInput, textArea);
});

boxNotas.addEventListener("click", (e) => {
	let dataSet = e.target.dataset;
	console.log([e.target]);
	if (dataSet.accion == "borrar") {
		notas = notas.filter((nota) => nota.id != dataSet.id);

		imprimirNotas(notas, boxNotas);
	}
	if (dataSet.accion == "estado") {
		const nota = notas.find((nota) => nota.id == dataSet.id);
		nota.realizada = !nota.realizada;
	}
});

inputDeBusqueda.addEventListener("input", () => {
	const filtrarPorBusqueda = filtrarPorTitulo(notas, inputDeBusqueda.value);
	if (checks.checked) {
		const filtradoPorRealizadas = filtrarPorRealizadas(filtrarPorBusqueda);
		imprimirNotas(filtradoPorRealizadas, boxNotas);
	} else {
		imprimirNotas(filtrarPorBusqueda, boxNotas);
	}
});

checks.addEventListener("change", () => {
	const filtrarPorBusqueda = filtrarPorTitulo(notas, inputDeBusqueda.value);
	if (checks.checked) {
		const filtradoPorRealizadas = filtrarPorRealizadas(filtrarPorBusqueda);
		imprimirNotas(filtradoPorRealizadas, boxNotas);
	} else {
		imprimirNotas(filtrarPorBusqueda, boxNotas);
	}
});

function filtrarPorRealizadas(notas) {
	return notas.filter((nota) => nota.realizada);
}

function filtrarPorTitulo(notas, busqueda) {
	return notas.filter((nota) =>
		nota.titulo.toLowerCase().includes(busqueda.toLowerCase())
	);
}

function reiniciarForm(input, text) {
	input.value = "";
	text.value = "";
}

function imprimirNotas(notas, contenedor) {
	let template = "";
	for (let nota of notas) {
		template += crearArticle(nota);
	}
	contenedor.innerHTML = template;
}

function crearArticle(nota) {
	let estado = "";
	if (nota.realizada) {
		estado = "checked";
	}
	return `<article class="card col-3">
                <header class="card-header">
                    <div class="form-check">
                        <input class="form-check-input" data-accion="estado" data-id="${nota.id}" type="checkbox" ${estado} value="" id="">
                        ${nota.titulo}
                    </div>
                </header>
                <div class="card-body"> <p> ${nota.descripcion} </p> </div>
                <footer class="card-footer d-flex justify-content-center">
                    <button class="btn btn-danger" data-accion="borrar" data-id="${nota.id}">Borrar nota</button>
                </footer>
            </article>
`;
}
