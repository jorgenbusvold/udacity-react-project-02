export const LIST_QUESTIONS = 'LIST_QUESTIONS';

export function listQuestions(questions){
    return {
        type: LIST_QUESTIONS,
        questions
    }
}