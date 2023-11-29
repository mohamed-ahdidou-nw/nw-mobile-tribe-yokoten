import { type ImageStyle, type StyleProp, type ViewStyle } from "react-native"
import { type IconTypes } from "./icons"

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */

  containerStyle?: StyleProp<ViewStyle>

  /**
   * The name of the icon
   */

  icon: IconTypes
}
