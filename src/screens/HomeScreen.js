import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigate('FlatList')}
      />
      <Button
        title="Go to Images"
        onPress={() => navigate('Image')}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%"
  },
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
