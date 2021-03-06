import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import illustrationImg from '../../../assets/illustration.png'

import { ButtonIcon } from '../../components'

import { styles } from './SignIn.styled'

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Image 
        source={illustrationImg} 
        style={styles.image} 
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize
          suas jogatinas 
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title="Entrar com Discord" 
          activeOpacity={0.7} 
          onPress={handleSignIn}
        />
      </View>
    </View>
  )
}