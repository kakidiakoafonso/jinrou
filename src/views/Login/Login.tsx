import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setStaff } from "../../redux/user/action";
import * as S from "./styled";
import { ActivityIndicator } from "react-native";
import { Alert } from "../../component/Alert/Alert";
import { useNavigation } from "@react-navigation/native";
import { useAuthUser } from "../../hooks";

export default function Login() {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [iStaff, setiStaff] = useState<boolean>(false);
  const [error, seterror] = useState<boolean>(false);
  const [message, setmessage] = useState<string>("");
  const [showModal, setshowModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const { navigate } = useNavigation();
  const { mutate, isLoading } = useAuthUser();
  const acessGrantedhandler = (
    result: "error" | "sucess" | "denied" | "ghostUser"
  ): void => {
    console.log(result);

    if (result === "error") {
      seterror(true);
      setmessage("Erro ao autenticar");
      setshowModal(true);
    }
    if (result === "sucess") {
      seterror(false);
      setmessage("Autenticado com sucesso");
      setshowModal(true);
      setTimeout(() => {
        setshowModal(false);
      }, 2000);
    }
    if (result === "denied") {
      seterror(true);
      setmessage("Senha incorreta");
      setshowModal(true);
    }
    if (result === "ghostUser") {
      seterror(true);
      setmessage("Uusuário não cadastrado.");
      setshowModal(true);
    }
  };

  function handleLogin() {
    // const FinalEmail:string = email;
    // const FinalPassword:string = password;
    const FinalEmail: string = "kakidiako11@gmail.com";
    const FinalPassword: string = "123456";
    const credentials: Credentials = {
      email: FinalEmail,
      password: FinalPassword,
    };
    mutate(credentials, {
      onSuccess(data, variables, context) {
        if (iStaff) dispatch(setStaff(data));
        else dispatch(setUser(data));
      },
      onError(error, variables, context) {
        alert(Error);
      },
    });
  }
  function handleSignUp() {
    navigate("UserSign");
  }

  return (
    <S.Container source={require("../../assets/img/Bg.png")}>
      <S.TopRounded>
        {/* <S.TopRoundedImage source={require("../../assets/img/YellowThing.png")}></S.TopRoundedImage> */}
      </S.TopRounded>

      <S.ContentContainer>
        <S.InputContainer>
          <AntDesign name="user" size={24} color="#ccc" />
          <S.Input
            placeholder="Email"
            placeholderTextColor={"#ccc"}
            value={email}
            onChangeText={(e) => setemail(e)}
          />
        </S.InputContainer>

        <S.InputContainer>
          <AntDesign name="lock" size={24} color="#ccc" />
          <S.Input
            placeholder="Senha"
            placeholderTextColor={"#ccc"}
            value={password}
            onChangeText={(e) => setpassword(e)}
          />
        </S.InputContainer>

        <S.ButtonEntrar
          activeOpacity={0.7}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size={30} color={"#000"} />
          ) : (
            <S.TextoEntrar>Entrar {iStaff ? "como staff" : null}</S.TextoEntrar>
          )}
        </S.ButtonEntrar>

        <S.ButtonStaffArea
          activeOpacity={0.7}
          onPress={() => setiStaff((prev) => !prev)}
        >
          <S.TextoStaff>
            {!iStaff ? "Mudar para staff" : "Mudar para usuario"}
          </S.TextoStaff>
        </S.ButtonStaffArea>

        <S.TextoInfoWrapper>
          <S.TextoInfo>Não tem cadastro?</S.TextoInfo>
          <S.ButtonCadastrar activeOpacity={0.7} onPress={handleSignUp}>
            <S.TextoInfo>Cadastrar-se</S.TextoInfo>
          </S.ButtonCadastrar>
        </S.TextoInfoWrapper>
      </S.ContentContainer>
      {/* <Alert
        message={message}
        isError={isE}
        visible={showModal}
        isLogin={true}
        setmodalVisibility={() => setshowModal(false)}
      /> */}
    </S.Container>
  );
}
