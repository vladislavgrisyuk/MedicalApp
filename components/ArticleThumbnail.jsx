import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import articleLogo from "@/assets/images/articleThumbn.png";
import PoppinsText from "./textComponents/PoppinsText";

export default function ArticleThumbnail({ style }) {
  return (
    <View style={styles.safeArea}>
      <BlurView intensity={60} tint="extraLight" style={style}>
        <View style={styles.dataContainer}>
          {/* Установил правильные размеры */}
          <Image 
            source={articleLogo} 
            style={{ width: '60%', aspectRatio: 1, marginTop:20 }} 
            contentFit="contain" 
          />
          <PoppinsText style={styles.titleText} fontType="Bold">Навіщо контролювати стискання щелепи</PoppinsText>
          <View>
            <PoppinsText style={styles.infoText}>Контроль стискання щелепи важливий для зменшення негативного впливу на здоров'я. Ось декілька причин...</PoppinsText>
        </View>
        </View>
        
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  dataContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  infoText:{
    color: 'white',
    fontSize: 16
  }
});
