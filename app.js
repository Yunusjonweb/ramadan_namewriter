const express = require("express");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const path = require("path");

// Load variables
dotenv.config();

const app = express();

// Initialize middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Handlebars
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use("/", require("./routes/textImage"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
