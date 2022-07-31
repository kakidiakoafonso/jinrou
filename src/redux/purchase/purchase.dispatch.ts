import { Purchase } from './purchase.types';
import { fetchingPurchases,purchaseError,purchaseSucess } from "./purchase.action";
import api from "../../service/api";
export function dispatchPurchase() {
  return (dispatch: any) => {
    dispatch(fetchingPurchases());
    api
      .get("events/purchases")
      .then((response) => {
        const purchase:Purchase[] = response.data;
        dispatch(purchaseSucess(purchase))
      })
      .catch((error) => {
        dispatch(purchaseError(error));
      });
  };
}
