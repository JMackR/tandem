var express = require("express")
var router = express.Router()

router.use("/data", require("./data"))
router.get("/", function (req, res, next) {
  res.render("index")
})

module.exports = router
