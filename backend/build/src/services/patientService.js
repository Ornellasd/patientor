"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const uuid_1 = require("uuid");
const patientEntries_1 = __importDefault(require("../../data/patientEntries"));
const getPatients = () => {
    return patientEntries_1.default;
};
const getNonSensitivePatients = () => {
    return patientEntries_1.default.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};
const addPatient = (patient) => {
    const newPatient = Object.assign({ id: uuid_1.v1(), entries: [] }, patient);
    patientEntries_1.default.push(newPatient);
    return newPatient;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addVisit = (entry, patientId) => {
    var _a;
    const patient = patientEntries_1.default.find(patient => patient.id === patientId);
    const newEntry = Object.assign({ id: uuid_1.v1() }, entry);
    (_a = patient === null || patient === void 0 ? void 0 : patient.entries) === null || _a === void 0 ? void 0 : _a.push(newEntry);
    return patient;
};
exports.default = {
    getPatients,
    getNonSensitivePatients,
    addPatient,
    addVisit
};
