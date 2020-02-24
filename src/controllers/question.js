const {response} = require('@barrydevp/common')
const QuestionActions = require('../actions/QuestionActions')

exports.getListQuestion = (req, res) => {
    const {page, limit, code, content, answer, status, quiz_id, end_date, start_date} = {...req.query}

    QuestionActions.getListQuestion({
        code,
        content,
        answer,
        status,
        quiz_id,
        end_date,
        start_date,
    }, {page, limit})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.getQuestionById = (req, res) => {
    const {_id} = {...req.params}

    QuestionActions.getQuestionById(_id)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.insertQuestion = (req, res) => {
    const _body = {...req.body}

    QuestionActions.insertQuestion(_body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateQuestionById = (req, res) => {
    const {_id} = {...req.params}
    const _body = {...req.body}

    QuestionActions.updateQuestionById(_id, _body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateQuestionByQuery = (req, res) => {
    const _query = {...req.query}
    const _body = {...req.body}

    QuestionActions.updateQuestionByQuery(_query, _body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.bulkUpdateQuestion = (req, res) => {
    const _body = {...req.body}

    QuestionActions.bulkUpdateQuestion(_body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}