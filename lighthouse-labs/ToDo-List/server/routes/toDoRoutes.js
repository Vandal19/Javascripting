const express = require("express");
const router = express.Router();
const { newToDo, getAllToDoById, updateExistingToDoById, deleteExistingToDo } = require("../db/database")

// Routes

//Create a todo
router.post("/:todo", async (req, res) => {
  try {
    console.log(req.params)
    const description = {
      ...req.body,
      // user_id: req.params.user_id
    }
    console.log(description)
    const result = await newToDo(description)
    return res.send(result)
  } catch (error) {
    console.error(error.response ? error.response.body : error)
  }
})

// Get all todo list by Id
router.get("/:id", async (req, res) => {
  try {
    const result = await getAllToDoById(req.params.id)
    if(result) {
      res.send(result)
    }
  } catch (error) {
    console.error(error.response ? error.response.body : error)
  }
})

// Update a existing todo list by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    const result = await updateExistingToDoById(description, id)
    if(result) {
      res.send(result)
    }
  } catch (error) {
    console.error(error.response ? error.response.body : error)
  }
})

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const result = await deleteExistingToDo(id)
    if(result) {
      res.send(result)
    }
  } catch (error) {
    console.error(error.response ? error.response.body : error)
  }
})

module.exports = router