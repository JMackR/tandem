import { Platform, TextStyle } from "react-native"
import { fontFamily, typography, weight } from "../../theme"
import { moderateScale as ms } from "../../utils"
/**
 * All the variations of text styling within the app
 * Do NOT define custom styles in preview-components, consolidate here
 * If styles are not found here, confirm with design team and sign off a new font in style guide
 */

export const presets = {
  title1: {
    fontFamily: fontFamily(typography.primary, weight.medium),
    fontSize: ms(28),
  } as TextStyle,
  body1: {
    fontFamily: fontFamily(typography.primary, weight.medium),
    fontSize: ms(16),
    letterSpacing: 0.17,
    lineHeight: Platform.select({ ios: 24, android: 28 }),
  } as TextStyle,
  body2: {
    fontFamily: fontFamily(typography.primary, weight.light),
    fontSize: ms(16),
    letterSpacing: 0.17,
    lineHeight: Platform.select({ ios: 24, android: 28 }),
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresetNames = keyof typeof presets
