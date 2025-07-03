
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from './profile';
import SettingsScreen from './settings';
import StackNavigator from '../navigation/StackNavigator';
import AttendanceHome from '../components/AttendanceIndex';

const Tabs = createBottomTabNavigator();
export default function BottomTaps() {
  const colorScheme = useColorScheme();

  return (
    <Tabs.Navigator
  
      screenOptions={{
        
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarLabelStyle:{
          color:"black"
        },
        tabBarHideOnKeyboard:true,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          
          default: {
            
          },
        }),
      }}
      

      >
      <Tabs.Screen
        name="HomeStack"
        component={StackNavigator}
        options={{
          tabBarLabel:'Home',
          tabBarIcon: ({ color,focused }) => <Ionicons size={25} name={focused?"home":"home-outline"} color={focused ? "black" :"gray"}  />,
        }}
      />
      {/* <Tabs.Screen
        name="Leaves"
        component={LeaveLandingPage}
        options={{
          
          tabBarLabel: 'Leave',
          tabBarIcon: ({ color,focused }) => <Ionicons size={25} name={focused?"search":"search-outline"} color={focused ? "gray" :"black"} />,
        }}
      /> */}
 
 <Tabs.Screen 
    name="AttendanceScreen"
    component={AttendanceHome}
    options={{
      
      tabBarLabel: 'Attendances',
      tabBarIcon: ({ color,focused }) => <Ionicons size={25} name={focused?"settings":"compass-outline"} color={focused ? "gray" :"black"} />,
    }}/>
      <Tabs.Screen 
      name="Slip-Salary"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Salary Slip',
        tabBarIcon: ({ color,focused }) => <Ionicons size={25} name={focused ? "cash":"cash-outline"} color={focused ? "gray" :"black"} />,
      }}/>
  
    </Tabs.Navigator>
  );
}
