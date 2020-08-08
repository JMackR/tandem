import React from "react"
import { StyleSheet, View } from "react-native"
import { AnimatedCircularProgress } from "react-native-circular-progress"
import { Text } from ".."
import { mergeStyles } from "../../utils/styles"
import { styles } from "../../theme/styles"
import { color, size } from "../../theme"
const containerStyle = {
  ...styles.justifyBetween,
  alignItems: "center",
  ...styles.justifyCenter,
  ...styles.pad,
  ...color.darkBackground,
}

export const Gauge = ({ value, title }) => {
  const MAX_POINTS = 100
  const fill = (value / MAX_POINTS) * 100
  return (
    <View style={containerStyle}>
      <AnimatedCircularProgress
        size={200}
        width={3}
        backgroundWidth={30}
        fill={fill}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      >
        {(fill) => {
          return (
            <View>
              <Text
                preset={"body2"}
                color={"#FFFFFF"}
                style={mergeStyles(styles.alignTextCenter)}
                text={((MAX_POINTS * fill) / 100).toFixed(6)}
              />
              <Text preset={"body2"} color={"#FFFFFF"} style={mergeStyles(styles.alignTextCenter)} text={title} />
            </View>
          )
        }}
      </AnimatedCircularProgress>
    </View>
  )
}
