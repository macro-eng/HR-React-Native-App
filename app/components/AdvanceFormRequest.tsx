import { Component, ReactNode } from "react";
import { TouchableOpacity, View,Text,Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select"
import { useState } from "react";
import sendAdvanceRequest from "../utils/api";
import DateTimePicker from "react-native-modal-datetime-picker"


function AdvanceFormRequest(){
     const [ amount,setAmount] = useState('')
     const [ reason,setreason] = useState('')
     const [ date,setDate] = useState(new Date())
        return (
            <View className="p-4 bg-white dark:bg-black space-y-4">
                <Text className="text-xl font-bold text-blue-600">Advance Request</Text>
                <Text className="text-gray-700 dark:bg-gray-200">amount</Text>
                <TextInput 
                      placeholder="Enter amount"
                      keyboardType="numeric"
                      value={amount}
                      onChangeText={setAmount}
                      className="border rounded p-2 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white"
                      />
                <Text className="text-gray-700 dark:bg-gray-200">reason</Text>
                <TextInput 
                      multiline
                      placeholder="Enter reason"
                      numberOfLines={3}
                      value={reason}
                      onChangeText={setreason}
                      className="border rounded p-2 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white"
                      />
                <Text className="text-gray-700 dark:text-gray-200">2020</Text>   
             
            </View>
        )
    
}




export default AdvanceFormRequest;