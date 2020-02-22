const Question = require('../factories/Question')

exports.getListQuestion = (query, paging) => {
    return Question.getListQuestion(query, paging)
}

exports.getQuestionById = _id => {
    return Question.getQuestionById(_id)
}

exports.insertQuestion = body => {
    return Question.insertQuestion(body)
}

exports.updateQuestionById = (_id, body) => {
    return Question.updateQuestionById(_id, body)
}

exports.updateQuestionByQuery = (query, body) => {
    return Question.updateQuestionById(query, body)
}

exports.bulkUpdateQuestion = (body) => {
    return Question.bulkUpdateQuestion(body)
}