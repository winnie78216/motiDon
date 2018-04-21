import { getCampaignsModel } from "../../store/getCurrentModelService";
import store from '../../store/store';

export const ACTION = Symbol('ACTION');

function createAction(campaigns) {
    return {
        type: ACTION,
        campaigns: campaigns
    }
}

function update(moduleModel) {
    return createAction(moduleModel);
}
