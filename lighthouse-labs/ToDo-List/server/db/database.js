const { Pool } = require("pg");
const dbParams = require("./params");
const db = new Pool(dbParams);
db.connect();

const newToDo = async (description) => {
  try {
    const result = await db.query(
      `INSERT INTO todo(description)
       VALUES ($1);`,
      [description]
    );
    return result.rows;
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
};

module.exports = {
  newToDo,
}