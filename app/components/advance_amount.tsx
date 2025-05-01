import { Component, ReactNode } from "react";
import { TouchableOpacity, View,Text,Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select"
import { useState } from "react";
import DateTimePicker from "react-native-modal-datetime-picker"
class Advance extends Component{
    
    state={
        amount:0,
        purpose:null,
        employee:null
    }
   constructor(props:any){
    super(props)
   }
   sendAdvance(){
      if(this.state.amount!==0&& this.state.purpose !==null  ){
        Alert.alert("Inserted",this.state.purpose)
         
      }else{
        Alert.alert("empty")
         
      }
   }

    
    render() {
        return (
              <View className="flex-1 mt-8" >
              <Text className="text-right text-lg font-bold "> طلب سلفة</Text>
              <View className="flex-row bg-white-800 justify-between mt-6 mx-8">
                                   {/* <RNPickerSelect 
                                   
                                   placeholder={{ label:"نوع الاجازة",value:"annual"}}
                                 
                                   useNativeAndroidPickerStyle={true}
                                   onValueChange={(value)=>{
                                  
                                      Alert.alert(value)
                                   }}
                                   items={[
                                      {label:"اجازة سنويه",  value:"annual"},
                                      {label:"اجازة شهرية",value:"monthly"},
                                      {label:"اجازة مرضية",value:"sick"},
                                    ]}
                                   /> */}
                                   <TextInput
                                   className="bg-white w-48 h-10 "

                                   keyboardType="default"
                                   placeholder="الموظف"
                                   readOnly={true}
                                   value={this.state.employee}
                                   onChangeText={(value)=>this.setState({
                                    employee:value
                                   })}
                                   />
                                    <TextInput multiline={true}
                                    className="bg-white w-48 h-10 ml-4 text-center mr-90"
                                    keyboardType="numeric"
                                    placeholder="مبلغ السلفة"
                                    value={this.state.amount}
                                    onChangeText={(value)=>{
                                        this.setState({
                                    ...this.state,
                                     amount:value
                                    })}}
                                    />
                                </View> 
                              <View className="flex-row bg-white-800 justify-between mt-6 mx-8 ">
                               <TextInput
                               
                               
                                   className="bg-white w-48 h-10"
                                   keyboardType="email-address"
                                   placeholder="الغرض من السلفة"
                                   value={this.state.purpose}
                                   onChangeText={(value)=>{
                                    this.setState({
                                    ...this.state,
                                    purpose:value
                                   })}}
                                   />




                            
                     </View> 
                      <View className="items-center">
                            <TouchableOpacity 
                                className="w-6/12 items-center mt-8 bg-blue-600 "
                                onPress={()=> {
                                    this.sendAdvance()
                                }}
                                >
                                <Text className="text-white text-center text-lg font-bold">طلب</Text>
                                </TouchableOpacity>
                        </View>
               </View>
        )
    }
}



export default Advance;