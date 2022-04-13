import { View } from "react-native"

import { ButtonAdd, Profile } from "../../components"

import { styles } from "./Home.styled"

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
    </View>
  )
}