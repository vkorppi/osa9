

import { PublicPatient,Patient,NewPatienItem,HospitalEntry,OccupationalHealthCareEntry,HealthCheckEntry } from '../types/patientItem';

import { Guid } from "guid-typescript";
import utilService from '../utils/Parsers';
// import patientdata from '../data/patients.json';

import patientdata from '../data/patients';



const allpatients: Array<Patient>= patientdata;


const getFilteredItems = (): PublicPatient[] => {

    return allpatients.map( (patient)=> {

          return  { 
                id:patient.id, 
                name:patient.name,
                occupation:patient.occupation,
                gender:patient.gender,
                dateOfBirth:patient.dateOfBirth
             };        
        }  
    );

};

const addNewPatient = (newpatient: NewPatienItem): Patient => {

  

    const createdPatient: Patient={ 
        id: Guid.raw() , 
        name:utilService.parseName(newpatient.name),
        occupation:utilService.parseOccupation(newpatient.occupation),
        gender: utilService.parseGender(newpatient.gender),
        ssn: utilService.parseSsn(newpatient.ssn),
        dateOfBirth: utilService.parseDateOfBirth(newpatient.dateOfBirth),
        entries:[]
     };

     allpatients.push(createdPatient);
      
    return  createdPatient;       

};


const findPatient = (id: string): Patient | undefined => {

    return allpatients.find(patient => patient.id === id);

   
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addEntry = (id: string,entry: any): Patient | undefined => {


        const patient= allpatients.find(patient => patient.id === id);

        if(!patient) {
            throw new Error('Adding entry failed: patient not found');
        }

 

       // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const createdEntry: any={ 
            id: Guid.raw() , 
            description: utilService.parseDescription(entry.description),
            date:utilService.parseDate(entry.date),
            specialist:utilService.parseSpecialist(entry.specialist),
            diagnosisCodes:utilService.parseDiagnosisCodes(entry.diagnosisCodes),
            type:utilService.parseType(entry.type)
         };




        if(createdEntry.type === 'Hospital') {

            createdEntry.discharge= utilService.parseDischarge(entry.discharge);

            createdEntry as HospitalEntry;

        }
        else if(createdEntry.type === 'OccupationalHealthcare')
        {
            createdEntry.employerName= utilService.parseEmployerName(entry.employerName)
            createdEntry.sickLeave= utilService.parseSickLeave(entry.sickLeave);

            createdEntry as OccupationalHealthCareEntry;
        }
        else {
            createdEntry.healthCheckRating= utilService.parseHealthCheckRating(entry.healthCheckRating);

            createdEntry as HealthCheckEntry;
        }

        patient?.entries.push(createdEntry);


        return patient;
    
   
};



export default {
    getFilteredItems,
    addNewPatient,
    findPatient,
    addEntry
};
