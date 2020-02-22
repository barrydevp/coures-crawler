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

exports.updateQuiz = (_id, body) => {
    return Quiz.updateQuizById(_id, body)
}