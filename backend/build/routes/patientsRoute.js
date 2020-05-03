"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const routerPatient = express_1.default.Router();
routerPatient.get('/', (_req, res) => {
    res.send(patientService_1.default.getFilteredItems());
});
routerPatient.post('/', (req, res) => {
    try {
        const newpatientcreated = patientService_1.default.addNewPatient(req.body);
        res.json(newpatientcreated);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
routerPatient.get('/:id', (req, res) => {
    const patient = patientService_1.default.findPatient(req.params.id);
    if (patient) {
        res.json(patient);
    }
    else {
        res.json({ error: 'Patient was not found' });
    }
});
routerPatient.post('/:id/entries', (req, res) => {
    let patient;
    try {
        patient = patientService_1.default.addEntry(req.params.id, req.body);
    }
    catch (error) {
        res.json({ error: error.message });
    }
    res.json(patient);
});
exports.default = routerPatient;
