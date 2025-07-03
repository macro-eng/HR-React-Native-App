import React, { useState,useLayoutEffect, ReactNode } from "react";
import { View,Text, TextInput, TouchableOpacity, Button,Image, Alert } from "react-native";
import axios, {Axios} from "axios";
import  {Ionicons}  from "@expo/vector-icons";
import {  get_leave_type, Salary_Slip_data } from "../utils/api";
import {Picker} from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar } from "react-native-calendars";
import { get_employees_name } from "../utils/api";
import { PostRequestData } from "../utils/api";
import { ScrollView } from "react-native-gesture-handler";
import { useContext } from "react";
interface State{
    allocated_from_date:string,
    allocated_to_date:string,
    leave_type:string,
    disabled:boolean,
    from_time:string,
    to_time:string,
    leave_types:any[],
    reason:string,
    rep_employee:string,
    show_from:boolean,
    selected:boolean,
    show_to:boolean,
    unused_leaves:string,
    total_leaves_allocated:string
}

class  LeaveRequestForm extends React.Component<{},State>{
    constructor(props:any){
        super(props)
        this.state={
            leave_type:'',
            allocated_from_date:'',
            allocated_to_date:'',
            total_leaves_allocated:'',
            unused_leaves:'',
            disabled:false,
            selected:true,
            show_from:false,
            reason:'',
            rep_employee:'',
            leave_types:[],
            show_to:false,
            from_time:'',
            to_time:'',
        }}
    onDayPressTo=(day:{dateString : string})=>{
        console.log(`To :${day.dateString}`)
        if(!this.state.to_time){
            this.setState({
                to_time:day.dateString,
                selected:true,
                disabled:false
            })
            if(this.state.show_from ){
                this.setState({
                    show_from:false,

                })
            }
        }
        
         
            this.setState({
                show_to:false
            })
        
    

}    
onDayPressFrom=(day:{dateString : string})=>{
        console.log(`from:${day.dateString}`)
    
        if(!this.state.from_time ){
                this.setState({
                    from_time:day.dateString,
                }
            ) 
            }
          
            this.setState({
                show_from:false
            })
           
}


async handlefocus(){
   const messages =await get_leave_type()
   this.setState({
    leave_types:[...messages]
   })
   console.log(messages)
 
   
   
}
setData(value:any){
    this.state.leave_types.find((val:any)=>{
        if(value === val.leave_type){
            this.setState({
                allocated_from_date:val.from_date,
                allocated_to_date:val.to_date,
                unused_leaves:val.unused_leaves,
                total_leaves_allocated:val.total_leaves_allocated
            })
            // Alert.alert(JSON.(val.total_leaves_allocated))
        }
    })
   
}
handleSubmit=async()=>{
    
    const data = this.state
    console.log(`sss :${this.state.to_time}`)
    console.log("leave :",this.state.leave_type)
 
    console.log(this.state.total_leaves_allocated)
    this.setState({
        disabled:false,
        selected:false,
        
    })
    
   if(!(data.from_time||data.to_time||data.reason||data.leave_types))
    {
        Alert.alert("قم ب ادخال البيانات بشكل الصحيح")
    }
    else{
        
        PostRequestData(this.state.leave_types[0],'HR-EMP-00001','HR-EMP-0003',this.state.from_time,this.state.to_time,this.state.reason)
    }
}
render(){

    const elements = this.state.leave_types;
        return (
            
            <ScrollView className="flex-1   ">
          
                    <Text className="text-gray-900 font-blod  text-center  text-3xl pt-4">طلب اجازة</Text>

                        <View className=" bg-white-200   flex-1 ">
                            <View className="flex-row justify-between px-5">
                                <View className="">
                                        <Text className="text-center">المنوب</Text>
                                        <TextInput 
                                        clearTextOnFocus
                                        className='bg-white fixed w-36  rounded-lg shadow mb-4 ' 
                                        // placeholder="المنوب"
                                        maxLength={10}        
                                
                                        value={this.state.rep_employee}
                                        onChangeText={(value)=>{
                                            this.setState({
                                            rep_employee:value
                                            })
                                        }}
                                        
                                        />
                                </View>
                                <View className="">
                                        <Text className="text-right">الموظف</Text>
                                        <TextInput 
                                        className='bg-white  w-36 rounded-lg text-center shadow mb-4 ' 
                                        // placeholder="الموظف "
                                        onFocus={()=>{
                                            
                                        }}
                                        value={this.state.rep_employee}
                                        onChangeText={(value)=>{
                                            this.setState({
                                            rep_employee:value
                                            })
                                        }}
                                        
                                        />
                                </View>
                        
                        
                            </View>
                    
                        </View>
                 <View className="flex-1 justify-between px-5">
                    <View className="flex-row justify-between">
                                <View>
                                    <Text className="text-xs" >المخول بالموافقة على الاجازة</Text>
                                    <TextInput 
                                      className="bg-gray-50 w-36 rounded-lg "
                                      value="Administrator"
                                      readOnly
                                      placeholder=""
                                    />
                                </View>
                                <View>
                                    <Text className="text-right">اختر الاجازة</Text>
                                    <Picker
                                    onFocus={()=>{
                                        this.handlefocus()
                                    }}
                                    dropdownIconColor={"black"}
                                    
                                    style={{
                                        backgroundColor:"white",
                                        width:132,
                                        left:-10,
                                        // display:"flex",
                                        alignSelf:"flex-end",
                                        height:50,
                                        borderRadius:11,
                                        
                                        
                                    }}
                                     
                                   
                                    
                                    selectedValue={this.state.leave_type}
                                    
                                    //  selectedValue={(val:any)=>{
                                    
                                    //  }}
                                    
                                    onValueChange={(value)=>{
                                        this.setData(value)
                                        this.setState({
                                            leave_type:value
                                        })
                                        }}
                                        >

                                    {    
                                        // elements
                                        // ?
                                        
                                        elements.map((m:any,i:any)=>{
                                        
                                            return (
                                                <Picker.Item   style={{fontSize:14,alignSelf:"flex-start"}} key={i} label={m.leave_type} value={m.leave_type}  />
                                            )
                                        })  
                                        
                                        }
                                    
                                    
                                    </Picker> 
                                    </View>
                       
                         </View>
                
                         <View className="flex-row justify-between ">
                                    <View className="">
                                            <Text className="text-right">الى تاريخ</Text>
                                            <TextInput 
                                                showSoftInputOnFocus={false}
                                                onFocus={()=>{
                                                    if(this.state.show_from){
                                                            this.setState({
                                                                show_to:false
                                                            })
                                                }else{
                                                    this.setState({
                                                        show_to:true
                                                    })
                                                }
                                                }}

                                            focusable
                                            // editable={false}
                                            
                                            className='bg-white w-36 text-right   rounded-lg shadow mb-4 ' 
                                            // placeholder="الى تاريخ"
                                        
                                            onChangeText={(val)=>{
                                                this.setState({
                                                    to_time:val
                                                })
                                            }}
                                            value={this.state.to_time}
                                            />
                                            <Text className="text-right text-xs ">مخصص الى:  {this.state.allocated_to_date}   </Text>
                                    </View>
                                    <View className={`flex-1 ${this.state.show_to ? "" :"hidden"} absolute top-10 left-0 bg-white shadow p-2 z-10 `}>     
                                        <Calendar                                
                                                disabledByDefault={this.state.disabled}
                                                monthFormat="MMM"
                                                                        
                                                style={
                                                    {   
                                                        // position:"absolute",
                                                        width:300,
                                                        height:350,
                                                    }
                                                }
                                                onDayPress={this.onDayPressTo}                                
                                                            markedDates={
                                                            {                                                
                                                                // [this.state.from_time]:{
                                                                //     selected:this.state.selected,
                                                                //     // marked:true,
                                                                //     // disableTouchEvent:true,
                                                                //     startingDate:true,
                                                                //     color:this.state.selected ?  "green": "",
                                                                //     selectedColor:this.state.selected ?  "green": "",                                                    
                                                                // },                                                                                                                                      
                                                                [this.state.to_time]:{
                                                                    selected:this.state.selected,
                                                                    // marked:true,
                                                                    // disableTouchEvent:true,
                                                                    endingDate:true,
                                                                    color:this.state.selected ?  "green": "",
                                                                    selectedColor:this.state.selected ?  "green": "",  
                                                                }                                             
                                                            }}                                           
                                                            markingType={'period'}
                                                    />
                                                    </View>
                                    <View className="">
                                            <Text className="text-right">من تاريخ</Text>
                                            <TextInput 
                                            className='bg-white  w-36 rounded-lg shadow mb-4 ' 
                                            // placeholder="من تاريخ"
                                            showSoftInputOnFocus={false}
                                            cursorColor={"white"}
                                            onKeyPress={()=>{

                                            }}
                                            onTouchStart={()=>{
                                                if(this.state.show_to){
                                                this.setState({
                                                    show_from:false
                                                })
                                        }else{
                                            this.setState({
                                                show_from:true
                                            })
                                        }
                                            
                                            }}
                                            // onEndEditing={()=>{
                                            //     this.setState({
                                            //         show_from:false
                                            //     })
                                            // }}
                                            onChangeText={(val)=>{
                                                this.setState({
                                                    from_time:val
                                                })
                                            }}
                                            value={this.state.from_time}
                                                                
                                            />
                                            <Text className="text-right text-xs mb-4 ">مخصص من:  {this.state.allocated_from_date}   </Text>

                                    </View>
                                    <View className={`flex-1 ${this.state.show_from ? "" :"hidden"} absolute top-10 right-0 bg-white shadow p-2 z-10 `}>     
                                        <Calendar                                
                                                disabledByDefault={this.state.disabled}
                                                monthFormat="MMM"
                                                                        
                                                style={
                                                    {   
                                                        // position:"absolute",
                                                        width:300,
                                                        height:350,
                                                    }
                                                }
                                                onDayPress={this.onDayPressFrom}                                
                                                            markedDates={
                                                            {                                                
                                                                [this.state.from_time]:{
                                                                    selected:this.state.selected,
                                                                    // marked:true,
                                                                    // disableTouchEvent:true,
                                                                    startingDate:true,
                                                                    color:this.state.selected ?  "green": "",
                                                                    selectedColor:this.state.selected ?  "green": "",                                                    
                                                                },                                                                                                                                      
                                                                // [this.state.to_time]:{
                                                                //     selected:this.state.selected,
                                                                //     endingDay:this.state.selected,
                                                                //     color:this.state.selected ?  "green": "",
                                                                //     selectedColor:this.state.selected ?  "green": "",
                                                                // }                                             
                                                            }}                                           
                                                            markingType={'period'}
                                                    />
                                                    </View>
                            
                            
                                </View>
                         <View className="flex-row justify-between">
                          <View className="">
                            <Text className="text-right">  السبب </Text>
                         <TextInput 
                         scrollEnabled
                         className="bg-white h-28 w-36 rounded-lg "
                         value={this.state.reason}
                        //  placeholder="ادخل السبب"
                         multiline={true}
                        
                         numberOfLines={35}
                         
                         onChangeText={(text)=>{
                             if(text){
                                 this.setState({
                                     reason:text
                                  })
                              }
                          }}
                          />
                         </View>
                         <View className="">
                            <Text >رصيد الاجازات قبل الطلب</Text>
                          <TextInput
                        
                        //   defaultValue={this.state.total_leaves_allocated}
                          className="bg-white w-36 rounded-lg"
                          
                            
                            value={ `${this.state.total_leaves_allocated}`  }
                            readOnly
                            
                        //   onFocus={()=>{}}
                          />
                            
                         </View>
                         </View>
              </View>
                 
            <TouchableOpacity 
                 className="bg-green-600 mt-20 rounded-lg p-4"
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
