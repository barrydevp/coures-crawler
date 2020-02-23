const safeTrim = require('../../helpers/safeTrim')
const {validateInteger} = require('../../helpers/parser')
const {isString, isNumber} = require('../../helpers/is')

module.exports = ({url, total_question, success_question, error_question, status, quiz_id}) => {
    // const _url = safeTrim(url)
    const _total_question = validateInteger(total_question)
    const _success_question = validateInteger(success_question)
    const _error_question = validateInteger(error_question)
    // const _status = safeTrim(status)

    const log = {}

    if(isString(url)) log.url = safeTrim(url)
    if(isNumber(_total_question)) log.total_question = _total_question
    if(isNumber(_success_question)) log.success_question = _success_question
    if(isNumber(_error_question)) log.error_question = _error_question
    if(isString(status)) log.status = safeTrim(status)
    if(quiz_id) log.quiz_id = quiz_id

    return log
}
