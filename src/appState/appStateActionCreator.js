
import {getAppStateModel} from '../store/getCurrentModelService'

export const ACTION = Symbol('ACTION');

function createAction(appState) {
    return {
        type: ACTION,
        appState: appState
    }
}

function update(moduleModel) {
    return createAction(moduleModel);
}

export function setUserType(userType) {
    return update(getAppStateModel().setUserType(userType))
}

export function setActiveRoutes(userType) {
    return update(getAppStateModel().setActiveRoutes(userType))
}