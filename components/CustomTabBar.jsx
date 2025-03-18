import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

export default function CustomTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View
    style ={[styles.tabBar, { paddingHorizontal: 14}]}
    >
      <BlurView
      tint="extraLight"
      intensity={20}
      style={[styles.tabBarInner]}
        >
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;

            const iconElement = options.tabBarIcon?.({
              color:
                isFocused && route.name !== "main" ? "white" : "rgba(97, 74, 211, 1)",
              size: 24,
            });

            const handlePress = () => navigation.navigate(route.name);

            // Кастомная кнопка "+" для "main"
            if (route.name === "main") {
              return (
                <TouchableOpacity
                  key={route.key}
                  style={styles.mainButton}
                  onPress={handlePress}
                >
                  {iconElement}
                </TouchableOpacity>
              );
            }

            // Обычные вкладки
            return (
              
                  <TouchableOpacity
                    key={route.key}
                    style={[styles.tabButton, isFocused ? styles.activeTab : null]}
                    onPress={handlePress}
                  >
                  {iconElement}
                  </TouchableOpacity>
              
            );
          })}
        </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    overflow: 'hidden',
    alignItems: "center",
    justifyContent: 'center',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
    height: 130,
  },
  tabBarInner: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
    borderRadius: 45,
    overflow: "hidden",
    // backgroundColor: 'black',
    paddingVertical: '18',
    borderColor: "rgba(180, 180, 180, 0.29)",
    borderWidth: 1,
    
  },
  tabBarContainer: {
    
    
    borderWidth: '1',
    backgroundColor:'red'
  }, 

  tabButton: {
    width: 55,
    height: 55,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  activeTab: {
    width: 55,
    height: 55,
    borderRadius: 25,
    backgroundColor: "rgba(97, 74, 211, 0.8)",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "rgba(97, 74, 211, 1)",
    shadowRadius: 9,
    
    shadowOpacity: 5,
    shadowOffset: { width: 0, height: 0 },
  },
  mainButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "black",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: -40,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
});