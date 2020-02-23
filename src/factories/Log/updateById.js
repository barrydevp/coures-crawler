const parseLog = require('./_parse')
const {getModel} = require('../../connections/database')

const _parseLog = ({url, total_question, success_question, error_question, status, quiz_id}) => {
    return parseLog({url, total_question, success_question, error_question, status, quiz_id})
}

const _updateLog = async (_id, log) => {
    const Log = getModel('Log')

    const select = 'url total_question success_question error_question status quiz_id updated_at created_at'

    const doc = await Log.findByIdAndUpdate(_id, log, {new: true}).select(select)

    if(!doc) throw new Error("Log not exists!")

    
    return doc.toJSON()
}

module.exports = async (_id, {url, total_question, success_question, error_question, status, quiz_id}) => {
    const log = _parseLog({url, total_question, success_question, error_question, status, quiz_id})

    const document = await _updateLog(_id, log)

    return document
}
