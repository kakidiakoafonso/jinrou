type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  rg: string;
  cpf: string;
  birth_day: string;
  subscriber: boolean;
  expiration_date: string;
};
type UserParams = Omit<User, "id">;
