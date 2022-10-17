const express = require("express");
const router = express.Router();
const { newToDo } = require("../db/database")

// Routes

//Create a todo
router.post("/", async (req, res) => {
  try {
    const { description } = req.body
    const result = await newToDo(description)
    return res.send(result)
  } catch (error) {
    console.error(error.response ? error.response.body : error)
  }
})

// Get all todo

module.exports = router