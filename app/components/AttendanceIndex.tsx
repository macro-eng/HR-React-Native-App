import { useEffect, useState } from "react"
import { View,Text, ActivityIndicator,Image, TouchableOpacity, Alert } from "react-native"
import { fetchAttendance, fetchLeaves } from "../utils/api";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";




const AttendanceHome = ()=>{
     const [attendances,setAttendances]=useState([]);
     const [loading,setloading]=useState(true);
     useEffect(()=>{
        const getEmployees = async()=>{
            try{
            
                const data =await fetchAttendance();
                setAttendances(data);
            }catch(err){
                console.log("error loading attendance data", err)
            }finally{
                setloading(false);
            }
        };
        getEmployees();
     },[])
 
   

     if(loading){
        return <ActivityIndicator size={'large'} color={"#0000ff"} />
     }
     const elements =attendances;
    return (
        <View>

        <View  className="bg-slate-200 p-6 flex  shadow-md">
                        <View  className="bg-slate-200 p-2  flex-row items-center  shadow-md">
                                
                                    <Ionicons className="" name="arrow-back" size={24} color="gray"/>
                                    <Image source={require("../(tabs)/me.jpg")} className="w-12 h-12 rounded-full" />
                                        <View >
                                            <Text className="text-lg text-gray-900 font-bold">Administrator</Text>
                                            <Text  className="text-gray-500">300 HR</Text>

                                        </View>
                                          
                                        
                                            <TouchableOpacity
                                                    onPressIn={()=>{
                                                        Alert.alert("Pressed")
                                                    }}
                                                    className="bg-transparent-100 pr-2 ml-36">
                                                        <Ionicons name="ellipsis-vertical-outline" size={35} color="gray"/>
                                            </TouchableOpacity>
                                        
                                        </View>
            
                        <View className="flex-row justify-between">
                          <Text className="text-lg font-semibold">خروج</Text>
                          <Text className="text-lg font-semibold">دخول</Text>
                        </View>  
                        <View className="flex-row justify-between">
                          <Text className="text-lg font-semibold">12:00</Text>
                          <Text className="text-lg font-semibold">9:00</Text>
                        </View>
            </View>
        <ScrollView 
        bounces={true}
        showsVerticalScrollIndicator={true}
        className="bg-white  rounded-lg px-8 shadow-md mt-2 mb-16" >
            {
                attendances.length>0 ? attendances.map(att=>(
         <View className="flex-row justify-between mt-2 h-10" key={att.name}>
         <Text className="text-gray-800 font-blod ">info</Text>
             {/* <Text className="text-gray-600 "></Text> */}
             <Text className="text-gray-600 "></Text>
             <Text className="text-gray-600 ">{att.attendance_date}</Text>
             <Text className={`
                 font-bold   ${att.status === "Present"  ? "text-green-600": att.status ==="Work From Home"
                     ? "text-green-600" :"text-red-600" }
                 `} >{
                     att.status === "Present" 
                     ? "حاضر" : 
                     att.status==="On Leave"
                     ?"في اجازة" 
                     :att.status ==="Work From Home" 
                     ? "العمل من المنزل" :"غائب"
                    }</Text>


                </View>     
                )):(
                    <View>
                    <Text>لا يوجد بيانات متاحة حاليا</Text>
                   </View>
                )
            }
      

                
          
        </ScrollView>
    </View>
    )

}



export default AttendanceHome;