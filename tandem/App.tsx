import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"

import { Home } from "./src"

declare const global: { HermesInternal: null | {} }

const App = () => {
  return (
    <View style={{ backgroundColor: "#152d44" }}>
      <StatusBar hidden />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </View>
  )
}

export default App
