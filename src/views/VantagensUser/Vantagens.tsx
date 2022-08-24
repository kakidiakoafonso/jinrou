import React from "react";
import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";
import ButtonYellow from "../../component/Buttons/ButtonYellow";
import Header from "../../component/Header/Header";

export default function UserVantagens() {
  const nav = useNavigation();
  return (
    <S.Container source={require("../../assets/img/Bg4.png")}>
      <Header />
      <S.Content>
        <S.Title>VANTAGENS DE</S.Title>
        <S.SubTitle>ser assinante</S.SubTitle>
        <S.TextoYellow>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          maiores quibusdam. Sequi repellat, numquam atque recusandae veniam
          corporis quisquam. Placeat fuga nostrum ad animi obcaecati,
          repellendus quo reiciendis nam itaque!
        </S.TextoYellow>
        <S.ButtonAddContainer>
          <ButtonYellow
            texto="Comprar assinatura"
            // click={()=>}
          />
        </S.ButtonAddContainer>
      </S.Content>
    </S.Container>
  );
}
