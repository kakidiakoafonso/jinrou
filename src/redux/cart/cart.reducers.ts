import { Event } from '../events';
import {CART_ADD,CART_REMOVE } from './cart.constant';

type action = {
  type: typeof CART_ADD | typeof CART_REMOVE,
  payload: Event
}
export function cartReducer (state:Event[] = [], action:action):Event[] {
  switch (action.type) {
    case CART_ADD:
      return [...state, action.payload]
    case CART_REMOVE:
      const filteredCart = state.filter(event=>event.id!==action.payload.id)
      return filteredCart;
    default:
      return state
  }
}