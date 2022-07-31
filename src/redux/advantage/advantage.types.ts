export type Advantage = {
    id : string;
    advantage : string;
}

export type AdvantageReducerState = {
    advantages: Advantage[];
    loading: boolean;
    error: string;
  };

  export type action = {
    type: string;
    payload: any;
  }