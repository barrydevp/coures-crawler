const Quiz = require('../factories/Quiz')

exports.getListQuiz = (query, paging) => {
    return Quiz.getListQuiz(query, paging)
}

exports.getQuizById = _id => {
    return Quiz.getQuizById(_id)
}

exports.insertQuiz = body => {
    return Quiz.insertQuiz(body)
}

exports.updateQuizById = (_id, body) => {
    return Quiz.updateQuizById(_id, body)
}

exports.updateQuizByQuery = (query, body) => {
    return Quiz.updateQuizByQuery(query, body)
}