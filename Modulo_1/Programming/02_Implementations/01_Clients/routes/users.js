var express = require('express');
var router = express.Router();

const { FindUser }=require(`../services/Clients.service`)

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await FindUser()
  res.status(200).json({
    msg: "Lista de usuarios",
    body: users,
    
  });
  } catch (error) {
    res.status(500).json({
      msg:"internal server error"
    })
  }
});

module.exports = router;
