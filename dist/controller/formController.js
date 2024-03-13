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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilteredFormResponses = void 0;
const formService_1 = require("../services/formService");
const formFilters_1 = require("../utils/formFilters");
const pagination_1 = require("../utils/pagination");
function getFilteredFormResponses(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const formId = req.params.formId;
            const filters = typeof req.query.filters === "string" ? JSON.parse(req.query.filters) : [];
            const { limit = 5, offset = 1 } = req.query;
            const formResponses = yield (0, formService_1.getFormResponses)(formId);
            if (formResponses.success) {
                const results = (0, formFilters_1.filterResponses)(formResponses.result.responses, filters);
                const paginatedResponse = (0, pagination_1.paginateResponses)(results, Number(limit), Number(offset));
                return res.json(paginatedResponse);
            }
            else {
                return res.status(500).json(formResponses);
            }
        }
        catch (error) {
            console.error(`Error processing request: ${error}`);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    });
}
exports.getFilteredFormResponses = getFilteredFormResponses;
//# sourceMappingURL=formController.js.map