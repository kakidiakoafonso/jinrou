export type Staff = 
{
    id: string,
    email: string,
    name: string,
    rg: string,
    cpf: string,
    birth_day: string,
    avatar: string
}

export type StaffReducerState = {
    staff: Staff | [];
    loading: boolean;
    error: string;
  };

 export type Action = {
    type: string;
    payload: any;
  };