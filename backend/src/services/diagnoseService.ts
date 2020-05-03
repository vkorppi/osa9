

import diagnoseData from '../data/diagnoses';
import { DiagnoseItem } from '../types/diagnoseItem';

const getItems = (): Array<DiagnoseItem> => {
    return diagnoseData;
};

export default {
    getItems
};