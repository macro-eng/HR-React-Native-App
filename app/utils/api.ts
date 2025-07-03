import axios from "axios";
import AsyncStorage, {useAsyncStorage} from "@react-native-async-storage/async-storage"
const API_BASE_URL="http://localhost:8000/api/method";
const BASE_URL="http://localhost:8000";

const localStorage1 =useAsyncStorage("EmployeeData")
const api = axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json",
        'Authorization':"token 6f9c7e5758dba82:0f24be4081a1512"
    }
});



export async function loginUser(username:string,password:string){
    try{
        
        const response = await axios.post('http://localhost:8000/api/method/login',{
            usr:username,
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


export const sendAdvanceRequest
                =async(amount:string,purpose:string,message:string)=>{
              
}

export const requestAttendance=()=>{

}
export const Salary_Slip_data= async(employee:string)=>{
    const res =  api.get(`/api/method/hrms.api.employee.get_salary_slip?employee=${employee}`)
   return res
}

export const get_employee_info=async()=>{
   const data = localStorage1.getItem()
   return data   
}
export const get_leave_type=async(
)=>{
try{

    const response= await  api.get("/api/method/hrms.api.employee.get_leave_types")
    const data =response.data.message
      
        return data
    }catch(e){
        throw e
    }
    }



export const PostRequestData=async(
    leave_type:string,
    employee:string,
    employee_rep:string,
    from_time:string,
    to_time:string,
    reason:string
)=>{

 api.post('api/method/hrms.api.employee.storeleaverequstdata',{
    "leave_type":leave_type,
    "employee":employee,
    "employee_rep":employee_rep,
    "from_time":from_time,
    "to_time":to_time,
    "reason":reason,

 }).then(res=>{
     console.log(res.data)
 }).catch(error=>console.log(error))
}

export const get_leave_days=async()=>{
       const calenderDate =  await api.get("/api/method/hrms.api.employee.get_leave_days")
       const data = calenderDate.data.message
       return data
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

        const response = await api.get("/api/method/hrms.api.employee.get_attendances?employee=HR-EMP-00001");
        const UserData = await AsyncStorage.getItem("User_Logged_Data")
        console.log("User Info :",UserData)
        console.log(response.data.message)
        const  s=[]
        s.push(...response.data.message)
        console.log("loggggggs :",s)
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