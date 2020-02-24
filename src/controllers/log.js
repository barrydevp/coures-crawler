const {response} = require('@barrydevp/common')
const LogActions = require('../actions/LogActions')

exports.getListLog = (req, res) => {
    const {page, limit, url, total_question, success_question, error_question, status, quiz_id, start_date, end_date} = {...req.query}

    LogActions.getListLog({
        page, 
        limit, 
        url, 
        total_question, 
        success_question, 
        error_question, 
        status, 
        quiz_id, 
        start_date, 
        end_date
    }, {page, limit})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.getLogById = (req, res) => {
    const {_id} = {...req.params}

    LogActions.getLogById(_id)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.insertLog = (req, res) => {
    const _body = {...req.body}

    LogActions.insertLog(_body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateLogById = (req, res) => {
    const {_id} = {...req.params}
    const _body = {...req.body}

    LogActions.updateLogById(_id, _body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}