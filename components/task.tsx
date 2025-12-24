import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type Task = {
  id: string;
  text: string;
  completed: boolean;
};

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <View style={styles.task}>
      <TouchableOpacity
        onPress={() => onToggle(task.id)}
        style={styles.checkbox}
      >
        <View style={[styles.checkboxInner, task.completed && styles.checked]}>
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>

      <Text style={[styles.taskText, task.completed && styles.completedText]}>
        {task.text}
      </Text>

      <TouchableOpacity
        onPress={() => onDelete(task.id)}
        style={styles.deleteBtn}
      >
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  checkbox: {
    marginRight: 12,
  },
  checkboxInner: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#6C63FF',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteBtn: {
    padding: 8,
  },
  deleteText: {
    color: '#FF5252',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
