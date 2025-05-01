import { useNavigation } from "@react-navigation/native";
import { FlatList,Image,ScrollView,Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React, { useState } from "react";
import { get_employee_info } from "../utils/api";

 export const ProfileScreen = ()=>{
  const Nav = useNavigation();



  return (
            
           <View className="flex-1 bg-neutral-900	 p-4">
             <Text className="text-white text-3x1 font-blod text-center">Profile</Text>
             <View className=" flex flex-row items-center content-between mt-6">
               <View>
                  {/* <TouchableOpacity
                        className='bg-blue-600 px-4 rounded-lg '>
                        <Text  className='text-center text-white font-blod text-lg'>  Profile</Text>
                    </TouchableOpacity>  */}
                </View>
                <View>
                    <Image source={require('./logo.png')} className="w-24 h-24  rounded-lg border border-black-400"/>
                    <Text className="text-white text-xl mt-2"></Text>
                    <Text className="text-gray-300">Employee ID :0920</Text>
                </View>
                <View>
                    <Text className="text-white text-xl mt-2">Attendance record</Text>
                    <Text className="text-gray-300">Employee ID :0920</Text>
                </View>
              </View>
              <View className=" space-y-4 ">
                  <View className= "flex flex-row justify-between mt-8  ">
                  <TouchableOpacity
                      className='bg-blue-600  rounded-lg '>
                      <Text  className='text-center text-white w-40  font-blod text-lg'>  Profile</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity
                      className='bg-blue-600  rounded-lg '>
                      <Text  className='text-center w-40 text-white font-blod text-lg'>  Salary</Text>
                  </TouchableOpacity> 
                  
                  </View>
                  <View className= "flex flex-row justify-between mt-8  ">
                  <TouchableOpacity
                      className='bg-blue-600  rounded-lg '
                      >
                      <Text  className='text-center text-white w-40  font-blod text-lg'>  Leave Request</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity
                      className='bg-blue-600  rounded-lg '>
                      <Text  className='text-center w-40 text-white font-blod text-lg'>Attendance Request</Text>
                  </TouchableOpacity> 
                  
                  </View>
             </View>
             <View className="bg-gray-400 p-4 rounded-lg mt-6">
              <Text className="text-white text-lg">Position :Software Engineer</Text>
              <Text className="text-gray-300 mt-2" >Department :IT</Text>
             </View>
             <View className="flex flex-row g mt-5">
              <Text className="bg-blue-500 text-white  rounded-full p-4">col 1 </Text>
              <Text className="bg-green-500 text-white p-4">col 2 </Text>
              <Text className="bg-red-500 text-white p-4">col 3 </Text>
             </View>
           </View>
  )
}