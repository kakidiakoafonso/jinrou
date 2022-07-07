import { login, loginError, loginSucess } from "./user.action";
import api from "../../service/api";
export function dispatchLogin(
  email: string,
  password: string,
  callback: () => void
) {
  return (dispatch: any) => {
    dispatch(login());
    api
      .post("user/login", { email, password })
      .then((response) => {
        const user = response.data;
        if (Object.keys(user).length === 0 && user.constructor === Object) {
          dispatch(loginError("Usuario nao existe"));
          console.log("Senha errada");
        } else {
          if (user.status === 401) {
            dispatch(loginError("Senha errada"));
          } else {
            dispatch(loginSucess(user));
            console.log("Senha certa");
            callback;
            setTimeout(() => callback, 2000);
          }
        }

        console.log(response.data);
        setTimeout(() => callback, 2000);
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
}
