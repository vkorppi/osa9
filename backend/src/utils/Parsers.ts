
import { Gender,SickLeave, Discharge } from '../types/patientItem';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isString = (param: any): param is string => {
    return typeof param === 'string';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNumber = (param: any): param is number => {

  return !isNaN(Number(param));
};

const isDate = (date: string): boolean => {

    const datesplitted: string[] =date.split("-");

    if( isNaN(Number(datesplitted[0]))  || isNaN(Number(datesplitted[1])) || isNaN(Number(datesplitted[2])) ) {
        return false;
    }

    return !isNaN(Date.parse(date));
   
  };


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender: any): gender is Gender => {
    return Object.values(Gender).includes(gender);
  };

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parseGender = (gender: any): Gender => {

    const error =  "parameter gender was invalid";

    if(!gender || !isGender(gender)) {
      throw new Error(error);
    }
    
    return  gender ;

  };
 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseName = (name: any): string => {

    const error =  "parameter name was invalid";

    const validated: string= !name || !isString(name) ? error  : name;
    
    if(validated.includes(error)) {
        throw new Error(validated);
    }

    return validated;
    
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseOccupation = (occupation: any): string => {

    const error =  "parameter occupation was invalid";

    const validated: string= !occupation || !isString(occupation) ? error  : occupation;
    
    if(validated.includes(error)) {
        throw new Error(validated);
    }

    return validated;
    
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseSsn = (ssn: any): string => {

    const error =  "parameter ssn was invalid";

    const validated: string= !ssn || !isString(ssn) ? error : ssn;
    
    if(validated.includes(error)) {
        throw new Error(validated);
    }

    return validated;
    
  };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDateOfBirth = (dateOfBirth: any): string => {

    const error =  "parameter dateOfBirth was invalid";

    const validated: string= !dateOfBirth || !isDate(dateOfBirth) ? error : dateOfBirth; 
    
    if(validated.includes(error)) {
        throw new Error(validated);
    }

    return validated;
    
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parseDate = (date: any): string => {

    const error =  "parameter date was invalid";

    const validated: string= !date || !isDate(date) ? error : date; 
    
    if(validated.includes(error)) {
        throw new Error(validated);
    }

    return validated;

  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDescription = (description: any): string => {

  const error =  "parameter description was invalid";

  const validated: string= !description || !isString(description) ? error : description;
  
  if(validated.includes(error)) {
      throw new Error(validated);
  }

  return validated;
  
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseSpecialist = (specialist: any): string => {

  const error =  "parameter specialist was invalid";

  const validated: string= !specialist || !isString(specialist) ? error : specialist;
  
  if(validated.includes(error)) {
      throw new Error(validated);
  }

  return validated;
  
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDiagnosisCodes = (diagnosisCodes: any): string[] => {

  let error: string|undefined=undefined;

  if(!diagnosisCodes) {
    return diagnosisCodes;
  }

  for (let i = 0; i < diagnosisCodes.length; i++) {

    if(!isString(diagnosisCodes[i]) ) {
      error ="parameter parseDiagnosisCodes was invalid";
     }
    
  } 
  
  if(error) {
      throw new Error(error);
  }

  return diagnosisCodes;
  
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseType= (type: any): string => {

  const error =  "parameter type was invalid";

  const validated: string= !type || !isString(type) ? error : type;
  
  if(validated.includes(error)) {
      throw new Error(validated);
  }

  return validated;
  
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseEmployerName= (employerName: any): string => {

  const error =  "parameter employerName was invalid";

  const validated: string= !employerName || !isString(employerName) ? error : employerName;
  
  if(validated.includes(error)) {
      throw new Error(validated);
  }

  return validated;
  
};



    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const parseSickLeave = (sickLeave: any): SickLeave => {

      const error =  "parameter sickLeave was invalid";

      if(!sickLeave) {
        return sickLeave;
      }
  
  
      if( !isDate(sickLeave.startDate) || !isDate(sickLeave.endDate)) {
        throw new Error(error);
      }
  
      return sickLeave;
  
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const parseHealthCheckRating = (healthCheckRating: any): number => {

      const error =  "parameter healthCheckRating was invalid";


      if(!isNumber(healthCheckRating)) {
        throw new Error(error);
      }
        return healthCheckRating;
      
    };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parseDischarge = (discharge: any): Discharge => {

          const error =  "parameter discharge was invalid";
      
      
          if(!discharge || !isDate(discharge.date) || !isString(discharge.criteria)) {
            throw new Error(error);
          }
      
          return discharge;
      
        };

  export default {
    parseName,
    parseGender,
    parseOccupation,
    parseSsn,
    parseDateOfBirth,
    parseDate,
    parseDescription,
    parseSpecialist,
    parseDiagnosisCodes,
    parseType,
    parseEmployerName,
    parseSickLeave,
    parseHealthCheckRating,
    parseDischarge

  };