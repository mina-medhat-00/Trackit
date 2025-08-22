import React, { useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";

interface AddTaskModalProps {
  visible: boolean;
  onClose: () => void;
  onAddTask: (title: string, description: string) => void;
  styles: any;
}

/**
 * A modal component for adding a new task.
 *
 * Displays a modal dialog with input fields for the task title and description.
 * Allows users to enter details for a new task and submit it via the "Add" button.
 * The modal can be closed using the "Cancel" button or by triggering the `onClose` callback.
 *
 * @component
 * @param visible - Controls the visibility of the modal.
 * @param onClose - Callback invoked when the modal is closed.
 * @param onAddTask - Callback invoked when a new task is added.
 * @param styles - Style object for customizing the modal appearance.
 */

export default function AddTaskModal({
  visible,
  onClose,
  onAddTask,
  styles,
}: AddTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title.trim() && description.trim()) {
      onAddTask(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add New Task</Text>

          <TextInput
            style={styles.input}
            placeholder="Task Title"
            placeholderTextColor="#888"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Task Description"
            placeholderTextColor="#888"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <View style={styles.modalButtons}>
            <Button title="Cancel" onPress={onClose} color="#888" />
            <Button title="Add" onPress={handleAdd} color="#4CAF50" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
