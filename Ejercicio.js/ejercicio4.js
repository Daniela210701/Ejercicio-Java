function printCommonCourses() {
  let estudiantesCurso1 = ['Math', 'English', 'Programming'];
  let estudianteCurso2 = ['Geography', 'Spanish', 'Programming'];
  
  let cursosComunes = estudiantesCurso1.filter(cursos => estudianteCurso2.includes(cursos));
  console.log("Cursos comunes:", cursosComunes.join(", ")); 
  document.getElementById("resultado").innerText = "Cursos comunes: " + cursosComunes.join(", "); 
}
document.getElementById("imprimirResultado").addEventListener("click", function() {
  printCommonCourses();
});

