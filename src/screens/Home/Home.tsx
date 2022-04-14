import { useState } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"

import { 
  Appointment, 
  ButtonAdd, 
  CategorySelect, 
  ListDivider, 
  ListHeader, 
  Profile 
} from "../../components"

import { styles } from "./Home.styled"

export function Home() {
  const [category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '14/04 as 14:00h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Os brabos',
        icon: null,
        owner: false,
      },
      category: '2',
      date: '14/04 as 20:00h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Rumo ao topo',
        icon: null,
        owner: true,
      },
      category: '3',
      date: '15/04 as 18:00h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect 
        categorySelected={category} 
        setCategory={handleCategorySelect} 
      />

      <View style={styles.content}>
        <ListHeader 
          title="Partidas agendadas" 
          subtitle="Total 6" 
        />

        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}