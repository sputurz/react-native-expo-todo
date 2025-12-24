import TaskItem, { Task } from '@/components/task';
import React, { useState } from 'react';
import {
  FlatList,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Index() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Learn React Native', completed: true },
    { id: '2', text: 'Develop To-Do App', completed: true },
    { id: '3', text: 'Drink Coffee', completed: false },
  ]);

  // Add Task Handler
  const addTask = (): void => {
    if (task.trim() === '') return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: task,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setTask('');
    Keyboard.dismiss();
  };

  // Delete Task Handler
  const deleteTask = (id: string): void => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Switch Task Handler
  const toggleTask = (id: string): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Counter
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My To-Do List</Text>
        <Text style={styles.counter}>
          All: {tasks.length} | Done: {completedCount}
        </Text>
      </View>

      {/* Input */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addTask}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.addBtn}
          onPress={addTask}
          disabled={!task.trim()}
        >
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} onDelete={deleteTask} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={tasks.length === 0 && styles.emptyList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Tasks!</Text>
            <Text style={styles.emptySubtext}>Add First Task...</Text>
          </View>
        }
      />

      {/* Clear All */}
      {tasks.length > 0 && (
        <TouchableOpacity style={styles.clearBtn} onPress={() => setTasks([])}>
          <Text style={styles.clearBtnText}>Clear All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#6C63FF',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  counter: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  inputRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  addBtn: {
    width: 52,
    height: 52,
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  addBtnText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: -3,
  },
  list: {
    paddingHorizontal: 20,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 24,
    color: '#6C63FF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#999',
  },
  clearBtn: {
    backgroundColor: '#FF5252',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  clearBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
