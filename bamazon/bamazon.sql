DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(60) NULL,
  department_name VARCHAR(60) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Tree", "Pets", 69.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Computers", 600.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jeans", "Clothing", 49.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Towels", "Household", 49.99, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Our Dumb World", "Books", 20.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Catnip", "Pets", 12.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laundry Detergent", "Household", 17.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chromecast", "Electronics", 35.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothpaste", "Household", 4.99, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Record Player", "Electronics", 50.99, 5);