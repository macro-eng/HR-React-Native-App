import {  DrawerLayoutAndroid,StyleSheet,ImageBackground, TextInput, View,Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Touchable } from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {FlatGrid,SectionGrid } from "react-native-super-grid";
import {NavigationContainer,useNavigation} from "@react-navigation/native";
import { Button } from '@react-navigation/elements';
import { FlatList, Pressable } from 'react-native-gesture-handler';
import axios, { Axios }  from 'axios';
// import '../../global.css';
import { styled } from 'nativewind';
import { ProfileScreen } from './profile';
import LeaveRequestForm from '../components/Leave_Request';
import { useEffect } from 'react';
import { red } from 'react-native-reanimated/lib/typescript/Colors';
import HomeScreen from '../components/HomeScreen';
import LeaveLandingPage from '../components/HomeLeaveScreen';
import LayoutNavigator from '../_layout';
const StyledView = styled(View);
const StyledText = styled(Text);
// import {}  from '@expo/vector-icons/Ionicons';
const Frappe_HR_URL = "http://localhost:8000";
const API_KEY = "6f9c7e5758dba82"
const SECRET_KEY = "c34455e5aba3d00";


function NotificationScreen(){
  const navigation = useNavigation();
  return (
       <ProfileScreen />
          
          
          
  )
}
const Drawer = createDrawerNavigator();

function FlatgridView(){
  const [items,setItems]=React.useState([
    {name:"Apartments",code:"#1abc9c",img:'./logo.png'},
    {name:"Employees",code:"#2ecc71",img:'./logo.png'},
    {name:"Universities",code:"#3498db",img:'./logo.png'},
    {name:"Salary",code:"#3498db",img:'./logo.png'},
   
  ])
  return (
    <FlatGrid 
   itemDimension={130}
   data={items}
   style={styles.gridView}
   spacing={10}
   renderItem={({item})=>(
   <View  style={styles.mainView} className='bg-neutral-900	'>
     <View  style={[styles.ItemContainer,{backgroundColor:"#1f2937"}]} >
         <ImageBackground source={require('./logo.png')} style={styles.ItemImg} >
        
         <Text style={styles.ItemText}>{item.name}</Text>
        <Text style={styles.ItemCode}>{item.code}</Text>
        </ImageBackground>
     </View>
     <Text style={{color:'#fff'}} >this is discription</Text>
    </View>

    )}
    
    />
  );
}



// function HomeScreen(){
  
//   const [employees,setEmployees]= React.useState([]);


//   function getEmployeeData(){
//     const FRAPPE_BASE_API="http://localhost:8000";
//     // try{
//     //   fetch(`${FRAPPE_BASE_API}/api/resource/Employee`,
//     //     {
//     //        method:"GET", 
//     //       headers:{
//     //        "Content-Type":"application/text/plain",
//     //       "Authorization":"token 6f9c7e5758dba82:b4a0ed7f0580d6b"},
//     //        //   mode:"cors",
//     //       }
//     //    //    method: "GET",
//     //    )
      
       
//     //   .then(response=>response.json())
//     //    .then(data=>{
//     //   const resdata=data.message;
//     //    console.log(resdata[1].name)})
//     //    .catch(err=>console.error(err));

//     // }catch(e){

//     //   console.error("Try Error:",e);

//     // }



//    const api = axios.create(
//       {baseURL:`${FRAPPE_BASE_API}`,
//       headers:{
//       // "Content-Type":"application/text/plain",
//        'Authorization':"token 6f9c7e5758dba82:b4a0ed7f0580d6b"
//       },
//     });
//     const getEmployees=async()=>{
//       try{
//         const response = await api.get('api/method/hrms.api.employee.get_employees');
//         setEmployees(response.data.message.employees)
//         console.log(response.data.message.user)
//       }catch(error){
//         console.error(error)
//       }
//     }
//     getEmployees();
//   }

