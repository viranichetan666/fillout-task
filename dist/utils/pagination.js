"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateResponses = void 0;
function paginateResponses(results, limit, offset) {
    const startingIndex = limit * (offset - 1);
    const endIndex = startingIndex + limit;
    const pageCount = (results.length % limit === 0) ? results.length / limit : (Math.floor(results.length / limit) + 1);
    let paginatedResults = results.slice(startingIndex, endIndex + 1);
    return {
        response: paginatedResults,
        totalResponses: results.length,
        pageCount: pageCount
    };
}
exports.paginateResponses = paginateResponses;
//# sourceMappingURL=pagination.js.map