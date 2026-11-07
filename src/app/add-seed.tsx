
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddSeedScreen() {
  const [seedName, setSeedName] = useState('');
  const [category, setCategory] = useState('');
  const [season, setSeason] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');

  const saveSeed = () => {
    if (!seedName.trim() || !category.trim() || !duration.trim()) {
      Alert.alert('Missing Details', 'Please enter Seed Name, Category and Growing Duration.');
      return;
    }

    Alert.alert(
      'Success!',
      `${seedName} has been added successfully!`
    );

    setSeedName('');
    setCategory('');
    setSeason('');
    setDuration('');
    setDescription('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Add New Seed 🌱</Text>
          <Text style={styles.subtitle}>
            Add a new seed to your garden library.
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Seed Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Tomato"
            value={seedName}
            onChangeText={setSeedName}
          />

          <Text style={styles.label}>Seed Category *</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Vegetable"
            value={category}
            onChangeText={setCategory}
          />

          <Text style={styles.label}>Planting Season</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Spring / All year"
            value={season}
            onChangeText={setSeason}
          />

          <Text style={styles.label}>Growing Duration *</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 60 - 85 days"
            value={duration}
            onChangeText={setDuration}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Enter seed details..."
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={saveSeed}
          >
            <Text style={styles.saveButtonText}>+ Save Seed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8F1',
  },
  header: {
    padding: 22,
    paddingTop: 25,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#245C35',
  },
  subtitle: {
    fontSize: 14,
    color: '#68776B',
    marginTop: 8,
  },
  form: {
    backgroundColor: '#FFFFFF',
    margin: 18,
    padding: 20,
    borderRadius: 16,
    elevation: 2,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#245C35',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#F8FAF7',
    borderWidth: 1,
    borderColor: '#DCE8D9',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    color: '#333333',
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#347A45',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
