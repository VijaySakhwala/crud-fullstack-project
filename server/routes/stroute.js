const {handleinsert ,  handleget, handlesingle, handledelete, handlesearch, handleupdate, handlelogin, handleverify} = require("../controllers/stlogic")
const express = require("express")
const route = express.Router()

route.post("/", handleinsert)

route.post("/login", handlelogin)

route.post("/verify", handleverify)

route.get("/", handleget)

route.get("/:id", handlesingle)

route.delete("/:id", handledelete)

route.get("/search/:name", handlesearch)

route.patch("/:id", handleupdate)


module.exports = route