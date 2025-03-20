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
import PoppinsText from "../textComponents/PoppinsText";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function Header() {
  const handleBellPress = () => {
    alert("Открываем уведомления!");
  };

  return (
    <View style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {/* Левая часть: Аватар + Текст */}
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://picsum.photos/100/100" }}
            style={styles.avatar}
          />
          <View style={styles.textContainer}>
            <PoppinsText style={styles.greeting}>Ласкаво просимо,</PoppinsText>
            <PoppinsText style={styles.userName}>Владислав</PoppinsText>
          </View>
        </View>

        {/* Правая часть: Иконка уведомлений */}
        <TouchableOpacity
          style={styles.bellContainer}
          onPress={handleBellPress}
        >
          <Fontisto name="bell" size={24} color="black" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
    backgroundColor: "transparent", // Фон для SafeAreaView
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
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 12,
  },
  greeting: {
    fontSize: 16,
    color: "white",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  bellContainer: {
    backgroundColor: "white",
    position: "relative",
    padding: 12,
    borderRadius: 13,
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "red",
    position: "absolute",
    borderWidth: 2,
    borderColor: "white",
    top: 14,
    right: 12,
  },
});
