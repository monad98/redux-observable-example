var express = require("express");

var quotesController = require("../controllers/quotesController");

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
router.get("/quotes/:id?", quotesController.index);
// Create a new quote using data passed in req.body
router.post("/quotes", quotesController.create);
// Update an existing quote with a speicified id param, using data in req.body
router.patch("/quotes/:id", quotesController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/quotes/:id", quotesController.destroy);

module.exports = router;
