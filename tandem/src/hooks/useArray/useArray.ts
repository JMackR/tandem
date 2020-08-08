import { calculateMean, calculateMedian, calculateMode, calculateStdDeviation } from "../../utils"

export const useArray = (dataSet = [], places = 6) => {
  if (dataSet.length === 0) {
    return [null, null, null, null]
  }
  const format = (value) => value?.toFixed(places)
  const meanValue = format(calculateMean(dataSet))
  const medianValue = format(calculateMedian(dataSet))
  const stdDevValue = format(calculateStdDeviation(dataSet))
  const modeValue = calculateMode(dataSet)
    .map((item) => (item = item.toFixed(places)))
    .toString()

  return [meanValue, medianValue, stdDevValue, modeValue]
}
