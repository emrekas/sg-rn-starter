import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.buttonContainer}>
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
      <Button
        title="Go to Counter"
        onPress={() => navigate('Counter')}
      />
      <Button
        title="Go to Color"
        onPress={() => navigate('Color')}
      />
      <Button
        title="Go to Square Color"
        onPress={() => navigate('Square')}
      />
      <Button
        title="Go to Text"
        onPress={() => navigate('Text')}
      />
      <Button
        title="Go to Box"
        onPress={() => navigate('Box')}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%"
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
