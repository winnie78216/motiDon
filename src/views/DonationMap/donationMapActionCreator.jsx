import { getCampaignsModel } from "../../store/getCurrentModelService";
import store from '../../store/store';

export const ACTION = Symbol('ACTION');

function createAction(donationMap) {
    return {
        type: ACTION,
        donationMap: donationMap
    }
}

function update(moduleModel) {
    return createAction(moduleModel);
}
