"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formController_1 = require("../controller/formController");
const router = (0, express_1.Router)();
router.get('/:formId/filteredResponses', formController_1.getFilteredFormResponses);
exports.default = router;
//# sourceMappingURL=formRoutes.js.map