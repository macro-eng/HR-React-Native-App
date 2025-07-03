import { FlatList, View,Text } from "react-native"
import { get_leave_type } from "../utils/api"
const leaveData = [
    {type:"الاجازة السنوية", eligible:20,token:12,balance:8},
    {type:"الاجازة شهرية", eligible:22,token:12,balance:10},
    {type:"الاجازة ترفيهية", eligible:10,token:8,balance:2},
    {type:"الاجازة غير مدفوعة", eligible:15,token:12,balance:3},
    {type:"الاجازة طبية", eligible:12,token:2,balance:10},
]

const LeaveSummaryScreen =async()=>{
    const data = await get_leave_type()
    console.log(data)
    return (
        <FlatList 
        data={data}
        keyExtractor={(item)=>item.type}
        renderItem={({item})=>(
            <View  className="bg-gray-50 rounded-lg  shadow mb-3 mt-3 ">
                <Text className="text-lg font-semibold  text-center">{item.leave_type}</Text>
                <View className="flex-row justify-between mt-2">
                    <Text className="text-gray-700">{item.total_leaves_allocated}يوم</Text>
                    <Text className="text-gray-700">تم:{item.unused_leaves}</Text>
                    <Text className="text-gray-700">المتبقي:{item.unused_leaves}</Text>
                </View>
                <View className="h-1 bg-gray-200 rounded mt-2">
                    <View className="h-1 bg-yellow-400 rounded" style={{width:`${(item.token/item.total_leaves_allocated)*100}%`}}>
                    </View>
                </View>
            </View>

        )}
        />
    )
}
export default LeaveSummaryScreen;