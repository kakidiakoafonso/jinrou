import { login, loginError, loginSucess } from "./staff.action";
import api from "../../service/api";
export function dispatchLogin(
  email: string,
  password: string,
  callback: (sucess:'error'|'sucess'|'denied'|'ghostUser') => void
) {
  return (dispatch: any) => {
    dispatch(login());
    api
      .post("staff/login", { email, password })
      .then((response) => {
        const staff = response.data;
        if (Object.keys(staff).length === 0 && staff.constructor === Object) {
          dispatch(loginError("Usuario nao existe"));
          console.log("Senha errada");
          callback('ghostUser');
        } else {
          if (staff.status === 401) {
            dispatch(loginError("Senha errada"));
            callback('denied');
          } else {
            dispatch(loginSucess(staff));
            console.log("Senha certa");
            callback('sucess');
          }
        }
      })
      .catch((error) => {
        dispatch(loginError(error));
        callback('error');
      });
  };
}
