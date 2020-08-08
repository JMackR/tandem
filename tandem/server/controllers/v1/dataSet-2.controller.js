const { getAxiosResponse, getAxiosErrorResponse } = require("../../utils/response")
const { getDataSet1 } = require("../../services/v1")

const getDataset = async (req, res) => {
  try {
    const data = getDataSet1()
    const response = getAxiosResponse({ data })
    res.status(response.status).json(response)
  } catch (error) {
    const response = getAxiosErrorResponse(error)
    res.status(response.status).json(response)
  }
}

module.exports = { getDataset }
