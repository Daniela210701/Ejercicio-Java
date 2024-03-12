
let array = [1, 2, 4, 5];
dublicarNumero(array);

function dublicarNumero(miArray) {
  
  let arryDuplicada = miArray.map(numero => numero * 2);

  alert("Los Numeros son: " + arryDuplicada);
}

