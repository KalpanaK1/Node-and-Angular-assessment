const { Product } = require("../models/index.js");
 
module.exports = app => {
    const productA = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productA.create);
  
    // Retrieve all Tutorials
    router.get("/", productA.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", productA.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productA.findOne);
    // Update a Tutorial with id
    router.put("/:id", productA.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productA.delete);
  
    // Delete all Tutorials
    router.delete("/", productA.deleteAll);
  
    app.use('/api/productAs', router);
  };