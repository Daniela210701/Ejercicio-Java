

let numeros = [1, 2, 3, 4];
calcularProducto(numeros);

function calcularProducto(numero) {

  let suma = numero.reduce((acumulado, valor) => acumulado + valor, 0);

  let producto = numero.reduce((acumulado, valor) => acumulado * valor, 1);

  alert(`La suma es ${suma}. El producto es ${producto}.`);
}

