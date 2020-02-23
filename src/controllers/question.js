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
    const {code, content, answer, quiz_id} = {...req.body}

    QuestionActions.insertQuestion({code, content, answer, quiz_id})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateQuestionById = (req, res) => {
    const {_id} = {...req.params}
    const {code, content, answer, quiz_id} = {...req.body}

    QuestionActions.updateQuestionById(_id, {code, content, answer, quiz_id})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateQuestionByQuery = (req, res) => {
    const {code: qCode, content: qContent, quiz_id: qQuiz_id} = {...req.query}
    const {code, content, answer, quiz_id} = {...req.body}

    QuestionActions.updateQuestionByQuery({
        qCode,
        qContent,
        qQuiz_id,
    },
    {
        code,
        content,
        answer,
        quiz_id,
    })
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.bulkUpdateQuestion = (req, res) => {
    const {questions, quiz_id, url} = {...req.body}

    QuestionActions.bulkUpdateQuestion({questions, quiz_id, url})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}