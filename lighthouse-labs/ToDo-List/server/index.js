const express = require("express")
const app = express();
const port = 8000
const cors = require("cors")
const morgan = require("morgan");


// middleware
app.use(cors());
app.use(express.json());
app.use(morgan());

// connect to routes
const toDoRoutes = require("./routes/toDoRoutes");

app.use("/toDo", toDoRoutes)


app.listen(port, () => {
  console.log(`server has started on port ${port}`)
})