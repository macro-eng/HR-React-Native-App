import{ Component, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { TouchableOpacity, View,Text, ScrollView,Image } from "react-native"
import { Salary_Slip_data } from "../utils/api"
import { useNavigation } from "expo-router";
import { styled } from "nativewind"
import { Ionicons } from "@expo/vector-icons";
// import { State } from "react-native-gesture-handler";
const StyledView = styled(View)
const StyledText = styled(Text)
// interface Salary{
//     employee_name:string,
//     status:string,
//     gross_pay:string,
//     net_pay:string,
//     absent_days:string,
//     month:string
//     advancer_amount:string,
//     total_in_words:string,
//     payment_days:string,
//     total_deduction:string,
//     rounded_total:string,
// }
// interface State{
//     salary:Salary,
//     loading:boolean
// }
class SalarySlip extends Component{
    
    
    //  [salary,setSalary] = useState<any>({})
    constructor(props:any){
        super(props)
        this.state={}
        
    }
    //  response = Salary_Slip_data("HR-EMP-00001");
    
    get_data=()=>{
        const response = Salary_Slip_data("HR-EMP-00001")
        try{
            response.then(res=>res).then(data=>{
            // console.log(data.data)
            // let s = JSON.parse(data.data.message)
            this.setState(data.data.message[0])
            // salary:data.data.message,
            // {
                //         month:data.data.month,
                //         status:data.data.month,
                //         employee_name:data.data.employee_name,
                //         net_pay:data.data.net_pay,
                //         total_deduction:data.data.total_deduction,
                //         total_in_words:data.data.total_in_words,
                //         absent_days:data.data.absent_days,
                //         advancer_amount:data.data.advancer_amount,
                //         gross_pay:data.data.gross_pay,
                //         rounded_total:data.data.rounded_total,
                //         payment_days:data.data.payment_days, 
                
                //                  },
                
                
                
                // console.log(data.data.message)
            })
            
            // console.log(response)
        // setSalarySlip(response);
        
        
    }catch(error){
        console.log(error)
        // this.setState({
            //     ...this.state,
        //     // loading:true
        // })
        return error
    }
} 






componentDidMount(){
    this.get_data()
    // const [salary,setSalary]=useState<any>({})
    // this.setState({message:[...data.data.message]})
    // console.log("data :", data)
    // console.log("State", this.state)
    
}
render(){
    
    console.log("State", this.state)
    //   if(this.state.loading){
        //   if(this.state.loading){
            //         <View>
            //             <Text>Loading</Text>
            //     return (
                //         </View>
                //     )
                //   }
                return(
                    
                    <View className="t-0 bg-slate-300 ">
          
        {this.state ? (
            <View> 

            <View className="">
                <TouchableOpacity  onPress={()=> navRoute.navigate("Advance")}></TouchableOpacity>

            </View>
            <View  className="bg-slate-200 p-4 flex-row items-center space-x-4 shadow-md">
                    <Ionicons name="arrow-back" size={24} color="gray"/>
                    <Image source={require("../(tabs)/me.jpg")} className="w-12 h-12 rounded-full" />
                        <View >
                            <Text className="text-lg text-gray-900 font-bold">Administrator</Text>
                            <Text className="text-gray-500">300 HR</Text>
                            <Text className="text-lg font-bold   bg-slate-200">كاشف الراتب  </Text>

                        </View>
                </View>
                <Text className="text-lg font-bold text-center bg-slate-200  "> {this.state.employee_name} </Text> 

          <Text className="text-lg font-bold text-center bg-slate-300  ">تاريخ : {this.state.posting_date}  </Text> 
        <View className="bg-slate-200 p-4 flex-row items-center space-x-4 shadow-md ">
        <View className="flex-row text-center bg-slate-200 ">

          </View>
          <View className="flex-row items-center space-x-2 mt-3 bg-slate-200 ">
          <Text className="text-lg font-bold  float-left"> {this.state.gross_pay}</Text> 
          <Text className="text-lg font-bold  "> الراتب الاساسي :</Text> 
          </View>
          </View>
              <ScrollView
            //   horizontal={true}
            //   alwaysBounceHorizontal={true}
            //   overScrollMode="always"
            //  className=" border-collapse border border-slate-300"
             
            >
      
                     
                        
                          
                            
                        
                        <View className="flex-row justify-between">
                                        {/* <Text className="text-gray-800  font-blod ">{recorder.department}</Text> */}
                                        <View className="bg-slate-100 p-3  rounded-lg shadow-md mt-4 " >
                                                <View className="flex-row justify-between mt-2 space-x-4">
                                                    {/* <Text className="text-gray-600 "></Text> */}
                                                    <Text className="text-gray-600 ">{this.state.payment_days}</Text>
                                                    <Text className="text-gray-600 ">ايام الحضور</Text>
                                                    
                                                </View>
                                        </View> 
                                        <View className="bg-slate-100  p-3  rounded-lg shadow-md mt-4 mx-3 " >
                                                <View className="flex-row justify-between mt-2 space-x-4">
                                                    <Text className="text-gray-600 ">{this.state.absent_days}</Text>
                                                    <Text className="text-gray-600 ">ايام الغياب</Text>
                                                </View>
                                        </View>
                                        <View className="bg-slate-100  p-4  rounded-lg shadow-md mt-4 mx-3" >
                                                <View className="flex-row justify-between mt-2 space-x-4">
                                                    <Text className="text-gray-600  ">{this.state.advancer_amount}</Text>
                                                    <Text className="text-gray-600 ">السلفة</Text>
                                                </View>
                                        </View>
                        </View>
                        <View className="flex-row justify-between">
                                        <View className="bg-slate-100  px-6 py-8  rounded-lg shadow-md mt-4 " >
                                                <View className="flex-row justify-between mt-2 space-x-4">
                                                    {/* <Text className="text-gray-600 "></Text> */}
                                                    <Text className="text-gray-600 ">{this.state.total_deduction}</Text>
                                                    <Text className="text-gray-600 ">اجمالي الخصوم</Text>
                                                    
                                                </View>
                                        </View> 
                                        <View className="bg-white px-10 py-8 rounded-lg shadow-md mt-4" >
                                                <View className="flex-row justify-between mt-2 space-x-4">
                                                    <Text className="text-gray-600 ">{this.state.rounded_total}</Text>
                                                    <Text className="text-gray-600 "> الراتب بعد الخصم</Text>
                                                </View>
                                        </View>
                                        
                        </View>
                        <View className="bg-slate-100  px-10 py-8 rounded-lg shadow-md mt-4" >
                                                <View className="flex-row justify-between mt-2 space-x-4">
                                                    <Text className="text-gray-600 ">{this.state.total_in_words}</Text>
                                                    <Text className="text-gray-600 "> </Text>
                                                </View>
                        </View>
                     
                              </ScrollView>
         </View>):(
            <View> 
                <Text>البيانات ليسات متاحة حاليا</Text>
            </View>
        )}
        </View>

)
}
}


export default SalarySlip;