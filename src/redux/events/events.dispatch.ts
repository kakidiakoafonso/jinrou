import api from '../../service/api';
import {loaded,isError,getEvents} from './events.action';
import { Event } from './events.types';

export function dispatchEvents(){
    console.log('dispatchEvents');
    
    return (dispatch:any) => {
        dispatch(getEvents());
        api.get('events').then(response => {
            const events:Event[] = response.data;
            console.log('events');
            console.log(events);
            
            dispatch(loaded(events));
        }).catch(error => {
            dispatch(isError(error));
        });
        
    }
}