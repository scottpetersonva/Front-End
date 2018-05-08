var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");

  promptUser()
  

});

function promptUser() {

// Displays stock of items for uster by calling the "bamazon" SQL database and targeting "products" table.  loops through the results and console logs the the length of each column

  connection.query("SELECT * FROM products", function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");

// Asks user to select the ID of the product they want to buy and the amount of that product that they want to buy

    inquirer.prompt([

      {
        name: "selectedProduct",
        type: "input",

        message: "enter the ID of the item would you like to buy"
      },
      {
        name: "productQuantity",
        type: "input",
        message: "How many would you like to buy?"
      }

    ]).then(function (answer) {

// Creates variable to be used in the below connection to the database

      var query = "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";

// Sets chosenItem variable so that it selects the row of the chosen ID

      var chosenItem;
      for (var i = 0; i < res.length; i++) {
        if (res[i].id == answer.selectedProduct) {
          chosenItem = res[i];
        }
      }

// checks to see if the user request is larger than the quantity on hand.  If so, user is notified that the transaction will not go through

      if (chosenItem.stock_quantity < answer.productQuantity) {
        console.log("sorry we only have " + chosenItem.stock_quantity + " units of " + chosenItem.product_name + " in stock")
        connection.end();
      }

// if the requested quantity is less than the quantity on hand the stock qunatity is set to the the difference between the stock on and and the user request at the row of the targeted ID

      else {

        connection.query(query, [answer.productQuantity, answer.selectedProduct], function (error) {
          if (error) throw err;
          console.log("Order placed successfully!");
          console.log("Your purchase of " + answer.productQuantity + " " + chosenItem.product_name + " will cost you: " + "$" + answer.productQuantity * chosenItem.price);
          connection.end();
        }
        );
      }
    }

      );

  });
}
