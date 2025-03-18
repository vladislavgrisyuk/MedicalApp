import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import ProfileHeader from '@/components/header/ProfileHeader'
import { BlurView } from 'expo-blur';
import QuizNotify from '@/components/QuizNotify'
import TodaysAnswers from '@/components/TodaysAnswers'

export default function TabTwo() {
  return (
    <ScrollView style={styles.container}>

      <ProfileHeader/>
      <QuizNotify style={styles.cardContainer}/>
      <TodaysAnswers style={styles.cardContainer}/>
      <View>
        <BlurView 
        intensity={40} tint='extraLight'
        style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Пропущене опитування</Text>
          <Text style={styles.surveyDate}>17</Text>
          <Text style={styles.surveyQuestion}>Ви стискали щелепу?</Text>
        </BlurView>
      </View>

      {/* Карточка ответов */}
      <View style={styles.card}>
        {/* Заголовок и кнопка добавления */}
        <View style={styles.answersHeader}>
          <Text style={styles.cardTitle}>Відповіді на сьогодні</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* Сами ответы */}
        <View style={styles.answersRow}>
          <View style={styles.answerItem}>
            <Text style={styles.answerLabel}>Стискав</Text>
            <View style={styles.answerValueBox}>
              <Text style={styles.answerValue}>3</Text>
            </View>
          </View>
          <View style={styles.answerItem}>
            <Text style={styles.answerLabel}>Не стискав</Text>
            <View style={styles.answerValueBox}>
              <Text style={styles.answerValue}>10</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Карточка статистики */}
      <View style={styles.card}>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Інтенсивність болю</Text>
            <Text style={styles.statValue}>7.5</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Серцебиття</Text>
            <Text style={styles.statValue}>60 ударів</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /* Основной контейнер */
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Нежный фон
    padding: 16,
  },

  /* Шапка */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
  },

  /* Общая карточка */
  cardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderWidth: '2',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 15,
  },
  card: {
    
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    // Тени (iOS/Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },

  /* Опрос */
  surveyDate: {
    fontSize: 12,
    color: '#888',
    marginVertical: 4,
  },
  surveyQuestion: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
    lineHeight: 20,
  },

  /* Ответы */
  answersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF6F61',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  answersRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  answerItem: {
    alignItems: 'center',
  },
  answerLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  answerValueBox: {
    minWidth: 36,
    minHeight: 36,
    borderRadius: 18,
    backgroundColor: '#EEF5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3366FF',
  },

  /* Статистика */
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '48%',
    backgroundColor: '#F8F9FD',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
});
