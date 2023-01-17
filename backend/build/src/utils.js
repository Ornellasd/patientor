"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewVisitEntry = exports.toNewPatientEntry = void 0;
const types_1 = require("./types");
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseName = (name) => {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing name: ' + name);
    }
    return name;
};
const parseDateOfBirth = (dateOfBirth) => {
    if (!dateOfBirth || !isString(dateOfBirth)) {
        throw new Error('Incorrect or missing date of birth: ' + dateOfBirth);
    }
    return dateOfBirth;
};
const parseSSN = (ssn) => {
    if (!ssn || !isString(ssn)) {
        throw new Error('Incorrect or missing SSN: ' + ssn);
    }
    return ssn;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};
const parseOccupation = (occupation) => {
    if (!occupation || !isString(occupation)) {
        throw new Error('Incorrect or missing occupation: ' + occupation);
    }
    return occupation;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatientEntry = (object) => {
    const newPatient = {
        name: parseName(object.name),
        dateOfBirth: parseDateOfBirth(object.dateOfBirth),
        ssn: parseSSN(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation)
    };
    return newPatient;
};
exports.toNewPatientEntry = toNewPatientEntry;
const parseDescription = (description) => {
    if (!description || !isString(description)) {
        throw new Error('Incorrect or missing occupation: ' + description);
    }
    return description;
};
const parseDate = (date) => {
    if (!date || !isString(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
const parseSpecialist = (specialist) => {
    if (!specialist || !isString(specialist)) {
        throw new Error('Incorrect or missing specialist: ' + specialist);
    }
    return specialist;
};
const parseDiagnosisCodes = (codes) => {
    if (!Array.isArray(codes) || !codes.every(code => isString(code))) {
        throw new Error('Incorrect or missing diagnosis codes');
    }
    return codes;
};
const parseType = (type) => {
    if (!isString(type) || !Object.values(types_1.VisitEntryType).includes(type)) {
        throw new Error('Incorrect or missing type: ' + type);
    }
    return type;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const newBaseVisitEntry = (object) => {
    const newBaseVisit = {
        type: parseType(object.type),
        description: parseDescription(object.description),
        date: parseDate(object.date),
        specialist: parseSpecialist(object.specialist),
    };
    if (object.diagnosisCodes) {
        newBaseVisit.diagnosisCodes = parseDiagnosisCodes(object.diagnosisCodes);
    }
    return newBaseVisit;
};
const parseDischarge = (discharge) => {
    if (!isString(discharge.date) || !isString(discharge.criteria) || !discharge.date || !discharge.criteria) {
        throw new Error('Incorrect or missing discharge fields');
    }
    return discharge;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isHealthCheckRating = (param) => {
    return Object.values(types_1.HealthCheckRating).includes(param);
};
const parseHealthCheckRating = (rating) => {
    if (!isHealthCheckRating(rating) || rating === null) {
        throw new Error('Incorrect or missing health check rating: ' + rating);
    }
    return rating;
};
const parseSickLeave = (sickLeave) => {
    if (!isString(sickLeave.startDate) || !isString(sickLeave.endDate)) {
        throw new Error('Incorrect or missing sick leave data');
    }
    return sickLeave;
};
const toNewVisitEntry = (object) => {
    const baseVisitEntry = newBaseVisitEntry(object);
    switch (object.type) {
        case 'Hospital':
            return Object.assign(Object.assign({}, baseVisitEntry), { discharge: parseDischarge(object.discharge) });
        case 'HealthCheck':
            return Object.assign(Object.assign({}, baseVisitEntry), { healthCheckRating: parseHealthCheckRating(object.healthCheckRating) });
        case 'OccupationalHealthcare':
            const ohEntry = Object.assign(Object.assign({}, baseVisitEntry), { employerName: object.employerName });
            if (object.sickLeave) {
                return Object.assign(Object.assign({}, ohEntry), { sickLeave: parseSickLeave(object.sickLeave) });
            }
            return ohEntry;
        default:
            return baseVisitEntry;
    }
};
exports.toNewVisitEntry = toNewVisitEntry;
