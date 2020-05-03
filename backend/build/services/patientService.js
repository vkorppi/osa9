"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const guid_typescript_1 = require("guid-typescript");
const Parsers_1 = __importDefault(require("../utils/Parsers"));
// import patientdata from '../data/patients.json';
const patients_1 = __importDefault(require("../data/patients"));
const allpatients = patients_1.default;
const getFilteredItems = () => {
    return allpatients.map((patient) => {
        return {
            id: patient.id,
            name: patient.name,
            occupation: patient.occupation,
            gender: patient.gender,
            dateOfBirth: patient.dateOfBirth
        };
    });
};
const addNewPatient = (newpatient) => {
    const createdPatient = {
        id: guid_typescript_1.Guid.raw(),
        name: Parsers_1.default.parseName(newpatient.name),
        occupation: Parsers_1.default.parseOccupation(newpatient.occupation),
        gender: Parsers_1.default.parseGender(newpatient.gender),
        ssn: Parsers_1.default.parseSsn(newpatient.ssn),
        dateOfBirth: Parsers_1.default.parseDateOfBirth(newpatient.dateOfBirth),
        entries: []
    };
    allpatients.push(createdPatient);
    return createdPatient;
};
const findPatient = (id) => {
    return allpatients.find(patient => patient.id === id);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addEntry = (id, entry) => {
    const patient = allpatients.find(patient => patient.id === id);
    if (!patient) {
        throw new Error('Adding entry failed: patient not found');
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const createdEntry = {
        id: guid_typescript_1.Guid.raw(),
        description: Parsers_1.default.parseDescription(entry.description),
        date: Parsers_1.default.parseDate(entry.date),
        specialist: Parsers_1.default.parseSpecialist(entry.specialist),
        diagnosisCodes: Parsers_1.default.parseDiagnosisCodes(entry.diagnosisCodes),
        type: Parsers_1.default.parseType(entry.type)
    };
    if (createdEntry.type === 'Hospital') {
        createdEntry.discharge = Parsers_1.default.parseDischarge(entry.discharge);
        createdEntry;
    }
    else if (createdEntry.type === 'OccupationalHealthcare') {
        createdEntry.employerName = Parsers_1.default.parseEmployerName(entry.employerName);
        createdEntry.sickLeave = Parsers_1.default.parseSickLeave(entry.sickLeave);
        createdEntry;
    }
    else {
        createdEntry.healthCheckRating = Parsers_1.default.parseHealthCheckRating(entry.healthCheckRating);
        createdEntry;
    }
    patient === null || patient === void 0 ? void 0 : patient.entries.push(createdEntry);
    return patient;
};
exports.default = {
    getFilteredItems,
    addNewPatient,
    findPatient,
    addEntry
};
