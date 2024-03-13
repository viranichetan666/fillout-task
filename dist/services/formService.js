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
exports.getFormResponses = void 0;
function getFormResponses(formId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const options = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.API_KEY}`,
                },
            };
            const res = yield fetch(`${process.env.BASE_URL}/forms/${formId}/submissions`, options);
            const result = yield res.json();
            return { success: res.status === 200, result };
        }
        catch (error) {
            console.error(`Error while fetching form submissions: ${error}`);
            return {
                success: false,
                result: { message: "Error while fetching form submissions" },
            };
        }
    });
}
exports.getFormResponses = getFormResponses;
//# sourceMappingURL=formService.js.map