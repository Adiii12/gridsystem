function one() {
  var one = document.getElementById("change");
  one.classList.add("one");
  one.classList.remove("two");
  one.classList.remove("three");
}
function two() {
  var two = document.getElementById("change");
  two.classList.add("two");
  two.classList.remove("three");
  two.classList.remove("one");
}
function three() {
  var three = document.getElementById("change");
  three.classList.add("three");
  three.classList.remove("one");
  three.classList.remove("two");
}
