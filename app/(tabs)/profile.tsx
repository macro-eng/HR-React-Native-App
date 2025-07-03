import { useNavigation } from "@react-navigation/native";
import { FlatList,Image,ScrollView,Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React, { Children, useState } from "react";
import { get_employee_info } from "../utils/api";

 export function ProfileScreen (){
  const Nav = useNavigation();
  const employee ={
    name:"عبد الرحمن",
    email:"ba0936129@gmail.com",
    phone:"737283328",
    gender:"ذكر",
    status:"single",
    department:'الموارد البشرية',
    position:"مدير التوظيف",
    salary:"200000",
    hire_date:"2022-03-01",
    // image:<Image source={require("./me.png")} />,
    working_days:22,
    remaining_leave:6,
  }
  return (
    <ScrollView className="flex-1 bg-white p-4">
          <View className="items-center mt-4">
            {employee.image}
            <Text className="text-lx font-bold text-lg ">{employee.name}</Text>
            <Text className="text-gray-600 ">{employee.position}</Text>
            {/* <Text className="text-gray-400">{employee.department}</Text> */}
               <TouchableOpacity className="flex-row  justify-between" >
                    <Ionicons name="mail-outline" size={24} />
                    <Text className="text-gray-400">{employee.email}</Text>
                    <Ionicons name="arrow-forward" size={14} />

               </TouchableOpacity>
            </View>
            <View className="mt-6 space-y-7">
                <CardProps lable="phone" value={employee.phone} />
                <CardProps lable="department" value={employee.department} />
                <CardProps lable="gender" value={employee.gender} />
                <CardProps lable="salary" value={employee.salary} />
               <View className="mt-6 space-y-3">
                <TouchableOpacity className="bg-blue-600 p-3 rounded-xl">
                    <Text className="text-white text-center font-semibold">edit</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-purple-600 p-3 rounded-xl">
                    <Text className="text-white text-center font-semibold">ask Ai</Text>
                </TouchableOpacity>
           
               </View>
        </View>
    </ScrollView>
  )
}

interface SectionProps{
    title:any,
    children:React.ReactNode
}
interface ItemProps{
    lable:string,
    value:string
}

type InfoCardProps = {
    lable:string,
    value:string
}
const CardProps :React.FC<InfoCardProps>=({lable,value})=>(
    <View className="bg-white p-3 rounded-xl shadow-sm">
         <Text className="text-gray-400 font-bold ">{lable}</Text>
         <Text className="text-gray-800 font-semibold">{value}</Text>
    </View>
)
const Section : React.FC<SectionProps>=({title,children})=>(

    <View className="mb-5">
              <Text className="text-lg font-bold mb-2 border-b pb-1">{title}</Text>
              <View className="space-y-2"> 
                {children}
              </View>
       </View>
    
) 

const Item : React.FC<ItemProps>=({lable,value})=>(
    <View className="flex-row justify-between border-b pb-1">
        <Text className="text-gray-500">{lable}</Text>
        <Text className="text-gray-800">{value}</Text>
    </View>
)