good job with your code, but the calculate all is currently not working, if you inspect the browser console it says that callculateAll function doesn't exist.
To fix it you just need to create that function and add the functionality inside it:)

  function calculateAll() {
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
  }
