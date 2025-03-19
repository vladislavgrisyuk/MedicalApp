import React from 'react';
import { View, StyleSheet, Text as RNText } from 'react-native';
import {
  Canvas,
  Path,
  SweepGradient,
  Skia,
  rotate,
} from '@shopify/react-native-skia';



interface CircleProgressProps {
  progress?: number; // Процент от 0 до 100
  size?: number;     // Размер круга в пикселях
  strokeWidth?: number;
}

// Компонент кругового прогресса
const CircleProgress: React.FC<CircleProgressProps> = ({
  progress = 75,
  size = 150,
  strokeWidth = 20,
}) => {
  const center = { x: size / 2, y: size / 2 };
  const radius = (size - strokeWidth) / 2;

  // Фон (серый круг) на 360°
  const pathBg = Skia.Path.Make();
  pathBg.addArc(
    { x: center.x - radius, y: center.y - radius, width: radius * 2, height: radius * 2 },
    0,
    360
  );

  // Прогресс (дуга) от -90° (сверху) до нужного угла
  const startAngle = 15;
  const sweepAngle = 360 * (progress / 100);

  const pathFg = Skia.Path.Make();
  pathFg.addArc(
    { x: center.x - radius, y: center.y - radius, width: radius * 2, height: radius * 2 },
    startAngle,
    sweepAngle
  );

  return (
    <View style={{ width: size, height: size, transform: [{ rotate: '-90deg' }] }}>
      <Canvas style={{ width: size, height: size }}>
        {/* Серый круг (фон) */}
        <Path
          path={pathBg}
          style="stroke"
          strokeWidth={strokeWidth-10}
          color="rgba(0,0,0,0.1)"
          strokeCap="round"
        />
        {/* Цветной прогресс с градиентом */}
        <Path
          path={pathFg}
          style="stroke"
          strokeWidth={strokeWidth}
          strokeCap="round"
        >
          <SweepGradient
            c={center}
            // Можно задать больше цветов или изменить порядок
            colors={['#67ed58', '#f5f533', '#f05e4a']}
            
          />
        </Path>
      </Canvas>

      {/* Текст по центру (обычный RN Text поверх Canvas) */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
  },
});

export default CircleProgress;
