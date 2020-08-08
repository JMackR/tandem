import React, { useRef } from "react"
import {
  Animated,
  ImageStyle,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native"

import { ButtonProps } from "./button-props"

const TRANSPARENT = "#FFFFFF00"
const ANIMATION_DURATION = 100

export const Button = (props: ButtonProps) => {
  const { onClick, onLongClick, title, subtitle } = props

  const buttonStyles: StyleProp<ViewStyle> = [styles.button]
  const textStyles: StyleProp<TextStyle> = [styles.text]
  const subtitleStyles: StyleProp<TextStyle> = [styles.subtitle]

  const clickHandler = () => {
    if (onClick) {
      onClick()
    }
  }

  const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableWithoutFeedback

  return (
    <Touchable accessibilityRole="button" onPress={clickHandler} onLongPress={onLongClick} touchSoundDisabled={false}>
      <Animated.View style={buttonStyles}>
        <View style={styles.textContainer}>
          <Text style={textStyles} testID="ucl.button.title" accessibilityLabel="ucl.button.title">
            {title}
          </Text>
          <Text style={subtitleStyles} testID="ucl.button.subtitle" accessibilityLabel="ucl.button.subtitle">
            {subtitle}
          </Text>
        </View>
      </Animated.View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 0,
    borderRadius: 4,

    flexDirection: "row",
    flexWrap: "nowrap",

    justifyContent: "center",
    alignItems: "center",
    alignContent: "stretch",
  },
  icon: {
    marginRight: 4,
  },
  textContainer: {
    alignSelf: "auto",
    flex: 0,
    flexDirection: "column",
  },
  text: {
    textAlign: "center",
    alignContent: "center",
  },
  subtitle: {
    textAlign: "center",
  },
})
