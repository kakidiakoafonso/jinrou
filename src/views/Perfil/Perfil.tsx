import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import colors from "../../configs/style/colors";
import * as S from "./styled";
import { Formik } from "formik";
import { useUpdateUser, useGetUser } from "../../hooks";
import { updateUserSchema } from "../../util/formik/validation";
import { ValidaThor } from "../../component/validation";
import { Alert } from "../../component/Alert/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/user/action";
import KeyBoardAvoidWrapper from "../../component/KeyBoardAvoidWrapper/index";
import { UserUpdate } from "../../hooks/user/service";
import { reducerState } from "../../redux/rootReducer";
import { AntDesign } from "@expo/vector-icons";
import { SubmitButton } from "../../component/submit-button/Submit";

type FormikValue = {
  name: string;
  email: string;
  password: string;
  birth_day: string;
  avatar: string;
};
const initialFoto =
  "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-24.jpg";
export default function Profile() {
  const borda = { borderBottomColor: colors.yellow, borderBottomWidth: 1 };
  const dispatch = useDispatch();
  const UserStored = useSelector<reducerState, User>(
    (state) => state.userReducer.user
  );
  const { mutate, isLoading } = useUpdateUser();
  const [avatar, setavatar] = useState<string>(initialFoto);
  const [error, seterror] = useState<boolean>(false);
  const [message, setmessage] = useState<string>("");
  const [showModal, setshowModal] = useState<boolean>(false);
  const [editable, seteditable] = useState<boolean>(false);
  const [showPassword, setshowPassword] = useState<boolean>(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled && result.type == "image") {
      result.type;
      setavatar(result.uri);
    }
  };

  function handleCreateUser(values: FormikValue) {
    const userInfo: FormData = new FormData();
    userInfo.append("name", values.name);
    userInfo.append("email", values.email);
    userInfo.append("password", values.password);
    userInfo.append("birth_day", values.birth_day);
    // if (avatar !== initialFoto) {
    //   userInfo.append("file", {
    //     name: new Date() + "_profile",
    //     uri: avatar,
    //     type: "image",
    //   });
    // }

    const updateParamsData: UserUpdate = {
      user: userInfo,
      userId: UserStored.id,
    };
    mutate(updateParamsData, {
      onError(error) {
        console.log("============== Error ======================");
        console.log(error);
        seterror(true);
        setmessage("Tente novamente!");
        setshowModal(true);
      },
      onSuccess(data, context) {
        seteditable(false);
        seterror(false);
        setmessage("Autenticado com sucesso");
        setshowModal(true);
        setTimeout(() => {
          setshowModal(false);
          dispatch(setUser(data));
        }, 2000);
      },
    });
  }
  function editToggle() {
    console.log("Togle");
    seteditable((prev) => !prev);
  }

  return (
    <KeyBoardAvoidWrapper>
      <S.Container source={require("../../assets/img/Bg5.png")}>
        <Formik
          initialValues={{
            email: UserStored.email,
            name: UserStored.name,
            password: "",
            birth_day: UserStored.birth_day,
          }}
          validationSchema={updateUserSchema}
          onSubmit={(values) => {
            handleCreateUser(values as FormikValue);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => {
            return (
              <React.Fragment>
                <S.Header />
                <S.Content>
                  <S.EditButton onPress={editToggle}>
                    {editable ? (
                      <AntDesign
                        name="closecircleo"
                        size={24}
                        color={colors.yellow}
                      />
                    ) : (
                      <AntDesign name="edit" size={24} color={colors.yellow} />
                    )}
                  </S.EditButton>
                  <S.AvatarButton onPress={pickImage} disabled={!editable}>
                    <S.Image source={{ uri: avatar }} />
                  </S.AvatarButton>

                  <S.BorderBottomView style={borda}>
                    <S.Label>Nome:</S.Label>
                    <S.Input
                      placeholder="Nome"
                      value={values.name}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      editable={editable}
                    />
                  </S.BorderBottomView>
                  {errors.name && touched.name && (
                    <ValidaThor message={errors.name} />
                  )}
                  <S.BorderBottomView style={borda}>
                    <S.Label>Email:</S.Label>
                    <S.Input
                      placeholder="Email"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      editable={editable}
                    />
                  </S.BorderBottomView>
                  {errors.email && touched.email && (
                    <ValidaThor message={errors.email} />
                  )}

                  <S.SmallContainer>
                    <S.BorderBottomViewSmall style={borda}>
                      <S.Label>Aniversario:</S.Label>
                      <S.Input
                        placeholder="Aniversario"
                        value={values.birth_day}
                        onChangeText={handleChange("birth_day")}
                        onBlur={handleBlur("birth_day")}
                        editable={editable}
                      />
                    </S.BorderBottomViewSmall>
                  </S.SmallContainer>
                  {errors.birth_day && touched.birth_day && (
                    <ValidaThor message={errors.birth_day} />
                  )}
                  {editable && (
                    <S.BorderBottomView style={borda}>
                      <S.Label>Senha:</S.Label>
                      <S.PasswordContainer>
                        <S.Input
                          placeholder="Senha"
                          value={values.password}
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          editable={editable}
                          secureTextEntry={showPassword}
                        />
                        <S.VisibleButton
                          onPress={() => setshowPassword((prev) => !prev)}
                        >
                          <MaterialIcons
                            name={
                              showPassword ? "visibility" : "visibility-off"
                            }
                            size={24}
                            color={colors.yellow}
                          />
                        </S.VisibleButton>
                      </S.PasswordContainer>
                    </S.BorderBottomView>
                  )}
                  {errors.password && touched.password && (
                    <ValidaThor message={errors.password} />
                  )}
                </S.Content>

                <S.SubmitButtonContainer>
                  {editable && (
                    <SubmitButton
                      isLoading={isLoading}
                      onPress={handleSubmit}
                    />
                  )}
                </S.SubmitButtonContainer>
              </React.Fragment>
            );
          }}
        </Formik>
        <Alert
          message={message}
          isError={error}
          visible={showModal}
          isLogin={true}
          setmodalVisibility={() => setshowModal(false)}
        />
      </S.Container>
    </KeyBoardAvoidWrapper>
  );
}
