export interface FormSubmission {
  submissionId: string;
  submissionTime: string;
  questions: Question[];
}

export interface Question {
  id: string;
  name: string;
  type: string;
  value: string | number;
}

export type FilterClauseType = {
  id: string;
  condition: "equals" | "does_not_equal" | "greater_than" | "less_than";
  value: number | string;
};
