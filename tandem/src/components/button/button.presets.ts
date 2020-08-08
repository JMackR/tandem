import { TextStyle, ViewStyle } from "react-native"
import { border, color, size, styles } from "../../theme"
import * as TextPresets from "../text/text.presets"
import Color from "color"

const baseView = {
  flexShrink: 0,
  paddingHorizontal: size(2),
  borderRadius: 4,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
} as ViewStyle

const defaultView = {
  ...baseView,
  height: size(7),
} as ViewStyle

const roundView = {
  ...baseView,
  width: size(5),
  height: size(5),
  borderRadius: size(5) / 2,
} as ViewStyle

const roundLargeView = {
  ...baseView,
  ...styles.round,
  width: size(6),
  height: size(6),
} as ViewStyle

const roundedView = {
  ...baseView,
  height: size(5),
  borderRadius: size(5) / 2,
} as ViewStyle

const roundSmallView = {
  ...baseView,
  width: size(4),
  height: size(4),
  borderRadius: size(4) / 2,
} as ViewStyle

const pillView = {
  ...baseView,
  height: size(4),
  borderRadius: size(2),
} as ViewStyle

const linkView = {
  ...baseView,
  height: size(3),
  paddingHorizontal: 0,
} as ViewStyle

const baseTextStyle = {
  textAlign: "center",
  flexShrink: 1,
} as TextStyle

interface ButtonPreset {
  viewStyle?: ViewStyle
  textStyle?: TextStyle
  highlightColor?: string
  selectedViewStyle?: ViewStyle
  selectedTextStyle?: TextStyle
  iconTint?: string
  iconParentStyle?: ViewStyle
}

const primary = {
  viewStyle: {
    ...defaultView,
    backgroundColor: color.primary,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.button,
    color: color.light,
  },
} as ButtonPreset

const secondary = {
  viewStyle: {
    ...defaultView,
    backgroundColor: color.light,
    borderColor: color.border,
    borderWidth: 1,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.button,
    color: color.dark,
  },
  highlightColor: color.border,
  iconTint: color.dark,
} as ButtonPreset

const brand = {
  viewStyle: {
    ...defaultView,
    backgroundColor: color.brand,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.button,
    color: color.dark,
  },
  iconTint: color.dark,
} as ButtonPreset

const outlineLight = {
  viewStyle: {
    ...defaultView,
    borderColor: color.lightTransparent2,
    borderWidth: border(),
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.button,
    color: color.light,
  },
} as ButtonPreset

const filter = {
  viewStyle: {
    ...baseView,
    height: size(5),
    backgroundColor: color.light,
    borderColor: color.border,
    borderWidth: 1,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.buttonUtility,
    color: color.dark,
  },
  highlightColor: color.border,
  selectedViewStyle: {
    borderColor: color.transparent,
    backgroundColor: color.primary,
  },
  selectedTextStyle: {
    color: color.light,
  },
} as ButtonPreset

const toggle = {
  viewStyle: {
    ...baseView,
    height: size(5),
    backgroundColor: color.darkTransparent3,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.buttonUtility,
    color: color.light,
  },
  highlightColor: color.border,
  selectedViewStyle: {
    backgroundColor: color.brand,
  },
  selectedTextStyle: {
    color: color.dark,
  },
} as ButtonPreset

const link1Light = {
  viewStyle: linkView,
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.link1,
    color: color.light,
  },
} as ButtonPreset

const link1Dark = {
  viewStyle: linkView,
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.link1,
    color: color.dark,
  },
} as ButtonPreset

const link2Light = {
  viewStyle: linkView,
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.link2,
    color: color.light,
  },
} as ButtonPreset

const link2Dark = {
  viewStyle: linkView,
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.link2,
    color: color.dark,
  },
} as ButtonPreset

const link3Light = {
  viewStyle: linkView,
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.link3,
    color: color.light,
  },
} as ButtonPreset

const link3Dark = {
  viewStyle: linkView,
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.link3,
    color: color.dark,
  },
} as ButtonPreset

const link4Primary = {
  viewStyle: linkView,
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.timestamp,
    color: color.primary,
  },
} as ButtonPreset

const pillLight = {
  viewStyle: {
    ...pillView,
    backgroundColor: color.darkTransparent3,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.buttonUtility,
    color: color.light,
  },
} as ButtonPreset

const pillDark = {
  viewStyle: {
    ...pillView,
    backgroundColor: color.darkTransparent3,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.buttonUtility,
    color: color.dark,
  },
} as ButtonPreset

