const { getAxiosResponse, getAxiosErrorResponse } = require("../../utils/response")
const { getDataSet2 } = require("../../services/v1")

const getDataset = async (req, res) => {
  try {
    const data = getDataSet2()
    const response = getAxiosResponse({ data })
    return res.status(response.status).json(response)
  } catch (error) {
    const response = getAxiosErrorResponse(error)
    return res.status(response.status).json(response)
  }
}

module.exports = { getDataset }
