import { FilterClauseType, FormSubmission, Question } from "./interface/types";

export function filterResponses( formSubmissions: FormSubmission[], filters: FilterClauseType[] ) {
    if (filters.length === 0) {
        return formSubmissions;
    }

    const filtersMap = new Map<string, FilterClauseType>(
        filters.map((filter) => [filter.id, filter])
    );

    return formSubmissions.filter((submission) => isValidSubmission(submission.questions, filtersMap));
}
  
function isValidSubmission( questions: Question[], filtersMap: Map<string, FilterClauseType> ): boolean {
    let satisfiedFiltersCount = 0;

    for (let question of questions) {
        let filter = filtersMap.get(question.id);

        (filter && checkCondition(question.value, filter.value, filter.condition)) && satisfiedFiltersCount++;
    }

    return filtersMap.size === satisfiedFiltersCount ? true : false;
}
  
function checkCondition(
    answer: string | number,
    filterValue: string | number,
    condition: "equals" | "does_not_equal" | "greater_than" | "less_than"
) {
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