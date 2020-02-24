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
    const _body = {...req.body}

    QuizActions.insertQuiz(_body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateQuizById = (req, res) => {
    const {_id} = {...req.params}
    const _body = {...req.body}

    QuizActions.updateQuizById(_id, _body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateQuizByQuery = (req, res) => {
    const _query = {...req.query}
    const _body = {...req.body}

    QuizActions.updateQuizByQuery(_query, _body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}