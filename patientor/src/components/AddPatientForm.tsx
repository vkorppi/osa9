import React from 'react';
import { Formik, Form, Field, FieldArray,FieldProps } from 'formik';
import { Grid, Button,Input,Label } from "semantic-ui-react";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Patient } from '../types';
import { addPatientList,useStateValue } from '../state';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inputComp: React.FC<FieldProps>  = ({field, form }) => {
    return <Input {...field}  />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inputDisabled: React.FC<FieldProps>  = ({field, form }) => {
    return <Input {...field} disabled />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inputDiagnosiscode: React.FC<FieldProps>  = ({field, form }) => {
    return <Input {...field} placeholder='new diagnosiscode' />;
};

export interface Addpatient {
    id: string | undefined;

  }



 const AddPatientForm: React.FC<Addpatient> = (props) => {


    const [{ patients }, dispatch] = useStateValue();

    return (
    
  <div>
 
    <Formik
      initialValues={{ diagnosisCodes: [''], type: 'HealthCheck' }}
      onSubmit={async  values => {

  

        const { data: updatedPatient } = await axios.post<Patient>(`${apiBaseUrl}/patients/${props.id}/entries`,values);

        dispatch(addPatientList(updatedPatient));

        
        
    }}
      render={(prop) => (
        <Form>


            <Grid columns={3}>
                <Grid.Row>
                <Grid.Column>
                <Label>Description</Label><Field name="description" placeholder="description" component={inputComp}/>
                <Label>Date</Label>     <Field name="date" placeholder="date" component={inputComp}/>

                <Label>DiagnosisCodes</Label>
                <FieldArray
            name="diagnosisCodes"
            render={handler  => (
              <div>
                {
                  prop.values.diagnosisCodes.map((code, position) => (
                    <div key={position}>
                      <Field name={`diagnosisCodes.${position}`} component={inputDiagnosiscode} />
               
                      <Button type="button" size='mini'  onClick={() => handler.push('')} > Add </Button>
                   
                      {prop.values.diagnosisCodes.length > 1  ?
                         
                      <Button type="button" size='mini'  onClick={() => handler.remove(position)}> Remove </Button>
                      
                     : ''}
                   
                        
                    </div>
                  ))
                 }
              
              </div>
            )}
          />
                </Grid.Column>
                <Grid.Column>
                <Label>Specialist</Label>    <Field name="specialist" placeholder="specialist" component={inputComp}/>
                <Label>Type</Label>      <Field name="type" placeholder="type" component={inputDisabled} />
                <Label>HealthCheckRating</Label> <Field name="healthCheckRating" placeholder="healthCheckRating" component={inputComp}/>
                </Grid.Column>
                        
                </Grid.Row>

         
                </Grid>

                <br/>
                         <div>
                         <Button type="submit">Add new entry</Button>
                </div>
        </Form>
      )}
    />
  </div>);
    
};

export default AddPatientForm;