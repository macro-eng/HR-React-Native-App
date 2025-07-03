import { View,Text, Image } from "react-native";
import  {get_employee_info} from "../utils/api";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";



const AttendanceScreen =()=>{
  const  data =get_employee_info();
  const [data1,setdata1] = useState<any>([]);
//   const [employee,setEmployeeData] = useState([]);
//   const [logo,setlogo] = useState([]);



data.then((res:any)=> JSON.parse(res)).then((d)=>{
    setdata1(d)
})
// console.log(data1)
// console.log(data1)
// console.log(data1)
    return(
        <View className="flex-1 bg-gray-100 p-5">
            <View className="flex-row justify-between items-center">
                <Text className="text-white text-lg fond-blod">{data1.department}</Text>
                <Image source={require("../(tabs)/me.jpg")}  className="w-10 h-10 rounded-full"/>
            </View>
            <View className="items-center my-6">
                <Image source={require("../(tabs)/me.jpg")} className="w-20 h-20 rounded-full" />
                <Text className="text-white text-2xl font-bold ">{data1.employee_name}</Text>
                <Text className="text-gray-300">{data1.owner} {data1.company}</Text>
            </View>
            <View className="bg-white p-5 rounded-lg" >
                <Text  className="text-lg font-blod">Attendance Overview</Text>
                <Text  className="text-gray-500">{data1.date_of_joining} Wednesday</Text>
                <Text  className="text-lg font-blod ">Study Field</Text>
                <Text  className="text-gray-500">Information Techology(IT)</Text>
                <View className="flex-row justify-between mt-3">
                    <Text className="text-lg font-semibold">In 09:00 AM</Text>
                    <Text className="text-lg font-semibold">In 19:00 PM</Text>
                </View>
                <Text className="p-4 mt-3 bg-blue-900 text-center text-white text"> View History</Text>
            </View>
        </View>
        

    )
}


export default AttendanceScreen;



