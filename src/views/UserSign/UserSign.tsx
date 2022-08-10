import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import colors from '../../configs/style/colors'
import api from '../../service/api'
import * as S from "./styled"

const initialFoto = 'https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-24.jpg'
export function UserSign()
{
    const borda = {borderBottomColor:colors.yellow,borderBottomWidth:1}

    const [name, setname] = useState<string>()
    const [rg, setrg] = useState<string>()
    const [email, setemail] = useState<string>()
    const [password, setpassword] = useState<string>()
    const [cpf, setcpf] = useState<string>()
    const [birth_day, setbirth_day] = useState<string>()
    const [avatar, setavatar] = useState<string>(initialFoto)
    const [isloading, setisloading] = useState<boolean>(false)


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            });
            if (!result.cancelled && result.type=='image') 
            {
            result.type
            setavatar(result.uri);
            }
        };

    function handleCreateUser ()
    {
        const userInfo : FormData = new FormData();
        userInfo.append('name',name)
        userInfo.append('rg',rg)
        userInfo.append('email',email)
        userInfo.append('password','password')
        userInfo.append('cpf',cpf)
        userInfo.append('birth_day',birth_day)
        userInfo.append('expiration_date','expiration_date')
        userInfo.append('subscriber',0)
        // userInfo.append('file', {
        //     name: new Date() + '_profile',
        //     uri:avatar,
        //     type:'image'
        // })

        console.log(userInfo);
        

        api.post('user',userInfo,{
            headers:{
                Accept:'application/json', 
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (event) => {
                let progress: number = Math.round(
                  (event.loaded * 100) / event.total
                );
    
                console.log(
                  `A imagem está ${progress}% carregada... `
                );  
              },
        })
        .then(sucess => console.log(sucess.data))
        .catch(error => console.log(error))
        }
    return (
        <S.Container source={require("../../assets/img/Bg5.png")}>
            <S.Header></S.Header>
            <S.Content>
                <S.AvatarButton onPress={pickImage}>
                    <S.Image source={{uri:avatar}}/>
                </S.AvatarButton>
                <S.BorderBottomView style={borda}>
                    <S.Label>Nome:</S.Label>
                    <S.Input placeholder='Nome' value={name} onChangeText={e=>setname(e)}/>
                </S.BorderBottomView>
                <S.BorderBottomView style={borda}>
                    <S.Label>CPF:</S.Label>
                    <S.Input placeholder='Nome' value={cpf} onChangeText={e=>email}/>
                </S.BorderBottomView>
                <S.BorderBottomView style={borda}>
                    <S.Label>RG:</S.Label>
                    <S.Input placeholder='RG' value={email} onChangeText={e=>email}/>
                </S.BorderBottomView>

                <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Aniversario:</S.Label>
                        <S.Input placeholder='Nome'/>
                    </S.BorderBottomViewSmall>
                    <S.BorderBottomViewSmall style={borda}>
                        <S.Label>Assinatura:</S.Label>
                        <S.Input placeholder='Nome'/>
                    </S.BorderBottomViewSmall>
                </S.SmallContainer>
            </S.Content>

            <S.ButtonAdd onPress={handleCreateUser} disabled={isloading}>
                    {
                    isloading?
                    <ActivityIndicator size="small" color={colors.yellow}/>
                    :
                    <S.ImageAdd source={require("../../assets/img/Add.png")}/>
                    }
                </S.ButtonAdd>
        </S.Container>
    )
}
