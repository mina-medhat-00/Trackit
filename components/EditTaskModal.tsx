import { Task } from "@/types/task";
import React, { useEffect, useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";

interface EditTaskModalProps {
  visible: boolean;
  task: Task | null;
  onClose: () => void;
  onSave: (id: string, title: string, description: string) => void;
  styles: any;
}

/**
 * EditTaskModal component displays a modal dialog for editing an existing task.
 *
 * @param visible - Controls the visibility of the modal.
 * @param task - The task object to be edited. If null, the modal fields are empty.
 * @param onClose - Callback function invoked when the modal is closed or cancelled.
 * @param onSave - Callback function invoked when the user saves the changes, passing the task id, updated title, and description.
 * @param styles - Style object for customizing the modal appearance.
 *
 * @returns A React Native modal component for editing a task.
 */

export default function EditTaskModal({
  visible,
  task,
  onClose,
  onSave,
  styles,
}: EditTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    if (task && title.trim() && description.trim()) {
      onSave(task.id, title, description);
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
          <Text style={styles.modalTitle}>Edit Task</Text>

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
            <Button title="Save" onPress={handleSave} color="#4CAF50" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
