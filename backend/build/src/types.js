"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitEntryType = exports.HealthCheckRating = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender = exports.Gender || (exports.Gender = {}));
var HealthCheckRating;
(function (HealthCheckRating) {
    HealthCheckRating[HealthCheckRating["Healthy"] = 0] = "Healthy";
    HealthCheckRating[HealthCheckRating["LowRisk"] = 1] = "LowRisk";
    HealthCheckRating[HealthCheckRating["HighRisk"] = 2] = "HighRisk";
    HealthCheckRating[HealthCheckRating["CriticalRisk"] = 3] = "CriticalRisk";
})(HealthCheckRating = exports.HealthCheckRating || (exports.HealthCheckRating = {}));
var VisitEntryType;
(function (VisitEntryType) {
    VisitEntryType["HealthCheck"] = "HealthCheck";
    VisitEntryType["OccupationalHealthCare"] = "OccupationalHealthcare";
    VisitEntryType["Hospital"] = "Hospital";
})(VisitEntryType = exports.VisitEntryType || (exports.VisitEntryType = {}));
