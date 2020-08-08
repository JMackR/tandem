import { color, size } from "../../theme"
import { Platform, TextStyle, ViewStyle } from "react-native"

const containerBaseStyle = {
  minHeight: size(5),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
} as ViewStyle

const inputBaseStyle = {
  flexGrow: 1,
  maxHeight: size(3),
  margin: size(1),
  paddingTop: Platform.select({ android: 0 }),
  paddingBottom: Platform.select({ android: 0 }),
} as ViewStyle

export const presets = {
  dark: {
    containerStyle: {
      ...containerBaseStyle,
      backgroundColor: color.secondary,
      borderRadius: size(0.5),
    } as ViewStyle,
    inputStyle: {
      ...inputBaseStyle,
      color: color.dark,
      backgroundColor: color.secondary,
    } as TextStyle,
    iconTint: color.dark,
    selectionColor: color.dark,
    placeholderTextColor: color.shade1,
  },
}

export type TextFieldPresetNames = keyof typeof presets
