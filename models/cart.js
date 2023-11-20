const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename),
'data',
'cart.json'
);

module.exports = class Cart {
    //we are not adding constructor because we are fetching information about an existing cart
    static addProduct(id,productPrice){
        fs.readFile(p, (err,fileContent)=>{
            let cart = {products:[],totalPrice:0};
            if(!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            //add new product and increase quantity
            if(existingProduct){     //if the product is already existing
                updatedProduct ={...existingProduct}    //this will add all the existing products to updatedProducts
                updatedProduct.qty =updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }
            else{
                updatedProduct ={id:id, qty: 1};
                cart.products = [...cart.products,updatedProduct];    // if we are creating product for first time we need to append the
            }
            cart.totalPrice = cart.totalPrice + + productPrice;
            fs.writeFile(p, JSON.stringify(cart), err =>{
                console.log(err);
            })
        });
    }
}