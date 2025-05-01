import React, { useState } from "react";
import {Calendar} from  "react-native-calendars";
import { View,Text,Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator}   from  "@react-navigation/material-top-tabs"
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import LeaveSummaryScreen from "./LeaveSummary";
import LeaveRequestForm from "./Leave_Request";
import axios from "axios";
import { styled } from "nativewind";
const StyledView = styled(View);
const StyledText = styled(Text);
//  const getEmployeeData = ()=>{

    // const getEmployees=()=>{
//       try{
//           axios.get('http://hrpu.localhost:8000/api/method/hrms.api.employee.get_employees',{
//             headers:{
//                 //   "Content-Type":"application/text/plain",
//                    'Authorization':"token 6f9c7e5758dba82:b4a0ed7f0580d6b"
//                   },
//         }).then(res=>res.data).then(data=>{
//              console.log(data)
//         }).catch(err=>{console.error("err",err)})
        
//       }catch(error){
//         console.error(error)
//       }
//     }
//     getEmployees();
//   }

         
//     return false
 
    
// }


 const  LeaveCalendarScreen =()=>(

       <ScrollView className="flex-1 bg-slate-200 p-4">
       <Text className="text-lg font-bold text-gray-800 mb-2">October 2020</Text>
        <View className=" justify-around mb-2 w-full">
        <Calendar
        styel={{borderWidth:1,borderColor:'gray',height:350}}
        markedDates={{
            "2025-03-09":{selected:true,selectedColor:"#1E40AF"},
            "2025-03-13":{selected:true, selectedColor:"#1E40AF"},
            "2025-03-17":{selected:true,selectedColor:"#1E40AF"},
            "2025-03-25":{selected:true,selectedColor:"#1E40AF"},
            "2025-03-14":{selected:true,selectedColor:"#1E40AF"},
        }}
        
        theme={{
            textSectionTitleColor:"#b6c1cd",
            selectedDayBackgroundColor:"#1E40AF",
            selectedDayTextColor:"#ffffff",
            todayTextColor:"#00adf5",
            dayTextColor:"#2d4150"
        }}
        />
        </View>
                <View className="px-4">
                    <Text className="text-gray-700 font-bold mt-4">24/06/2023--</Text>
                    <View className="bg-white p-4  rounded-lg shadow-md mt-2">
                            <Text className="text-gray-800 font-blod ">IT Department</Text>
                            <View className="flex-row justify-between mt-2">
                                <Text className="text-gray-600 ">Administrator</Text>
                                <Text className="text-gray-600 ">annual leave</Text>
                                <Text className="text-gray-600 ">1.0 days</Text>
                                <Text className="text-green-600 font-bold ">APPROVED</Text>
                            </View>
                   </View>      
                    <View className="bg-white p-4  rounded-lg shadow-md mt-2">
                                <Text className="text-gray-800 font-blod ">طب اسنان</Text>
                                <View className="flex-row justify-between mt-2">
                                    <Text className="text-gray-600 ">Macro</Text>
                                    <Text className="text-gray-600 ">sick leave</Text>
                                    <Text className="text-gray-600 ">1.0 days</Text>
                                    <Text className="text-yellow-600 font-bold ">APPLIED</Text>
                                </View>
                    </View>

             </View>
        </ScrollView>
    
    )
function ApprovalScreen(){
    const [employees,setEmployees] = useState([]);
        
            const getEmployees= async()=>{
                try{
                 await axios.get('http://localhost:8000/api/method/hrms.api.employee.get_employees',{
                
                    headers:{
                        'Authorization':"token 6f9c7e5758dba82:0f24be4081a1512"
                      },
                  }).then((res)=>{
                    setEmployees(res.data.message)
                    console.log(employees)
                  }).catch(el=>console.error("err:",el))
                  
                }catch(error){
                    console.error(error)
                }
                };
                // setEmployees(`${response}`)
                const  renderEmployee=(empes)=>{
                    
                    return empes.map(emp=>(
                        <StyledView 
                        className='flex-row py-2 border border-collapse  bg-gray-100 '>
                    <StyledText className='flex-1 text-center border border-slate-300'>{emp.name}</StyledText>
                     <StyledText className='flex-1 text-center border border-slate-300'>{emp.employee_name}</StyledText> 
                    <StyledText className='flex-1 text-center border border-slate-300'>{emp.department}</StyledText>
                    <StyledText className='flex-1 text-center border border-slate-300'>{emp.company}</StyledText>
                    <StyledText className='flex-1 text-center border border-slate-300'>{emp.status}</StyledText>
                    <StyledText className='flex-1 text-center border border-slate-300'>{emp.status}</StyledText>
                    </StyledView>
                    ));
                }
                const elements = employees;
              return(
                
                 
  <ScrollView
  horizontal={true}
  alwaysBounceHorizontal={true}
  overScrollMode="always"
//  className=" border-collapse border border-slate-300"
 
  >
          <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-lg font-bold text-gray-800"> التاريخ</Text>
        <TouchableOpacity onPress={getEmployees} >
          <Text>Load</Text>
        </TouchableOpacity>
    </View>

            <StyledView className="">
             <StyledView className='flex-row bg-gray-200 px-2 border border-collapse '>
              <StyledText  className='flex-1 text-center font-blod  border border-slate-300'>#</StyledText>
              <StyledText  className='flex-1 text-center font-blod border border-slate-300'>الاسم</StyledText>
              <StyledText  className='flex-1 text-center font-blod border border-slate-300'>القسم</StyledText>
              <StyledText  className='flex-1 text-center font-blod border border-slate-300'>الجامعة</StyledText>
              <StyledText  className='flex-1 text-center font-blod border border-slate-300'>الحالة</StyledText>
              <StyledText  className='flex-1 text-center font-blod border border-slate-300'>الحالة</StyledText>
              {/* <StyledText  className='flex-1 text-center font-blod border border-slate-300'>الحالة</StyledText> */}
             </StyledView>
            
                {/* <StyledView 
                className={`flex-row py-2 border-b border-gray-300 bg-gray-100`}>
                */}


                {/* <StyledText className='flex-1 text-center'>{item.name}</StyledText>
                 <StyledText className='flex-1 text-center'>{item.employee_name}</StyledText> 
                <StyledText className='flex-1 text-center'>{item.department}</StyledText>
                <StyledText className='flex-1 text-center'>{item.disgnation}</StyledText>
                </StyledView>
                  )} */}
                
                  {
                    elements&&renderEmployee(elements)
                  }
                
            
                   </StyledView>
                  </ScrollView>
    )
}

