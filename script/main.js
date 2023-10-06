const shoppingCart = [
  {
     id: 1,
     name: "Hp Laptop",
     price: 250000,
     quantity: 1,
     image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTiAt8QgO07lcx2dUXc06mX1aGSkbM9SYU36916LGs0r7T5OGo-lrW0cLVYAR-eZUz8OjiHCg461o114-tBExa6MNwDZxC7ceS9QYwkACG63FNNxBBe5G6t1eEriOKnXw&usqp=CAc"
  },
  {
    id: 2,
    name: "Macbook Laptop",
    price: 500000,
    quantity: 1,
    image:"data:image/webp;base64,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"
 },
 {
    id: 3,
    name: "Lenovo Laptop",
    price: 150000,
    quantity: 1,
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2rkMUG0pJiwlVSDTzbN0TWPd_EsOoL-iyz9aZq1PkzpChtqvib8bRpG7_DxkAUA01lIQGAn8eJRVB6Y1xUf03UU8G9yqq1F_CbWHx2-wYeE7_qr_hhHx8X3ad_R4s4xuebW5XL4K_KG4&usqp=CAc"
 },
 {
    id: 4,
    name: "Dell Laptop",
    price: 350000,
    quantity: 1,
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1W80FOD4MCYT2FA2mJ7KEObi4FSuYMQ69lmhRjGcx6x45h1R10UX6PMW7Dqbok7QQYdrdODojGZymsEeoO3VDqAQNXr99vDa-2dW8iygiqQ7n-RnaYnxiqc-pIKWaMw&usqp=CAc"
 },
];



//select your shopping cart container
const shoppingContainer = document.getElementById("checkoutCon");
// const totalprice = document.getElementById('totalprice')

function deleteProduct(event){
    let id = event.target.id
    id = parseInt(id)

    const product = shoppingCart.find((product) => product.id === id);
    const index = shoppingCart.indexOf(product);
    shoppingCart.splice(index, 1);
    shoppingContainer.innerHTML = "";
    displayShoppingCart()
}
function handleIncrement(event){
    let id = event.target.id
    id = parseInt(id)
    const product = shoppingCart.find((product) => product.id === id);
    let quantityTag = document.getElementById(product.name)
    product.quantity = product.quantity + 1
    quantityTag.innerHTML = product.quantity
    totality(event) 
}

function handleDecrement(event) {
    let id = event.target.id
    id = parseInt(id)
    const product = shoppingCart.find((product) => product.id === id)
    let quantityMag = document.getElementById(product.name)
    product.quantity = (product.quantity > 1)? product.quantity -1: product.quantity;
    quantityMag.innerHTML = product.quantity
    totality(event)
}

function totality(event) {
    let id = event.target.id
    id = parseInt(id)
    const product = shoppingCart.find((product) => product.id === id)
    let quantityTot = document.getElementById('totalPrice');
     let singlequantity = (product.quantity * product.price)

// quantityTot = quantityTot + (product.quantity * product.price)
// quantityTot.innerHTML = quantityTot
   console.log(singlequantity)
}


function displayShoppingCart() {
// loop through shopping cart items
for (product of shoppingCart) {
  const productContainer = document.createElement("div");
  productContainer.setAttribute("class","card");

  // create product image
  const productImage = document.createElement("img");
  productImage.setAttribute("src", product.image);
  productImage.setAttribute("alt", product.name);

  // add product image to product container
  productContainer.appendChild(productImage);

  // add productContainer to shopping container
  shoppingContainer.appendChild(productContainer);

  // create product info container
  const productInfo = document.createElement("div")
  productInfo.setAttribute("class",'productInfo')
  const topCon = document.createElement("div")
  topCon.setAttribute("class","topCon");

  //
  const productName = document.createElement("h3");
  productName.innerHTML = product.name;
  const deleteBtn = document.createElement("button")
  deleteBtn.setAttribute("id", product.id)
  deleteBtn.innerHTML = "delete"

  // add an event ti the delete btn to topCon
  deleteBtn.addEventListener("click",(event) =>
  deleteProduct(event));

  // add product name and delete Btn
  topCon.appendChild(productName);
  topCon.appendChild(deleteBtn);

  // add topCon to product info
  productInfo.appendChild(topCon);

  // add product info to product con
  productContainer.appendChild(productInfo)

  // create product price 
  const productPrice = document.createElement("p");
  productPrice.setAttribute("class","price")
  productPrice.innerHTML = `price: ${product.price}`;

  //add product price to product info container
  productInfo.appendChild(productPrice);

   
  
  // create btn container
  const btnContainer = document.createElement("div")
  btnContainer.setAttribute("class", "btnCon");

  // create the increment and decrement button
  const increment = document.createElement("button")
  increment.innerHTML = "+";
  increment.setAttribute('id',product.id)
  increment.addEventListener('click', (event) => handleIncrement(event))

  const decrement = document.createElement("button")
  decrement.innerHTML = "-";
  decrement.setAttribute('id', product.id)
  decrement.addEventListener('click', (event) => handleDecrement(event))

  //create quantity display
  const quantity = document.createElement("p")
  quantity.innerHTML = product.quantity;
  quantity.setAttribute('id', product.name)
 /* increment.addEventListener("click", function(e){
       if (product.quantity <3) {
        product.quantity += 1
    quantity.innerHTML = product.quantity
    productPrice.innerHTML = `price: ${product.price + product.quantity}`;
    }
  })
decrement.addEventListener("click",function(e){
    if (product.quantity >=1) {
        product.quantity -=1
        quantity.innerHTML = product.quantity
        productPrice.innerHTML = `price: ${product.price * product.quantity}`;
    }
}) */

  //add increment , decrement and quantity to btn container
  btnContainer.appendChild(increment)
  btnContainer.appendChild(quantity)
  btnContainer.appendChild(decrement)

  //add btn container to productinfo container
  productInfo.appendChild(btnContainer)

 //add productContainer to shopping container
 shoppingContainer.appendChild(productContainer);

}
}
displayShoppingCart()
