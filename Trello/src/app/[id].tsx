import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function TaskDetails() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Task Details" }} />
      <Text style={{ color: "white", fontSize: 20 }}>Id: {id}</Text>
    </View>
  );
}
