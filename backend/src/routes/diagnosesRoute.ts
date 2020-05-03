import exp from 'express';
import diagnoseService from '../services/diagnoseService';

const routerDiagnose = exp.Router();

routerDiagnose.get('/', (_req, res) => {

    res.send(diagnoseService.getItems());

});


export default routerDiagnose;