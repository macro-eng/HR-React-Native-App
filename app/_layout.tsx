import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-reanimated';
import BottomTaps from './(tabs)/_layout';
import SettingsScreen from './(tabs)/settings';
import { ProfileScreen } from './(tabs)/profile';
import AttendanceScreen from './components/AttendanceScreen';
import ExploreScreen from './(tabs)/explore';
import LeaveRequestForm from './components/Leave_Request';
import AttendanceHome from './components/AttendanceIndex';
import HomeScreen from './components/HomeScreen';
import { View,Image,Text } from 'react-native';
// import { HomeScreen } from './(tabs)';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import Advance from './components/advance_amount';


const Drawer = createDrawerNavigator();

export default function LayoutNavigator(){
  const nav = useNavigation()
  return(
      //  <View>
      //            <View  className="bg-slate-200  flex-row items-center space-x-4 shadow-md">
      //               <Ionicons 
      //               onPress={()=>{
      //               }}
      //               name="arrow-back" size={24} color="gray"/>
      //               <Image source={require("./(tabs)/me.jpg")} className="w-12 h-12 rounded-full" />
      //                   <View >
      //                       <Text className="text-lg text-gray-900 font-bold">Administrator</Text>
      //                       <Text className="text-gray-500">300 HR</Text>
      //                   </View>
      //           </View>
            <Drawer.Navigator screenOptions={{
                     swipeEnabled:true,
                     headerSearchBarOptions:true,
                     headerShown:true,
                  

            }} 
        >
              <Drawer.Screen name='HomeTabs' component={BottomTaps} options={{title:"Home"}}/>
              <Drawer.Screen name='Login' component={ExploreScreen} options={{title:"Login",headerShown:false}} />
              <Drawer.Screen name='Attendance' component={AttendanceScreen} />
              <Drawer.Screen name='Advance' component={Advance} options={{headerShown:false}}/>
              <Drawer.Screen name='AttendanceHome' component={AttendanceHome} />
              <Drawer.Screen name='ClearStack' component={HomeScreen} options={{title:"Leave Page",headerShown:false}} />

            </Drawer.Navigator>
            /* <Text>sss</Text>
      </View> */
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

