const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());
require("dotenv").config();

// const uri = process.env.MONGO_LAB || process.env.MONGODB_URI;
// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDB conncetion established successfully!");
//   })
//   .catch(console.error);

// // API
// const employees = require("./routes/api/employees");
// app.use("/api/employees", employees);

// const records = require("./routes/api/records");
// app.use("/api/records", records);

// // production build
// app.use(express.static(path.join(__dirname, "client", "build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("App runnig on port: ", port);
});
