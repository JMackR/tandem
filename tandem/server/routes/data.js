const express = require("express")
const router = express.Router()
const { getDataSet1, getDataSet2 } = require("../controllers/v1")

router.get("/data1", getDataSet1)
router.get("/data2", getDataSet2)

module.exports = router
