export type Purchase = {
  id: string;
  name: string;
  description: string;
  date: string;
  price: string;
  subscriber_price: string;
  local: string;
  avatar: string;
  purchase: MiniPuchase[];
};

export type PurchaseReducerState = {
  purchase: Purchase[];
  loading: boolean;
  error: string;
};

export type Action = {
  type: string;
  payload: any;
};

type MiniPuchase = {
  id: string;
  date: string;
  userId: string;
  eventId: string;
  type: string;
};
