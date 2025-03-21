import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import PoppinsText from "./textComponents/PoppinsText";
import Notify from "@/assets/images/notify.svg";

export default function QuizNotify({ style }) {
  return (
    <View style={styles.safeArea}>
      <BlurView intensity={60} tint="extraLight" style={style}>
        <View style={styles.dataContainer}>
          <View style={styles.imageContainer}>
            <Notify width={40} height={40} />
          </View>
          <View style={styles.textContainer}>
            <PoppinsText style={styles.cardTitle}>
              Пропущене опитування
            </PoppinsText>
            <PoppinsText style={styles.surveyQuestion}>
              Ви стискали щелепу?
            </PoppinsText>
          </View>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "transparent", // Фон для SafeAreaView
  },
  cardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: 400,
    opacity: 0.8
  },
  textContainer: {
    justifyContent: 'center',
    paddingLeft: 13
  },
  dataContainer: {
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 4
  },
  surveyQuestion: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19
  },
  imageContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 15,
    borderRadius: '100%'
  },
  cardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderWidth: "2",
    borderColor: "rgb(179, 4, 4)",
    borderRadius: 2,
  },
  headerContainer: {
    width: "100%",
    alignSelf: "center", // Заставляем header растянуться
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: 12,
    backgroundColor: "transparent",
    borderRadius: 16, // Чтобы содержимое не выходило за borderRadius
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 14,
    color: "gray",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  bellContainer: {
    backgroundColor: "white",
    position: "relative",
    padding: 12,
    borderRadius: 8,
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    right: 0,
  },
});
