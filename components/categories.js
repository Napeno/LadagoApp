import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";

const Categories = ({ activeCategory, handleChangeCategory, datainput }) => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatListContainer}
      showsHorizontalScrollIndicator={false}
      data={datainput}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CategoriesItem
          isActive={activeCategory == item}
          handleChangeCategory={handleChangeCategory}
          title={item}
          index={index}
        />
      )}
    />
  );
};

const CategoriesItem = ({ title, index, isActive, handleChangeCategory }) => {
  let color = isActive ? "white" : "black";
  let backgroundColor = isActive ? "#365486" : "#F9F9F9";
  let borderWidth = isActive ? 1 : 1;
  return (
    <View>
      <Pressable
        onPress={() => handleChangeCategory(isActive ? null : title)}
        style={[styles.category, { backgroundColor, borderWidth }]}
      >
        <Text style={[styles.title, { color }]}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    gap: 12,
    marginTop: 16,
  },

  category: {
    padding: 12,
    paddingHorizontal: 15,
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
  },
});

export default Categories;
