import React,{createContext,useContext,useState} from 'react'
import { View, Text } from 'react-native'

type IUser = {
    nome:String,
    tipo:"staff"|'user',
}
type Props = {
    children: React.ReactNode
}
export const UserContexto = createContext()
export default function UserContext({children}:Props) 
{
    const [User, setUser] = useState<IUser>({} as IUser)
    return (
        <UserContexto.Provider value={{User,setUser}}>
            {children}
        </UserContexto.Provider>
    )
}

export const useUser = () =>
{
    const Contexts = useContext(UserContexto)
    return Contexts
}