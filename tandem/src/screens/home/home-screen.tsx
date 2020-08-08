import React, { useEffect, useRef, useState } from "react"
import { View } from "react-native"
import { Text, TextField } from "../../components"

import { styles } from "../../theme/styles"

const containerStyle = {
  ...styles.padTop3,
}

const titleContainer = {
  ...styles.padVertical3,
  ...styles.alignSelfCenter,
}

const inputContainer = {
  ...styles.padVertical3,
  ...styles.padHorizontal2,
}

const dashboardContainer = {
  ...styles.padVertical3,
}

export const Home = () => {
  const inputRef = useRef(null)

  const [inputValue, setInput] = useState("")

  return (
    <View style={containerStyle}>
      <View style={titleContainer}>
        <Text preset={"title1"} text={"Tandem Test"} color={"white"} />
      </View>
      <View style={inputContainer}>
        <TextField
          testID="datapoint"
          forwardedRef={inputRef}
          preset={"dark"}
          style={{ borderRadius: 30 }}
          placeholder="Add a Number"
          onChangeText={(text) => setInput(text)}
          autoCapitalize="none"
          value={inputValue}
        />
      </View>
    </View>
  )
}
