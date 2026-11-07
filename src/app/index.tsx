
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const showMessage = (name: string) => {
    Alert.alert(name, 'This feature will be available soon!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Gardener! 👋</Text>
            <Text style={styles.subtitle}>
              Let's grow something beautiful.
            </Text>
          </View>
          <Text style={styles.logo}>🌱</Text>
        </View>

        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>
            Welcome to SeedStory
          </Text>
          <Text style={styles.welcomeText}>
            Your little garden journey starts here.
            Track your seeds, plants and harvests!
          </Text>
          <Text style={styles.plantEmoji}>🪴 🌻 🥕</Text>
        </View>

        {/* Statistics */}
        <Text style={styles.sectionTitle}>My Garden Overview</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🌰</Text>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Total Seeds</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🌿</Text>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Growing Plants</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🥕</Text>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Harvests</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => showMessage('Add New Seed')}
          >
            <Text style={styles.actionEmoji}>🌱</Text>
            <Text style={styles.actionText}>Add New Seed</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => showMessage('Planting Tracker')}
          >
            <Text style={styles.actionEmoji}>🪴</Text>
            <Text style={styles.actionText}>Plant a Seed</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => showMessage('Growth Journal')}
          >
            <Text style={styles.actionEmoji}>📖</Text>
            <Text style={styles.actionText}>Growth Journal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => showMessage('Harvest Tracker')}
          >
            <Text style={styles.actionEmoji}>🥬</Text>
            <Text style={styles.actionText}>Record Harvest</Text>
          </TouchableOpacity>
        </View>

        {/* Garden Journey */}
        <Text style={styles.sectionTitle}>Your Garden Journey</Text>

        <View style={styles.journeyCard}>
          <Text style={styles.journeyTitle}>
            🌻 Every seed has a story!
          </Text>
          <Text style={styles.journeyText}>
            Start by adding your first vegetable seed
            and watch your garden grow day by day.
          </Text>
        </View>

        <Text style={styles.footer}>
          Made with 💚 for your little garden
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8EF',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 22,
    paddingTop: 15,
  },

  greeting: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#245C36',
  },

  subtitle: {
    fontSize: 14,
    color: '#71816F',
    marginTop: 5,
  },

  logo: {
    fontSize: 38,
  },

  welcomeCard: {
    backgroundColor: '#2F7949',
    marginHorizontal: 20,
    padding: 22,
    borderRadius: 22,
  },

  welcomeTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  welcomeText: {
    fontSize: 14,
    color: '#E9F5E9',
    lineHeight: 22,
    marginTop: 10,
  },

  plantEmoji: {
    fontSize: 35,
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#245C36',
    marginHorizontal: 20,
    marginTop: 27,
    marginBottom: 14,
  },

  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    gap: 10,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    elevation: 2,
  },

  statEmoji: {
    fontSize: 27,
  },

  statNumber: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#2F7949',
    marginTop: 8,
  },

  statLabel: {
    fontSize: 11,
    color: '#687568',
    marginTop: 5,
    textAlign: 'center',
  },

  actionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
    gap: 12,
  },

  actionCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    elevation: 2,
  },

  actionEmoji: {
    fontSize: 32,
  },

  actionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#315B3D',
    marginTop: 10,
    textAlign: 'center',
  },

  journeyCard: {
    backgroundColor: '#E5F0DD',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 18,
  },

  journeyTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#315B3D',
  },

  journeyText: {
    fontSize: 14,
    color: '#637764',
    lineHeight: 22,
    marginTop: 10,
  },

  footer: {
    textAlign: 'center',
    color: '#809080',
    fontSize: 12,
    marginVertical: 25,
  },
});
