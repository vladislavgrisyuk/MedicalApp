import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

const PoppinsText = ({ style, children, fontType = "Regular", ...props }) => {
  const fontFamily = Platform.select({
    ios: `Poppins-${fontType}`,
    android: `Poppins${fontType}`,
  });

  return (
    <Text
      style={[
        { fontFamily },     // Базовые стили (размер и др.)
        style             // Переданные стили, но без перезаписи шрифта
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};


export default PoppinsText;
