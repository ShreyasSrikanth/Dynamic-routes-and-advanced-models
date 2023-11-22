const db = require('../util/database');
const cart = require('./cart');


//same product for creating a new product and updating
module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {         
    this.id = id                                         // this id we are taking null if the product is new else we are receiving id
    this.title = title;                                   
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  //USE ? TO AVOID SQL INJECTION
  save() {
    return db.execute(
      'INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.description, this.imageUrl]
    );
  }

  static removeProduct(id){
    db.execute('DELETE FROM products WHERE products.id = ?',[id]);
  }
  
  static fetchAll() {
    return db.execute('SELECT * FROM products'); 
  }

  static findById(id){
    return db.execute('SELECT * FROM products WHERE products.id =?',[id]);
  }
};
