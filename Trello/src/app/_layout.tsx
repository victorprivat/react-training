import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack, Link } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import Realm from "../providers/Realm";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Realm>
        <Stack
          screenOptions={{
            headerRight: () => (
              <Link href="/login">
                <FontAwesome name="user-circle-o" size={24} color="gray" />
              </Link>
            ),
          }}
        />
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
