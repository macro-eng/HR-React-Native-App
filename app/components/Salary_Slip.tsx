import{ Component, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { TouchableOpacity, View,Text, ScrollView,Image } from "react-native"
import { Salary_Slip_data } from "../utils/api"
import { useNavigation } from "expo-router";
import { styled } from "nativewind"
import { Ionicons } from "@expo/vector-icons";
// import { State } from "react-native-gesture-handler";
const StyledView = styled(View)
const StyledText = styled(Text)
interface State{
    employee_name:string,
    status:string,
    posting_date_filtered:string,

    gross_pay:string,
    net_pay:string,
    absent_days:string,
    month:string
    posting_date:string,
    advancer_amount:string,
    total_in_words:string,
    payment_days:string,
    total_deduction:string,
    rounded_total:string,
}
// interface State{
//     salary:Salary,
//     loading:boolean
// }
class SalarySlip extends Component<{},State>{
    
    
    //  [salary,setSalary] = useState<any>({})
    constructor(props:any){
        super(props)
        this.state ={
            month:'',
            posting_date_filtered:'',
            posting_date:'',
            employee_name:'',
            status:'',
            net_pay:'',
            total_deduction:'',
            total_in_words:'',
            absent_days:'',
            advancer_amount:'',
            gross_pay:'',
            rounded_total:'',
            payment_days:''
    
        }
        
    }
    //  response = Salary_Slip_data("HR-EMP-00001");
    
    get_data=()=>{
        const response = Salary_Slip_data("HR-EMP-00001")
        try{
            response.then(res=>res).then(data=>{
            console.log(data.data.message[0].employee_name)
            // let s = JSON.parse(data.data.message)
            this.setState({
                        month:data.data.message[0].month,
                        posting_date:data.data.message[0].posting_date,
                        employee_name:data.data.message[0].employee_name,
                        status:data.data.message[0].statuss,
                        net_pay:data.data.message[0].net_pay,
                        total_deduction:data.data.message[0].total_deduction,
                        total_in_words:data.data.message[0].total_in_words,
                        absent_days:data.data.message[0].absent_days,
                        advancer_amount:data.data.message[0].advancer_amount,
                        gross_pay:data.data.message[0].gross_pay,
                        rounded_total:data.data.message[0].rounded_total,
                        payment_days:data.data.message[0].payment_days, 
                
            }
           )
           const base = new Date(this.state.posting_date);
           const month = base.getMonth()
           // console.log(month)
           const day = base.getDate()
           const list = ["يناير","فبرير","مارس","ابريل","مايو","يونيو"]
       //    console.log(filterd)
        //    this.setState({
        //        ...this.state,
        //        posting_date_filtered:list[month],
        //    })
        //    console.log(this.state.posting_date_filtered)
       
                
                
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




formatDate(){
    // console.log(this.state.posting_date.toLocaleDateString())
    const base = new Date(this.state.posting_date);
    const month = base.getMonth()
    // console.log(month)
    const day = base.getDate()
    const list = ["يناير","فبرير","مارس","ابريل","مايو","يونيو"]
    // this.setState({
    //     ...this.state,
    //     posting_date:String(this.state.posting_date).toDateString(),
    // })
    console.log(this.state.posting_date)
}

componentDidMount(){
    this.get_data()
    this.formatDate()
}
render(){
    
    // console.log("State", this.state.salary)
    //   if(this.state.loading){
        //   if(this.state.loading){
            //         <View>
            //             <Text>Loading</Text>
            //     return (
                //         </View>
                //     )
                //   }
                // const navRoute = useNavigation()
                return(
                    
                    <View className="t-0 bg-slate-300 ">
          
        {this.state ? (
            <View> 

            {/* <View className="">
                <TouchableOpacity  onPress={()=> navRoute.navigate("Advance")}></TouchableOpacity>

            </View> */}
            <View  className="bg-slate-200 p-4 flex-row items-center space-x-4 shadow-md">
                    <Ionicons name="arrow-back" size={24} color="gray"/>
                    <Image source={require("../(tabs)/me.jpg")} className="w-12 h-12 rounded-full" />
                        <View >
                            <Text className="text-lg text-gray-900 font-bold">Administrator</Text>
                            <Text className="text-gray-500">300 HR</Text>
                        </View>
                </View>
                <Text className="text-lg font-bold text-center bg-slate-200  "> {this.state.employee_name} </Text> 

          <Text className="text-lg font-bold text-center bg-slate-300  ">{this.state.posting_date}  </Text> 
        <View className="bg-slate-200 p-4 flex-row items-center space-x-4 shadow-md ">
        <View className="flex-row text-center bg-slate-200 ">

          </View>
        
          </View>
              <ScrollView
  
            >
      
                     
                        
                          
                            
                        
                    <View className="flex-row text-center  mt-3 bg-slate-200 ">
                        <Text className="text-lg font-bold  "> {this.state.gross_pay}</Text> 
                        <Text className="text-lg font-bold "> الراتب الاساسي :</Text> 
                        </View>
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
         </View>
         ):(
            <View> 
                <Text>البيانات ليسات متاحة حاليا</Text>
            </View>
        )}
        </View>

)
}
}
interface SalaryProps {
    title:string,
    onPress:any
}

const Salary =(props:SalaryProps)=>{
    return (
          <TouchableOpacity 
          className="flex-row justify-between p-6 mb-3 bg-gray-50 rounded-xl shadow-sm"
          onPress={props.onPress}>
            <Ionicons name="cash" size={20} />
                <Text className="self-start basis-2/3">{props.title}</Text>
                <Ionicons name="arrow-forward" size={20}/>
          </TouchableOpacity>
    )
}

export  function SalaryScreen(){
    return (
           
        <View className='flex-1 bg-white p-4 px-4 pt-10'> 
               <View className="space-y-7 pm-4">
                  <Salary title="Advance Request"  onPress={()=>''} />
               </View>
               <Text className="text-xl font-semibold mb-4">كاشف الراتب</Text>
               <View className="flex-col ">
                    <Text className="font-bold text-center text-lg mb-5">Sep 14</Text>
                    <View className="flex-row justify-between">
                            <View className="flex-col ">

                                <Text className="text-lg font-bold text-center"> الراتب </Text>
                                <Text className="text-center" >12000</Text>
                            </View>
                            <View className="flex-col">
                                    <Text className="font-semibold">الخصم السلفة</Text>
                                    <Text >12000</Text>
                            </View>
                            <View className="flex-col">
                                    <Text className="font-bold" >الخصم الغياب </Text>
                                    <Text >12000</Text>
                            </View>
                    </View>
               </View>
                    <View className="flex-row justify-around mt-10">
                            <View className="flex-col">

                                <Text className=" font-semibold text-center"> اجمالي الخصم </Text>
                                <Text className="text-center" >13000</Text>
                            </View>
                            <View className="flex-col ">
                                    <Text className="font-semibold">المبلغ المتبقي</Text>
                                    <Text >12000</Text>
                            </View>
                        
                    </View>
               </View>
    )
}

export default SalaryScreen;