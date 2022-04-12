import { Text, View } from "react-native"

import { Profile } from "../../components"

import { styles } from "./Home.styled"

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  )
}