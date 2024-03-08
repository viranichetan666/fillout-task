import  { Router } from "express";
import { getFilteredFormResponses } from "../controller/formController";

const router = Router();

router.get('/:formId/filteredResponses', getFilteredFormResponses);

export default router;