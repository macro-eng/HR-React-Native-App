import { createDrawerNavigator, DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';

import 'react-native-reanimated';
import BottomTaps from './(tabs)/_layout';
import SettingsScreen from './(tabs)/settings';
import { ProfileScreen } from './(tabs)/profile';
import AttendanceScreen from './components/AttendanceScreen';
import ExploreScreen from './(tabs)/Login';
import AttendanceHome from './components/AttendanceIndex';
import { DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen';
import { View,Image,Text } from 'react-native';
// import { HomeScreen } from './(tabs)';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import Advance from './components/AdvanceFormRequest';
import HomeLeaveScreen from './components/HomeLeaveScreen';
import SalarySlip from './components/Salary_Slip';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';


const Drawer = createDrawerNavigator();

const  DrawerContent: React.FC<{navigation :any}>=({navigation})=>{
       

  return(
    <SafeAreaView className='flex-1 bg-white' >
      <View className='bg-[#0088cc] p-4 items-center'>
        <Ionicons name='person-circle' size={50} />
        <Text className='text-white text-lg font-bold'>عيد الرحمن</Text>
      </View>
      <View className='flex-1 px-3 py-4 space-y-1'>
            <DrawerItem
            label="الصفحة الرئيسية"
            icon={({color, size})=>(
              <Ionicons name='home-outline' size={size} color={color} />
            )}
            labelStyle={{fontSize:16}}
            onPress={()=>navigation.navigate("Salary-Slip")}

            />
            <DrawerItem
               label="تسجيل الخروج"
               icon={({color, size})=>(
                 <Ionicons name='log-in-outline' size={size} color={color} />
               )}
               labelStyle={{fontSize:16,}}
               onPress={()=>navigation.navigate("Login")}
   
            />


          
      </View>
    </SafeAreaView>
  )
}




export default function LayoutNavigator(){
  const nav = useNavigation()
  return(
            <Drawer.Navigator 
            drawerContent={(props)=>
              <DrawerContent {...props} />
            }
            screenOptions={{
                     swipeEnabled:true,
                     headerSearchBarOptions:true,
                     headerShown:true,
                     

            }} 
        >
              <Drawer.Screen 
              name='HomeTabs'
               component={BottomTaps} 
               options={{
                title:"Home",
                drawerItemStyle:{
                  display:"none"
                }
                }}/>
      
              <Drawer.Screen name='Attendance' component={AttendanceScreen}
              options={
                {
                  drawerItemStyle:{
                    display:"none"
                  },
                }
              } />
              <Drawer.Screen name='Advance' component={Advance} options={{
                headerShown:false,
                drawerItemStyle:{
                  display:"none"
                }

                }}/>
              <Drawer.Screen name='AttendanceHome' 
              component={AttendanceHome} 
              options={{
                headerShown:false,
                drawerItemStyle:{
                  display:"none"
                }
              }}/>
              <Drawer.Screen name='ClearStack' component={HomeLeaveScreen}
               options={{title:"Leave Page",headerShown:false,   drawerItemStyle:{
                display:"none"
              }}} />
              <Drawer.Screen
               name="Salary-Slip" 
               component={SalarySlip} 
               options={
                {
                  headerShown:false,
                  drawerItemStyle:{
                    display:"none"
                  }
                  }
                  } />
            <Drawer.Screen  name='Login' component={ExploreScreen} options={
                {
              
                title:"",
                headerShown:false,
                
                }} />
            </Drawer.Navigator>
       
  )
}


// export default function RootLayout() {

//   return (
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{  headerShown: false }} />
//         {/* <Stack.Screen name="+not-found" /> */}
//       </Stack>
    
//   );
// }

