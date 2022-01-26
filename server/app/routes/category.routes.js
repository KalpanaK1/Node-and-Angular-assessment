
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const categoryA=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", categoryA.create);
  
    // Retrieve all Tutorials
    
    router.get("/", categoryA.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", categoryA.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categoryA.findOne);
    // Update a Tutorial with id
    router.put("/:id", categoryA.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categoryA.delete);
  
    // Delete all Tutorials
    router.delete("/", categoryA.deleteAll);
  
    app.use('/api/categoryAs', router);
  };