import React from "react"
import { FlatList } from "react-native"
import { Gauge, Tile } from ".."
import { styles } from "../../theme/styles"
import { mergeStyles } from "../../utils/styles"

export const Dashboard = ({ numbers }) => {
  return (
    <>
      <FlatList
        keyExtractor={(item) => item.title}
        data={numbers}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        renderItem={({ item }) => <Gauge key={item.title} value={item.value} title={item.title} />}
        showsVerticalScrollIndicator={false}
        style={mergeStyles(styles.overflowVisible, styles.marginVertical)}
      />
    </>
  )
}
