import axios from "axios";
import AsyncStorage, {useAsyncStorage} from "@react-native-async-storage/async-storage"
const API_BASE_URL="http://localhost:8000/api/method";
const BASE_URL="http://localhost:8000";

const localStorage1 =useAsyncStorage("EmployeeData")
const api = axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json",
        // 'Authorization':"token 6f9c7e5758dba82:0f24be4081a1512"
    }
});



export async function loginUser(email:string,password:string){
    try{
        
        const response = await axios.post('http://localhost:8000/api/method/login',{
            usr:email,
            pwd:password,
        });
        if(response.data.message==="Logged In"){
            const cookies = response.headers['set-cookie'];
           await AsyncStorage.setItem("session_cookie",JSON.stringify(cookies))
            const userResponse  = await axios.get("http://localhost:8000/api/resource/Employee/HR-EMP-00001",{
                headers:{
                    // 'Authorization':"token 6f9c7e5758dba82:0f24be4081a1512"
                    Cookie:cookies,
                }
            });
        
                SaveUserInfoToCache(userResponse.data);
                console.log(userResponse.data)
                return {status : "success",data:userResponse.data.data}
            }else{
                return {status : "Error",data:"Network Issues"}

            }
        
            
             
 

    }catch(err){
        return {status : "error",message:"حدث خطاء عند تسجيل الدخول"}
        // return {status : "success",message:}
                // return {status : "wrong",message:response.data}

    }
};
export const SaveUserInfoToCache=async(res:any)=>{
   
     
      localStorage1.setItem(JSON.stringify(res.data));
    
}


export const Salary_Slip_data=(employee:string)=>{
    
    const res =  api.get(`/api/method/hrms.api.employee.get_salary_slip?employee=${employee}`)
  
   return res
    //  return res
    // return {status:"success",data:res.data.message}
   
    // console.log(res.data.message)

}

export const get_employee_info=async()=>{
   const data = localStorage1.getItem()
   return data

    
    

    // return {status:"Error","message":"Something wrong"}

    
    
}


export const PostRequestData=async(
    leave_type:string,
    // employee:string,
    // employee_replace:string,
    // from_time:string,
    // to_time:string,
    // reason:string
)=>{
 api.post('api/method/hrms.api.employee.storeleaverequstdata',leave_type
    // "leave_type":leave_type,
    // "employee":employee,
    // "employee_replace":employee_replace,
    // "from_time":from_time,
    // "to_time":to_time,
    // "reason":reason,

 ).then(res=>{
     console.log(res.data)
 }).catch(error=>console.log(error))
}


export const fetchLeaves =async()=>{
    try{

        const response = await api.get("/api/resource/Leave Appilcation");
        return response.data.data
    }catch(err){
        throw err
    }
}
export const fetchAttendance=async()=>{
    try{

        const response = await api.get("/api/method/hrms.api.employee.get_attendances");
        // console.log(response.data.status)
        console.log(response.data.message)
        const arry = Array.from(response.data.message[0])
        const  s=[]
        s.push(...response.data.message)
        console.log("logggggggggs :",s)
        return s
    }catch(err){
        throw err
    }
}
export const get_employees_name=()=>{
    api.get("/api/method/hrms.api.employee.get_employees_names")
    .then(res=>{
        if(res != null){
           return {status:"success",data:res.data.message}   
        }
        return {status:"failed",data:"No  data found"}
    })
}

export const markAttendance=(employee:string)=>{
    try{
       api.post("/api/resource/Attendance",{
        employee:employee,
        
       })

    }catch(err){
        throw err
    }
}
export default api;