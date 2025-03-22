import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProductDetailsScreen({ route }) {
  const { productName, ecoscoreGrade, ecoscoreScore, packaging, carbonImpact } = route.params;

  const ecoscoreColor = {
    A: '🟢 Excellent',
    B: '🟡 Good',
    C: '🟠 Moderate',
    D: '🔴 Poor',
    E: '⚫ Very Poor',
  }[ecoscoreGrade] || 'Unknown';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{productName}</Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>🌿 Eco-Score:</Text>
        <Text style={styles.value}>{ecoscoreGrade} ({ecoscoreColor})</Text>

        <Text style={styles.label}>📈 Score:</Text>
        <Text style={styles.value}>{ecoscoreScore} / 100</Text>

        <Text style={styles.label}>♻️ Packaging:</Text>
        <Text style={styles.value}>{packaging}</Text>

        <Text style={styles.label}>💨 Carbon Impact:</Text>
        <Text style={styles.value}>{carbonImpact}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  infoBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
});
