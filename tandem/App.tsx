import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Home } from "./src"
import { color } from "./src/theme"

declare const global: { HermesInternal: null | {} }
const containerStyle = {
  height: 1,
  backgroundColor: color.darkBackground,
}
const App = () => {
  return (
    <SafeAreaProvider mode="margin" style={containerStyle}>
      <StatusBar hidden />
      <Home />
    </SafeAreaProvider>
  )
}

export default App
