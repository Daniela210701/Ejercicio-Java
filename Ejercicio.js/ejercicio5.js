
function executeCommands() {
  let persona = ["Maria", "Dani", "Luis", "Juan", "Camila"];

  let result = "";
 
  result += "Lista de personas: " + persona.join(", ") + "<br>";
  
  let indexDani = persona.indexOf("Dani");
  if (indexDani !== -1) {
    persona.splice(indexDani, 1);
  }

  let indexJuan = persona.indexOf("Juan");
  if (indexJuan !== -1) {
    persona.splice(indexJuan, 1);
  }
 
  let indexLuis = persona.indexOf("Luis");
  if (indexLuis !== -1) {
    persona.splice(indexLuis, 1);
    persona.unshift("Luis");
  }
  
  persona.push("TuNombre");

  for (let i = 0; i < persona.length; i++) {
    result += persona[i] + "<br>";
    if (persona[i] === "Maria") {
      break;
    }
  }

  let indexMaria = persona.indexOf("Maria");
  result += "Índice de 'Maria': " + indexMaria + "<br>";

  result += "Cantidad de personas al final: " + persona.length + "<br>";

  document.getElementById("resultado").innerHTML = result;
}
document.getElementById("imprimirResultado").addEventListener("click", function() {
  executeCommands();
});






