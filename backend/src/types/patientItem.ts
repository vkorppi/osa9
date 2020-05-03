
export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
  }

  /*
export interface PatientItem {
    id: string;
    name: string;
	occupation: string;
	gender: Gender;
	ssn: string;
    dateOfBirth: string;
  }
  */


 interface RootEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: string[];
  type: string;
}

export interface SickLeave {
  startDate: string;
  endDate: string;

}

export interface Discharge {
  date: string;
  criteria: string;

}

export interface OccupationalHealthCareEntry extends RootEntry{
  employerName: string;
  sickLeave?: SickLeave;
}

export interface HospitalEntry  extends RootEntry{
  discharge: Discharge;
}

export interface HealthCheckEntry  extends RootEntry{
  healthCheckRating: number;
}


  export type Entry =
    | HospitalEntry
    | OccupationalHealthCareEntry
    | HealthCheckEntry;
  
  
  export interface Patient {
    id: string;
    name: string;
    ssn: string;
    occupation: string;
    gender: Gender;
    dateOfBirth: string;
    entries: Entry[];
  }



  
  export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >;
  //export type filteredPatienItem = Omit<PatientItem, 'ssn'>;
 // export type NewPatienItem = Omit<PatientItem, 'id'>;
 export type NewPatienItem = Omit<Patient, 'id'>;
