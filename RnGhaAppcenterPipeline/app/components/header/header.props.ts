import { type StyleProp, type TextStyle, type ViewStyle } from "react-native"
import { type IconTypes } from "../icon/icons"
import { type TxKeyPath } from "../../i18n"

export interface HeaderProps {
  /**
   * Main header, e.g. POWERED BY IGNITE
   */
  headerTx?: TxKeyPath

  /**
   * Header non-i18n
   */
  headerText?: string

  /**
   * Icon that should appear on the left
   */
  leftIcon?: IconTypes

  /**
   * What happens when you press the left icon
   */
  onLeftPress?: () => void

  /**
   * Icon that should appear on the right
   */
  rightIcon?: IconTypes

  /**
   * What happens when you press the right icon
   */
  onRightPress?: () => void

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>
}
