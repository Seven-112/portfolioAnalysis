"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnalysis = exports.updateAnalysis = exports.addAnalysis = exports.getAnalyses = void 0;
const analysis_1 = __importDefault(require("../../models/analysis"));
const getAnalyses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const analyses = yield analysis_1.default.find();
        res.status(200).json({ analyses });
    }
    catch (error) {
        throw error;
    }
});
exports.getAnalyses = getAnalyses;
const addAnalysis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const analysis = new analysis_1.default({
            name: body.name,
            value: body.value,
            desc: body.desc,
        });
        const newAnalysis = yield analysis.save();
        const allAnalyses = yield analysis_1.default.find();
        res.status(201).json({
            message: "Analysis added",
            analysis: newAnalysis,
            analyses: allAnalyses,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addAnalysis = addAnalysis;
const updateAnalysis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateAnalysis = yield analysis_1.default.findByIdAndUpdate({ _id: id }, body);
        const allAnalyses = yield analysis_1.default.find();
        res.status(200).json({
            message: "Analysis updated",
            analysis: updateAnalysis,
            analyses: allAnalyses,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateAnalysis = updateAnalysis;
const deleteAnalysis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedAnalysis = yield analysis_1.default.findByIdAndRemove(req.params.id);
        const allAnalyses = yield analysis_1.default.find();
        res.status(200).json({
            message: "Analysis deleted",
            analysis: deletedAnalysis,
            analyses: allAnalyses,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteAnalysis = deleteAnalysis;
