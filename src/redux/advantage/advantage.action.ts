import { GET_ADVANTAGE ,LOADED, ERROR,CREATE_ADVANTAGE, REMOVE_ADVANTAGE} from './advantage.constant';
import { Advantage } from './advantage.types';
export function getAdvantage() {
    return {
        type: GET_ADVANTAGE
    };
}
export function loaded(advantage:Advantage[]) {
    return {
        type: LOADED,
        payload: advantage
    };
}

export function isError(error:string) {
    return {
        type: ERROR,
        payload: error
    };
}
export function createAdvantage(advantage:Advantage[]) {
    return {
        type: CREATE_ADVANTAGE,
        payload: advantage
    };
}
export function removeAdvantage(advantageId:string) {
    return {
        type: REMOVE_ADVANTAGE,
        payload: advantageId
    };
}