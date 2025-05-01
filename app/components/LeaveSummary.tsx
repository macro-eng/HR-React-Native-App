import { FlatList, View,Text } from "react-native"




const leaveData = [
    {type:"الاجازة السنوية", eligible:20,token:12,balance:8},
    {type:"الاجازة شهرية", eligible:22,token:12,balance:10},
    {type:"الاجازة ترفيهية", eligible:10,token:8,balance:2},
    {type:"الاجازة غير مدفوعة", eligible:15,token:12,balance:3},
    {type:"الاجازة طبية", eligible:12,token:2,balance:10},
]

const LeaveSummaryScreen =()=>{
    return (
        <FlatList 
        data={leaveData}
        keyExtractor={(item)=>item.type}
        renderItem={({item})=>(
            <View  className="bg-gray-50 rounded-lg  shadow mb-3 mt-3 ">
                <Text className="text-lg font-semibold  float-left">{item.type}</Text>
                <View className="flex-row justify-between mt-2">
                    <Text className="text-gray-700">{item.eligible}يوم</Text>
                    <Text className="text-gray-700">تم:{item.token}</Text>
                    <Text className="text-gray-700">المتبقي:{item.balance}</Text>
                </View>
                <View className="h-1 bg-gray-200 rounded mt-2">
                    <View className="h-1 bg-yellow-400 rounded" style={{width:`${(item.token/item.eligible)*100}%`}}>
                    </View>
                </View>
            </View>

        )}
        />
    )
}
export default LeaveSummaryScreen;