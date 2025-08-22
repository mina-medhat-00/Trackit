import AddTaskModal from "@/components/AddTaskModal";
import EditTaskModal from "@/components/EditTaskModal";
import styles from "@/styles/styles";
import { Task } from "@/types/task";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

/**
 * Main component
 * Manages the list of tasks, including adding, editing, deleting, toggling completion, and searching.
 * 
 * @component
 * 
 * @state tasks - Array of Task objects representing the current tasks.
 * @state addVisible - Controls visibility of the Add Task modal.
 * @state editVisible - Controls visibility of the Edit Task modal.
 * @state editingTask - The Task currently being edited, or null.
 * @state search - Search query string for filtering tasks by title.
 * 
 * @returns {JSX.Element} The rendered Trackit app UI.
 */
export default function Index() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [search, setSearch] = useState("");

  const handleAddTask = (title: string, description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
    setAddVisible(false);
  };

  // update status by clicking on task
  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setEditVisible(true);
  };

  const handleSaveEdit = (id: string, title: string, description: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title, description } : t))
    );
    setEditVisible(false);
    setEditingTask(null);
  };

  // Filter tasks by search in title
  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trackit</Text>
        <Button title="Add Task" onPress={() => setAddVisible(true)} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search tasks..."
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity
              onPress={() => toggleTask(item.id)}
              style={{ flex: 1 }}
            >
              <Text
                style={[styles.taskTitle, item.completed && styles.completed]}
              >
                {item.title}
              </Text>
              {item.description ? (
                <Text style={styles.taskDescription}>{item.description}</Text>
              ) : null}
              <Text style={styles.dateText}>
                Created: {new Date(item.createdAt).toLocaleString()}
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Button
                title="Edit"
                onPress={() => openEditModal(item)}
                color="orange"
              />
              <Button
                title="Delete"
                onPress={() => deleteTask(item.id)}
                color="red"
              />
            </View>
          </View>
        )}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {tasks.length} total • {tasks.filter((t) => !t.completed).length} left
        </Text>
      </View>

      {/* Modals */}
      <AddTaskModal
        visible={addVisible}
        onClose={() => setAddVisible(false)}
        onAddTask={handleAddTask}
        styles={styles}
      />
      <EditTaskModal
        visible={editVisible}
        task={editingTask}
        onClose={() => setEditVisible(false)}
        onSave={handleSaveEdit}
        styles={styles}
      />
    </View>
  );
}
