import { Text, View } from "react-native"

import { Avatar } from "../Avatar"

import { styles } from "./Profile.styled"

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage='https://github.com/giovannalinda.png'/>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            Giovanna
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  )
}