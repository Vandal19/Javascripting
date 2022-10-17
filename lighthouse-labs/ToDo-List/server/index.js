const express = require("express")
const app = express();
const port = 8000
const cors = require("cors")


// middleware
app.use(cors());
app.use(express.json());

// connect to routes
const toDoRoutes = require("./routes/toDoRoutes");

app.use("/toDo", toDoRoutes)


app.listen(port, () => {
  console.log(`server has started on port ${port}`)
})