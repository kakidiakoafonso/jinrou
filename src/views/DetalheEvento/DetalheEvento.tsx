import React, { useState } from "react";
import ListItem from "../../component/DetailItem/ListItemUsers";
import Header from "../../component/Header/Header";
import api from "../../service/api";
import * as S from "./styled";
import { useGetOneEvent } from "../../hooks/events";
const uri =
  "https://i.pinimg.com/736x/b9/ae/86/b9ae8625cac70903db98382d3d3492be.jpg";

export default function DetalheEvento() {
  const { data: evento } = useGetOneEvent("aa");

  console.log("================= Event detail==========");
  console.log(evento?.purchase?.length);
  console.log("================= Event detail==========");

  return (
    <S.Container source={require("../../assets/img/Bg8.png")}>
      <Header />
      <S.EventoContainer>
        <S.Image source={{ uri: uri }} resizeMode="contain" />
        <S.Titulo>{evento?.name} Nome</S.Titulo>
      </S.EventoContainer>

      <S.FlatListContainer>
        {/* <S.FlatList
          showsVerticalScrollIndicator={false}
          data={evento.}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }: { item: User }) => <ListItem user={item} />}
        /> */}
      </S.FlatListContainer>
      <S.ButtonExport>
        <S.TextExport>EXPORTAR PDF</S.TextExport>
      </S.ButtonExport>
    </S.Container>
  );
}
