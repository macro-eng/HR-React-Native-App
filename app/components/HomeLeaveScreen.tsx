import React, { useEffect, useState } from "react";
import {Calendar} from  "react-native-calendars";
import { View,Text,Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivityIndicator } from "react-native";
import {createMaterialTopTabNavigator}   from  "@react-navigation/material-top-tabs"
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import LeaveSummaryScreen from "./LeaveSummary";
import { useNavigation } from "@react-navigation/native";
import LeaveRequestForm from "./Leave_Request";
import axios from "axios";
import { styled } from "nativewind";
import { get_leave_days, get_leave_type } from "../utils/api";
const StyledView = styled(View);
const StyledText = styled(Text);




function HistoryScreen(){
    const [leaverecorders,setLeaveRecorders] = useState([]);
        if(!leaverecorders.length){
        try{
             axios.get('http://localhost:8000/api/method/hrms.api.employee.get_leave_application',{
           
               headers:{
                   'Authorization':"token 6f9c7e5758dba82:0f24be4081a1512"
                 },
             }).then((res)=>{
               console.error(res.data),
               setLeaveRecorders(res.data.message)
             }).catch(el=>console.error("err:",el))
             
           }catch(error){
               console.error(error)
           }
           };
          if(!leaverecorders.length){
            return <ActivityIndicator size={"large"} color={"black"} />
          }
        
           const renderLeaveRecorders=(recorders:any)=>{
            return recorders.map((recorder:any)=>(
                <View className="bg-white p-4  rounded-lg shadow-md mt-2" >
                        {/* <Text className="text-gray-800 font-blod ">{recorder.department}</Text> */}
                        <Text className="text-gray-800 text-md font-blod text-center">{recorder.leave_type}</Text>
                        <View className="flex-row justify-between mt-2">
                            {/* <Text className="text-gray-600 "></Text> */}
                            <Text className="text-gray-600 ">{recorder.posting_date}</Text>
                            <Text className="text-gray-600 ">{recorder.from_date}</Text>
                            <View className="flex-row">
                            <Text className={`
                                font-bold   ${recorder.status === "Cancelled" ||recorder.status === "Rejected" ? "text-red-600":"text-green-600" }
                                `} >{
                                    recorder.status === "Approved" 
                                    ? "تم الموافقة" :
                                     recorder.status ==="Cancelled"
                                     ? "تم الغاء": "تم الرفض"
                                    }</Text>
                            <Ionicons  name={recorder.status==='Approved' ? "checkmark-circle" :"close-circle"} size={25}  color={recorder.status==="Approved" ? "green" : "red"} />
                            </View>
                        </View>
               </View> 
            ))
           }
           const recorders = leaverecorders;
    return (
    <ScrollView >
  
    <View className="px-4"  >
       {
        recorders&&renderLeaveRecorders(recorders)
       }    
    

 </View>
</ScrollView>
);
};
const TopTabs = createMaterialTopTabNavigator();

interface Props {
    title:string;
    onPress:any
}
const MainAction = (props:Props)=>(
 
        <TouchableOpacity 
        onPress={props.onPress}
        className=" flex-row justify-between bg-gray-100 p-6 mb-3 rounded-xl shadow-sm"
        >
        <Ionicons name="cash" className="basis-1/" size={20}/>
        <Text className="basis-2/3 text-gray-800 font-semibold">{props.title}</Text>
        <Ionicons name="arrow-forward"  size={20}/>

        </TouchableOpacity>

)



const get_leaves_list = ()=>{
    // if(Object.keys(leave_list).length<=100){
        try{
             axios.get('http://localhost:8000/api/method/hrms.api.employee.get_leave_application',{
           
               headers:{
                   'Authorization':"token 6f9c7e5758dba82:0f24be4081a1512"
                 },
             }).then((res)=>{
                if(!res.data)
                    {
                        return {status:'Not-Found',result:'لا يوجد بيانات'}
                    } 
                if(res.data){
                    return {status:'success',result:res.data.message}
                }
               console.error(res.data)
             }).catch(el=> {
                return{status:'NetworkError',result:el}
                
            })
             
           }catch(error){
               console.error(error);
               return{status:'software Issue',result:error}

           }
           };

