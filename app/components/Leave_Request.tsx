import React, { useState,useLayoutEffect } from "react";
import { View,Text, TextInput, TouchableOpacity, Button,Image, Alert } from "react-native";
import axios, {Axios} from "axios";
import  {Ionicons}  from "@expo/vector-icons";
import { Salary_Slip_data } from "../utils/api";
import {Picker} from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar } from "react-native-calendars";
import { get_employees_name } from "../utils/api";
import { PostRequestData } from "../utils/api";
import { ScrollView } from "react-native-gesture-handler";
import { useContext } from "react";
interface State{
    from_time:string,
    to_time:string,
    leave_type:string
    reason:string,
    rep_employee:string,
    show_from:boolean,
    selected:boolean,
    show_to:boolean,
}

class  LeaveRequestForm extends React.Component<{},State>{
    constructor(props:any){
        super(props)
       this.state={
            selected:false,
            show_from:false,
            reason:'',
            rep_employee:'',
            leave_type:'',
            show_to:false,
            from_time:'',
            to_time:'',
        }
    // const [openT,setOpenT]=useState(false)
    // const [openF,setOpenF]=useState(false)
    // const [fromDate,setFromDate]=useState(new Date())
    // const [toDate,setToDate]=useState(new Date())
    }
    
 
    onDayPress=(day:{dateString : string})=>{
    
        if(!this.state.from_time && !this.state.to_time){
          
            console.log(`sssssssss:${day.dateString}`)
            this.setState({
                from_time:day.dateString,
                // to_time:''
                
            })}
           else if(!this.state.to_time && this.state.from_time){
                console.log(`dddddddd:${day.dateString}`)
                this.setState({
                    to_time:day.dateString,
                }
            ) 
            }
            else{
                console.log(`hh:${day.dateString}`)

            }
}

handleSubmit=()=>{
        console.log(`sss :${this.state.to_time}`)
        console.log("leave request :",this.state)
    }
    render(){
        const {to_time,from_time,leave_type,reason} = this.state
        return (
        
        <ScrollView className="flex-1   ">
                  <View  className="bg-slate-200 p-4 flex-row items-center space-x-4 shadow-md">
                            <Ionicons name="arrow-back" size={24} color="gray"/>

                        <Image source={require("../(tabs)/me.jpg")} className="w-12 h-12 rounded-full" />
                        <View >
                            <Text className="text-lg text-gray-900 font-bold">Administrator</Text>
                            <Text className="text-gray-500">300 HR</Text>
                        </View>
                  </View>
            <Text className="text-gray-900 font-blod  text-center  text-3xl pt-4">طلب اجازة</Text>

         <View className=" bg-white-200   flex-row justify-between ">

                   <TextInput 
                className='bg-white ml-3 px-8 rounded-lg shadow mb-4 ' 
                placeholder="الموظف النوب"
                 value={this.state.rep_employee}
                 onChangeText={(value)=>{
                    this.setState({
                     rep_employee:value
                    })
                 }}
                 
                 />
                 <View className="bg-white">

                    <Picker 
                        selectedValue={this.state.leave_type}
                        onValueChange={(value)=>{
                            this.setState({leave_type:value})
                        }}>
                            


                        <Picker.Item  label=" اختر  " value={"choose"}  color="white" />
                        <Picker.Item label="الاجازة السنوية" value={"annul leave"} color="white"/>
                        <Picker.Item label="الاجازة الشهرية " value={"month leave"}/>
                        <Picker.Item label="الاجازة االمرضية" value={"sick leave"}/>
                        </Picker> 
                 </View>
             
                         {/* <TextInput 
                         className="bg-white ml-3 px-12 py-4 rounded-lg "
                         value={this.state.reason}
                         placeholder="ادخل السبب"
                         multiline
                        
                         numberOfLines={90}
                         onChangeText={(text)=>{
                             if(text){
                                 this.setState({
                                     reason:text
                                  })
                              }
                          }}
                          /> */}
      
                 </View>
                 <View className="flex"></View>
                          {/* <Picker
                        
                         selectedValue={this.state.leave_type}
                         onValueChange={(value)=>{
                         this.setState({leave_type:value})
                         }}>


                         <Picker.Item  label=" اختر نوع " />
                         <Picker.Item label="الاجازة السنوية" value={"annul leave"}/>
                         <Picker.Item label="الاجازة الشهرية " value={"month leave"}/>
                         <Picker.Item label="الاجازة االمرضية" value={"sick leave"}/>
                         </Picker>  */}
              
                 
                         <View className="flex-1">
  
                         <Calendar 
                         
                         onDayPress={this.onDayPress}
                         
                                    markedDates={
                                     {
                                        
                                        [this.state.from_time]:{
                                            selected:true,
                                            selectedColor:"green",
                                            // marked:true,
                                            startingDate:true,
                                            color:"green"
                                            
                                        },
                                        
                                     
                                        
                                   
                                        [this.state.to_time]:{
                                            selected:true,
                                            endingDay:true,
                                            color:'green',
                                            selectedColor:"green",
                                        }
                                        // [this.state.to_time]:{
                                        //     disabled:true,
                                        //     startingDay:true,
                                        //     color:'green',
                                        //     // textColor:"gray",
                                        //     // selected:true,
                                        //     endingDay:true,
                                        // },
                                    }}
                                    
                                    markingType={'period'}
                            />
                            </View>
{/* 
                         <Text className="mb-4 bg-gray-700">من تاريخ</Text>
                        <TouchableOpacity 
                        className="border border-gray--300 rounded-lg p-3 mb-3"
                        onPress={()=>{
                            this.setState({
                                show_from:true,
                            })
                            }} >
                            <Text >{this.state.from_time.toDateString()}</Text>
                            </TouchableOpacity>
                            {this.state.show_from &&(
                                
                            <DateTimePicker
                            value={this.state.from_time}
                            mode="date"
                            display="default"
                            onChange={(event,date)=>{
                                if(date){
                                    this.setState({
                                        from_time:date,
                                        show_from:false
                                    })
                                }
                            }}
                            />
                            )}



                        <Text className="mb-4 bg-gray-700">الى تاريخ</Text>
                        <TouchableOpacity 
                        className="border border-gray--300 rounded-lg p-3 mb-3"
                        onPress={()=>{
                            this.setState({
                                show_to:true,
                                })
                                }} >
                                <Text >{this.state.to_time.toDateString()}</Text>
                                </TouchableOpacity>
                                {this.state.show_to &&(
                                    
                            <DateTimePicker
                            value={this.state.to_time}
                            mode="date"
                            display="default"
                            onChange={(event,date)=>{
                                if(date){
                                    this.setState({
                                        to_time:date,
                                        show_to:false
                                        })
                                        }
                                        }}
                                        />
                                        )} */}
                        
                   
            {/* <View className="items-center"> */}
            <TouchableOpacity 
                 className="bg-green-600 rounded-lg p-4"
                 onPress={()=> this.handleSubmit()}
                 >
                 <Text className="text-white text-center text-lg font-bold">ارسل</Text>
                 </TouchableOpacity>
                 {/* </View> */}
        </ScrollView>
    )
    
}
}



export default LeaveRequestForm;
