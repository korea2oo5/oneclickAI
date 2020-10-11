const express = require("express");
const app = express();
const path = require("path");

// const courses = [
//   { id: 1, name: "course1" },
//   { id: 2, name: "course2" },
//   { id: 3, name: "course3" },
// ];

// app.get("/", (req, res) => {
//   res.send("dfdfdfdfd");
// });

// app.get("/api/courses", (req, res) => {
//   res.send(courses);
// });

// app.get("/api/post/:year/:month", (req, res) => {
//   res.send(req.params);
// });

app.use(express.static(path.join(__dirname, "public")));

//PORT
const PORT = 5000;
console.log(process.env.PORT);
app.listen(PORT, () => console.log("server started on port :", PORT));
