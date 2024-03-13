"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterResponses = void 0;
function filterResponses(formSubmissions, filters) {
    if (filters.length === 0) {
        return formSubmissions;
    }
    const filtersMap = new Map(filters.map((filter) => [filter.id, filter]));
    return formSubmissions.filter((submission) => isValidSubmission(submission.questions, filtersMap));
}
exports.filterResponses = filterResponses;
function isValidSubmission(questions, filtersMap) {
    let satisfiedFiltersCount = 0;
    for (let question of questions) {
        let filter = filtersMap.get(question.id);
        (filter && checkCondition(question.value, filter.value, filter.condition)) && satisfiedFiltersCount++;
    }
    return filtersMap.size === satisfiedFiltersCount ? true : false;
}
function checkCondition(answer, filterValue, condition) {
    switch (condition) {
        case "equals":
            return answer === filterValue;
        case "does_not_equal":
            return answer !== filterValue;
        case "greater_than":
            return answer > filterValue;
        case "less_than":
            return answer < filterValue;
        default:
            return false;
    }
}
//# sourceMappingURL=formFilters.js.map