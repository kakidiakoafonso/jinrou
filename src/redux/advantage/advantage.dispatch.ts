import api from '../../service/api';
import {loaded,isError,getAdvantage} from './advantage.action';
import { Advantage } from './advantage.types';

export function dispatchAdvantage(){
    console.log('dispatchEvents');
    
    return (dispatch:any) => {
        dispatch(getAdvantage());
        api.get('advantage').then(response => {
            const advantage:Advantage[] = response.data;
            console.log('advantage');
            console.log(advantage);
            
            dispatch(loaded(advantage));
        }).catch(error => {
            dispatch(isError(error));
        });
        
    }
}