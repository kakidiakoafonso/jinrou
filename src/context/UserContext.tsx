import React,{createContext,useContext,useState} from 'react'
import { View, Text } from 'react-native'

type IUser = {
    nome:String,
    tipo:"staff"|'user',
}
type Props = {
    children: React.ReactNode
}
export const UserContexto = createContext({})
export default function UserContext({children}:Props) 
{
    const [user, setuser] = useState(false);
    const [staff, setstaff] = useState(false);
    return (
        <UserContexto.Provider value={{user,setuser,staff,setstaff}}>
            {children}
        </UserContexto.Provider>
    )
}
