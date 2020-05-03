import React from "react";
import axios from "axios";
import {  Route, Link, Switch,useRouteMatch } from "react-router-dom";
import { Button, Divider, Header, Container } from "semantic-ui-react";
import { apiBaseUrl } from "./constants";
import { useStateValue,createPatientList } from "./state";
import { Patient } from "./types";
import PatientListPage from "./PatientListPage";
import PatientInfo from "./components/patient";


const App: React.FC = () => {



 const matchRoute = useRouteMatch('/patients/:id');

  const [, dispatch] = useStateValue();

  let id='';

  if(matchRoute) {
  
    id=Object.values(matchRoute.params)[0] as string;


  }
  else {

    id='';
  }

  React.useEffect(() => {
    axios.get<void>(`${apiBaseUrl}/ping`);

   
 



    const fetchPatientList = async () => {
      try {
		
        
		  
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
       
        dispatch(createPatientList(patientListFromApi));

      } catch (e) {
		 
		 console.log(e)
        console.error(e);
      }
    };

      fetchPatientList();
    
  }, [dispatch]);

  return (
    <div className="App">
   
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route path="/patients/:id" render={() => <PatientInfo id={id} />}/> 
            <Route path="/" render={() => <PatientListPage />} />
          </Switch>
        </Container>
        
    </div>
  );
};

export default App;