//   const  renderEmployee=(empes)=>{
   
//         return empes.map(emp=>(
//         <StyledView 
//         className={`flex-row py-2 border-b border-gray-300 bg-gray-100 overflow-scroll`}>
       


//         <StyledText className='flex-1 text-center'>{emp.name}</StyledText>
//          <StyledText className='flex-1 text-center'>{emp.employee_name}</StyledText> 
//         <StyledText className='flex-1 text-center'>{emp.department}</StyledText>
//         <StyledText className='flex-1 text-center'>{emp.company}</StyledText>
//         <StyledText className='flex-1 text-center'>{emp.status}</StyledText>
//         <StyledText className='flex-1 text-center'>{emp.status}</StyledText>


//         </StyledView>
//         ));
//   }
//   const navigation = useNavigation();
//   const emps =  employees;
//   return (
//     <View>

//     <View>
//        <TouchableOpacity
//         onPress={getEmployeeData}
//         className='w-full bg-blue-600 py-3 rounded-lg shadow'><Text
//         className='text-center text-white font-blod text-lg'>load Api </Text></TouchableOpacity>
//     </View>


//     <StyledView className="p-4 bg-white  py-6">
//      <StyledView className='flex-row bg-gray-200 py-2 border-b border-gray-300'>
//       <StyledText  className='flex-1 text-center font-blod'>#</StyledText>
//       <StyledText  className='flex-1 text-center font-blod'>الاسم</StyledText>
//       <StyledText  className='flex-1 text-center font-blod'>القسم</StyledText>
//       <StyledText  className='flex-1 text-center font-blod'>الجامعة</StyledText>
//       <StyledText  className='flex-1 text-center font-blod'>الحالة</StyledText>
//       <StyledText  className='flex-1 text-center font-blod'>الحالة</StyledText>
//       <StyledText  className='flex-1 text-center font-blod'>الحالة</StyledText>
//      </StyledView>
      
//         {/* <StyledView 
//         className={`flex-row py-2 border-b border-gray-300 bg-gray-100`}>
//         */}


//         {/* <StyledText className='flex-1 text-center'>{item.name}</StyledText>
//          <StyledText className='flex-1 text-center'>{item.employee_name}</StyledText> 
//         <StyledText className='flex-1 text-center'>{item.department}</StyledText>
//         <StyledText className='flex-1 text-center'>{item.disgnation}</StyledText>
//         </StyledView>
//           )} */}
          
//           {
//             emps&&renderEmployee(emps)
//           }
         
       
//            </StyledView>
//           </View>
//   )
// }
export default function App() {
  return ( 

           
        <NavigationContainer>

           <LayoutNavigator />
        </NavigationContainer>
       
      
  )
}

const styles = StyleSheet.create({
  gridView:{
      marginTop:10,
      flex:1
  },
  mainView:{
    backgroundColor:"black",
    // borderStyle:"dashed",
    borderColor:"#fff",
    borderRadius:20,
    borderWidth:0.50,
    height:200,
    margin:5,
    
    display:"flex",

  },
  flatlist:{
    borderColor:"white",
    borderWidth:0.3,
    padding:5,
  },
  ItemText:{
       fontSize:16,
       color:"#fff",
       fontWeight:'600',
      bottom:-90,

  },
  ItemContainer:{
    justifyContent:'flex-end',
    // borderRadius:5,
    padding:10,
    height:150,
    borderColor:"#fff",
    borderRadius:20,
    borderWidth:0,
  },
  ItemCode:{
    fontWeight:"600",
    fontSize:16,
    paddingRight:5,
    color:'#fff',
    bottom:-70,
    overflowX:'auto'

  },
  ItemImg:{
   height:120,
   width:200,
   paddingTop:9,
  },
  red:{
     color:'red',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  button:{
     textAlign:'center',
     marginTop:20
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  Input:{
       color:'black',
       backgroundColor:'white'
  }
});
