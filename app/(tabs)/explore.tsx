import { Ionicons } from '@expo/vector-icons';
import {StatusBar, StyleSheet,  Platform, SectionList, View,Text,Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Button from '@react-navigation/elements'
import { useState } from 'react';
import { get_employee_info, loginUser } from '../utils/api';
import { useNavigation } from 'expo-router';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
import { AuthContext } from '../utils/auth/authContext';
import { useContext } from 'react';
  const  ExploreScreen=()=> {
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const navigation = useNavigation();
 const handleLogin= async()=>{
         const {logout,login} = useContext(AuthContext)
         
          const response = await loginUser(email,password);
          if(response.status === 'success'){
            Alert.alert("تم تسجيل الدخول بنجاح");
            navigation.navigate("ClearStack");
            // if(!localStorage.getItem("EmployeeData")){

            //   localStorage.setItem("EmployeeData",JSON.stringify(response.data));
            // }
          }else if( response.status==='error') {
            Alert.alert("اسم المستخدم او كلمة السر غير صحيحة");

    
          }
      
            //  Alert.alert(response.status)
          //   const userResponse  = await axios.get("http://localhost:8000/api/resource/Employee/HR-EMP-00001",{
          //     headers:{
          //         'Authorization':"token 6f9c7e5758dba82:0f24be4081a1512"

          //     }
              
          //  });    
          //   console.log(userResponse.data.data)
          }
        
 
  return (
     <View  className='flex-1 items-center justify-center bg-slate-300	 p-6'>
      <Image source={require('./hr_logo.jpg')}  className='h-28 w-28 mb-6 rounded-full' />
      
      <Text className='text-3xl font-blod text-blue-600 mb-4 '>Log in</Text>

        <TextInput 
        className='w-full bg-white px-4 py-3 rounded-lg shadow mb-4 border border-gray-300' 
        placeholder='الرقم الوظيفي او البريد الكتروني'
        keyboardType="default" 
        value={email}
        onChangeText={setEmail}
        />
          
          <TextInput 
        className='w-full bg-white px-4 py-3 rounded-lg shadow mb-4 border border-gray-300' 
        placeholder='كلمة السر'
        keyboardType="visible-password"
        value={password}
        onChangeText={setPassword}
        />
        <TouchableOpacity
         className='w-full bg-blue-600 py-3 rounded-lg shadow'
         onPress={handleLogin}>
         <Text  className='text-center text-white font-blod text-lg'> تسجيل الدخوال</Text>

        </TouchableOpacity>
        <TouchableOpacity className='mt-4'>
          <Text className='text-blue-600'>هل نسيت كلمة السر</Text>
        </TouchableOpacity>
  
        </View>
  
  );
}


const styles = StyleSheet.create({
       container:{
          flex:1,
          paddingTop:53,
          marginHorizontal:26,
       },
       item:{
         backgroundColor:'#f9c2ff',
         padding:20,
         marginVertical:8,
        },
        header:{
          fontSize:32,
          backgroundColor:'#fff'
        },
        title:{
        fontSize:24
       }
})

export default ExploreScreen;