import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function Index() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      const newTask: Task = {
        id: Date.now().toString(),
        text: task,
        completed: false,
      };
      setTasks((prev) => [...prev, newTask]);
      setTask("");
    }
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>

      {/* Input + Add Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          placeholderTextColor="#888"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add" onPress={addTask} color="#4CAF50" />
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity
              onPress={() => toggleTask(item.id)}
              style={{ flex: 1, pointerEvents: "auto" }}
            >
              <Text
                style={[styles.taskText, item.completed && styles.completed]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
            <Button
              title="Delete"
              onPress={() => deleteTask(item.id)}
              color="#E53935"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212", // dark background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "#1e1e1e",
    color: "#fff",
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    boxShadow: "0px 2px 4px rgba(0,0,0,0.7)",
  },
  taskText: {
    fontSize: 16,
    color: "#fff",
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