const  LeaveHome =async()=>{
    const [activeTab,setActiveTab] =useState('my');
    const [leaveData,setLeaveData] =useState();
    const [loading,setLoading] =useState(false);
   

    useEffect(()=>{
     const  data = get_leaves_list();
     setLeaveData(data)
    })
    const myRequests =[
        { id:1, type:'Earned Leave',date:'22 Sep',name:'Mr. Mohan Ria' ,status:'Open'  },
        {id:2, type:'Annual Leave',date:'22 Sep',name:'Mr. Jon' ,status:'Approved'  },
        { id:3, type:'Earned Leave',date:'22 Aug',name:'Mr. Brain' ,status:'Rejected'  },
    ] 


    const teamRequests =[
        {id:4, type:'Medical Leave',date:'12 Sep',name:'Mr. Mohan Ria' ,status:'Open'  },
        { id:5, type:'Annual Leave',date:'24 May',name:'Mr. Bono' ,status:'Shift'  },
        {id:6, type:'Earned Leave',date:'42 Aug',name:'Mr. Brain' ,status:'Closed'  },
    ] 
    const dataToShow = activeTab === 'my' ? myRequests : teamRequests;
    const  navigation = useNavigation();
            return(
            <View className="flex-1 bg-white px-4 pt-10">
                    <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-2xl font-bold mb-4">Admin</Text>
                        <View  className=" flex-row space-x-4">
                            <Ionicons name="notifications-outline" size={24}/>
                            <TouchableOpacity onPress={()=> navigation.navigate("Profile")} >

                               <Ionicons name="person-circle-outline" size={28}/>
                            </TouchableOpacity>
                            {/* <Image source={require("../(tabs)/me.jpg")} className="w-12 h-12 rounded-full" /> */}
                            
                        </View>
                    </View>
                <View className="space-y-4 mb-4">
                    <MainAction  title="leaves & shifts" onPress={()=>navigation.navigate('الصفحة الرئيسية')} />
                    <MainAction  title="View Salary Slip" onPress={()=>navigation.navigate('Salary-Slip')} />
                    <MainAction  title="View Salary Slip" onPress={()=>navigation.navigate('Salary-Slip')} />
                </View>
                <View className="flex-row justify-around mt-6">
                    <TouchableOpacity onPress={()=> setActiveTab('my')}>
                          <Text className={`pb-2 font-semibold border-current px-7 py-3 ${activeTab === "my" ? 'bg-gray-100 border-blue-600 ' :'text-gray-400'}`}>
                            My Requests
                          </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> setActiveTab('team')}>
                          <Text className={`pb-2 font-semibold border-b-transparent rounded-lg px-7 py-3  ${activeTab === "team" ? ' bg-gray-100   border-blue-600' :'text-gray-400'}`}>
                            Team Requests
                          </Text>
                    </TouchableOpacity>
                </View>

                {/* List View */}
              <ScrollView className="mt-4">
                {dataToShow.map(item=>
                    <View
                      key={item.id}
                     className=" flex-row justify-between items-center border-b py-3">
                         <View >
                            <Text className="text-base font-semibold">{item.type}</Text>
                            <Text className="text-sm text-gray-500">{item.date}</Text>
                            <Text className="text-sm text-gray-700">{item.name}</Text>
                         </View>
                         <View>
                            <Text className={`text-sm ${item.status === 'Open' ? 'text-green-600' :'text-gray-500'}`}>{item.status}</Text>
                         </View>
                    </View>
                )}
              </ScrollView>

            </View>
               
                    )
                }
const BottomTaps = createBottomTabNavigator();

// const BottomTapsNavigator =()=>(
//     <BottomTaps.Navigator
//     screenOptions={({route})=>({
//         tabBarIcon:({focused,color,size})=>{
//              let IconName;
//             if(route.name==="الصفحة الرئيسية"){
//                 IconName =`${focused ? "home" :"home-outline"}`; 
                
//             }
//             if(route.name==="طلب اجازة")
//                 IconName ="add-circle-outline";      
//              if(route.name==="الموفقات")
//                 IconName ="checkmark-done-outline";      
//              if(route.name==="السجل")
//                 IconName ="time-outline";
//              return <Ionicons name={IconName} size={size} color={color} />

//              },
//              tabBarHideOnKeyboard:true,
//              tabBarPosition:"bottom",
//              tabBarActiveTintColor:"white",
//              tabBarInactiveTintColor:"gray",
//              tabBarStyle:{backgroundColor:"#1E40AF",paddingVertical:5}


//       })}
//     >
//         <BottomTaps.Screen name="الصفحة الرئيسية" component={LeaveHome}  options={{headerShown:false}}/>
//         <BottomTaps.Screen name="طلب اجازة" component={LeaveRequestForm} options={{headerShown:false}}/>
//         {/* <BottomTaps.Screen name="الموفقات" component={ApprovalScreen}  options={{headerShown:false}}/> */}
//         <BottomTaps.Screen name="السجل" component={HistoryScreen} options={{headerShown:false}}/>

//     </BottomTaps.Navigator>
    
// );

interface ContainerProps{
    title:any,
    children:React.ReactNode,
}
// const Container : React.FC<ContainerProps>=({title, children})=>(
    
// )


// export default BottomTapsNavigator


export default LeaveHome;