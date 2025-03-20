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
import CircleProgress from './CircleProgress'
import PoppinsText from "./textComponents/PoppinsText";

export default function CircleProgressComponent({ style }) {
  return (
    <View style={styles.safeArea}>
          <BlurView 
          intensity={60} tint='extraLight'
          style={style}>
            <View style={styles.dataContainer}>
                <Text style={styles.cardTitle}>Інтенсивність болю</Text>
                <View style={ styles.circleContainer }>
                    <PoppinsText fontType="SemiBold" style={styles.painValueText}>7.5</PoppinsText>
                    <CircleProgress progress={70} size={130} strokeWidth={27}/>
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
  dataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardTitle: {
    color: 'white',
    paddingBottom: '15',
    fontSize: '15'
  },
  painValueText: {
    position: 'absolute',
    color: 'rgba(123, 111, 114, 1)',
    top: '38%',
    fontSize: '25'
  },
  circleContainer: {
    alignItems: 'center'
  }
});