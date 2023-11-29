import {
  type StyleProp,
  type TextStyle,
  type TouchableOpacityProps,
  type ViewStyle,
} from "react-native"
import { type ButtonPresetNames } from "./button.presets"
import { type TxKeyPath } from "../../i18n"

export type ButtonProps = {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * One of the different types of text presets.
   */
  preset?: ButtonPresetNames

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode
} & TouchableOpacityProps
