import {  StyleSheet, Platform, TextInput, Button, View,Text, FlatList } from 'react-native';



import React from 'react';
import { Ionicons } from '@expo/vector-icons';


// const Tables = ()=>{


// return (

// )
// }


export default class SettingsScreen extends React.Component {
 

    render(){
    
       return (
        <View className='bg-neutral-900	'>
        <View className='flex flex-row  justify-between items-center bg-neutral-900	 p-4'>
          <Text className='bg-blue-500 text-white p-3'>col 1</Text>
          <Text className='bg-blue-500 text-white p-3'>col 2</Text>
          <Text className='bg-blue-500 text-white p-3'>col 2</Text>
          <Text className='bg-blue-500 text-white p-3'>col 3</Text>
       </View>
        <View className='grid grid-cols-2 grid-rows-2 gap-4 bg-neutral-900	 p-4'>
        <Text className='bg-blue-500 text-white p-3'>col 1</Text>
        <Text className='bg-blue-500 text-white p-3'>col 2</Text>
        <Text className='bg-blue-500 text-white p-3'>col 3</Text>
      </View>
   
 
        </View>
        
    );
    }

}

