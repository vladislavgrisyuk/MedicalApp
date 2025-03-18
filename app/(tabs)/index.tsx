import { StyleSheet } from "react-native";
import { Image, ImageBackground } from "expo-image"; // Используем Image из expo-image
import { BlurView } from "expo-blur"; // Подключаем BlurView
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Header from "../../components/header/ProfileHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container]}>
      {/* GIF-фон */}
      
        {/* Контент поверх GIF */}
        <View style={styles.overlay}>
          <Header />
          <Text style={styles.title}>Tab One</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'transparent'
  },
  background: {
    ...StyleSheet.absoluteFillObject, // Растягивает GIF на весь экран
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject, // Размытие на весь экран
  },
  overlay: {
    backgroundColor: "transparent",
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },
});
