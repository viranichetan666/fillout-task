import { FormSubmission } from "./interface/types";

export function paginateResponses(results: FormSubmission[], limit: number, offset: number) {
    const startingIndex = limit * (offset - 1);
    const endIndex = startingIndex + limit;
    const pageCount = (results.length % limit === 0) ? results.length / limit : (Math.floor(results.length/limit)+ 1);

    let paginatedResults = results.slice(startingIndex, endIndex+1);

    return {
        response: paginatedResults,
        totalResponses: results.length,
        pageCount: pageCount
    }
}