import * as S from './styled'
import { MaterialIcons ,AntDesign} from '@expo/vector-icons';

type Props = {
    visible:boolean,
    setmodalVisibility:()=>void,
    message:string,
    isError?:boolean,
    isLogin?:boolean,
}
export function Alert({visible,setmodalVisibility,isLogin=false,
    message,isError}:Props)
{
    function handleClose()
    {
        setmodalVisibility()
    }
  return (
    <S.Modal visible={visible} transparent animationType='slide'>
      <S.Container onPress={()=>handleClose()}>
        <S.Content isError={isError}>
            <S.ContentTop>    
                <S.Icon>
                    {
                    isError?
                    <MaterialIcons name="error-outline" size={32} color={'#fff'} />
                    :
                    <AntDesign name="checkcircleo" size={35} color="#fff" />}
                </S.Icon>
                <S.Title>{isError ?'Erro':'Sucesso'}</S.Title>
            </S.ContentTop>
            <S.Message>{message}</S.Message>
            <S.ButtonContainer >    
               { !isLogin &&
                <S.Button onPress={()=> handleClose()}>
                    <S.ButtonText>Ok</S.ButtonText>
                </S.Button>
                }
            </S.ButtonContainer>
        </S.Content>
      </S.Container>
    </S.Modal>
  )
}