import { View, Text, FlatList } from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { description: "First Task" },
    { description: "Second Task" },
  ]);

  return (
    <View style={{ backgroundColor: "#101112", padding: 10, borderRadius: 5 }}>
      <Text style={{ color: "white", fontWeight: "bold" }}>To Do</Text>
      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
    </View>
  );
}
