import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Alert } from '../../component/Alert/Alert'
import Header from '../../component/Header/Header'
import KeyBoardAvoidWrapper from '../../component/KeyBoardAvoidWrapper'
import colors from '../../configs/style/colors'
import api from '../../service/api'
import * as S from "./styled"


type Supporter = {
    name:string,
    description:string,
    subscriber_discount:string,
    validation:string
}
const img = "https://criticalhits.com.br/wp-content/uploads/2019/06/20190616-minato-kunai-01.jpg"
export default function Apoiador() 
{
    const borda = {borderBottomColor:colors.yellow,borderBottomWidth:1}
    const nav = useNavigation()
    const [isloading, setisloading] = useState<boolean>(false)
    const [name, setname] = useState<string>('')
    const [validation, setvalidation] = useState<string>('')
    const [description, setdescription] = useState<string>('')
    const [subscriber_discount, setsubscriber_discount] = useState<string>('')
    const [avatar, setAvatar] = useState<string>('')

    const [showModal, setShowModal] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [error , setError] = useState<boolean>(false)


    function createSupporter()
    { 
        setisloading(true)
        api.post('supporter',{
            name,
            description,
            validation,
            subscriber_discount,
            avatar
        })
        .then(response => {
            setisloading(false)
            console.log(response.data)
            setMessage('Apoiador criado com sucesso')
            setShowModal(true)
        })
        .catch(error => {
            setisloading(false)
            console.log(error);
            setError(true)
            setMessage('Erro ao criar apoiador')
        })
    }
    return (
        <KeyBoardAvoidWrapper>
        <S.Container source={require("../../assets/img/Bg5.png")}>
            <Header/>
            <S.Content>
                <S.Image source={{uri:img}}/>
                <S.Nome>Nome apoiador</S.Nome>
                <S.BorderBottomView style={borda}>
                    <S.Label>Nome apoiador:</S.Label>
                    <S.Text placeholder='Nome apoiador' placeholderTextColor={colors.yellow}
                    value={name} onChangeText={text => setname(text)}
                    />
                </S.BorderBottomView>
                <S.BorderBottomView style={borda}>
                    <S.Label>Descrição:</S.Label>
                    <S.Text placeholder='Descrição' placeholderTextColor={colors.yellow}
                    value={description} onChangeText={text => setdescription(text)}
                    />
                </S.BorderBottomView>

                <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Validade:</S.Label>
                        <S.Text placeholder='Validade' placeholderTextColor={colors.yellow}
                        value={validation} onChangeText={text => setvalidation(text)}
                        />
                    </S.BorderBottomViewSmall>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Desconto assinante:</S.Label>
                        <S.Text placeholder='Desconto em %' placeholderTextColor={colors.yellow}
                        value={subscriber_discount} onChangeText={text => setsubscriber_discount(text)}
                        />
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
            </S.Content>
            <S.ButtonAdd onPress={()=>createSupporter()} disabled={isloading}>
                {
                    isloading?
                    <ActivityIndicator size="small" color={colors.yellow}/>
                    :
                    <S.AddImage source={require('../../assets/img/Add.png')}/>}
            </S.ButtonAdd>
            <Alert message={message} visible={showModal} 
                setmodalVisibility={()=> setShowModal(false)} 
                isError={error}  />
        </S.Container>
        </KeyBoardAvoidWrapper>
    )
}
