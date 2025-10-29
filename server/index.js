const express = require("express")
const app = express()
app.use(express.json())
var cors = require('cors')
app.use(cors())
const path = require("path");
const dbconnect = require("./config/dbconnect");
const route = require("./routes/stroute");


dbconnect().then(() => console.log('Connected!'));
const clientBuildPath = path.join(__dirname, "..", "client", "build");
app.use(express.static(clientBuildPath));
app.use("/api", route)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.listen(3030, () => {
  console.log("server is running in 3030");
})

// module.exports = app;

