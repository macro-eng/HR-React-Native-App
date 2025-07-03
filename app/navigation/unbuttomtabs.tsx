import { createStackNavigator } from "@react-navigation/stack"
import BottomTapsNavigator from "../components/HomeLeaveScreen";
import { ProfileScreen } from "../(tabs)/profile";
import SalarySlip from "../components/Salary_Slip";

import ExploreScreen from '../(tabs)/Login';
const Stack = createStackNavigator();

export const CustomizeStackNavigator =()=>{

    return(
        <Stack.Navigator>
            <Stack.Screen name="LeaveHomePage" 
            component={BottomTapsNavigator} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={ExploreScreen} options={{headerShown:false}} />

            {/* <Stack.Screen name="ProfileClear" component={ProfileScreen} options={{headerShown:false}} /> */}
        </Stack.Navigator>

    )
        
}