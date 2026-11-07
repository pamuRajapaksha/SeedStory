
import React, { useState, useCallback } from 'react';
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
import { useFocusEffect } from 'expo-router';
import { db } from '@/database/database';

type Seed = {
  id: number;
  name: string;
  category: string;
  season: string;
  duration: string;
  description: string;
};

export default function SeedLibraryScreen() {
  const [search, setSearch] = useState('');
  const [seeds, setSeeds] = useState<Seed[]>([]);

  // Load seeds from SQLite whenever this screen opens
  useFocusEffect(
    useCallback(() => {
      try {
        const savedSeeds = db.getAllSync<Seed>(
          'SELECT * FROM seeds ORDER BY id DESC'
        );

        setSeeds(savedSeeds);
      } catch (error) {
        console.error('Error loading seeds:', error);
        Alert.alert('Error', 'Could not load seeds from database.');
      }
    }, [])
  );

  const filteredSeeds = seeds.filter(
    (seed) =>
      seed.name.toLowerCase().includes(search.toLowerCase()) ||
      seed.category.toLowerCase().includes(search.toLowerCase())
  );

  const showSeedDetails = (seed: Seed) => {
    Alert.alert(
      seed.name,
      `${seed.description}\n\nCategory: ${seed.category}\nPlanting Season: ${seed.season}\nGrowing Time: ${seed.duration}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Seed Library 🌱</Text>
          <Text style={styles.subtitle}>
            Explore seeds and start your garden journey.
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search seeds..."
            placeholderTextColor="#888"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <Text style={styles.sectionTitle}>
          Available Seeds ({filteredSeeds.length})
        </Text>

        {filteredSeeds.length === 0 ? (
          <Text style={styles.emptyText}>
            No seeds found. Please add seeds first.
          </Text>
        ) : (
          filteredSeeds.map((seed) => (
            <TouchableOpacity
              key={seed.id}
              style={styles.seedCard}
              onPress={() => showSeedDetails(seed)}
            >
              <View style={styles.seedIcon}>
                <Text style={styles.iconText}>🌱</Text>
              </View>

              <View style={styles.seedInfo}>
                <Text style={styles.seedName}>{seed.name}</Text>
                <Text style={styles.category}>{seed.category}</Text>
                <Text style={styles.duration}>
                  Growing time: {seed.duration}
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Every seed has a story. Start growing yours! 🌿
          </Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#245C35',
  },
  subtitle: {
    fontSize: 14,
    color: '#68776B',
    marginTop: 8,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#DCE8D9',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#245C35',
    marginHorizontal: 20,
    marginBottom: 12,
  },
  seedCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 15,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  seedIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#E8F4E7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 27,
  },
  seedInfo: {
    flex: 1,
    marginLeft: 14,
  },
  seedName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#245C35',
  },
  category: {
    fontSize: 13,
    color: '#777777',
    marginTop: 3,
  },
  duration: {
    fontSize: 12,
    color: '#4C8756',
    marginTop: 5,
  },
  arrow: {
    fontSize: 27,
    color: '#4C8756',
  },
  emptyText: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 30,
    fontSize: 15,
  },
  footer: {
    margin: 20,
    padding: 18,
    backgroundColor: '#E5F1E2',
    borderRadius: 12,
    alignItems: 'center',
  },
  footerText: {
    color: '#356B43',
    fontSize: 14,
    textAlign: 'center',
  },
});
