type Evento = {
  id: string;
  name: string;
  description: string;
  date: string;
  price: string;
  subscriber_price: string;
  subscriber_price: string;
  locale: string;
  purchase?: Purchase[];
};
EventoParams = Omit<Evento, id>;

type Purchase = {
  id: string;
  date: string;
  userId: string;
  eventId: string;
  type: string;
};
