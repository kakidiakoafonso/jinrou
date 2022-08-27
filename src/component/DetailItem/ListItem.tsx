import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../../configs/style/colors";
import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";

type Props = {
  evento: Evento;
};
const img =
  "https://ovicio.com.br/wp-content/uploads/2021/03/20210315-attack-on-titan-eren_7jay-555x555.png";
export default function ListItem({ evento }: Props) {
  const [normalUserCount, setnormalUserCount] = useState<number>(0);
  const [subscribedUserCount, setsubscribedUserCount] = useState<number>(0);
  const nav = useNavigation();
  React.useEffect(() => {
    if (evento.purchase) {
      evento.purchase.forEach((purchase) => {
        if (purchase.type === "normal") setnormalUserCount((prev) => prev + 1);
        else setsubscribedUserCount((prev) => prev + 1);
      });
    }
  }, []);
  return (
    <S.Container
      activeOpacity={0.7}
      // onPress={() => nav.navigate("EventosDetalhe")}
    >
      <S.Image source={{ uri: img }} />
      <S.Contents>
        <S.Titulo>{evento.name}</S.Titulo>

        <S.TextNormal>Compras normais: {normalUserCount}</S.TextNormal>
        <S.TextNormal>Compras assinantes: {subscribedUserCount}</S.TextNormal>
      </S.Contents>
    </S.Container>
  );
}