const pillContrast = {
  viewStyle: {
    ...pillView,
    backgroundColor: color.lightTransparent4,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.buttonUtility,
    color: color.light,
  },
} as ButtonPreset

const pillOutline = {
  viewStyle: {
    ...pillView,
    backgroundColor: color.transparent,
    borderColor: color.border,
    borderWidth: 1,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.buttonUtility,
    color: color.light,
  },
} as ButtonPreset

const roundDark = {
  viewStyle: {
    ...roundView,
    backgroundColor: new Color(color.dark).alpha(0.04).toString(),
  },
  iconTint: color.dark,
} as ButtonPreset

const roundPrimary = {
  viewStyle: {
    ...roundView,
    backgroundColor: color.primary,
  },
} as ButtonPreset

const roundedPrimary = {
  viewStyle: {
    ...roundedView,
    backgroundColor: color.primary,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.button,
    color: color.light,
  },
} as ButtonPreset

const roundedOutline = {
  viewStyle: {
    ...roundedView,
    borderColor: color.border,
    borderWidth: border(),
    backgroundColor: color.transparent,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.subheader3,
    color: color.dark,
  },
  iconTint: color.dark,
} as ButtonPreset

const roundedOutlineLarge = {
  ...roundedOutline,
  viewStyle: {
    ...roundedOutline.viewStyle,
    height: size(6),
    borderRadius: size(6) / 2,
  },
} as ButtonPreset

const roundedContrast = {
  viewStyle: {
    ...roundedView,
    backgroundColor: color.lightTransparent4,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.subheader3,
    color: color.light,
  },
  iconTint: color.light,
} as ButtonPreset

const roundLight = {
  viewStyle: {
    ...roundView,
    backgroundColor: color.darkTransparent3,
  },
} as ButtonPreset

const roundLightSmall = {
  viewStyle: {
    ...roundSmallView,
    backgroundColor: color.darkTransparent3,
  },
  iconSize: "extraSmall",
} as ButtonPreset

const roundBrand = {
  viewStyle: {
    ...roundView,
    backgroundColor: color.brand,
  },
  iconTint: color.dark,
} as ButtonPreset

const roundContrast = {
  viewStyle: {
    ...roundView,
    backgroundColor: color.lightTransparent4,
  },
} as ButtonPreset

const roundContrastSmall = {
  viewStyle: {
    ...roundSmallView,
    backgroundColor: color.lightTransparent4,
  },
  iconSize: "extraSmall",
} as ButtonPreset

const roundPrimaryLarge = {
  viewStyle: {
    ...roundLargeView,
    backgroundColor: color.primary,
  },
  iconSize: "medium",
} as ButtonPreset

const roundSecondaryLarge = {
  viewStyle: {
    ...roundLargeView,
    backgroundColor: color.secondary,
  },
  iconSize: "medium",
} as ButtonPreset

const roundContrastLarge = {
  viewStyle: {
    ...roundLargeView,
    backgroundColor: color.lightTransparent4,
  },
  iconSize: "medium",
} as ButtonPreset

const roundTransparentLarge = {
  viewStyle: {
    ...roundView,
    backgroundColor: color.transparent,
  },
  iconSize: "small",
} as ButtonPreset

const actionPrimary = {
  viewStyle: {
    ...baseView,
    height: size(5),
    borderRadius: size(5) / 2,
    backgroundColor: color.primary,
    paddingRight: 0,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.buttonUtility,
    color: color.light,
  },
  iconParentStyle: {
    backgroundColor: color.darkTransparent3,
    marginLeft: 8,
    width: size(5),
    height: size(5),
    borderRadius: size(5) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
} as ButtonPreset

const transparent = {
  viewStyle: { backgroundColor: color.transparent },
  textStyle: {
    ...baseTextStyle,
    color: color.shade1,
  },
} as ButtonPreset

export const presets = {
  actionPrimary,
  brand,
  filter,
  link1Light,
  link1Dark,
  link2Light,
  link2Dark,
  link3Light,
  link3Dark,
  link4Primary,
  outlineLight,
  primary,
  pillLight,
  pillDark,
  pillContrast,
  pillOutline,
  roundDark,
  roundPrimary,
  roundedPrimary,
  roundedOutline,
  roundedOutlineLarge,
  roundedContrast,
  roundLight,
  roundLightSmall,
  roundBrand,
  roundContrast,
  roundContrastSmall,
  roundPrimaryLarge,
  roundSecondaryLarge,
  roundTransparentLarge,
  roundContrastLarge,
  secondary,
  toggle,
  transparent,
}

export type ButtonPresetNames = keyof typeof presets
