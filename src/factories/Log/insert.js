const {getModel} = require('../../connections/database')
const parseLog = require('./_parse')

const _parseLog = ({url, total_question, success_question, error_question, status, quiz_id}) => {
    return parseLog({url, total_question, success_question, error_question, status, quiz_id})
}

const _insertLog = async log => {
    const Log = getModel('Log')
    const _log = new Log(log)
    const doc = await _log.save()

    return doc.toJSON()
}

module.exports = async ({url, total_question, success_question, error_question, status, quiz_id}) => {
    const log = _parseLog({url, total_question, success_question, error_question, status, quiz_id})

    const document = await _insertLog(log)

    return document
}
