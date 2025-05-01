import React from "react";
import { View,Text,FlatList, TouchableOpacity,Image, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Navigator } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import BottomTaps from "../(tabs)/_layout";
function HomeScreen (){
         const nav = useNavigation();
         return(
        
            <View className="flex-1 bg-gray-100 ">
                <View className="bg-gray-500 p-3 flex-row justify-between items-center">

                    <Text className="text-lg text-white font-bold">Administrator</Text>
                    <View className="flex-row items-center space-x-3">

                      <Ionicons name="settings-outline" size={24} color="white"  />
                      <Image source={require('../(tabs)/logo.png')} className=" w-10 h-10 rounded-full" />
                    </View>
                </View>
                <View className="bg-blue-100 p-3 rounded-lg flex-row items-center mb-4">
                    <Text className="text-sm text-gray-900 flex-1">Today is Pay-Day! Get Yourself</Text>
                    <TouchableOpacity >
                        <Ionicons name="close-outline" size={20} color="black" />
                    </TouchableOpacity>
                
                </View>
                <ScrollView>
                        <View className="flex flex-row  items-center justify-between">
                               <View  className="w-32 ">

                                <TouchableOpacity
                                onPress={()=>nav.navigate("Leave")}
                                className="m-2 bg-gray-100 p-6 rounded-lg items-center">
                                    <Ionicons name="time-outline" size={38} color="black"/>
                                    <Text className="text-xs  text-gray-700 text-center">الاجازات</Text>
                                  </TouchableOpacity>
                                 </View>
                                   <View  className="w-32 ">
                                      <TouchableOpacity
                                       onPress={()=>nav.navigate("AttendanceHome")}
                                         className="m-2 bg-gray-100 p-6 rounded-lg items-center">
                                            <Ionicons name="calendar-outline" size={38} color="black"/>
                                            <Text className="text-xs font-bold text-gray-700 text-center">الحضور</Text>
                                        </TouchableOpacity>
                                   </View>    
                                    <View  className="w-32 ">

                                        <TouchableOpacity
                                                onPress={()=>nav.navigate("ClearStack")}
                                                className=" m-2  bg-gray-100 p-6 rounded-lg items-center">
                                                    <Ionicons name="document-text-outline" size={38} color="black"/>
                                                    <Text className="text-xs  text-gray-700 text-center">المهام</Text>
                                        </TouchableOpacity>
                                    </View>
                        </View>
                        <View className="flex flex-row  items-center justify-between">
                               <View  className="w-32 ">

                                <TouchableOpacity
                                onPress={()=>{
                                    nav.navigate("Salary-Slip")
                                }}
                                className="m-2 bg-gray-100 p-6 rounded-lg items-center">
                                    <Ionicons name="cash-outline" size={38} color="black"/>
                                    <Text className="text-xs  text-gray-700 text-center">كاشف الراتب</Text>
                                  </TouchableOpacity>
                                 </View>
                                   <View  className="w-32 ">
                                      <TouchableOpacity
                                         className="m-2 bg-gray-100 p-6 rounded-lg items-center">
                                            <Ionicons name="journal-outline" size={28} color="black"/>
                                            <Text className="text-xs text-gray-700 text-center">ترقية</Text>
                                        </TouchableOpacity>
                                   </View>    
                                    <View  className="w-32 ">

                                        <TouchableOpacity
                                                className=" m-2  bg-gray-100 p-6 rounded-lg items-center">
                                                    <Ionicons name="settings-outline" size={28} color="black"/>
                                                    <Text className="text-xs  text-gray-700 text-center">الاعدادت</Text>
                                        </TouchableOpacity>
                                    </View>
                        </View>
                        <View className="flex flex-row  items-center justify-between">
                               <View  className="w-32 ">
                                    <TouchableOpacity
                                
                                    className="m-2 bg-gray-100 p-6 rounded-lg items-center">
                                        <Ionicons name="time-outline" size={28} color="black"/>
                                        <Text className="text-xs  text-gray-700 text-center">الاشعارات</Text>
                                    </TouchableOpacity>
                                 </View>
   
                                      <View  className="w-32 ">

                                        <TouchableOpacity
                                                className=" m-2  bg-gray-100 p-6 rounded-lg items-center">
                                                    <Ionicons name="c" size={24} color="black"/>
                                                    <Text className="text-xs  text-gray-700 text-center">شكوئ</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View  className="w-32 ">

                                        <TouchableOpacity
                                                className=" m-2  bg-gray-100 p-6 rounded-lg items-center">
                                                    <Ionicons name="ellipsis-horizontal-outline" size={24} color="black"/>
                                                    <Text className="text-xs  text-gray-700 text-center">المزيد</Text>
                                        </TouchableOpacity>
                                    </View>
                        </View>
                       

        
                    </ScrollView>
            </View>
         )
    


        }

export default HomeScreen;