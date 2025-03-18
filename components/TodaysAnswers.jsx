import { BlurView } from 'expo-blur';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodaysAnswers({style}) {
  return (
    <View>
      <BlurView intensity={40} tint='extraLight' style={style}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Відповіді на сьогодні</Text>
            <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>

        {/* Красная полоса */}
       <View style={styles.barsContainer}>
        <View style={styles.row}>
            <View style={[styles.bar, { backgroundColor: '#f44336' }]}>
            </View>
        </View>

        {/* Зеленая полоса */}
        <View style={styles.row}>
            <View style={[styles.bar, { backgroundColor: '#4caf50' }]}>
            </View>
        </View>
       </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  },
  barsContainer: {
    flexDirection: 'row'
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: '#ff5b5b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    flex:1
  },
  bar: {
    height: '40',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    flex:2
  },
  barText: {
    color: '#fff',
  },
  emoji: {
    marginRight: 6,
  },
  count: {
    minWidth: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
