

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry[];
}

interface RootEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: string[];
  type: string;
}

interface SickLeave {
  startDate: string;
  endDate: string;

}

interface Discharge {
  date: string;
  criteria: string;

}



interface OccupationalHealthCareEntry extends RootEntry{
  employerName: string;
  sickLeave?: SickLeave;
  type: 'OccupationalHealthcare';
}

interface HospitalEntry  extends RootEntry{
  discharge: Discharge;
  type: 'Hospital';
}

export interface HealthCheckEntry  extends RootEntry{
  healthCheckRating: number;
  type: 'HealthCheck';
}



  export type Entry =
    | HospitalEntry
    | OccupationalHealthCareEntry
    | HealthCheckEntry;

export interface SinglePatient {

  id: string|undefined;
}

export type entryvalues = Omit<HealthCheckEntry, "id">;