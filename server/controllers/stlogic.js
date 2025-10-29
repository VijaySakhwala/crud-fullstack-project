const MyModel = require("../models/student")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

async function handleinsert(req, res) {
  try {
    var crypt = await bcrypt.hash(req.body.password, 10)
    var obj = {
      name: req.body.name,
      email: req.body.email,
      password: crypt
    }
    var data = await MyModel.create(obj)
    res.status(201).json({
      status: "success",  
      data
    })
  }
  catch (err) {
    res.status(400).json({
      status: "err",
      err
    })
  }
} 
// get api
async function handleget(req, res) {
  try {
    var data = await MyModel.find()
    res.status(201).json({
      status: "success",
      data
    })
  }
  catch (err) {
    res.status(400).json({
      status: "err",
      err
    })
  }
}
// get single data by api
async function handlesingle(req, res) {
  try {
    var data = await MyModel.findById(req.params.id)
    res.status(201).json({
      status: "success",
      data
    })
  }
  catch (err) {
    res.status(400).json({
      status: "err",
      err
    })
  }
}


async function handledelete(req, res) {
  try {
    await MyModel.findByIdAndDelete(req.params.id)
    res.status(201).json({
      status: "success"
    })
  }
  catch (err) {
    res.status(400).json({
      status: "err",
      err
    })
  }
}

async function handlesearch(req, res) {
  try {
    var data = await MyModel.find({
      $or: [
        { name: { $regex: req.params.name } },
        { email: { $regex: req.params.name } }
      ]
    })


    res.status(201).json({
      status: "success",
      data
    })
  }
  catch (err) {
    res.status(400).json({
      status: "err",
      err
    })
  }
}

async function handleupdate(req, res) {
  try {
    var crypt = await bcrypt.hash(req.body.password, 10)
    var obj = {
      name: req.body.name,
      email: req.body.email,
      password: crypt
    }
    await MyModel.findByIdAndUpdate(req.params.id, obj)
    res.status(201).json({
      status: "success"
    })
  }
  catch (err) {
    res.status(400).json({
      status: "err",
      err
    })
  }
}

  async function handlelogin(req, res) {
    try {
      var data = await MyModel.findOne({ email: req.body.email })
      if (data != null) {
        var encrypt = await bcrypt.compare(req.body.password, data.password)
        if (encrypt) {
          var token = jwt.sign({ id: data._id }, 'abc' , {expiresIn:"60s"});
          res.status(201).json({
            status: "success",
            data,
            token
          })
        }
        else {
          res.status(401).json({
            status: "error",

          })
        }
      }
      else {
        res.status(401).json({
          status: "error",
        })
      }
    }
    catch (err) {
      res.status(400).json({
        status: "err",
        err
      })
    }
  }

async function handleverify(req, res) {
  try {
    var decoded = jwt.verify(req.body.token, 'abc');
    res.status(200).json({
      status: "success",
      decoded
    })

  }
  catch (err) {
    res.status(400).json({
      status: "err",
      err
    })
  }
}

module.exports = { handleverify,handlelogin, handleinsert, handleget, handlesingle, handledelete, handlesearch, handleupdate }