import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ProfileHeader from "@/components/header/ProfileHeader";
import { BlurView } from "expo-blur";
import QuizNotify from "@/components/QuizNotify";
import TodaysAnswers from "@/components/TodaysAnswers";
import CircleProgressComponent from "@/components/CircleProgressComponent";
import Heartbeat from "@/components/Heartbeat";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ArticleThumbnail from '@/components/ArticleThumbnail'

export default function TabTwo() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={{ marginBottom: 30 }}>
        <ProfileHeader />
      </View>
      <View style={styles.blurContainer}>
        <QuizNotify style={styles.cardContainer} />
      </View>
      <View style={styles.blurContainer}>
        <TodaysAnswers style={styles.cardContainer} />
      </View>
      <View style={styles.twoColsContainer}>
        <View style={styles.blurContainer}>
          <CircleProgressComponent style={styles.cardContainer} />
          {/* progress={30} size={130} strokeWidth={27} */}
        </View>
        <View style={styles.blurContainer}>
          <Heartbeat style={styles.cardContainer} />
        </View>
      </View>
      <View style={{marginBottom: 200}}>
        <ArticleThumbnail style={styles.blurContainer}/>
      </View>

      {/* <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        {icon ? (
          <Image source={icon} style={styles.icon} />
        ) : (
          <CircularProgress progress={0.5} />
        )}
        {value && <Text style={styles.value}>{value}</Text>}
      </View> */}

      {/* Карточка ответов */}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /* Основной контейнер */
  container: {
    flex: 1,
    backgroundColor: "transparent", // Нежный фон
    padding: 24,
  },
  twoColsContainer: {
    gap: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  blurContainer: {
    borderWidth: 1,
    borderColor: "rgb(223, 223, 223)",
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 15,
    flex: 1,
    boxShadow: '0 1 5 rgba(0, 0, 0, 0.16)'
  },
  /* Шапка */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  headerIcons: {
    flexDirection: "row",
  },

  /* Общая карточка */
  cardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 14,

    // borderWidth: '2',
    // borderColor: 'rgba(255, 255, 255, 0.5)',
    // borderRadius: 20,
    overflow: "hidden",
    flex: 1,
    // marginBottom: 15,
  },
  card: {
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    // Тени (iOS/Android)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },

  /* Опрос */
  surveyDate: {
    fontSize: 12,
    color: "#888",
    marginVertical: 4,
  },
  surveyQuestion: {
    fontSize: 14,
    color: "#444",
    marginTop: 8,
    lineHeight: 20,
  },

  /* Ответы */
  answersHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FF6F61",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  answersRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  answerItem: {
    alignItems: "center",
  },
  answerLabel: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  answerValueBox: {
    minWidth: 36,
    minHeight: 36,
    borderRadius: 18,
    backgroundColor: "#EEF5FF",
    justifyContent: "center",
    alignItems: "center",
  },
  answerValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3366FF",
  },

  /* Статистика */
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statBox: {
    width: "48%",
    backgroundColor: "#F8F9FD",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  statTitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
});
