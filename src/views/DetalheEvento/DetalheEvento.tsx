import React, { useState } from 'react'
import ListItem from '../../component/DetailItem/ListItemUsers'
import Header from '../../component/Header/Header'
import api from '../../service/api'
import * as S from './styled'
import { Evento,Purchase} from './detail.types'
import { User } from '../../redux/user/user.types'
const uri = "https://i.pinimg.com/736x/b9/ae/86/b9ae8625cac70903db98382d3d3492be.jpg"

export default function DetalheEvento() 
{
    const [event, setevent] = useState<'string'>('')
    const [users, setusers] = useState<User[]>([])
    async function fetchData(eventId:string) {
        api.get(`events/${eventId}`)
        .then((result)=>{
            const purchase:Purchase[] = result.data[0].purchase
            setevent(result.data[0].name)
            purchase.forEach((p)=>{
                setusers(prev=> [...prev,p.user])
            })
        })
        .catch(error=>{
            alert('Error tente novamente')
        })
    }
    React.useEffect(()=>{
        fetchData('f2043a9f-1f31-4a78-b0f8-00b52fdc8450')
    },[])
    return (
        <S.Container source={require('../../assets/img/Bg8.png')}>
            <Header/>
            <S.EventoContainer>
                <S.Image source={{uri:uri}} resizeMode='contain'/>
                <S.Titulo>{event}</S.Titulo>
            </S.EventoContainer>


            <S.FlatListContainer>
                
            <S.FlatList
                showsVerticalScrollIndicator={false}
                data={users}
                keyExtractor={(item,index)=>String(index)}
                renderItem={({item}:{item:User})=><ListItem user={item}/>}
            />
            </S.FlatListContainer>
            <S.ButtonExport>
                <S.TextExport>EXPORTAR PDF</S.TextExport>
            </S.ButtonExport>
        </S.Container>
    )
}
