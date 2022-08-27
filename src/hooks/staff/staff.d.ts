type Staff = {
  id: string;
  name: string;
  email: string;
  password: string;
  rg: string;
  cpf: string;
  birth_day: string;
  avatar: string;
};
type StaffParams = Omit<User, "id">;
