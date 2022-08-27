import { ActivityIndicator } from 'react-native'
import * as S from './styled'

type Props = {
    visible:boolean
}
export function LoadingModal({visible}:Props)
{
  return (
    <S.Modal visible={visible} transparent animationType='slide'>
      <S.Container>
        <S.Content>
            <ActivityIndicator size={'large'} animating/>
        </S.Content>
      </S.Container>
    </S.Modal>
  )
}