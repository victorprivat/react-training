import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { useObject } from "@realm/react";
import { Task } from "../models/Task";
import { BSON, Realm } from "realm";

export default function TaskDetails() {
  const { id } = useLocalSearchParams();

  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

  if (!task) {
    return <Text>Not found</Text>;
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Task Details" }} />
      <Text style={{ color: "white", fontSize: 20 }}>
        id: {task._id.toString()}
      </Text>
      <Text style={{ color: "white", fontSize: 20 }}>
        description: {task.description}
      </Text>
      <Text style={{ color: "white", fontSize: 20 }}>User: {task.user_id}</Text>
      <Text style={{ color: "white", fontSize: 20 }}>
        Complete: {task.isComplete ? "Yes" : "No"}
      </Text>
      <Text style={{ color: "white", fontSize: 20 }}>
        Create Date: {task.createdAt.toDateString()}
      </Text>
    </View>
  );
}
