const { Pool } = require("pg");
const dbParams = require("./params");
const db = new Pool(dbParams);
db.connect();

const newToDo = async (description) => {
  try {
    const result = await db.query(
      `INSERT INTO todo(user_id, description)
       VALUES ($1, $2)
       RETURNING *;`,
      [description.user_id, description.description]
    );
    return result.rows;
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
};

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

module.exports = {
  newToDo,
  getAllToDoById
}