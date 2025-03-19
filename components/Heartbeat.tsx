import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { BlurView } from "expo-blur";
import { FontAwesome } from "@expo/vector-icons";
import PoppinsText from "./textComponents/PoppinsText";

export default function CircleProgressComponent({ style }) {
  return (
    <View style={styles.safeArea}>
          <BlurView 
          intensity={50} tint='extraLight'
          style={[style]}>
            <View style={styles.dataContainer}>
                <PoppinsText fontType="Medium" style={styles.cardTitle}>Серце биття</PoppinsText>
                <PoppinsText fontType="SemiBold" style={styles.bpmTitle}>60 ударів</PoppinsText>
                <FontAwesome name="heart" size={100} color={'red'}/>
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
  },
  cardTitle: {
    color: 'white',
    fontSize: 16
  },
  bpmTitle: {
    color: 'white',
    paddingBottom: '15',
    fontSize: '20',
    color: 'rgba(252, 101, 133, 1)'
  },
  painValueText: {
    position: 'absolute',
    color: 'rgba(123, 111, 114, 1)',
    top: '40%',
    fontSize: '25'
  }
});