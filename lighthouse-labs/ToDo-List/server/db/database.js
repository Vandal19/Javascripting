const { Pool } = require("pg");
const dbParams = require("./params");
const db = new Pool(dbParams);
db.connect();

// Add a new ToDo into the Database
const newToDo = async (description) => {
  try {
    const result = await db.query(
      `INSERT INTO todo(id, user_id, description)
       VALUES ($1, $2, $3)
       RETURNING *;`,
      [description.id, description.user_id, description.description]
    );
    return result.rows;
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
};

// Get all to do by user_id
const getAllToDoById = async (id) => {
  try {
      const result = await db.query(
      `SELECT * FROM todo
      WHERE todo.user_id = $1`,
      [id]);
      return result.rows;
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
}

// Update a existing ToDo by ID
const updateExistingToDoById = async (description, id) => {
  try {
    const result = await db.query(
      `UPDATE todo SET description = $1 WHERE id = $2`, [description, id]
    )
    console.log(result.rows)
    return result.rows;
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
}

// Delete a existing todo
const deleteExistingToDo = async(id) => {
  try {
    const result = await db.query(
      `DELETE FROM todo WHERE id = $1`, [id]
    )
  } catch (error) {

  }
}



module.exports = {
  newToDo,
  getAllToDoById,
  updateExistingToDoById,
  deleteExistingToDo
}