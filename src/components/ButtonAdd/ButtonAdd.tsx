import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { theme } from "../../global/styles/theme"
import { styles } from "./ButtonAdd.styled"

export function ButtonAdd({...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
    >
      <MaterialCommunityIcons 
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  )
}