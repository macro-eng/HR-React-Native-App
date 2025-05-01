import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../components/HomeScreen";
import LeaveRequestForm from "../components/Leave_Request";
import LeaveLandingPage from "../components/HomeLeaveScreen";
import BottomTapsNavigator from "../components/HomeLeaveScreen";
import SalarySlip  from "../components/Salary_Slip";
import Advance from "../components/advance_amount";
const Stack = createStackNavigator()
export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="Salary-Slip" component={SalarySlip} options={{headerShown:false}} />
            <Stack.Screen name="Leave" component={BottomTapsNavigator}  options={{headerShown:false}}/>
            <Stack.Screen name="Leave-form" component={LeaveRequestForm}  options={{headerShown:false}}/>
            <Stack.Screen name="Advance" component={Advance}  options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}