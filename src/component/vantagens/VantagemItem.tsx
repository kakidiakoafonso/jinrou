import * as S from './styled'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Advantage } from '../../redux/advantage'
import colors from '../../configs/style/colors';

type Props = {
  advantage:Advantage
}
export function VantagemItem({advantage}:Props) {
  return (
    <S.Container>
      <AntDesign name="checkcircleo" size={24} color={colors.yellow} />
        <S.Text>
          {advantage.advantage}
        </S.Text>
    </S.Container>
  )
}