"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patientItem_1 = require("../types/patientItem");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isString = (param) => {
    return typeof param === 'string';
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNumber = (param) => {
    return !isNaN(Number(param));
};
const isDate = (date) => {
    const datesplitted = date.split("-");
    if (isNaN(Number(datesplitted[0])) || isNaN(Number(datesplitted[1])) || isNaN(Number(datesplitted[2]))) {
        return false;
    }
    return !isNaN(Date.parse(date));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender) => {
    return Object.values(patientItem_1.Gender).includes(gender);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseGender = (gender) => {
    const error = "parameter gender was invalid";
    if (!gender || !isGender(gender)) {
        throw new Error(error);
    }
    return gender;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseName = (name) => {
    const error = "parameter name was invalid";
    const validated = !name || !isString(name) ? error : name;
    if (validated.includes(error)) {
        throw new Error(validated);
    }
    return validated;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseOccupation = (occupation) => {
    const error = "parameter occupation was invalid";
    const validated = !occupation || !isString(occupation) ? error : occupation;
    if (validated.includes(error)) {
        throw new Error(validated);
    }
    return validated;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseSsn = (ssn) => {
    const error = "parameter ssn was invalid";
    const validated = !ssn || !isString(ssn) ? error : ssn;
    if (validated.includes(error)) {
        throw new Error(validated);
    }
    return validated;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDateOfBirth = (dateOfBirth) => {
    const error = "parameter dateOfBirth was invalid";
    const validated = !dateOfBirth || !isDate(dateOfBirth) ? error : dateOfBirth;
    if (validated.includes(error)) {
        throw new Error(validated);
    }
    return validated;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDate = (date) => {
    const error = "parameter date was invalid";
    const validated = !date || !isDate(date) ? error : date;
    if (validated.includes(error)) {
        throw new Error(validated);
    }
    return validated;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDescription = (description) => {
    const error = "parameter description was invalid";
    const validated = !description || !isString(description) ? error : description;
    if (validated.includes(error)) {
        throw new Error(validated);
    }
    return validated;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseSpecialist = (specialist) => {
    const error = "parameter specialist was invalid";
    const validated = !specialist || !isString(specialist) ? error : specialist;
    if (validated.includes(error)) {
        throw new Error(validated);
    }
    return validated;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDiagnosisCodes = (diagnosisCodes) => {
    let error = undefined;
    if (!diagnosisCodes) {
        return diagnosisCodes;
    }
    for (let i = 0; i < diagnosisCodes.length; i++) {
        if (!isString(diagnosisCodes[i])) {
            error = "parameter parseDiagnosisCodes was invalid";
        }
    }
    if (error) {
        throw new Error(error);
    }
    return diagnosisCodes;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseType = (type) => {
    const error = "parameter type was invalid";
    const validated = !type || !isString(type) ? error : type;
    if (validated.includes(error)) {
        throw new Error(validated);
    }
    return validated;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseEmployerName = (employerName) => {
    const error = "parameter employerName was invalid";
    const validated = !employerName || !isString(employerName) ? error : employerName;
    if (validated.includes(error)) {
        throw new Error(validated);
    }
    return validated;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseSickLeave = (sickLeave) => {
    const error = "parameter sickLeave was invalid";
    if (!sickLeave) {
        return sickLeave;
    }
    if (!isDate(sickLeave.startDate) || !isDate(sickLeave.endDate)) {
        throw new Error(error);
    }
    return sickLeave;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseHealthCheckRating = (healthCheckRating) => {
    const error = "parameter healthCheckRating was invalid";
    if (!isNumber(healthCheckRating)) {
        throw new Error(error);
    }
    return healthCheckRating;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDischarge = (discharge) => {
    const error = "parameter discharge was invalid";
    if (!discharge || !isDate(discharge.date) || !isString(discharge.criteria)) {
        throw new Error(error);
    }
    return discharge;
};
exports.default = {
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
