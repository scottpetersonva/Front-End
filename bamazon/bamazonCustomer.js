var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Longwood1!",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

  promptUser()
  });
  
  function promptUser() {
      
      connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("-----------------------------------");

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
  
      ]).then(function(answer) {
        var query = "UPDATE bamazon SET ? WHERE ?";
        connection.query(query, { selectedProduct: answer.selectedProduct }, function(err, res) {
          
          [
            {
              stock_quantity: stock_quantity - answer.productQuantity
            },
            {
              id: selectedProduct.id
            }
          ]
          console.log("your total cost is " + answer.productQuantity * 5)
        });
        
      });

      });

      
    }



    // function updateProduct() {
    //   console.log("Updating all Rocky Road quantities...\n");
    //   var query = connection.query(
    //     "UPDATE products SET ? WHERE ?",
    //     [
    //       {
    //         quantity: 100
    //       },
    //       {
    //         flavor: "Rocky Road"
    //       }
    //     ],
    //     function(err, res) {
    //       console.log(res.affectedRows + " products updated!\n");
    //       // Call deleteProduct AFTER the UPDATE completes
    //       deleteProduct();
    //     }
    //   );
    
    //   // logs the actual query being run
    //   console.log(query.sql);
    // }
    