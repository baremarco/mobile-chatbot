import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  StyleSheet,
  Image,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const chatBot = require("../assets/chatbot.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    marginHorizontal: 12,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  customButton: {
    marginTop: 40,
    borderRadius: 8,
    padding: 6,
    marginHorizontal: 12,
  },
  pressableText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

const Main = () => {
  const [text, setText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ alignItems: "center", marginBottom: "10" }}>
        <Image source={chatBot} style={{ width: 100, height: 100 }} />
      </View>
      <TextInput
        value={text}
        placeholder="Ask your question..."
        onChangeText={setText}
        style={styles.input}
      />
      <Text style={styles.textInput}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        placeat, iste modi assumenda, soluta ab aliquid id repellendus vero
        nulla corporis labore quia fugit amet saepe minima alias cum asperiores!
      </Text>

      <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "hsl(165 100% 42%)" : "#00a67e",
          },
          styles.customButton,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.pressableText}>
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default Main;
