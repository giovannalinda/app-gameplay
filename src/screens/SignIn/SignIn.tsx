import { View, Text, Image, StatusBar, Button } from 'react-native'

import illustrationImg from '../../../assets/illustration.png'

import { ButtonIcon } from '../../components'

import { styles } from './SignIn.styled'

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>

      <Image 
        source={illustrationImg} 
        style={styles.image} 
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
        Organize {`\n`}
        suas jogatinas {`\n`}
        facilmente 
        </Text>


        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  )
}