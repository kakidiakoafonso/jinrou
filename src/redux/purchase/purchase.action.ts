import {FETCHING,ERROR,SUCESS} from "./purchase.constants";
import { Purchase } from "./purchase.types";
export function fetchingPurchases() {
  return {
    type: FETCHING,
  };
}
export function purchaseSucess(purchase: Purchase[]) {
  return {
    type: SUCESS,
    payload: purchase,
  };
}
export function purchaseError(messageError: string) {
  return {
    type: ERROR,
    payload: messageError,
  };
}
