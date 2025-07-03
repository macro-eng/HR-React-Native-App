import { useEffect, useState } from "react"
import { View,Text, ActivityIndicator,Image, TouchableOpacity, Alert } from "react-native"
import { fetchAttendance, fetchLeaves } from "../utils/api";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";


type Props ={
  icon :string,
  label :string,
  value :string,
  color?:string
}

function InfoRow({icon, label, value,color='text-gray-800 dark:text-gray-300' }:Props){
    return (
        <View className="flex-row items-center space-x-3">
            <Ionicons name={icon} size={22} color="2563eb" />
            <Text  className="text-gray-500 dark:text-gray-400">{label}</Text>
            <Text  className={` ml-auto font-semibold ${color}`} >{value}</Text>
        </View>
    )
}

interface PropsAttendance{
    title:string;
    onPress:any
}
const MainAction = (props:PropsAttendance)=>(
 
        <TouchableOpacity 
        onPress={props.onPress}
        className=" flex-row justify-between bg-gray-100 p-6 mb-3 rounded-xl shadow-sm w-full"
        >
        <Ionicons name="cash" className="basis-1/" size={20}/>
        <Text className="basis-2/3 text-gray-800 font-semibold">{props.title}</Text>
        <Ionicons name="arrow-forward"  size={20}/>

        </TouchableOpacity>

)
const AttendanceHome = ()=>{
    
     const [attendances,setAttendances]=useState([]);
     const [loading,setloading]=useState(true);
     const [activeTab,setActiveTab] = useState('my')
    const getColor = (status :string) =>
           status === 'Present'
            ? 'text-green-600'
            : status === 'Absent' 
            ? 'text-yellow-500'
            :'text-red-600'

     const today ={
        date:'2025-06-18',
        checkIn:'08:15 AM',
        checkOut:'04:35 PM',
        hours:'8.2',
        location:'المكتب الرئيسي',
        status:'present'

     };
     const data =[
        {date:'2025-03-12',status:'Present'},
        {date:'2025-04-13',status:'Absent'},
        {date:'2025-04-14',status:'late'},
     ]
     useEffect(()=>{
        const getEmployees = async()=>{
            try{
            
                const data =await fetchAttendance();
                setAttendances(data);
            }catch(err){
                console.log("error loading attendance data", err)
            }finally{
                setloading(false);
            }
        };
        getEmployees();
     },[])
 
   
     if(loading){
        return <ActivityIndicator  size={"large"} color={"#0000ff"} />
     }
     const elements =attendances;
    return (
        <View>

        <View  className="bg-slate-200 p-6 flex  shadow-md">
                        <View  className="bg-slate-200 p-2  flex-row items-center  shadow-md">
                                        <View className="space-y-7">

                                           <MainAction title="Attendance Request" onPress={()=>''}/>
                                        </View>
                                          
                                        
                                            <TouchableOpacity
                                                    onPressIn={()=>{
                                                        Alert.alert("Pressed")
                                                    }}
                                                    className="bg-transparent-100 pr-2 ml-36">
                                                        <Ionicons name="ellipsis-vertical-outline" size={35} color="gray"/>
                                            </TouchableOpacity>
                                        
                                        </View>
            
                            <View className="flex-row justify-around mt-6">
                                            <TouchableOpacity onPress={()=> setActiveTab('my')}>
                                                  <Text className={`pb-2 font-semibold border-current px-7 py-3 ${activeTab === "my" ? 'bg-gray-100 border-blue-600 ' :'text-gray-400'}`}>
                                                     Today Attendance
                                                  </Text>
                                            </TouchableOpacity>
                        
                                            <TouchableOpacity onPress={()=> setActiveTab('team')}>
                                                  <Text className={`pb-2 font-semibold border-b-transparent rounded-lg px-7 py-3  ${activeTab === "team" ? ' bg-gray-100   border-blue-600' :'text-gray-400'}`}>
                                                     monthly Attendance
                                                  </Text>
                                            </TouchableOpacity>
                                        </View>
                        
                                        {/* List View */}
                                      <ScrollView className="mt-4">
                                        {/* {dataToShow.map(item=> */}
                                            {activeTab === 'my'
                                             ? (

                                                <View className="p-4">
                                                <View className="bg-white dark:bg-zinc-700 p-4 rounded-2xl shadow space-y-4">
                                                    <Text className="text-lg font-bold text-gray-800 dark:text-white">date: {today.date}</Text>
                                                    <InfoRow 
                                                    icon='log-in'
                                                    label='check_in'
                                                    value={today.checkIn}
                                                    />
                                                    <InfoRow 
                                                    icon='log-out'
                                                    label='check_out'
                                                    value={today.checkOut}
                                    
                                                    />
                                                    <InfoRow 
                                                    icon='time'
                                                    label='total_hours'
                                                    value={` ${today.hours} hours`}
                                                    
                                                    />
                                                      <InfoRow 
                                                        icon='map'
                                                        label='location'
                                                        value={`${today.location}`}
                                                    />
                                    
                                                     <InfoRow 
                                                        icon='chech-circle'
                                                        label='status'
                                                        value={`${today.status}`}
                                                        color={
                                                            today.status === `present` 
                                                            ? 'text-green-600'
                                                            : today.status === 'late'
                                                            ? 'text-yellow-500'
                                                            : 'text-red-600'
                                    
                                                        }
                                                    />
                                                </View>
                                             </View>
                                             ):( 
                                                <ScrollView className="p-4 bg-white dark:bg-zinc-800">
                                                   {attendances.map(item=>(
                                                    <View key={item.name} className="flex-row justify-between py-3 border-b border-gray-200 dark:border=gray-700">
                                                        <Text className="text-gray-100  dark:text-gray-300">{item.attendance_date}</Text>
                                                        <Text className={`font-bold ${getColor(item.status)}`}>
                                                            {item.status === "Present" 
                                                            ? "حاضر" : item.status==="Absent" ? "غائب" :"في اجازة"}
                                                            
                                                            </Text>
                                                    </View>
                                                   ))}
                                                </ScrollView> 

                                              )
                                             
                                            }
                                       
                                      </ScrollView>
                      
            </View>
        
    </View>
    )

}
const ScrollViews = (attendances:any[])=>(
    <ScrollView 
        bounces={true}
        showsVerticalScrollIndicator={true}
        className="bg-white  rounded-lg px-8 shadow-md mt-2 mb-16" >
            {
                attendances.length>0 ? attendances.map(att=>(
         <View className="flex-row justify-between mt-2 h-10" key={att.name}>
         <Text className="text-gray-800 font-blod ">info</Text>
             {/* <Text className="text-gray-600 "></Text> */}
             <Text className="text-gray-600 "></Text>
             <Text className="text-gray-600 ">{att.attendance_date}</Text>
             <Text className={`
                 font-bold   ${att.status === "Present"  ? "text-green-600": att.status ==="Work From Home"
                     ? "text-green-600" :"text-red-600" }
                 `} >{
                     att.status === "Present" 
                     ? "حاضر" : 
                     att.status==="On Leave"
                     ?"في اجازة" 
                     :att.status ==="Work From Home" 
                     ? "العمل من المنزل" :"غائب"
                    }</Text>


                </View>     
                )):(
                    <View>
                    <Text>لا يوجد بيانات متاحة حاليا</Text>
                   </View>
                )
            }
      

                
          
        </ScrollView>
)

export default AttendanceHome;