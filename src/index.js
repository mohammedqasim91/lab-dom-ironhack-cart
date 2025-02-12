// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  // src/index.js
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  const subtotalValue = price.innerHTML * quantity.value
  console.log(subtotalValue)

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalValue;

  return subtotalValue
}

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName("product");
  let productsArray = [...products]

  // ITERATION 3
  //... your code goes here
  const allSubtotals = productsArray.map(element => {
    return updateSubtotal(element)
  });
  console.log(allSubtotals);
  const totalValue = allSubtotals.reduce(function (accumulator, subtotal) {
    console.log(subtotal);
    return accumulator + subtotal;
  }, 0);
  console.log(totalValue);
  // display the total
  const total = document.querySelector('#total-value > span')
  total.innerHTML = totalValue;



// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const remvProduct = product.querySelector('.product quantity')
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newInputs = document.querySelectorAll('.create-product input')
  const nameValue = newInputs[0].value;
  const priceValue = Number(newInputs[1].value);
  console.log(nameValue);

  const newProduct = document.createElement("tr");
  newProduct.setAttribute("class", "product")
  const cart = document.querySelector('#cart tbody')
  cart.appendChild(newProduct)

  const newName = document.createElement("td");
  newName.setAttribute("class", "name")
  newName.innerHTML = nameValue
  newProduct.appendChild(newName);

  const newPrice = document.createElement("td");
  newPrice.setAttribute("class", "price")
  newPrice.innerHTML = "$"
  newProduct.appendChild(newPrice);

  const newPriceSpan = document.createElement("span");
  const fixedPriceValue = priceValue.toFixed(2);
  newPriceSpan.innerHTML = fixedPriceValue;
  newPrice.appendChild(newPriceSpan);

  const newQuantity = document.createElement("td");
  newQuantity.setAttribute("class", "quantity")
  newProduct.appendChild(newQuantity);

  // <input type="number" min="0" value="0" placeholder="Product Price" />
  const newQuantityInput = document.createElement("input");
  newQuantityInput.type = "number"
  newQuantityInput.min = 0
  newQuantityInput.value = 0;
  newQuantityInput.placeholder = "Quantity"
  newQuantity.appendChild(newQuantityInput);


  const newSubtotal = document.createElement("td");
  newSubtotal.setAttribute("class", "subtotal")
  newSubtotal.innerHTML = "$"
  newProduct.appendChild(newSubtotal);

  const newSubtotalSpan = document.createElement("span");
  newSubtotalSpan.innerHTML = 0
  newSubtotal.appendChild(newSubtotalSpan);

  const newAction = document.createElement("td");
  newAction.setAttribute("class", "action")
  newProduct.appendChild(newAction)

  const newRemoveBtn = document.createElement("button");
  newRemoveBtn.setAttribute("class", "btn btn-remove")
  newRemoveBtn.innerHTML = "Remove"
  newAction.appendChild(newRemoveBtn)

}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});