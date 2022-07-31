import {AdvantageReducerState,action} from './advantage.types';
import {LOADED,ERROR,GET_ADVANTAGE,REMOVE_ADVANTAGE } from './advantage.constant';

  const initialState: AdvantageReducerState = {
    error: "",
    loading: false,
    advantages: [],
  };

export function advantageReducer (state:AdvantageReducerState = initialState, action:action):AdvantageReducerState {
  switch (action.type) {
    case GET_ADVANTAGE:
      return {
        error:'',
        loading: true,
        advantages:[]
      }
    case LOADED:
      return {
        error:'',
        loading: false,
        advantages:action.payload
      }
    case ERROR:
      return {
        error:action.payload,
        loading: false,
        advantages:[]
      }
    case REMOVE_ADVANTAGE:
      return {
        ...state,
        advantages: state.advantages.filter(avantage => avantage.id !== action.payload)
      }
    
    default:
      return state
  }
}