import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import Realm from "../providers/Realm";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Realm>
        <Stack screenOptions={{}} />
      </Realm>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
