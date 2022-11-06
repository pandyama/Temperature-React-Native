import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [celsius, setCelsius] = useState("0");
  const [fahrenheit, setFahrenheit] = useState("32");

  const convertTemp = (temp: string, degreeType: string) => {
    if (degreeType === "celsius") {
      setCelsius(temp);
      const fTemp = Math.round(Number(temp) * (9 / 5) + 32);
      setFahrenheit(fTemp.toString());
    } else if (degreeType === "fahrenheit") {
      setFahrenheit(temp);
      const cTemp = Math.round(Number(temp) - 32) * (5 / 9);
      setCelsius(cTemp.toString());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>{/* <Text>Temperature</Text> */}</View>
      <View style={styles.celsius}>
        <Text style={styles.label}>{"Celsius"}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter degree"
          keyboardType="numeric"
          onChangeText={(tempVal) => convertTemp(tempVal, "celsius")}
          value={fahrenheit.toString() !== "" ? celsius.toString() : ""}
        />
      </View>
      <View style={styles.fahrenheit}>
        <Text style={styles.label}>{"Fahrenheit"}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter degree"
          keyboardType="numeric"
          onChangeText={(tempVal) => convertTemp(tempVal, "fahrenheit")}
          value={celsius.toString() !== "" ? fahrenheit.toString() : ""}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "Palatino",
    fontSize: 20,
    margin: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    fontSize: 18,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: "black",
  },
  celsius: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  fahrenheit: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6e6e",
  },
});
