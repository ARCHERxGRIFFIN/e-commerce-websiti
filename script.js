function removebtn() {
    var removebutton = document.getElementsByClassName("removeitems");
    for(var i = 0; i<removebutton.length; i++) {
        var singlebtn = removebutton[i];
        singlebtn.addEventListener("click", (e)=>{
            var targetBtn = e.target;
            targetBtn.parentElement.parentElement.remove();
            updatePrice()
        })
    }
}
removebtn();
 
function updatePrice() {
    var total = 0;
    var cartQuantity = document.getElementsByClassName("cart-quantity");
    var cartPrice = document.getElementsByClassName("cart-price");
    for(var i = 0; i<cartPrice.length; i++) {
        var singlePrices = cartPrice[i].innerText.replace("Rs ", "");
        singlePrices = parseInt(singlePrices.replace(",",""));
 
        var singleQuantity = cartQuantity[i].value;
 
        total = total+singlePrices*singleQuantity;
    }
    document.querySelector(".totalprice").innerHTML="Total: Rs " + total;
}
updatePrice()
 
document.getElementById("ibferju").addEventListener("input", (e)=> {
    updatePrice();
})
document.getElementById("hibdh").addEventListener("input", (e)=> {
    updatePrice();
})
function productinfo() {
    var buttonbasket = document.getElementsByClassName("basketadd");
    for(var i = 0; i<buttonbasket.length; i++) {
    var buttonbasketsingle = buttonbasket[i];
    buttonbasketsingle.addEventListener('click', (e)=> {
    var butn = e.target;
    var productCode = butn.parentElement.parentElement;
    var productName = productCode.getElementsByClassName("productname")[0].innerText
    var productPrice = productCode.getElementsByClassName("blalalalala")[0].innerText.replace("Price: ", "");
    console.log(productName + " | " + productPrice);
    addtobasket(productName, productPrice);
    updatePrice()
    })
    }
}
 
productinfo()
function addtobasket(name, price) {
   var newProduct = document.createElement('tr');
   var productDetails = `<td><h4 class="CartProd">${name}</h4></td>
                        <td><input type="number" id="ibferju" class="cart-quantity" min="1" value="1" id="numberinput"></td>
                        <td><h4 class="cart-price">${price}</h4></td>
                        <td><button class="removeitems">Remove</button></td>`;
 
    newProduct.innerHTML = productDetails;
    var cartTable = document.getElementsByClassName("table-cart")[0];
    var cartproductName = cartTable.getElementsByClassName("CartProd");
    console.log(cartproductName)
 
    for(var i=0; i<cartproductName.length; i++){
        if(cartproductName[i].innerText == name){
            console.log("matched")
            alert("the product is already added in the cart")
            return;
        }
 
    }
    cartTable.append(newProduct)
 
 
 
    var removebutton = document.getElementsByClassName("removeitems");
    for(var i = 0; i<removebutton.length; i++) {
        var singlebtn = removebutton[i];
        singlebtn.addEventListener("click", (e)=>{
            var targetBtn = e.target;
            targetBtn.parentElement.parentElement.remove();
            updatePrice()
        })
    }
    var cartQuantity = document.getElementsByClassName("cart-quantity");
    for(var i=0;i<cartQuantity.length;i++){
        var Singleinput = cartQuantity[i];
        Singleinput.addEventListener("change", (e)=>{
            updatePrice()
        })
    }
 
}
 
 
 