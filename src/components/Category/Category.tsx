import React from "react"
import { Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { SvgProps } from "react-native-svg"

import { styles } from "./Category.styled"

type Props = TouchableOpacityProps & {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
  hasCheckBox?: boolean
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox,
  ...rest
}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={[styles.content, { opacity: checked ? 1 : 0.5 }]}>
        {hasCheckBox && (
          <View 
            style={
              checked ? styles.checked : styles.check
            }
          />
        )}

        <Icon 
          width={48} 
          height={48} 
          />
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}