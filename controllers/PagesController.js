// controllers/PagesController.js

let ProductModel = require('../models/Product')
let prodId;
let editProd;

// Reglas para la respuesta para la petición "/"
  exports.homepage = (req, res) => {
    // Nota que la consulta a los productos utiliza "promesas"
    // conoce más en: 
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
    ProductModel.all()
      .then((data) => {
        // Guardamos los productos en una variable
        let products = data;
        // Enviamos los datos a la vista
        res.render('pages/homepage', { products: products });
      });
  }

  // Reglas para la respuesta para la petición "/about"
  exports.about = (req, res) => {
    res.render('pages/about');
  }

  //go to show page
  exports.show = (req, res) => {
    ProductModel.getByID(req.params[0])
    .then((data) => {
      let product = data;
      res.render('pages/show', {...product}); //using spread operator, spreads the contents dynamically, spreads the contents and sends it individually
    }); 
  }

  // go to the page to request the edit info from
  exports.editInfo = (req, res) => {
    ProductModel.getByID(req.params[0])
    .then((data) => {
      let product = data;
      prodId = req.params[0];
      res.render('pages/edit', {...product}); //using spread operator, spreads the contents dynamically, spreads the contents and sends it individually
    }); 
  }

  //update the product
  exports.finishEdit = (req,res) =>{
    editProd = req.body;
    ProductModel.update(editProd, prodId)
    .then((data) => {
      //let products = data;
      //res.render('pages/homepage', { products: products });
      res.redirect('/')
    });
    //res.render('pages/about');
  }

  //open the request info page to add a new product
  exports.addInfo = (req, res) => {
    res.render('pages/add');
  }

  //add the new product
  exports.finishAdd = (req,res) =>{
    ProductModel.add(req.body)
    .then((data) => {
      //let products = data;
      //res.render('pages/homepage', { products: products });
      res.redirect('/')
    });
  }

  //delete product
  exports.delete = (req,res) =>{
    ProductModel.delete(req.params[0])
    .then((data) => {
      //let products = data;
      //res.render('pages/homepage', { products: products });
      res.redirect('/')
    });
  }