import AuthStore from "./IndividulasStores/AuthStore";
import ProcurementStore from "./IndividulasStores/ProcurementStore";
import UserStore from "./IndividulasStores/UserStore";


export default class AppStore {
  auth = new AuthStore(this);
  user = new UserStore(this);
  procurement = new ProcurementStore(this)
}

