"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const utils_1 = require("../utils");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(patientService_1.default.getNonSensitivePatients());
});
router.post('/', (req, res) => {
    try {
        const newPatientEntry = utils_1.toNewPatientEntry(req.body);
        const addedPatientEntry = patientService_1.default.addPatient(newPatientEntry);
        res.json(addedPatientEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
router.get('/:id', (req, res) => {
    const patient = patientService_1.default.getPatients().filter(p => p.id == req.params.id);
    res.send(patient[0]);
});
router.post('/:id/entries', (req, res) => {
    const patient = req.params.id;
    try {
        const newVisitEntry = utils_1.toNewVisitEntry(req.body);
        const addedVisitEntry = patientService_1.default.addVisit(newVisitEntry, patient);
        res.json(addedVisitEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.default = router;
