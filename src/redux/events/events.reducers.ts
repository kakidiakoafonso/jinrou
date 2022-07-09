import {Event, EventReducerState,action} from './events.types';
import {GET_EVENTS,LOADED,ERROR, REMOVE_EVENTS} from './events.constant';

  const initialState: EventReducerState = {
    error: "",
    loading: false,
    event: [],
  };

export function eventReducer (state:EventReducerState = initialState, action:action):EventReducerState {
  switch (action.type) {
    case GET_EVENTS:
      return {
        error:'',
        loading: true,
        event:[]
      }
    case LOADED:
      return {
        error:'',
        loading: false,
        event:action.payload
      }
    case ERROR:
      return {
        error:action.payload,
        loading: false,
        event:[]
      }
    case REMOVE_EVENTS:
      return {
        ...state,
        event: state.event.filter(event => event.id !== action.payload)
      }
    
    default:
      return state
  }
}