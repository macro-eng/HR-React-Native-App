import axios ,{AxiosInstance} from "axios";
import React, {  useContext, useState,createContext, ReactNode } from "react";
import { UserModel } from "./Model";
import { View } from "react-native";
import ExploreScreen from "@/app/(tabs)/Login";

const defaultProps ={
    login:()=>null,
    logout:()=>null,
    authAxios:axios,
    user:null
}

export interface AuthProps {
    login:(username:string,password:string) =>any,
    logout:()=>void,
    authAxios:AxiosInstance,
    user:  UserModel | null


}


const authContext = createContext<AuthProps>(defaultProps);
export const AuthContext :React.FC<{children : ReactNode}> = ({children})=>{
    const [user,setUser] = useState('')
    const user1 = ''
    
    const authAxios = axios.create()

    function login(username:string,password:string){
           if(username){
            setUser(username)
           }
    }
    function logout(){

    }
    return (
          <View>
             <authContext.Provider value={{user,login,logout,authAxios}} >
               {children}
             </authContext.Provider>
          </View>
    )
}