function HistoryScreen(){
    const [leaverecorders,setLeaveRecorders] = useState([]);
    const  getRecords=async()=>{
        try{
            await axios.get('http://localhost:8000/api/method/hrms.api.employee.get_leave_application',{
           
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
        
           const renderLeaveRecorders=(recorders)=>{
            return recorders.map(recorder=>(
                <View className="bg-white p-4  rounded-lg shadow-md mt-2" >
                        <Text className="text-gray-800 font-blod ">{recorder.department}</Text>
                        <View className="flex-row justify-between mt-2">
                            {/* <Text className="text-gray-600 "></Text> */}
                            <Text className="text-gray-600 ">{recorder.leave_type}</Text>
                            <Text className="text-gray-600 ">{recorder.from_date}</Text>
                            <Text className={`
                                font-bold   ${recorder.status === "Cancelled" ||recorder.status === "Rejected" ? "text-red-600":"text-green-600" }
                                `} >{recorder.status}</Text>
                        </View>
               </View> 
            ))
           }
           const recorders = leaverecorders;
    return (
    <ScrollView >
    <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-lg font-bold text-gray-800"> التاريخ</Text>
        <TouchableOpacity onPress={getRecords} >
          <Text>Load</Text>
        </TouchableOpacity>
    </View>
    <View className="px-4"  >
       {
        recorders&&renderLeaveRecorders(recorders)
       }    
    

 </View>
</ScrollView>
);
};



const TopTabs = createMaterialTopTabNavigator();
const TopTabsNavigator=()=>(
    <TopTabs.Navigator
    screenOptions={{
        tabBarLabelStyle:{fontSize:14,
            fontWeight:"bold",
            paddingHorizontal:10,
            color:"black"},
        tabBarIndicatorStyle:{backgroundColor:"#1E40AF",height:2},
        
        tabBarStyle:{backgroundColor:"white",
            borderStyle:"solid",
            borderColor:"black",
            borderWidth:1,
            elevation:0,borderBottomWidth:1,borderBottomColor:"#ddd"},
        
    }}>
        <TopTabs.Screen  name="الرصيد " component={LeaveSummaryScreen}/>
        <TopTabs.Screen  name="التقويم" component={LeaveCalendarScreen}/>
    </TopTabs.Navigator>
)



const LeaveHome =()=>(
        
            <View className="flex-1 bg-slate-200">

                <View  className="bg-slate-200 p-4 flex-row items-center space-x-4 shadow-md">
                    <Ionicons name="arrow-back" size={24} color="gray"/>
                    <Image source={require("../(tabs)/me.jpg")} className="w-12 h-12 rounded-full" />
                        <View >
                            <Text className="text-lg text-gray-900 font-bold">Administrator</Text>
                            <Text className="text-gray-500">300 HR</Text>
                        </View>
                </View>
                <View className="flex-1 ">
                    <TopTabsNavigator />
                    
                </View>

            </View>
               
        
)
const BottomTaps = createBottomTabNavigator();

const BottomTapsNavigator =()=>(
    <BottomTaps.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
            let IconName,colorName;
            if(route.name==="الصفحة الرئيسية"){
                IconName =`${focused ? "home" :"home-outline"}`; 
                
            }

            if(route.name==="طلب اجازة")
                IconName ="add-circle-outline";      
             if(route.name==="الموفقات")
                IconName ="checkmark-done-outline";      
             if(route.name==="السجل")
                IconName ="time-outline";
             return <Ionicons name={IconName} size={size} color={color} />

             },
             tabBarActiveTintColor:"white",
             tabBarInactiveTintColor:"gray",
             tabBarStyle:{backgroundColor:"#1E40AF",paddingVertical:5}


      })}
    >
        <BottomTaps.Screen name="الصفحة الرئيسية" component={LeaveHome}  options={{headerShown:false}}/>
        <BottomTaps.Screen name="طلب اجازة" component={LeaveRequestForm} options={{headerShown:false}}/>
        <BottomTaps.Screen name="الموفقات" component={ApprovalScreen}  options={{headerShown:false}}/>
        <BottomTaps.Screen name="السجل" component={HistoryScreen} options={{headerShown:false}}/>

    </BottomTaps.Navigator>
    
);



// export default function LeaveLandingPage(){
//     return(
       
//             <BottomTapsNavigator />
//     )
// }

export default BottomTapsNavigator