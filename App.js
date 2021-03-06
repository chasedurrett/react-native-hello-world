import React, { useState, useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Greeting style={styles.titleText} name="chase" />
      <Text>Click the button</Text>
      <View style={styles.button}>
        <Button
          title="click me"
          onPress={() => setCount(count + 1)}
        />
      </View>
      <Text style={styles.countText}>{count}</Text>
    </View>
  );
}

function Greeting(props) {
  return (
    <View>
      <Text style={styles.titleText}>Hello {props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#d6e1e1",
    padding: 10,
    margin: 30,
    height: 60,
    width: 160,
    borderRadius: 10,
    textDecorationColor: 'white'
  },
  titleText: {
    fontSize: 50,
    marginBottom: 20
  },
  countText: {
    fontSize: 30
  }
});
