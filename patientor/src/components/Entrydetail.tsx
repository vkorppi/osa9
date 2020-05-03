import React from 'react';
import { Entry, Diagnosis } from "../types";
import { Icon } from 'semantic-ui-react';

type Detailsprop = {
    entry: Entry;
  };


  const assertNever = (value: never): never => {
    throw new Error("Union has element that is not known to switch");
  };

const Entrydetails = ({ entry}: Detailsprop) => {

    
    switch(entry.type) { 
        case "Hospital": { 
            return  ((<p>{entry.discharge.criteria+' '+ entry.discharge.date}<Icon name='ambulance' /></p>) );
          
        } 
        case "OccupationalHealthcare": { 
        return ((<p>{entry.employerName +' '+entry.sickLeave?.startDate+'-'+ entry.sickLeave?.endDate}<Icon name='user md' /></p>) ) ;
            
        } 
        case "HealthCheck": { 
            return ((<p>{entry.healthCheckRating+''}<Icon name='heartbeat' /></p>) );
               
        } 
        default: { 
            assertNever(entry)
            
            return(<p> </p>);
        } 
        
     }
   


  };
  
  export default Entrydetails;