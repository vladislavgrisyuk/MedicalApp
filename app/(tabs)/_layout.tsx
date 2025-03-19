import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import CustomTabBar from '@/components/CustomTabBar';
import { ImageBackground } from 'expo-image';
import Header from '@/components/header/ProfileHeader';
import TabOneScreen from '@/app/(tabs)/index'
import TabTwo from './two';
import { BlurView } from 'expo-blur';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function TabBarIcon({ name, color }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} name={name} color={color} />;
}

function TabOneScreen1() {
  // Здесь замените на нужный вам компонент
  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }} >
      <TabOneScreen/>
    </View>
  );
}

function TabTwoScreen() {
  // Здесь замените на нужный вам компонент
  return (
  <View style={{ flex: 1, backgroundColor: 'transparent' }} >
    <TabTwo/>
  </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      {/* Общий фон, растянутый на весь экран */}
      <ImageBackground 
      source={{ uri: 'https://s3-alpha-sig.figma.com/img/bece/87b1/ad0fc04b249f3db7d0919986c6c86072?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i155KoOHaTklz0ZApqNjI~CtzQVv8h3O-d2--HRtBmO21oZaCFmYbII~cAiwjcGhrfW1tvWKo6Ij~~hQZEBJMRvk8pYNL-AggHnE2qb4HonOambYeVZHCeEs3QmoPL0JoruD6ni0ucjSgacTQFFK22Fjj3P3JDFhiLZwlteyV0wtK-B67b3cWcNTVtexyf5OK8a7V1-5O8uFJEFy1FPjGevfx2pbXsZHowtKaU9UGGyOWS4lFPeWuQ2ORxdI~~T~Ea6MSjB36zbtbDdY7GwSEovPjpPe5CLJA2FrHREX-ISGawm~iKNlRAzEUypuyyT~mY8rTr5VBzbPA449B8zoZw__' }}
      style={styles.background}
      contentFit="cover"
      />
        <BlurView intensity={20} tint='light' style={{flex: 1}}>
          <Tab.Navigator
            screenOptions={{
              sceneStyle: {
                backgroundColor: 'transparent',
              },
              headerShown: false,
              tabBarStyle: {
                backgroundColor: 'blue',
                position: 'absolute', // Позволяет содержимому отображаться под панелью вкладок
                elevation: 0,         // Убирает тень на Android
                borderTopWidth: 0,    // Убирает границу сверху на iOS
              },
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
          >
            <Tab.Screen
              name="TabOne"
              component={TabOneScreen1}
              options={{
                title: 'Tab One',
                tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
              }}
            />
            <Tab.Screen
              name="TabTwo"
              component={TabTwoScreen}
              options={{
                title: 'Tab Two',
                tabBarIcon: ({ color }) => <AntDesign name="barschart" size={29} color={color} />,
              }}
            />
            <Tab.Screen
              name="TabThree"
              component={TabTwoScreen}
              options={{
                title: 'Tab Two',
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              }}
            />
            <Tab.Screen
              name="TabFour"
              component={TabTwoScreen}
              options={{
                title: 'Tab Two',
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              }}
            />

             <Tab.Screen
              name="TabFive"
              component={TabTwoScreen}
              options={{
                title: 'Tab Two',
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              }}
            />
          </Tab.Navigator>
        </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'green',
  },
});
