const {response} = require('@barrydevp/common')
const QuizActions = require('../actions/QuizActions')

exports.getListQuiz = (req, res) => {
    const {page, limit, code, name, status, course_id, end_date, start_date} = {...req.query}

    QuizActions.getListQuiz({
        code,
        name,
        status,
        course_id,
        end_date,
        start_date,
    }, {page, limit})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.getQuizById = (req, res) => {
    const {_id} = {...req.params}

    QuizActions.getQuizById(_id)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.insertQuiz = (req, res) => {
    const {code, name, course_id} = {...req.body}

    QuizActions.insertQuiz({code, name, course_id})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateQuiz = (req, res) => {
    const {_id} = {...req.params}
    const {code, name, course_id} = {...req.body}

    QuizActions.updateQuiz(_id, {code, name, course_id})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}