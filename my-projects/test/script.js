var x = 1;
a();
console.log(x);
b();
console.log(x);
function a() {
  console.log(x);
  x = 10;
  console.log(x);
}
function b() {
  console.log(x);
}
