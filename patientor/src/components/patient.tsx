import React from "react";
import { Container, Header,Segment,Tab } from 'semantic-ui-react';
import { SinglePatient,Patient, Entry,Diagnosis, Gender, HealthCheckEntry,entryvalues } from "../types";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { useStateValue,addPatientList } from "../state";
import Entrydetails from "./Entrydetail";
import AddPatientForm from "../components/AddPatientForm";




const PatientInfo: React.FC<SinglePatient> = (props)  => {

    const [{ patients }, dispatch] = useStateValue();


    const [diagnoses, setDiagnoses] = React.useState<Diagnosis>();

  
    const fetchPatient = async () => { 

      const patientInserver  = (await axios.get<Patient>(`${apiBaseUrl}/patients/${props.id}`)).data;

      dispatch(addPatientList(patientInserver));
      
      return patientInserver;
      
    };

    
    const getDiagnosisDescript =  (code:string,diagnoses:Diagnosis) => { 

      let diagnosis={name:''}

      if(diagnoses)
      {
         diagnosis= Object.values(diagnoses).find(diagnose => diagnose.code === code);
      }
     

      return  diagnosis.name;
      
    };

    const fetchDiagnoses = async () => { 

      const { data } = await axios.get<Diagnosis>(`${apiBaseUrl}/diagnoses`);


      return data;

    };
    



    React.useEffect(() => {

      if(Object.values(patients).length > 0) {

        const patientInstate=Object.values(patients).find(patient => patient.id === props.id);

        
        if(patientInstate && (!patientInstate.ssn || !patientInstate.entries)) {
          fetchPatient();
        }

      }

    }, [patients]);

    fetchDiagnoses().then(result => {

      if(!diagnoses) {
        setDiagnoses(result);
      }
      
    });

    

      const patient= Object.values(patients).find(patient => patient.id === props.id);

   
     
       
    return(

     

      
        <Container text>

         
          <AddPatientForm id={patient?.id } />

          <Header as='h2'>{patient?.name}</Header>

     
          <p>{patient?.occupation}</p>
          <p>{patient?.gender}</p>
          <p>{patient?.ssn}</p>
          <p>{patient?.dateOfBirth}</p>
          <br/>
          <Header as='h2'>Entries</Header>
          <br/><div>
          {
          
          patient?.entries ?
          
          patient?.entries.map((entry: Entry) => (
        
           
           
            <p>
           <Segment>
            <p>{entry?.description}</p>
            <p>{entry?.date}</p>
            <p>{entry?.specialist}</p>
            <p> {entry?.diagnosisCodes ?  entry?.diagnosisCodes.map((diagcode: string) => (
              <div>{diagcode}{getDiagnosisDescript(diagcode,diagnoses as Diagnosis)}</div>
            )) 
            : '' }</p>

            <Entrydetails entry={entry}  /> 

            </Segment>
            </p>

            
            )) 
          : ''
          
          }
          </div>
        </Container>
      )
    
    
}


  
  export default PatientInfo;
