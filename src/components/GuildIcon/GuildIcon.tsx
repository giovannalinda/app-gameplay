import { Image } from "react-native"

import { styles } from "./GuildIcon.styled"

export function GuildIcon() {
  const uri = 'data:image/png;base64,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'
  return (
    <Image  
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}