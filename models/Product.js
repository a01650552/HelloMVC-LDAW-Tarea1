// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('products');
}

//select from the ID
exports.getByID = (id) => {
  return knex
    .select('*')
    .from('products')
    .where('id', id)
    .first(); //without the first part, results won't be printed.

}

//adds to the DB
exports.add = (newProd) => {
  return knex
    .from('products')
    .insert({...newProd});
}

//updates entry
exports.update = (newProd, id) => {
  return knex
    .from('products')
    .where('id', id)
    .update({...newProd});
}

//delete an entry
exports.delete = (id) => {
  return knex
    .from('products')
    .where('id', id)
    .del();
}