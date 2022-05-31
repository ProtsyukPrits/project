(() => {
  document.getElementById('count').addEventListener('click', calculateOrderAmount);

  function calculateOrderAmount() {
    let icecreamPrice = 3.0;
    let icecoffeePrice = 3.8;
    let milkshakePrice = 4.5;
    let icecreamQty = document.getElementById('qty_icecream').value;
    let icecoffeeQty = document.getElementById('qty_icecoffee').value;
    let milkshakeQty = document.getElementById('qty_milkshake').value;
    let total =
      icecreamPrice * icecreamQty + icecoffeePrice * icecoffeeQty + milkshakePrice * milkshakeQty;
    document.getElementById('total-amount').innerHTML = total + '$';
  }
})();
