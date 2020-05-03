import exp from 'express';
import patientService from '../services/patientService';
import { Patient } from '../types/patientItem';

const routerPatient = exp.Router();

routerPatient.get('/', (_req, res) => {

   res.send(patientService.getFilteredItems());

});


routerPatient.post('/', (req, res) => {


   try {

      const newpatientcreated: Patient=patientService.addNewPatient(req.body);
      res.json(newpatientcreated);
   }
   catch(error) {
      res.json({error:error.message});
   }

  

});


routerPatient.get('/:id', (req, res) => {

   const patient= patientService.findPatient(req.params.id);

   if(patient) {
      res.json(patient);
   }
   else {
      res.json({error:'Patient was not found'});
   }


});


routerPatient.post('/:id/entries', (req, res) => {

   let patient

   try {

    patient= patientService.addEntry(req.params.id,req.body);
   }
   catch(error) {
      res.json({error:error.message});
   }

   res.json(patient);
});



export default routerPatient;