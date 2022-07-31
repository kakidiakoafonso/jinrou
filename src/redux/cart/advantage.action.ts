import { Event } from '../events';
import { CART_ADD,CART_REMOVE} from './cart.constant';

export function cartAdd(event:Event) {
    return {
        type: CART_ADD,
        payload: event
    };
}
export function cartRemove(event:Event) {
    return {
        type: CART_REMOVE,
        payload: event
    };
}
