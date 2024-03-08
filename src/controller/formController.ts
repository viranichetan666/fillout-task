import  { Request, Response } from "express";
import { getFormResponses } from "../services/formService";
import { filterResponses } from "../utils/formFilters";
import { paginateResponses } from "../utils/pagination";

export async function getFilteredFormResponses(req: Request, res: Response) {
    try {
        const formId = req.params.formId;
        const filters = typeof req.query.filters === "string" ? JSON.parse(req.query.filters) : [];
        const {limit = 5, offset = 1} = req.query;
        const formResponses = await getFormResponses(formId);
  
        if (formResponses.success) {
          const results = filterResponses(formResponses.result.responses, filters);
          const paginatedResponse = paginateResponses(results, Number(limit), Number(offset));
          
          return res.json(paginatedResponse);
        } else {
          return res.status(500).json(formResponses);
        }
    } catch (error) {
        console.error(`Error processing request: ${error}`);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}
