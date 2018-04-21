import { getOrginizationModel } from "../../store/getCurrentModelService";
import store from '../../store/store';

export const ACTION = Symbol('ACTION');

function createAction(orginization) {
    return {
        type: ACTION,
        orginization: orginization
    }
}

function update(moduleModel) {
    return createAction(moduleModel);
}
