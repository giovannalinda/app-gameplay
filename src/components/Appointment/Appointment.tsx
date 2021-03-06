import { View, Text } from "react-native"
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import Calendar from '../../../assets/calendar.svg'
import Player from '../../../assets/player.svg'
import { categories } from "../../utils/categories"
import { theme } from "../../global/styles/theme"

import { GuildIcon } from "../GuildIcon"

import { styles } from "./Appointment.styled"

export type GuildProps = {
  id: string
  icon: null
  owner: boolean
  name: string
}

export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type Props = RectButtonProps & {
  data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild
  const { primary, on } = theme.colors

  return (
    <RectButton  {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>

            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <Calendar />

              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <Player fill={owner ? primary : on} />

              <Text style={[
                styles.player, 
                { color: owner ? primary : on }
              ]}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}