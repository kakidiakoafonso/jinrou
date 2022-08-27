import React from "react";
import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";
import ButtonYellow from "../../component/Buttons/ButtonYellow";
import Header from "../../component/Header/Header";
import * as Linking from "expo-linking";

const assinaturaURL = `https://api.whatsapp.com/send?phone=5545999179495&text=Ol%C3%A1%2C%20queria%20comprar%20a%20Assinatura`;
export default function UserVantagens() {
  function comprarAssinatura() {
    alert("a");
    Linking.openURL(assinaturaURL);
  }
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
          <ButtonYellow texto="Comprar assinatura" click={comprarAssinatura} />
        </S.ButtonAddContainer>
      </S.Content>
    </S.Container>
  );
}
