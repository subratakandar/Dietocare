$('#header').load('common-layout/header.html');
$('#footer').load('common-layout/footer.html');
// ==shop-cart counter section
let count = 0;

function increase() {
  count++;
  document.getElementById("count").innerText = count;
}

function decrease() {
  count--;
  document.getElementById("count").innerText = count;
}
