const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product =require('./models/product');
const User = require('./models/user');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//only registers or runs middlewear for incoming requests
app.use((req,res,next) =>{
   User.findByPk(1)
   .then(user=>{
    req.user = user;
    next();
   }) 
   .catch(err => console.log(err))
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);   // adds create product method to user

//.sync creates a table for us by looking our models file and if it exists it instantiates them based.

// Syncing the models with the database
// Assuming you've defined the User model somewhere

sequelize.sync() // Remove {force: true} to avoid dropping tables
  .then(() => {
    // Find the user with ID 1
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      // If user with ID 1 doesn't exist, create one
      return User.create({ name: "Max", email: 'sshreyas@gmail.com' });
    }
    return user; // Return the found user
  })
  .then(user => {
    // At this point, user will either be the found user or the newly created one
    console.log(user);
    app.listen(3000); // Start the server after syncing and user creation
  })
  .catch(err => {
    console.log(err);
  });



