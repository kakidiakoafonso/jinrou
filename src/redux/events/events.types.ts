export type Event = {
    id : string;
    name : string;
    description : string;
    date: string;
    price: string;
    subscriber_price: string;
    locale: string;
}

export type EventReducerState = {
    event: Event[];
    loading: boolean;
    error: string;
  };

  export type action = {
    type: string;
    payload: any;
  }