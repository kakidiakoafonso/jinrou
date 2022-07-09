import { GET_EVENTS ,LOADED, ERROR,CREATE_EVENTS, REMOVE_EVENTS} from './events.constant';
import { Event } from './events.types';
export function getEvents() {
    return {
        type: GET_EVENTS
    };
}
export function loaded(events:Event[]) {
    return {
        type: LOADED,
        payload: events
    };
}

export function isError(error:string) {
    return {
        type: ERROR,
        payload: error
    };
}
export function createEvents(events:Event[]) {
    return {
        type: CREATE_EVENTS,
        payload: events
    };
}
export function removeEvents(eventId:string) {
    return {
        type: REMOVE_EVENTS,
        payload: eventId
    };
}