import { palette } from "./palette"
import Color from "color"

// TODO It makes me cry, but we might need another alpha (see alpha0)
const alpha0 = 0.9
const alpha1 = 0.7
const alpha2 = 0.5
const alpha3 = 0.2
const alpha4 = 0.15

/**
 * Exported opacity values
 */
export const opacity = {
  /** Down-state opacity */
  down: alpha1,
  /** Disabled opacity */
  disabled: alpha2,
  /** Inactive opacity (never selectable, eg unowned Mojis) */
  inactive: alpha3,
}

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /** The screen background.  */
  background: palette.white,
  /** The dark screen background */
  darkBackground: palette.darkblue,
  /** Branding color */
  brand: palette.opticYellow,
  /** The main tinting color. */
  primary: palette.purple,
  /** The secondary tinting color. */
  secondary: palette.lightblue,
}

export type ColorName = keyof typeof color
