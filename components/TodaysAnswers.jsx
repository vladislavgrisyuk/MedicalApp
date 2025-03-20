import { BlurView } from 'expo-blur';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PoppinsText from './textComponents/PoppinsText';

export default function TodaysAnswers({style}) {
  return (
    <View>
      <BlurView intensity={60} tint='extraLight' style={style}>
        <View style={styles.header}>
            <PoppinsText fontType='Bold' style={styles.headerText}>Відповіді на сьогодні</PoppinsText>
            <TouchableOpacity style={styles.addButton}>
                <PoppinsText style={styles.addButtonText}>+</PoppinsText>
            </TouchableOpacity>
        </View>

        {/* Красная полоса */}
       <View style={styles.barsContainer}>
        <View style={[styles.row, styles.barRed]}>
            <View style={[styles.bar, { backgroundColor: 'rgba(229, 57, 80, 1)' }]}>
            </View>
        </View>

        {/* Зеленая полоса */}
        <View style={[styles.row, styles.barGreen]}>
            <View style={[styles.bar, styles.barGreen,{ backgroundColor: 'rgba(56, 197, 88, 1)' }]}>
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
    color: 'white',
    marginLeft: 5
  },
  barsContainer: {
    flexDirection: 'row',
    
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: 'rgba(236, 14, 82, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'inset 5 5 7 -2 rgba(255, 255, 255, 0.5)'
    
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    flex:1
  },
  bar: {
    height: '47',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    flex: 1,
    boxShadow: 'inset 4 15 17 -2 rgba(255, 255, 255, 0.5)'
  },
  barRed: {
    flexGrow: 1
  },
  barGreen: {
    flexGrow: 3
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
