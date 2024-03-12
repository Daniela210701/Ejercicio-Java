function bubbleSort() {
  let array = [3, 6, 12, 5, 100, 1];
  let n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  let result = "Output: [" + array.join(", ") + "]";
  console.log(result); 
  document.getElementById("resultado").innerText = result; 
}
document.getElementById("imprimirResultado").addEventListener("click", function() {
  bubbleSort();
});
