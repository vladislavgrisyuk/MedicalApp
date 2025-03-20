import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { BlurView } from "expo-blur";
import { FontAwesome } from "@expo/vector-icons";
import PoppinsText from "./textComponents/PoppinsText";
import { Image } from "expo-image";

export default function CircleProgressComponent({ style }) {
  return (
    <View style={styles.safeArea}>
          <BlurView 
          intensity={50} tint='extraLight'
          style={[style]}>
            <View style={styles.dataContainer}>
                <PoppinsText fontType="Medium" style={styles.cardTitle}>Серце биття</PoppinsText>
                <PoppinsText fontType="SemiBold" style={styles.bpmTitle}>60 ударів</PoppinsText>
                <Image source={{uri:'https://s3-alpha-sig.figma.com/img/265b/29f6/938b9c166663890bf054902939f2c8e4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z-BE2GSP3bGPysEeJwuis-M7v3fahDAfP7lSkA99tf2FR7XMn2NL2pKx0YQ3hf0~yc0V-Qetrg8cYTJb~c~mqZuQmY3C-S8U4Y6i-624IOaEU80WAHc0tQdbuK4QAFmDMdlwO0Q4sQRNscMU~ANhnHvfdt-zB3W5Hhcbt9ApHKKHnmB6lcK3s6B6V7QeIJ-zyh3VS-IYltdJq6Ks0GkOAnKxmDb95ragLGGaHSWOlpf~W~sPqxpqBoYvlOLjlUrXPqX5oAhc6BPSw3IEefmAJhDH~nasdQXXd1qTz4ZEi6AJh96IP0YfrVxslrmm5G~OLqhzdnHafNxP06Z5R50YZg__'}}/>
                <FontAwesome name="heart" size={100} color={'rgb(255, 94, 134)'}/>
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
    color: 'rgb(255, 114, 145)'
  },
  painValueText: {
    position: 'absolute',
    color: 'rgba(123, 111, 114, 1)',
    top: '40%',
    fontSize: '25'
  }
});