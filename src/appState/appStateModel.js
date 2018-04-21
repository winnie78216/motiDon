import {Record} from "immutable";
import update from "immutability-helper";

const AppStateRecord = Record(
    {
        userType: "user",
        activeRoutes: ['/login', '/dashboard', '/fundir']
    }
);

export default class AppState extends AppStateRecord {
    setUserType(userType) {
    return this.set('userType', update(this.userType, { $set: userType }));
  }
  setActiveRoutes(userType) {
      if (userType === 'service') {
        return this.set('activeRoutes', update(this.activeRoutes, { $set: ['/login', '/dashboard', '/fundir'] }));
      } else if (userType === 'orginization') {
        return this.set('activeRoutes', update(this.activeRoutes, { $set: ['/login', '/dashboard'] }));
      } else {
        return this.set('activeRoutes', update(this.activeRoutes, { $set: ['/login', '/fundir'] }));
      }
  }
}