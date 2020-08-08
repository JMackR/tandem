import { useState } from "react"
import { useArray } from ".."

export const useCalc = (initialDataSet = []) => {
  const [dataSet, setDataSet] = useState(initialDataSet)
  const [mean, median, stdDev, mode] = useArray(dataSet)
  const numbers = [
    { title: "Mean", value: mean },
    { title: "Media", value: median },
    { title: "Standard Deviation", value: stdDev },
    { title: "Mode", value: mode },
  ]
  return [{ dataSet, numbers }, setDataSet]
}
