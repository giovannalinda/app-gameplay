import { useState } from "react"
import { View } from "react-native"

import { ButtonAdd, Profile } from "../../components"
import { CategorySelect } from "../../components/CategorySelect"

import { styles } from "./Home.styled"

export function Home() {
  const [category, setCategory] = useState('')

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect 
          categorySelected={category} 
          setCategory={handleCategorySelect} 
        />
      </View>
    </View>
  )
}