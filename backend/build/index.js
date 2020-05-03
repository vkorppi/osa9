"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diagnosesRoute_1 = __importDefault(require("./routes/diagnosesRoute"));
const patientsRoute_1 = __importDefault(require("./routes/patientsRoute"));
const cors_1 = __importDefault(require("cors"));
const exp = express_1.default();
exp.use(cors_1.default());
exp.use(express_1.default.json());
exp.use('/api/diagnoses', diagnosesRoute_1.default);
exp.use('/api/patients', patientsRoute_1.default);
exp.get('/api/ping', (_req, res) => {
    res.send('PONG');
});
exp.listen(3001);
