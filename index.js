const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;

const indexRouter = require("./routes/index")

app.use(morgan("dev"));
app.use(cors());
app.use(express.json())


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));