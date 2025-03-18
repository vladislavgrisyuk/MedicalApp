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
            <Text style={styles.greeting}>Ласкаво просимо,</Text>
            <Text style={styles.userName}>Mapie</Text>
          </View>
        </View>

        {/* Правая часть: Иконка уведомлений */}
        <TouchableOpacity
          style={styles.bellContainer}
          onPress={handleBellPress}
        >
          <FontAwesome name="bell" size={24} color="#000" />
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
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 12,
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